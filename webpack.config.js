'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        app: './src/main.js'
    },
    devtool: 'none',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        publicPath: '/dist'
    },
    resolve: {
        alias: {
            node_modules: path.resolve(__dirname, 'node_modules')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader', // translates CSS into CommonJS
                            options: {
                                sourceMap: true,
                                minimize: true
                            }
                        },
                        {
                            loader: 'sass-loader', // compiles Sass to CSS
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader', // translates CSS into CommonJS
                        options: {
                            sourceMap: true,
                            minimize: true
                        }
                    }]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css'
        })
    ],
    target: 'web'
};
