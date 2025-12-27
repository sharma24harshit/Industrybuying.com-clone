const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  profile: {
    type: String,
    default: ''
  },
  active: {
    type: Boolean,
    default: true
  },
  cart: {
    type: Array,
    default: []
  },
  whishList: {
    type: Array,
    default: []
  },
  orders: {
    type: Array,
    default: []
  }
}, {
  timestamps: true
});

// Index for better query performance
userSchema.index({ id: 1 });
userSchema.index({ email: 1 });
userSchema.index({ name: 1 });

const User = mongoose.model('User', userSchema);

module.exports = User;

