import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { shiprocket } from '@/lib/shiprocket'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      orderId 
    } = body

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !orderId) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      )
    }

    // Verify signature
    const text = `${razorpay_order_id}|${razorpay_payment_id}`
    const signature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(text)
      .digest('hex')

    if (signature !== razorpay_signature) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }

    // Update order status
    const order = await prisma.order.update({
      where: { id: orderId },
      data: {
        status: 'CONFIRMED',
        paymentStatus: 'PAID',
        razorpayPaymentId: razorpay_payment_id,
      },
      include: {
        items: {
          include: {
            product: true,
            variant: true,
          }
        },
        shippingAddress: true,
        billingAddress: true,
      }
    })

    // Create Shiprocket order
    try {
      const shiprocketOrderData = {
        order_id: order.orderNumber,
        order_date: new Date().toISOString().split('T')[0],
        pickup_location: 'Primary',
        billing_customer_name: `${order.billingAddress.firstName} ${order.billingAddress.lastName}`,
        billing_last_name: '',
        billing_address: order.billingAddress.address1,
        billing_city: order.billingAddress.city,
        billing_pincode: order.billingAddress.postalCode,
        billing_state: order.billingAddress.state,
        billing_country: order.billingAddress.country,
        billing_email: order.billingAddress.phone, // Using phone as email for now
        billing_phone: order.billingAddress.phone,
        shipping_is_billing: true,
        order_items: order.items.map(item => ({
          name: item.product.name,
          sku: item.variant?.sku || item.product.id,
          units: item.quantity,
          selling_price: Number(item.unitPrice),
          discount: 0,
          tax: 0,
          hsn: 1806, // HSN code for chocolate
        })),
        payment_method: 'Prepaid',
        shipping_charges: Number(order.shipping),
        giftwrap_charges: order.giftWrap ? 50 : 0,
        transaction_charges: 0,
        total_discount: 0,
        sub_total: Number(order.subtotal),
        length: 20,
        breadth: 15,
        height: 10,
        weight: 500, // Default weight in grams
      }

      const shiprocketResponse = await shiprocket.createOrder(shiprocketOrderData)
      
      if (shiprocketResponse.status === 200) {
        await prisma.order.update({
          where: { id: orderId },
          data: {
            shiprocketOrderId: shiprocketResponse.data?.order_id,
            status: 'PROCESSING',
          }
        })
      }
    } catch (shiprocketError) {
      console.error('Shiprocket order creation failed:', shiprocketError)
      // Don't fail the payment verification if Shiprocket fails
    }

    // TODO: Send order confirmation email
    // await sendOrderConfirmationEmail(order)

    return NextResponse.json({
      success: true,
      orderId: order.id,
      message: 'Payment verified successfully',
    })

  } catch (error) {
    console.error('Error verifying payment:', error)
    return NextResponse.json(
      { error: 'Failed to verify payment' },
      { status: 500 }
    )
  }
}
