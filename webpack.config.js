'use strict';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractCSS = new ExtractTextPlugin('./css/[name].css');

module.exports = {
  cache: true,
  entry: {
    app: './src/front/js/App.jsx',
    vendor: ['react', 'react-dom', 'font-awesome/scss/font-awesome.scss', './src/front/css/main.scss'],
  },
  output: {
    path: './public/js',
    publicPath: 'http://localhost:8080/assets/',
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true, //important for performance
      }
    }, {
      test: /\.(scss|css)$/,
      loader: extractCSS.extract(['css', 'sass'])
    }, {
      test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
      // loader: "url?limit=10000"
      loader: 'url'
    }, {
      test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      loader: 'file?name=css/fonts/[hash].[ext]'
    }, {
      test: /\.jpg$/,
      loader: 'file'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    extractCSS,
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   },
    //   output: {
    //     comments: false,
    //   },
    // }),
  ]
};
