import express from 'express';
import bodyParser from 'body-parser';
import json from 'express-json';
import path from 'path';
import config from 'configs';

const app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use('/assets', express.static(__dirname + '/assets'));
app.use(json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('controllers'));

app.listen(config.port, function() {
  console.log('Listening on port ' + config.port)
});
