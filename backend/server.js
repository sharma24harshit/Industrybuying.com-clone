const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/data', require('./routes/products'));
app.use('/user', require('./routes/users'));
app.use('/cart', require('./routes/cart'));
app.use('/wishList', require('./routes/wishlist'));
app.use('/api/auth', require('./routes/admin'));

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Industrybuying Backend API is running!' });
});

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/industrybuying';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

