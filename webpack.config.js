var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var NODE_ENV = process.env.NODE_ENV || 'development';
var autoprefixer = require('autoprefixer');

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/templates/index.html",
    fileName: "./index.html"
});

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: './main.js',
        publicPath: '/'
    },
    devtool: NODE_ENV == 'development' ? "inline-source-map" : null,
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: require.resolve("css-loader"),
                        options: {
                            importLoaders: 2,
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            }
                        }
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    flexbox: 'no-2009',
                                }),
                                require('postcss-modules-values'),
                            ],
                        },
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        },
                    },
                ]
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        },
                    },
                ]
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        },
                    },
                ]
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 10000
                        },
                    },
                ]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        },
                    },
                ]
            }
        ]
    },
    plugins: [htmlPlugin],
    devServer: {
        historyApiFallback: true
    }
};
