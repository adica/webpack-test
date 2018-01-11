'use strict';

const path = require('path');
const merge = require('webpack-merge');

const devConfig = {
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [
        ]
    },
    devServer: {
        disableHostCheck: true,
        open: false,
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        contentBase: './'
    }
};

module.exports = (function () {
    return merge(
        require(path.join(__dirname, 'webpack.config.js')),
        devConfig
    );
}());
