/*
 * @Author: sussertod
 * @Date:   2016-08-17 09:18:21
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-08-19 16:01:57
 */

'use strict';

var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: {
        index: './src/app.js'
    },
    output: {
        path: __dirname + '/dist/', // 输出文件的保存路径
        filename: 'app.bundle.js?[hash:8]' // 输出文件的名称
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        }, {
            test: /\.css$/,
            loader: "style!css?modules"
        }, {
            test: /\.(png|jpg)$/,
            loader: "url-loader?limit=8192"
        }, {
            test: /\.scss$/,
            loaders: ["style?module", "css?module", "sass?module"]
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
