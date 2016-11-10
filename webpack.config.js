const path = require('path');
const webpack = require('webpack');
const BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');

// env
const buildDirectory = './public/';

module.exports = {
  externals: {
    'cheerio': 'window',
    'react/src/ExecutionEnvironment': true,
    'react/src/ReactContext': true,
  },
  entry: './src/entry.jsx',
  devServer: {
    hot: true,
    inline: true,
    port: 1337,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(buildDirectory),
    filename: 'bundle.js',
    publicPath: 'http://localhost:1337/public',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
      },
    }],
  },
  "babel": {
    "presets": [
      "es2015"
    ]
  },
  plugins: [
    new BellOnBundlerErrorPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
  ],
};
