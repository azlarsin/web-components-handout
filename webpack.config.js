/**
 * Created by azlar on 19/09/2017.
 */

const path = require('path'),
    webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    fs = require("fs");


process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const assetsPath = function (_path) {
    return path.posix.join('static', _path)
};


module.exports = {
    devtool: 'cheap-module-source-map',
    // devtool: 'inline-source-map',

    entry: {
        vendor: [
            "react",
            "react-dom",
            "react-router"
        ],
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, "build"),
        // publicPath: path.resolve(__dirname, "build", "assets"),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json-loader' },
            {
                // "oneOf" will traverse all following loaders until one will
                // match the requirements. When no loader matches it will fall
                // back to the "file" loader at the end of the loader list.
                oneOf: [
                    // Process JS with Babel.
                    {
                        test: /\.(js|jsx)$/,
                        include: path.resolve(__dirname, 'src'),
                        loader: require.resolve('babel-loader'),
                        options: {
                            // @remove-on-eject-begin
                            babelrc: false,
                            presets: [require.resolve('babel-preset-react-app')],
                            // @remove-on-eject-end
                            compact: true,
                        },
                    },
                ]
            },

            {
                // test: /\.scss$/,
                // loaders: ["style-loader", "css-loader", "sass-loader"]
                test: /(\.css|\.scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {}
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: true,
                                plugins: function () {
                                    return [
                                        require("autoprefixer")
                                    ];
                                }
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },

            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }

        ]
    },

    // devServer: {
    //     watchContentBase: true
    // },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            path: path.resolve(__dirname, "build"),
            filename: "vendor.js",
            minChunks: Infinity,

        }),

        new ExtractTextPlugin('assets/main.css')
    ]
};