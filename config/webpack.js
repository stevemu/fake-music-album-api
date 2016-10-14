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
        test: /src\/.+.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }
    ]
  }
};
