const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

const paths = {
    dist: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public')
}

module.exports = {
    mode: 'production',
    entry: path.join(paths.src, 'index.js'),
    output: {
        path: paths.dist,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: path.join(paths.public, 'index.html')
        }),
    ],
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    node: {
        __dirname: true,
        __filename: false
    },
    devServer: {
        historyApiFallback: true,
    }
}