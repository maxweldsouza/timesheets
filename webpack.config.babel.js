import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractCss = new ExtractTextPlugin({
    filename: '[name].css',
    disable: false
});

export default {
    entry: './src/index.js',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: extractCss.extract({
                    loader: [{
                        loader: 'css-loader', options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader', options: {
                            sourceMap: true
                        }
                    }]
                }),
                exclude: /node_modules/
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
