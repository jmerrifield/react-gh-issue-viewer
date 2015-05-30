var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './client.js',
  output: {
    path: path.join(__dirname, 'server', 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  // plugins: [
  //     new webpack.optimize.CommonsChunkPlugin('common.js')
  // ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel?stage=0'
      }
    ]
  }
}
