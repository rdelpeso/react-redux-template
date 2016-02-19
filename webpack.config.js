var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'build', 'assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery'
    }
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css!' },
      { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file' },
      { test: /.jsx?$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      Assign: 'object-assign',
      jQuery: 'jquery',
      ucf: 'ucfirst',
      React: 'react',
      ReactDOM: 'react-dom'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
