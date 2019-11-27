/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-11-22 10:15:05
 * @LastEditors: yangw5
 * @LastEditTime: 2019-11-25 10:31:06
 * @FilePath: \antdup\webpack.config.js
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "./example/src/index.html"),
  filename: "./index.html"
});

module.exports = {
  //   entry: path.resolve(__dirname, "./index.js"),
  entry: path.resolve(__dirname, "./example/src/app.js"),
  output: {
    path: path.join(__dirname, "../example/dist"),
    // path: path.resolve(__dirname, "./lib"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["js", "jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  devServer: {
    port: 5001
  }
};
