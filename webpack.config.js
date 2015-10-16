var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

var sassLoaders = [
  "css-loader",
  "autoprefixer-loader?browsers=last 2 version",
  "sass-loader?includePaths[]=" + path.resolve(__dirname, "./app"),
];


module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!")),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("public/[name].css"),
  ],
  resolve: {
    extensions: ["", ".js", ".scss"],
    modulesDirectories: ["app", "node_modules"],
  }
};