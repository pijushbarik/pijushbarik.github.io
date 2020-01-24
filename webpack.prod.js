const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CreateFileWebpack = require('create-file-webpack');

const readMeFileContent = `# pijushbarik.github.io (pijushbarik.ml)
This branch contains the build for the hosting in GitHub. The source code \
can be found in the \`dev\` branch
`;

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
        new CreateFileWebpack({
            path: './dist',
            fileName: 'README.md',
            content: readMeFileContent
        })
    ],
    module: {
        rules: [
            {
                test: /\.(jpg|png|webp|ico|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
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