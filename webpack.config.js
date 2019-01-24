const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpckPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\js$/,
        exclude: /node_modules/
      },
      {
        test: /\.jpg/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    watchContentBase: true,
    publicPath: '/build/'
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    new CleanWebpckPlugin('build/', {})
  ]
};