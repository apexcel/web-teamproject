const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/client/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./build')
    },
    devServer: {
        overlay: true,
        stats: 'errors-only',
        port: 3001,
        hot: true,
        historyApiFallback: true,
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
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpg|svg|gif|eot|otf|ttf|woff)$/,
                loader: 'file-loader',
                exclude: /node_modules/,
                options: {
                    publicPath: '/src/client/images',
                    outputPath: '/imgs/',
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },

    plugins: [
        new webpack.BannerPlugin({
            banner: `Build: ${new Date().toLocaleDateString()}`
        }),

        new HtmlWebPackPlugin({
            title: 'DBNET',
            template: './src/client/index.html',
        }),

        new CleanWebpackPlugin(),
        new UglifyWebpackPlugin(),
    ],

    optimization: {

    },
};