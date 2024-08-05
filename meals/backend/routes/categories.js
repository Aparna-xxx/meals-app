const express = require('express');
const router = express.Router();
const db = require('../data/db');

// Fetch categories
router.get('/', (req, res) => {
  const query = 'SELECT * FROM categories';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching categories:', err);
      return res.status(500).json({ error: 'Error fetching categories' });
    }
    res.json(results);
  });
});

module.exports = router;
