const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    default: ''
  },
  Categories: {
    type: String,
    default: ''
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

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;

