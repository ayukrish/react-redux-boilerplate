const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  mode: 'production',
  module: {
    rules: [
      // node-sass provides binding for Node.js to LibSass, a Sass compiler.
      // sass-loader is a loader for Webpack for compiling SCSS/Sass files.
      // style-loader injects our styles into our DOM.
      // css-loader interprets @import and @url() and resolves them.
      // mini-css-extract-plugin extracts our CSS out of the JavaScript bundle into a separate file, essential for production builds.
      {
        test: /\.s(a|c)ss$/,
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ]
};
