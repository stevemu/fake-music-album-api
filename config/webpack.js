var path = require('path');

module.exports = {
  entry: [

    path.resolve(__dirname, '../src/app/index.js')
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },


  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};

// var webpack = require('webpack');

// for hot reloading if webpack middleware is in node
// 'webpack-hot-middleware/client?reload=false',
//
// plugins: [
//   new webpack.HotModuleReplacementPlugin()
// ],