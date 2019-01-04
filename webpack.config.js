// Webpack v4
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const TerserPlugin = require("terser-webpack-plugin");
const devMode = process.env.NODE_ENV;
const conf = {
  // entry: { 
  //   main: './src/index.js', 
  //   style: './src/scss/main.scss' ,
  // },
  // entry: ["./src/index.js", "./src/scss/main.scss"],
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: 'dist/'
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            
            {
              loader: 'css-loader',
              options: {
                // If you are having trouble with urls not resolving add this setting.
                // See https://github.com/webpack-contrib/css-loader#url
                sourceMap: true
              }
            },


            {
              loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  // includePaths: ["src/scss/main.scss"],
                  // implementation: require("sass")
                }
            },
          
          ]
        })
      }

      // {
      //   test: /\.scss$/,
      //   use: [
      //     devMode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
      //           "css-loader",
      //           "sass-loader"
      //   ],
      // }
    ]
  },
  plugins: [
    new ExtractTextPlugin(
      {filename: 'style.css'}
    ),
  ]
    // plugins: [
    // new MiniCssExtractPlugin({
    //     // Options similar to the same options in webpackOptions.output
    //     // both options are optional
    //     filename: "[name].css",
    //     chunkFilename: "[id].css"
    // })
    //],
};

module.exports = (env, options) => {
  let production = options.mode === 'production';
  conf.devtool = production ? false : 'source-map';
  return conf;
}