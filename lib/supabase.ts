import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Database types
export interface Product {
  id: string
  name: string
  description: string
  short_description: string
  price: number
  compare_price?: number
  image_url: string
  category: string
  stock: number
  featured: boolean
  created_at: string
  updated_at: string
}

export interface Collection {
  id: string
  name: string
  description: string
  image_url: string
  product_ids: string[]
  created_at: string
  updated_at: string
}

export interface Box {
  id: string
  user_id: string
  items: BoxItem[]
  total_price: number
  created_at: string
  updated_at: string
}

export interface BoxItem {
  product_id: string
  quantity: number
  price: number
}

export interface Order {
  id: string
  user_id: string
  items: OrderItem[]
  total_price: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  created_at: string
  updated_at: string
}

export interface OrderItem {
  product_id: string
  quantity: number
  price: number
}

export interface Cart {
  id: string
  user_id: string
  items: CartItem[]
  updated_at: string
}

export interface CartItem {
  product_id: string
  quantity: number
  price: number
}
