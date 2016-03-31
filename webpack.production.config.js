var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: { //The entry point for the bundle.
    app : [
      './lib/index.js'],
  },
  output: { //Same as in the webpack.js.config file
    path: path.join(__dirname, './public/js/'), /
    filename: `app.js`, 
    publicPath: '/js/'
  },
  plugins: [ //Add additional plugins to the compiler. Found this info at https://webpack.github.io/docs/plugins.html
    new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({ //to safe space and make this file more efficient, it is ok that humans cannot read it
    }),
  ],
  node: { //the rest is the same as the other file.
    fs: "empty"
  },
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js']
  },
  resolveLoader: {
    'fallback': path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
      include: [path.join(__dirname,'./lib')]
    },
    {
      test: /\.xml$/,
      loader: "raw"
    },
    {
      test: /\.json$/,
      loaders: ['json-loader']
    },
    {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }]
  }
};
