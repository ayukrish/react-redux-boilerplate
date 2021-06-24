const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonPaths = require('./path');

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
                mode: (resourcePath) => {
                  if (resourcePath.includes('index.scss')) {
                    return 'global';
                  }
                  return 'local';
                },
                localIdentName: '[hash:base64:6]'
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
