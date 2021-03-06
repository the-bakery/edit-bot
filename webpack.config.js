const webpack = require('webpack');

const usePlugins = true;
var PLUGINS = [];
if (usePlugins) {
  PLUGINS.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }));
  PLUGINS.push(new webpack.optimize.UglifyJsPlugin({
    mangle: {
      except: ['$super', '$', 'exports', 'require']
    },
    sourcemap: false
  }));
}

module.exports = {
  entry: ['./client/src/index'],
  output: {
    filename: 'bundle.js',
    path: './client/build',
    publicPath: '/client',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
      }
    ],
  },
  plugins: PLUGINS
};
