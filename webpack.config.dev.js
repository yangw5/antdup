/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-11-22 10:15:05
 * @LastEditors: yangw5
 * @LastEditTime: 2019-11-25 10:52:19
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
  entry: path.resolve(__dirname, "./example/src/index.js"),
  mode: "development", // 打包为开发模式
  output: {
    path: path.resolve(__dirname, "example/dist"),
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
    // 该字段用于配置webpack-dev-server
    contentBase: path.join(__dirname, "../demo"),
    compress: true,
    port: 9000, // 端口9000
    open: true // 自动打开浏览器
  }
};
