const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test:/\.(s*)css$/,
            use: [
                miniCss.loader,
                'css-loader',
                'sass-loader',

            ]
        },
        {
            test: /\.(png|jpg|jpeg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]'
            }
        }]
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
    ]
};