module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
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
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[local]'
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};
