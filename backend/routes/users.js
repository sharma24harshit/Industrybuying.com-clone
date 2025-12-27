const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET all users
router.get('/', async (req, res) => {
  try {
    const { name } = req.query;
    
    if (name) {
      // Get user by name
      const user = await User.find({ name: name });
      return res.json(user);
    }
    
    // Get all users
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create new user or update cart
router.post('/', async (req, res) => {
  try {
    const { name } = req.query;
    
    // If name query param exists, update user's cart
    if (name) {
      const user = await User.findOne({ name: name });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      // Update cart (req.body should be the cart array)
      user.cart = Array.isArray(req.body) ? req.body : req.body.cart || req.body;
      await user.save();
      return res.json(user);
    }
    
    // Otherwise, create new user
    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [
        { id: req.body.id },
        { email: req.body.email }
      ]
    });
    
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PATCH update user
router.patch('/:id', async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE user
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ id: req.params.id });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

