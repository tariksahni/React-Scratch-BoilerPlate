var webpack = require("webpack");
var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html"
});

var parentDir = path.join(__dirname);

module.exports = {
  entry: [path.join(parentDir, "src/client/app/index.jsx")],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.less$/,
        loaders: ["style-loader", "css-loder", "less-loader"]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    contentBase: "./dist"
  }
};
