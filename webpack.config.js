/*
    ./webpack.config.js
*/
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./client/index.html",
  filename: "index.html",
  inject: "body"
});
module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "main.js",
    chunkFilename: "[name].js"
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: {
            keep_fnames: true
          }
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        // vendor chunk
        vendor: {
          // async + async chunks
          chunks: "all",
          // import file path containing node_modules
          test: /node_modules/
        }
      }
    }
  },
  module: {
    rules: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader?name=public/fonts/[name].[ext]"
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
};
