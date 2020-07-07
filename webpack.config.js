const HtmlWebPackPlugin = require("html-webpack-plugin")
const dotenv = require("dotenv")
const webpack = require("webpack")
const path = require("path")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    // This below works, but there is a netlify deploy problem
    // new webpack.DefinePlugin({
    //   "process.env": dotenv.config().parsed
    // })
    new webpack.DefinePlugin({
      "REACT_APP_API_KEY": '"bb6301d8913f327572239c8131101cf5"',
      "REACT_APP_PHOTOSET_ID": '"72157713388874737"',
      "REACT_APP_USER_ID": '"187314355@N02"'
    })
  ],
  devServer: {
    port: 3000
  },
  node: {
    fs: "empty"
  }
}