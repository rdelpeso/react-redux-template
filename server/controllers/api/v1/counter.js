import express from 'express';
import store from 'models/counter.js';

const router = express.Router();

router.get('/get', (req, res) => {
  let count = store.count();
  res.json({count});
});

router.get('/plus', (req, res) => {
  let count = store.addOne();
  res.json({count});
});

module.exports = router
