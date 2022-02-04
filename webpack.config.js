'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill','./src/index.js'],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
    ],
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [['@babel/preset-env', {
                            debug: true,
                             useBuiltIns: "usage"
                        }]]
                    }
                }
            }
        ]
    }
    // watch: true,
    //
    // devtool: "source-map",
    //
    // module: {
    //     rules: [
    //         {
    //             test: /\.m?js$/,
    //             exclude: /(node_modules|bower_components)/,
    //             use: {
    //                 loader: 'babel-loader',
    //                 options: {
    //                     presets: [['@babel/preset-env', {
    //                         debug: true,
    //                         corejs: 3,
    //                         useBuiltIns: "usage"
    //                     }]]
    //                 }
    //             }
    //         }
    //     ]
    // }
};
