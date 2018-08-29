const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  target: "web",
  entry: "./examples",
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: "index.js",
    library: "parvus-ui",
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    modules: ["node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
				test: /\.css$/,
				loader: 'style-loader!css-loader?importLoaders=1',
			},
			{
				test: /\.svg$/,
				loader: 'file-loader',
				query: {
					name: 'static/media/[name].[hash:8].[ext]',
				},
			},
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
  devtool: "source-map",
  devServer: {
    port: 3000
  }
};
