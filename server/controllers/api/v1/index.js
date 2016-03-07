import express from 'express';
const router = express.Router();

router.use('/counter', require('./counter'))

module.exports = router
