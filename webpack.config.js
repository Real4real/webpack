// Webpack v4
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const conf = {
  entry: { main: './src/index.js' },
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
            loader: 'css-loader', options: {sourceMap: true, url: false}
          },
          {
            loader: 'sass-loader', options: {sourceMap: true}
          },
          
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(
      {filename: 'style.css'}
    ),
  ]
};

module.exports = (env, options) => {
  let production = options.mode === 'production';

  conf.devtool = production ? false : 'eval-sourcemap';
  return conf;
}