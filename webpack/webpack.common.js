'use strict';

require('@babel/polyfill');
const path = require('path');
const port = require('../port');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', path.resolve(__dirname, '../app')],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'main.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'app/index.html'
    })
  ],
  resolve: {
    alias: {
      Helpers: path.resolve(__dirname, '../app/helpers/'),
      Components: path.resolve(__dirname, '../app/components/'),
      Actions: path.resolve(__dirname, '../app/redux/actions/'),
      API: path.resolve(__dirname, '../app/api/')
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    compress: true,
    port,
    historyApiFallback: true
  }
};
