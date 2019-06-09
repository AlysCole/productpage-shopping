const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  
  devServer: {
    hot: true,
    inline: true,
    progress: true,
    publicPath: "/",
    contentBase: "./assets",
    watchContentBase: true
  },

  entry: {
    main: [
      path.resolve(__dirname, "src/main.js"),
      path.resolve(__dirname, "src/index.html"),
      path.resolve(__dirname, "src/styles.css") 
    ],
  },

  output: {
    path: path.resolve(__dirname),
    filename: "[name].js"
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "env"
            ]
          }
        }
      },
      {
        "test": /\.css$/,
        "use": [
          "style-loader",
          "css-loader"
        ]
      },
      {
        "test": /.html$/,
        "loader": "raw-loader"
      },
      {
        "test": /\.(png|jpe?g|gif|svg)$/,
        "use": [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/"
            }
          }
        ]
      },
      {
        "test": /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        "use": [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/"
            }
          }
        ]
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html"),
      filename: "index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    extensions: [".js"]
  },
}
