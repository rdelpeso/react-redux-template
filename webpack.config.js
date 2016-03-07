var path = require('path');
var webpack = require('webpack');

var publicPath = true ?
		"http://localhost:8080/assets/" :
		"/assets/";

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'build', 'assets'),
    filename: 'bundle.js',
    publicPath: publicPath
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css!' },
      { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file' },
      { test: /.jsx?$/, loader: 'react-hot!babel', exclude: /node_modules/ }
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
    new webpack.HotModuleReplacementPlugin()
  ]
}
