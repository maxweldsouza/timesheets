const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCss = new ExtractTextPlugin({
    filename: '[name].css',
    disable: false
});

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: extractCss.extract({
                    loader: [{
                        loader: 'css-loader', options: {
                            sourceMap: true
                        }
                    }]
                })
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dev'),
        compress: true,
        port: 8000
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'src/index.html'
        }),
        extractCss
    ]
};
