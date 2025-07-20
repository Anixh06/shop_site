import { Product } from '../types';

export const categories = [
  'All',
  'Electronics',
  'Clothing',
  'Home & Garden',
  'Sports',
  'Beauty',
  'Books'
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 129.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=500&q=60',
    category: 'Electronics',
    description: 'Premium wireless headphones with noise cancellation and superior sound quality.',
    rating: 4.8,
    reviews: 324,
    inStock: true,
    colors: ['Black', 'White', 'Silver'],
    tags: ['wireless', 'bluetooth', 'noise-cancelling']
  },
  {
    id: '2',
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=500&q=60',
    category: 'Clothing',
    description: 'Comfortable organic cotton t-shirt with modern fit and sustainable materials.',
    rating: 4.5,
    reviews: 156,
    inStock: true,
    colors: ['Navy', 'White', 'Gray', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    tags: ['organic', 'cotton', 'sustainable']
  },
  {
    id: '3',
    name: 'Smart Watch Series 5',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=500&q=60',
    category: 'Electronics',
    description: 'Advanced smartwatch with health monitoring, GPS, and 7-day battery life.',
    rating: 4.7,
    reviews: 892,
    inStock: true,
    colors: ['Black', 'Silver', 'Gold'],
    tags: ['smartwatch', 'fitness', 'health']
  },
  {
    id: '4',
    name: 'Minimalist Desk Lamp',
    price: 79.99,
    image: 'https://www.ikea.com/in/en/images/products/roedflik-desk-lamp-light-beige__1327054_pe944348_s5.jpg',
    category: 'Home & Garden',
    description: 'Modern LED desk lamp with adjustable brightness and USB charging port.',
    rating: 4.6,
    reviews: 234,
    inStock: true,
    colors: ['White', 'Black'],
    tags: ['led', 'adjustable', 'modern']
  },
  {
    id: '5',
    name: 'Running Shoes Pro',
    price: 149.99,
    originalPrice: 189.99,
    image: 'https://www.asics.co.in/media/catalog/product/1/2/1203a542_200_sr_rt_glb-base.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=',
    category: 'Sports',
    description: 'Professional running shoes with advanced cushioning and breathable design.',
    rating: 4.9,
    reviews: 567,
    inStock: true,
    colors: ['Blue', 'Black', 'White'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    tags: ['running', 'athletic', 'breathable']
  },
  {
    id: '6',
    name: 'Natural Face Serum',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=60',
    category: 'Beauty',
    description: 'Anti-aging serum with natural ingredients and vitamin C for radiant skin.',
    rating: 4.4,
    reviews: 298,
    inStock: true,
    tags: ['skincare', 'natural', 'anti-aging']
  },
  {
    id: '7',
    name: 'Bestseller Novel Collection',
    price: 24.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=60',
    category: 'Books',
    description: 'Collection of three bestselling novels from award-winning authors.',
    rating: 4.7,
    reviews: 445,
    inStock: true,
    tags: ['fiction', 'bestseller', 'collection']
  },
  {
    id: '8',
    name: 'Yoga Mat Premium',
    price: 59.99,
    image: 'data:image/jpeg;base64,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',
    category: 'Sports',
    description: 'Non-slip premium yoga mat with extra cushioning and eco-friendly materials.',
    rating: 4.6,
    reviews: 189,
    inStock: true,
    colors: ['Purple', 'Green', 'Blue', 'Pink'],
    tags: ['yoga', 'non-slip', 'eco-friendly']
  }
];
