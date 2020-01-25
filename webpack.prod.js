const merge                 = require("webpack-merge");
const common                = require("./webpack.common");
const HtmlWebpackPlugin     = require("html-webpack-plugin");
const CopyWebpackPlugin     = require("copy-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            hash: true
        }),
        new CopyWebpackPlugin([
            {
                from: './src/extras',
                to: './'
            }
        ])
    ],
    module: {
        rules: [
            {
                test: /\.(jpg|png|webp|ico|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            }
        ]
    }
});