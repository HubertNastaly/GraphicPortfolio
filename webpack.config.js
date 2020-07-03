const HtmlWebPackPlugin = require("html-webpack-plugin")
const dotenv = require("dotenv")
const webpack = require("webpack")

module.exports = {
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
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      // "process.env": JSON.stringify(dotenv.config().parsed)
      "process.env": dotenv.config().parsed
    })
  ],
  devServer: {
    port: 3000
  },
  node: {
    fs: "empty"
  }
}