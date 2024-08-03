const express = require('express');
const News = require('../models/News');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const articles = await News.find();
    res.status(200).json({ articles });
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});

module.exports = router;
