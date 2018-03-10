const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: slsw.lib.entries,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  target: 'node',
  externals: [
    nodeExternals(),
    function(context, request, callback) {
      if (/compiled/.test(request)) {
        return callback(null, true);
      }
      callback();
    }
  ],
  plugins: [
    new CopyWebpackPlugin([{ from: 'compiled/sharp', to: 'compiled/sharp' }])
  ],
  module: {
    rules: [{ test: /\.ts(x?)$/, loader: 'ts-loader' }]
  }
};
