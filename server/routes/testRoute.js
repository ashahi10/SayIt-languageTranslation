const express = require('express');
const router = express.Router();

// A simple test route
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is working!' });
});

module.exports = router;
