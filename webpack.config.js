const path = require('path');
const webpack = require('webpack');
const WebpackPrinter = require('webpack-console-printer-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'index.min.js',
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-2']
                    },
                }],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            { 
                test: /\.html$/, 
                use: 'raw-loader' 
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        port: 3000,
        quiet: true,
    },
    plugins: [
        new WebpackPrinter({
            port:3001,
            experimental: true
        }),
    ],
};