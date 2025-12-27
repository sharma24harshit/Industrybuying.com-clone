const express = require('express');
const router = express.Router();
const Wishlist = require('../models/Wishlist');

// GET all wishlist items
router.get('/', async (req, res) => {
  try {
    const wishlistItems = await Wishlist.find();
    res.json(wishlistItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST add to wishlist
router.post('/', async (req, res) => {
  try {
    // Check if item already exists in wishlist
    const existingItem = await Wishlist.findOne({ id: req.body.id });
    if (existingItem) {
      return res.status(400).json({ error: 'Item already in wishlist' });
    }
    
    // Generate unique ID if not provided
    if (!req.body.id) {
      req.body.id = `wish_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    
    const wishlistItem = new Wishlist(req.body);
    await wishlistItem.save();
    res.status(201).json(wishlistItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE remove from wishlist
router.delete('/:id', async (req, res) => {
  try {
    const wishlistItem = await Wishlist.findOneAndDelete({ id: req.params.id });
    if (!wishlistItem) {
      return res.status(404).json({ error: 'Wishlist item not found' });
    }
    res.json({ message: 'Wishlist item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH update wishlist item
router.patch('/:id', async (req, res) => {
  try {
    const wishlistItem = await Wishlist.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!wishlistItem) {
      return res.status(404).json({ error: 'Wishlist item not found' });
    }
    res.json(wishlistItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

