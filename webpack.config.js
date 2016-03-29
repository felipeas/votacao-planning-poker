var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: [
            'bootstrap-loader',
            path.join(__dirname, 'client/src/index.js'),
        ],
        vendor: [
            'classnames',
            'history',
            'isomorphic-fetch',
            'qs/dist/qs',
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'redux',
            'redux-form',
            'redux-router',
            'redux-thunk',
            'validate.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'client/dist/js'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new webpack.ProvidePlugin({
          jQuery: 'jquery',
        }),
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.scss$/, loaders: [ 'style', 'css', 'postcss', 'sass' ] },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    }
};
