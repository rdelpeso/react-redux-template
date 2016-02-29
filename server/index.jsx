import express from 'express';
import json from 'express-json';
import path from 'path';

const port = 3000;

let app = express();
app.set('view engine', 'jade');
app.set('views', path.resolve(__dirname, '..', 'server', 'views'));

let store = {
	count: 0
};

app.use('/assets', express.static(path.resolve(__dirname, '..', 'build', 'assets')));
app.use(json())

app.get('/', (req, res) => {
	res.render('index', {title: 'Hey', port})
});

app.get('/get', (req, res) => {
	res.json(store);
});

app.get('/plus', (req, res) => {
	store.count = store.count + 1;
	res.json({status: 'ok', count: store.count});
});

app.listen(port);
