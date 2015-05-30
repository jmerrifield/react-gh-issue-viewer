var path = require('path')

module.exports = {
  entry: './client.js',
  output: {
    path: path.join(__dirname, 'server', 'build'),
    filename: 'bundle.js'
  },
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
