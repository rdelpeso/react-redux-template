import express from 'express';
import config from 'configs';

const router = express.Router();

router.use('/api', require('./api'))

router.use('/', (req, res) => {
	res.render('index', {title: 'Hey', assets_location: config.assets_location})
});

module.exports = router
