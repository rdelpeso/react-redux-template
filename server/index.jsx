import express from 'express';
import json from 'express-json';
import path from 'path';

let app = express();

let store = {
	count: 0
};

app.use('/assets', express.static(path.resolve(__dirname, '..', 'build', 'assets')));
app.use(json())

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});


app.get('/get', (req, res) => {
	res.json(store);
});

app.get('/plus', (req, res) => {
	store.count = store.count + 1;
	res.json({status: 'ok'});
});

app.listen(3000);
