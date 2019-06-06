const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
    dist: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
    components: path.resolve(__dirname, 'src/components')
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: path.join(paths.src, 'index.html')
        })
    ],
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    }
}