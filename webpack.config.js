const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  target: "web",
  entry: "./examples",
  output: {
    filename: "index.js"
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\.(node_modules|examples)$/,
        use: ["babel-loader", "eslint-loader"]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
  devtool: "source-map",
  devServer: {
    port: 3000
  }
};
