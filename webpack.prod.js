const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "./docs"),
    filename: "./assets/js/app.[contenthash].js",
    assetModuleFilename: "./assets/images/[name].[contenthash][ext]",
    clean: true,
    environment: {
      arrowFunction: false,
      destructuring: false,
      const: false,
      module: false,
      dynamicImport: false,
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./assets/css/style.[contenthash].css",
    }),
  ],
});
