const pkg = require('../package.json');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appConfig = {
  VERSION: pkg.version,
  OUTPUT_NAME: pkg.config.OUTPUT_NAME,
  DEV_PORT: pkg.config.DEV_PORT
};

const config = {
  mode: 'development',
  context: path.resolve(__dirname),
  entry: {
    app: [
      '../src/index.js',
      '../src/styles/main.css',
      '../index.pug'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../public/'),
    filename: `scripts/${appConfig.OUTPUT_NAME}.[name].${appConfig.VERSION}.js`,
    publicPath: '/'
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.pug/,
        exclude: /node_modules/,
        use: 'pug-loader'
      },
      {
        test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        exclude: /node_modules/,
        use: 'file-loader'
      }
    ]
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../public/'),
    port: appConfig.DEV_PORT,
    historyApiFallback: true
  },
  devtool: 'source-map',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'manifest',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new ExtractTextPlugin(`../styles/${appConfig.OUTPUT_NAME}.[name].${appConfig.VERSION}.css`),
    new CopyWebpackPlugin([
      { from: '../src/assets', to: path.resolve(__dirname, '../public/assets') },
      { from: '../src/content', to: path.resolve(__dirname, '../public/content') }
    ]),
    new HtmlWebpackPlugin({ 'template': '../index.pug' })
  ]
};

module.exports = config;
