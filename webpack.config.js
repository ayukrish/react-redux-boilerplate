const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const isDevelopment = true;
module.exports = {
  // Webpack 4 by default has a default entry point of index.js in your src folder
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      },
      // node-sass provides binding for Node.js to LibSass, a Sass compiler.
      // sass-loader is a loader for Webpack for compiling SCSS/Sass files.
      // style-loader injects our styles into our DOM.
      // css-loader interprets @import and @url() and resolves them.
      // mini-css-extract-plugin extracts our CSS out of the JavaScript bundle into a separate file, essential for production builds.
      {
        test: /\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss']
  },
  devServer: {
    port: 3333,
    historyApiFallback: true,
    publicPath: '',
    contentBase: './dist',
    hot: true
  },
  plugins: [
    // Now, every Webpack build will wipe the content of your dist/ folder
    // before creating the new dist/index.html and dist/bundle.js files from scratch.
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ]
};
