var path = require('path'),
  CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var entry = {
  index: './web/js/app.js'
};

var output = {
  path: path.join(__dirname, '../public/js'),
  filename: 'bundle.[name].js'
};

var plugins = [
  new CommonsChunkPlugin("common.js") // Helps identify common parts of a require hierarchy
];

var webpackModules = {
  loaders: [
    { jsx: /\.js$/, loader: 'jsx-loader' } // loaders can take parameters as a querystring
  ]
};

module.exports = {
  dev: {
    entry: entry,
    output: output,
    plugins: plugins,
    module: webpackModules,

    // Configure the console output
    stats: {
      colors: true,
      modules: true,
      reasons: true
    },
    progress: true,
    keepalive: true,
    watch: true,
    devtool: 'source-map',
    bail: true,
    watchDelay: 3000
  },

  // Exclude any dev like configuration for any production like env
  build: {
    entry: entry,
    output: output,
    plugins: plugins,
    module: webpackModules
  }
};
