var path = require('path');
var webpack = require('webpack');

module.exports = { //Configuration object
  devtool: 'eval', //Each module is executed with eval and sourceURL.
  entry: { //The entry point for the bundle.
    app : [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './lib/index.js'],
  },
  output: {
    path: path.join(__dirname, './public/js/'), //The output directory as absolute path (required).
    filename: `app.js`, //Specifies the name of each output file on disk
    publicPath: '/js/' //The publicPath specifies the public URL address of the output files when referenced in a browser
  },
  plugins: [ // exchanges, adds, or removes modules while an application is running without a page reload. from https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
    new webpack.HotModuleReplacementPlugin()
  ],
  node: { //Node File System (fs) module.. something to do with syncronous or asyncronous :D
    fs: "empty"
  },
  resolve: { // from https://webpack.github.io/docs/configuration.html-> Replaces modules with other modules or paths.
    alias: { // Im thinking react file paths.
      'react': path.join(__dirname, 'node_modules', 'react') //from https://nodejs.org/api/path.html, This join all arguments together and normalize the resulting path.
    },
    extensions: ['', '.js']
  },
  resolveLoader: { //Replaces modules with other modules or paths for loaders.
    'fallback': path.join(__dirname, 'node_modules') // A directory in which webpack will look for modules that were not in resolve.root or resolve.modulesDirectories.
  },
  module: {    // An array of automatically applied loaders.
    loaders: [
    {
      test: /\.js$/, // "test" is used to match the file extension - Condition that must be met. In this case JS
      loaders: ['react-hot', 'babel'], // the "loader"
      exclude: /node_modules/, /// "exclude" should be used to exclude exceptions - condition that must not be met
      include: [path.join(__dirname,'./lib')] // "include" used to match the directories -condition that must be met
    },
    {
      test: /\.xml$/, //same as above, but in this case XML files
      loader: "raw" //Custom values available in the loader context.
    },
    {
      test: /\.json$/, //same as above, but in this case JSON files
      loaders: ['json-loader']
    },
    {
      test: /\.css?$/, //same as above, but in this case css files
      loaders: ['style', 'raw'],
      include: __dirname
    }]
  }
};
