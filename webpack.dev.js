const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 3000,
    historyApiFallback: true
  },
  devtool: "inline-source-map"
});
