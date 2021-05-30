const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const commonPaths = require('./path');

module.exports = {
  // Webpack 4 by default has a default entry point of index.js in your src folder
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  devServer: {
    port: 3333,
    historyApiFallback: true,
    publicPath: '',
    contentBase: commonPaths.outputPath,
    hot: true
  },
  plugins: [
    // Now, every Webpack build will wipe the content of your dist/ folder
    // before creating the new dist/index.html and dist/bundle.js files from scratch.
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: commonPaths.templatePath
    })
  ]
};
