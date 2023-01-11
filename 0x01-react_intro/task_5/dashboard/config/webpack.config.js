var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../dist')
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "file-loader", "image-webpack-loader"],
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'babel-loader'
        }
      ],
    },

    devServer: {
      static: {
        directory: path.join(__dirname, '../dist'),
      },
      hot: true,
      compress: true,
      port: 8564,
    },

    devtool: 'inline-source-map',
    chunks: ["all"]





};