'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressJson = require('express-json');

var _expressJson2 = _interopRequireDefault(_expressJson);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var store = {
	count: 0
};

app.use('/assets', _express2.default.static(_path2.default.resolve(__dirname, '..', 'build', 'assets')));
app.use((0, _expressJson2.default)());

app.get('/', function (req, res) {
	res.sendFile(_path2.default.resolve(__dirname, '..', 'public', 'index.html'));
});

app.get('/get', function (req, res) {
	res.json(store);
});

app.get('/plus', function (req, res) {
	store.count = store.count + 1;
	res.json({ status: 'ok' });
});

app.listen(3000);