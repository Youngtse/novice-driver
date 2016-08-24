// webpack.config.js
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var webpack = require('webpack');
module.exports = {
    resolve: {
        root: [],
        alias: {
            'jquery': path.resolve('./node_modules/jquery'),
            'lodash': path.resolve('./node_modules/lodash'),
        }
    },
    // entry point of our application
    entry: './src/main.js',
    // where to place the compiled bundle
    output: {
        hotUpdateChunkFilename: "[id].hot-update.js",
        hotUpdateMainFilename: "hot-update.json",
        path: './dist/app/',
        publicPath: '/app/',
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ],
        // `loaders` is an array of loaders to use.
        // here we are only configuring vue-loader
        loaders: [
            {
                // use babel-loader for *.js files
                test: /\.js$/,
                loader: 'babel',
                // important: exclude files in node_modules
                // otherwise it's going to be really slow!
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/, // a regex for matching all files that end in `.vue`
                loader: 'vue'   // loader to use for matched files
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url',
                query: {
                    // limit for base64 inlining in bytes
                    limit: 10000,
                    // custom naming format if file is larger than
                    // the threshold
                    name: '[name].[ext]?[hash]'
                }
            }
        ],
        // if you are using babel-loader directly then
        // the babel config block becomes required.
        babel: {
            presets: ['es2015'],
            plugins: ['transform-runtime']
        }
    },
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract("css"),
            // you can also include <style lang="less"> or other langauges
            less: ExtractTextPlugin.extract("css!less")
        }
    },
    plugins: [
        new ExtractTextPlugin("style.css", {
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            _: 'lodash',
        }),
    ],
    eslint: {
        configFile: '.eslintrc'
    }
};
