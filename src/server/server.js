import path from 'path';
import express from 'express';
import fallback from 'express-history-api-fallback'

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

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

// webpack middle for hot reloading
const webpackConfig = require('../../config/webpack.js');
const compiler = webpack(webpackConfig);
const middleware = webpackMiddleware(compiler, {
  publicPath: '/',
  contentBase: 'src/client/index.html',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));



const PATH_DIST = path.resolve(__dirname, '../../dist');
app.use(express.static(PATH_DIST));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});
app.use(fallback(path.resolve(__dirname, '../client/index.html'))); // when requested route does not exist here in express app, return this file; for react.js route when using history.




server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});
