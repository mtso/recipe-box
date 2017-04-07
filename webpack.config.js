var path = require('path');
var exportDir = path.resolve(__dirname, 'dist');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'public/index.html'),
  inject: 'body'
});

module.exports = [
  {
    entry: [
      './public/app.js'
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    output: {
      filename: 'bundle.js',
      path: exportDir
    },
    plugins: [
      htmlWebpackPlugin
    ]
  }
];
