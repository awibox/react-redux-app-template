const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';
const autoprefixer = require('autoprefixer');

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./templates/index.html",
    fileName: "./index.html"
});

const devMode = NODE_ENV === 'development';

console.log('NODE_ENV', NODE_ENV, 'devMode', devMode);

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        path: __dirname + '/public',
        filename: './js/main.js',
        publicPath: '/',
        chunkFilename: './js/[name].js'
    },
    devtool: devMode ? "inline-source-map" : false,
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {compact: false}
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader'
                ],
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
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
    plugins: [
        htmlPlugin,
        new MiniCssExtractPlugin({
            filename: devMode ? './css/[name].css' : './css/[name].[hash].css',
            chunkFilename: devMode ? './css/[name].css' : './css/[name].[hash].css',
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    devServer: {
        historyApiFallback: true
    }
};
