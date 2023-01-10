const path = require('path');

module.exports = {
    mode: "production",
    entry: './js/dashboard_main.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public')
    },
    rules: [
      {
        test: /\.css$/i,
        use: ["file-loader", "image-webpack-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ],
    
  
};