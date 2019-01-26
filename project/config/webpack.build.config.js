const pkg = require('../package.json');
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const LodashPlugin = require('lodash-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const appConfig = {
  VERSION: pkg.version,
  CSS_NAMESPACE: pkg.config.CSS_NAMESPACE,
  OUTPUT_NAME: pkg.config.OUTPUT_NAME,
  DEV_PORT: pkg.config.DEV_PORT,
  ENV: process.env.NODE_ENV || 'build',
};

const config = {
  mode: 'production',
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
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: true,
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
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          useRelativePath: true,
          name: '[name].[ext]'
        }
      }
    ]
  },
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
    new MiniCssExtractPlugin({
      filename: `styles/${appConfig.OUTPUT_NAME}.[name].${appConfig.VERSION}.css`,
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(appConfig.ENV) }),
    new webpack.DefinePlugin({ 'appConfig': JSON.stringify(appConfig) }),
    new CopyWebpackPlugin([
      { from: '../src/assets', to: path.resolve(__dirname, '../public/assets') },
      { from: '../src/content', to: path.resolve(__dirname, '../public/content') }
    ]),
    new HtmlWebpackPlugin({ 'template': '../index.pug' }),
    new LodashPlugin({ paths: true })
  ]
};

module.exports = config;
