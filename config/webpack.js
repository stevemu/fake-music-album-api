var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/client/scripts/script.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'] 
      },
      {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
};
