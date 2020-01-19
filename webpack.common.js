const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'style.css' }),
        new CleanWebpackPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\js$/,
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                {
                    loader: 'file-loader',
                    options: {}
                }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'postcss-loader', 
                    'sass-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            }
        ]
    }
};