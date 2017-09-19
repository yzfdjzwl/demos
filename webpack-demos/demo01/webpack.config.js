const webpack = require('webpack');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

// environment flags
const DefinePlugin = webpack.DefinePlugin;

// the 3rd-party plugin, you don't need to write index.html
const HtmlwebpackPlugin = require('html-webpack-plugin');

// the 3rd-party plugin, you don't need to open browser
const OpenBrowserPlugin = require('open-browser-webpack-plugin'); 

module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },
  plugins: [
    new uglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new HtmlwebpackPlugin({
      title: 'yuzf-webpack-demos',
      filename: 'index2.html',
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080',
    }),
    new DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true')),
    })
  ],
};
