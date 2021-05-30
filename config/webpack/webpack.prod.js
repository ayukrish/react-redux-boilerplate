const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const commonPaths = require('./path');

/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
function generateRandomClassNames(length, current = '') {
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
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: commonPaths.outputPath
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                // mode: 'local',
                // localIdentName: '[hash:base64:5]',
                getLocalIdent: (context, localIdentName, localName) => {
                  const fileName = path.basename(context.resourcePath);
                  if (fileName.indexOf('index.scss') !== -1) {
                    return localName;
                  }
                  return `_${generateRandomClassNames(4)}`;
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
