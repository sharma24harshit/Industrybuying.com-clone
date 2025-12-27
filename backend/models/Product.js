const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  Categories: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  og_price: {
    type: String,
    default: ''
  },
  saving: {
    type: String,
    default: ''
  },
  rating: {
    type: Number,
    default: 4.3
  },
  raitng: {
    type: Number,
    default: 4.3
  },
  image: {
    type: [String],
    required: true
  },
  discription: {
    type: String,
    default: ''
  },
  show: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for better query performance
productSchema.index({ Categories: 1 });
productSchema.index({ id: 1 });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

