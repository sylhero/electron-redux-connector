const webpack = require('webpack');
const path = require('path');



var rules = [{
    enforce: 'pre',
    test: /\.js$/,
    include: [path.resolve(__dirname, './src')],
    use: [{
        loader: 'eslint-loader',
        options: {
            fix: true
        }
    }]
}, {
    test: /\.js$/,
    include: [path.resolve(__dirname, './src')],
    use: [{
        loader: 'babel-loader',
        options: {
            cacheDirectory: true
        }
    }]
}];


module.exports = {
    entry: {
        app: ['./src/index.js']
    },
    devtool: 'cheap-source-map',
    // use hash to leverage the browser cache
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'electron-redux-connector.min.js',
        publicPath: './',
        library: 'electron-redux-connector',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.js'],
        modules: ['node_modules', 'js']

    },
    module: {
        rules
    },
    externals: {
        'electron': 'electron'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true,
                drop_debugger: true
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin()
    ],
    performance: {
        hints: false
    }
};
