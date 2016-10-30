import path from 'path';
import express from 'express';
import fallback from 'express-history-api-fallback'

const webpack = require('webpack');

var bodyParser = require('body-parser');

var app = express();
var server;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
  // Set permissive CORS header - this allows this server to be used only as
  // an API server in conjunction with something like webpack-dev-server.
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Disable caching so we'll always get the latest comments.
  res.setHeader('Cache-Control', 'no-cache');
  next();
});


// webpack middle for hot reloading during development
const inProduction = process.env.NODE_ENV == 'production';
if (inProduction) {
  // under production, node serve the bundle.js (in development, webpack-dev-server serve the bundle.js)
  console.log('in production, node will serve the bundle.js and html files');
  const PATH_DIST = path.resolve(__dirname, '../../dist');
  app.use(express.static(PATH_DIST));
} else {
  console.log('in development, please make sure webpack dev server is running.');
}

// serve html regardless whether the middleware is enabled or not
app.use(express.static(path.resolve(__dirname, '../public/')));
app.use(fallback(path.resolve(__dirname, '../public/index.html'))); // when requested route does not exist here in express app, return this file; for react.js route when using history.

server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});
