const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // 합칠 파일
    entry: [
        './src/client/index.js',
        ],

    // 합친 파일 출력
    output: {
        path: path.join(__dirname, './dist/'),
        filename: 'bundle.js'
    },

    // 어느모듈에 적용할 것 인지
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },

            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },

        ]
    },

    devServer: {
        contentBase: './dist',
        hot: true, // HMR 기능 활성화
        open: true,
        host: 'localhost',
        port: 3000
    },

    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html'),
            filename: path.join(__dirname, './dist/index.html')
        })
    ]

}