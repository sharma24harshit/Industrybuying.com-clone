const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('../models/Product');
const User = require('../models/User');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/industrybuying';

// Sample products data
const sampleProducts = [
  {
    id: 'prod_1',
    name: 'Classic White T-Shirt',
    brand: 'BrandX',
    Categories: 't_shirt',
    price: '599',
    og_price: '999',
    saving: '40% off',
    rating: 4.5,
    raitng: 4.5,
    image: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500'
    ],
    discription: 'Comfortable and stylish white t-shirt made from premium cotton.',
    show: true
  },
  {
    id: 'prod_2',
    name: 'Running Shoes',
    brand: 'SportBrand',
    Categories: 'shoes',
    price: '2999',
    og_price: '4999',
    saving: '40% off',
    rating: 4.3,
    raitng: 4.3,
    image: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'
    ],
    discription: 'High-quality running shoes perfect for daily workouts.',
    show: true
  },
  {
    id: 'prod_3',
    name: 'Leather Jacket',
    brand: 'FashionBrand',
    Categories: 'Jacket',
    price: '4999',
    og_price: '7999',
    saving: '37% off',
    rating: 4.7,
    raitng: 4.7,
    image: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500'
    ],
    discription: 'Genuine leather jacket with modern design.',
    show: true
  },
  {
    id: 'prod_4',
    name: 'Travel Backpack',
    brand: 'TravelGear',
    Categories: 'bags',
    price: '1999',
    og_price: '2999',
    saving: '33% off',
    rating: 4.2,
    raitng: 4.2,
    image: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500'
    ],
    discription: 'Durable travel backpack with multiple compartments.',
    show: true
  },
  {
    id: 'prod_5',
    name: 'Smart Watch',
    brand: 'TechWatch',
    Categories: 'watch',
    price: '4999',
    og_price: '7999',
    saving: '37% off',
    rating: 4.6,
    raitng: 4.6,
    image: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'
    ],
    discription: 'Feature-rich smartwatch with fitness tracking.',
    show: true
  },
  {
    id: 'prod_6',
    name: 'Wireless Headphones',
    brand: 'AudioTech',
    Categories: 'Headphones',
    price: '2999',
    og_price: '4999',
    saving: '40% off',
    rating: 4.4,
    raitng: 4.4,
    image: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
    ],
    discription: 'Premium wireless headphones with noise cancellation.',
    show: true
  },
  {
    id: 'prod_7',
    name: 'Smartphone Pro',
    brand: 'TechMobile',
    Categories: 'mobile',
    price: '29999',
    og_price: '39999',
    saving: '25% off',
    rating: 4.8,
    raitng: 4.8,
    image: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500'
    ],
    discription: 'Latest smartphone with advanced features and camera.',
    show: true
  }
];

// Sample users data
const sampleUsers = [
  {
    id: 'user_1',
    name: 'John Doe',
    email: 'john@example.com',
    profile: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
    active: true,
    cart: [],
    whishList: [],
    orders: []
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Clear existing data
    await Product.deleteMany({});
    await User.deleteMany({});
    console.log('Cleared existing data');

    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log(`Inserted ${sampleProducts.length} products`);

    // Insert sample users
    await User.insertMany(sampleUsers);
    console.log(`Inserted ${sampleUsers.length} users`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();

