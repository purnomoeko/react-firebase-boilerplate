const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

module.exports = (options) => {
    const config = {
        entry: './src/app.js',
        output: {
            path: `${__dirname}/../dist`,
            filename: 'bundle.js',
        },
        module: {
            loaders: [
                { test: /\.css$/, loader: 'style-loader!css-loader' },
                {
                    test: /\.js|.jsx$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: { presets: ['es2017', 'react'] },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({ template: './src/index.html' }),
        ],
    };
    if (options.isProduction) {
        config.plugins.push(
            new Webpack.optimize.OccurenceOrderPlugin(),
            new Webpack.optimize.UglifyJsPlugin({
                compressor: {
                    warnings: false,
                },
            })
        );
    }
    return config;
};
