const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({ 
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new CleanWebpackPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        }),
        new CopyWebpackPlugin([
            {
                from: './src/assets/symbol-defs.svg',
                to: './'
            },
            {
                from: './src/favicon.ico',
                to: './'
            }
        ])
    ],
    module: {
        rules: [
            {
                test: /\js$/,
                exclude: /node_modules/
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
                test: /\.(html)$/,
                loader: 'html-loader',
                options: {
                    attributes: false
                }
            }
        ]
    }
};