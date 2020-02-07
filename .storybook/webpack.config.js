
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        loaders: ["style-loader", "css-loader", "less-loader"],
      }
    ]
  }
};