import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/db'
import Razorpay from 'razorpay'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { items, shippingAddress, billingAddress, giftWrap, giftMessage } = body

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Invalid items data' },
        { status: 400 }
      )
    }

    // Calculate totals
    let subtotal = 0
    let tax = 0
    let shipping = 0
    let giftWrapCost = 0

    for (const item of items) {
      subtotal += item.price * item.quantity
      if (item.giftWrap) {
        giftWrapCost += 50 * item.quantity // ₹50 per item for gift wrap
      }
    }

    // Calculate tax (18% GST)
    tax = subtotal * 0.18

    // Calculate shipping (free above ₹1000, ₹100 below)
    shipping = subtotal >= 1000 ? 0 : 100

    const total = subtotal + tax + shipping + giftWrapCost

    // Create order in database
    const order = await prisma.order.create({
      data: {
        orderNumber: `CHOCO${Date.now()}${Math.random().toString(36).substr(2, 5).toUpperCase()}`,
        userId: session.user.email, // You might want to get actual user ID
        status: 'PENDING',
        paymentStatus: 'PENDING',
        subtotal: subtotal,
        tax: tax,
        shipping: shipping,
        total: total,
        currency: 'INR',
        giftWrap: giftWrap,
        giftMessage: giftMessage,
        shippingAddress: {
          create: {
            userId: session.user.email,
            type: 'SHIPPING',
            firstName: shippingAddress.firstName,
            lastName: shippingAddress.lastName,
            company: shippingAddress.company,
            address1: shippingAddress.address1,
            address2: shippingAddress.address2,
            city: shippingAddress.city,
            state: shippingAddress.state,
            postalCode: shippingAddress.postalCode,
            country: shippingAddress.country || 'India',
            phone: shippingAddress.phone,
            isDefault: false,
          }
        },
        billingAddress: {
          create: {
            userId: session.user.email,
            type: 'BILLING',
            firstName: billingAddress.firstName,
            lastName: billingAddress.lastName,
            company: billingAddress.company,
            address1: billingAddress.address1,
            address2: billingAddress.address2,
            city: billingAddress.city,
            state: billingAddress.state,
            postalCode: billingAddress.postalCode,
            country: billingAddress.country || 'India',
            phone: billingAddress.phone,
            isDefault: false,
          }
        },
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            variantId: item.variantId,
            quantity: item.quantity,
            unitPrice: item.price,
            totalPrice: item.price * item.quantity,
            giftWrap: item.giftWrap,
            giftMessage: item.giftMessage,
          }))
        }
      },
      include: {
        items: {
          include: {
            product: true,
            variant: true,
          }
        }
      }
    })

    // Create Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: Math.round(total * 100), // Convert to paise
      currency: 'INR',
      receipt: order.orderNumber,
      notes: {
        orderId: order.id,
        giftWrap: giftWrap ? 'Yes' : 'No',
        giftMessage: giftMessage || '',
      }
    })

    // Update order with Razorpay order ID
    await prisma.order.update({
      where: { id: order.id },
      data: { razorpayOrderId: razorpayOrder.id }
    })

    return NextResponse.json({
      orderId: order.id,
      razorpayOrderId: razorpayOrder.id,
      amount: total,
      currency: 'INR',
      key: process.env.RAZORPAY_KEY_ID,
    })

  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
}
