const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// GET all cart items (orders)
router.get('/', async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST add to cart
router.post('/', async (req, res) => {
  try {
    // Generate unique ID if not provided
    if (!req.body.id) {
      req.body.id = `cart_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    
    const cartItem = new Cart(req.body);
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE cart item
router.delete('/:id', async (req, res) => {
  try {
    const cartItem = await Cart.findOneAndDelete({ id: req.params.id });
    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }
    res.json({ message: 'Cart item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH update cart item
router.patch('/:id', async (req, res) => {
  try {
    const cartItem = await Cart.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }
    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

