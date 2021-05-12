const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

/* eslint-disable no-plusplus */
function generateRandomClassNames(charLength, current = '') {
  let length = charLength;
  return length
    ? generateRandomClassNames(
        --length,
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.charAt(
          Math.floor(Math.random() * 60)
        ) + current
      )
    : current;
}

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
              modules: {
                // localIdentName: '[local]'
                getLocalIdent: (context, localIdentName, localName) => {
                  const fileName = path.basename(context.resourcePath);
                  if (fileName.indexOf('index.scss') !== -1) {
                    return localName;
                  }
                  // return localName;
                  return generateRandomClassNames(4);
                }
              }
            }
          },
          {
            loader: 'sass-loader'
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
