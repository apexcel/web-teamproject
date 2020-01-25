const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: {
        main: './src/client/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    },
    devServer: {
        overlay: true,
        stats: 'errors-only',
        port: 3001,
        hot: true
    },

    module: {
        rules: [
            {   
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    plugins: [
        new webpack.BannerPlugin({
            banner: `Build: ${new Date().toLocaleDateString()}`
        }),

        new HtmlWebPackPlugin({
            template: './src/client/index.html',
        }),

        new CleanWebpackPlugin(),
    ],

    optimization: {

    },
};