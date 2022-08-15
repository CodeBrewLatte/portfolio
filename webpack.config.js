const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config();

module.exports = {
  mode: "development",
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader", // post process the compiled CSS
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "/client"),
    },
    compress: true,
    port: 8080,
    //proxy allows us to mimic localhost 3000 requests
    //the server by default does not respond to 8080
    proxy: { "/api": "http://localhost:3000" },
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Steve Portfolio",
      template: "./client/index.html",
    }),
  ],
};
