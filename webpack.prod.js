const merge = require("webpack-merge");
const common = require("./webpack.common");
const ClosurePlugin = require('closure-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new ClosurePlugin({ mode: 'STANDARD' },
            { compilation_level: "ADVANCED" })
        ]
    }
});