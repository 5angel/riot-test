var webpack = require('webpack');

module.exports = {
    entry: './src/entry',
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot'
        })
    ],
    module: {
        preLoaders: [
            {
                test: /\.tag$/,
                loader: 'riotjs-loader'
            }
        ],
        loaders: [
            {
                test: /\.js$|\.tag$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
