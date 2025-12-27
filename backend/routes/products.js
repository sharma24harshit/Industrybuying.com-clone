const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
  try {
    const { _page, _limit, Categories, q, _sort, _order } = req.query;
    
    let query = {};
    
    // Filter by category
    if (Categories) {
      query.Categories = Categories;
    }
    
    // Search query
    if (q) {
      query.$or = [
        { name: { $regex: q, $options: 'i' } },
        { brand: { $regex: q, $options: 'i' } },
        { Categories: { $regex: q, $options: 'i' } }
      ];
    }
    
    let sortOptions = {};
    if (_sort) {
      const order = _order === 'desc' ? -1 : 1;
      sortOptions[_sort] = order;
    }
    
    // Pagination
    if (_page && _limit) {
      const page = parseInt(_page);
      const limit = parseInt(_limit);
      const skip = (page - 1) * limit;
      
      const products = await Product.find(query)
        .sort(sortOptions)
        .skip(skip)
        .limit(limit);
      
      return res.json(products);
    }
    
    // Get all products
    const products = await Product.find(query).sort(sortOptions);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH update product
router.patch('/:id', async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create new product
router.post('/', async (req, res) => {
  try {
    // Generate unique ID if not provided
    if (!req.body.id) {
      req.body.id = `prod_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE product
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ id: req.params.id });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

