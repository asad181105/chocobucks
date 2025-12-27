-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create products table
CREATE TABLE products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  short_description TEXT,
  price DECIMAL(10,2) NOT NULL,
  compare_price DECIMAL(10,2),
  image_url TEXT,
  category VARCHAR(100),
  stock INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create collections table
CREATE TABLE collections (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  image_url TEXT,
  product_ids UUID[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create boxes table
CREATE TABLE boxes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID NOT NULL,
  items JSONB DEFAULT '[]',
  total_price DECIMAL(10,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create orders table
CREATE TABLE orders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID NOT NULL,
  items JSONB DEFAULT '[]',
  total_price DECIMAL(10,2) DEFAULT 0,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create cart table
CREATE TABLE cart (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID NOT NULL,
  items JSONB DEFAULT '[]',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_featured ON products(featured);
CREATE INDEX idx_boxes_user_id ON boxes(user_id);
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_cart_user_id ON cart(user_id);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE boxes ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to products and collections
CREATE POLICY "Public read access for products" ON products FOR SELECT USING (true);
CREATE POLICY "Public read access for collections" ON collections FOR SELECT USING (true);

-- Create policies for user-specific data
CREATE POLICY "Users can manage their own boxes" ON boxes 
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own orders" ON orders 
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own cart" ON cart 
  FOR ALL USING (auth.uid() = user_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_collections_updated_at BEFORE UPDATE ON collections
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_boxes_updated_at BEFORE UPDATE ON boxes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_cart_updated_at BEFORE UPDATE ON cart
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO products (name, description, short_description, price, compare_price, image_url, category, stock, featured) VALUES
('Dark Chocolate Truffles', 'Rich and creamy dark chocolate truffles made with 70% cocoa', 'Premium dark chocolate truffles', 25.99, 29.99, '/images/dark-truffles.jpg', 'truffles', 50, true),
('Milk Chocolate Bar', 'Smooth and creamy milk chocolate bar with 40% cocoa', 'Classic milk chocolate bar', 12.99, null, '/images/milk-chocolate.jpg', 'bars', 100, false),
('White Chocolate Hearts', 'Delicate white chocolate hearts perfect for gifting', 'Elegant white chocolate hearts', 18.99, 22.99, '/images/white-hearts.jpg', 'gifts', 30, true),
('Hazelnut Pralines', 'Crunchy hazelnut pralines coated in dark chocolate', 'Nutty hazelnut pralines', 22.99, null, '/images/hazelnut-pralines.jpg', 'pralines', 40, false),
('Chocolate Gift Box', 'Curated selection of our finest chocolates in elegant packaging', 'Premium chocolate gift box', 49.99, 59.99, '/images/gift-box.jpg', 'gifts', 25, true);

INSERT INTO collections (name, description, image_url, product_ids) VALUES
('Valentine''s Collection', 'Romantic chocolates perfect for Valentine''s Day', '/images/valentine-collection.jpg', ARRAY[]::UUID[]),
('Corporate Gifts', 'Professional gift sets for business occasions', '/images/corporate-gifts.jpg', ARRAY[]::UUID[]),
('Holiday Specials', 'Festive chocolates for the holiday season', '/images/holiday-specials.jpg', ARRAY[]::UUID[]);
