var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const path = require('path');

module.exports = {
    mode: "development",
    entry: {
      header: './modules/header/header.js',
      body: './modules/header/body.js',
      footer: './modules/header/footer.js',

    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'public')
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "file-loader", "image-webpack-loader"],
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader'
        }
      ],
    },

    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 8564,
    },

    plugins: [
      new HtmlWebpackPlugin({
          hash: true,
          filename: '/public/index.html' //relative to root of the application
      }),
      new CleanWebpackPlugin()
 ],
    devtool: 'inline-source-map',





};