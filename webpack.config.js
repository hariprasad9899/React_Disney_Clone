const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CSSWebpackPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry: {
        path: './src/index.js',
    },

    output: {
        path: path.join(__dirname, './dist/'),
        filename: "bundle.js",
    },

    devServer: {
        port: 3000,
        historyApiFallback: true,
    },

    cache: false,

    plugins: [
        new HTMLWebpackPlugin( {
            template: './src/index.html',
        }),
        new CSSWebpackPlugin(),
    ],


    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                },
            },

            {
                test: /.css$/,
                exclude: /node_modules/,
                use: [CSSWebpackPlugin.loader,'css-loader'],
            },

            {
                test: /.scss$/,
                exclude: /node_modules/,
                use: {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    }
                }
            },

            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
            
        ]
    },

    resolve: {
        extensions: ['.js', '.json', '.wasm'], // Add your extensions here.
    }
}