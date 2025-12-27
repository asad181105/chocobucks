interface ShiprocketToken {
  token: string
  expiresAt: number
}

interface ShiprocketOrder {
  order_id: string
  order_date: string
  pickup_location: string
  billing_customer_name: string
  billing_last_name: string
  billing_address: string
  billing_city: string
  billing_pincode: string
  billing_state: string
  billing_country: string
  billing_email: string
  billing_phone: string
  shipping_is_billing: boolean
  shipping_customer_name?: string
  shipping_last_name?: string
  shipping_address?: string
  shipping_city?: string
  shipping_pincode?: string
  shipping_state?: string
  shipping_country?: string
  shipping_email?: string
  shipping_phone?: string
  order_items: Array<{
    name: string
    sku: string
    units: number
    selling_price: number
    discount: number
    tax: number
    hsn: number
  }>
  payment_method: string
  shipping_charges: number
  giftwrap_charges: number
  transaction_charges: number
  total_discount: number
  sub_total: number
  length: number
  breadth: number
  height: number
  weight: number
}

interface ShiprocketResponse {
  status: number
  message: string
  data?: any
}

class ShiprocketAPI {
  private baseUrl = 'https://apiv2.shiprocket.in/v1'
  private token: ShiprocketToken | null = null

  private async getToken(): Promise<string> {
    if (this.token && Date.now() < this.token.expiresAt) {
      return this.token.token
    }

    const response = await fetch(`${this.baseUrl}/external/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: process.env.SHIPROCKET_EMAIL,
        password: process.env.SHIPROCKET_PASSWORD,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to authenticate with Shiprocket')
    }

    const data = await response.json()
    
    if (data.status !== 200) {
      throw new Error(data.message || 'Authentication failed')
    }

    this.token = {
      token: data.data.token,
      expiresAt: Date.now() + (24 * 60 * 60 * 1000), // 24 hours
    }

    return this.token.token
  }

  async createOrder(orderData: ShiprocketOrder): Promise<ShiprocketResponse> {
    const token = await this.getToken()

    const response = await fetch(`${this.baseUrl}/external/orders/create/adhoc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(orderData),
    })

    if (!response.ok) {
      throw new Error('Failed to create Shiprocket order')
    }

    return response.json()
  }

  async assignCourier(orderId: string, courierId: number): Promise<ShiprocketResponse> {
    const token = await this.getToken()

    const response = await fetch(`${this.baseUrl}/external/courier/assign`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        order_id: orderId,
        courier_id: courierId,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to assign courier')
    }

    return response.json()
  }

  async generateLabel(orderId: string): Promise<ShiprocketResponse> {
    const token = await this.getToken()

    const response = await fetch(`${this.baseUrl}/external/courier/generate/label`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        order_id: orderId,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to generate label')
    }

    return response.json()
  }

  async trackOrder(orderId: string): Promise<ShiprocketResponse> {
    const token = await this.getToken()

    const response = await fetch(`${this.baseUrl}/external/orders/show/${orderId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error('Failed to track order')
    }

    return response.json()
  }

  async checkServiceability(pincode: string): Promise<boolean> {
    try {
      const token = await this.getToken()

      const response = await fetch(`${this.baseUrl}/external/courier/serviceability`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        return false
      }

      const data = await response.json()
      
      // Check if the pincode is serviceable
      // This is a simplified check - you might want to implement more sophisticated logic
      return data.status === 200 && data.data && data.data.length > 0
    } catch (error) {
      console.error('Error checking serviceability:', error)
      return false
    }
  }

  async getCouriers(): Promise<ShiprocketResponse> {
    const token = await this.getToken()

    const response = await fetch(`${this.baseUrl}/external/courier/serviceability`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error('Failed to get couriers')
    }

    return response.json()
  }
}

export const shiprocket = new ShiprocketAPI()
export type { ShiprocketOrder, ShiprocketResponse }
