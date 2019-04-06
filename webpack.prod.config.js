/* eslint-disable */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const libraryName = 'bundle';
const outputFileName = `${libraryName}.js`;
 
module.exports = (env) => ({
  mode: env && env.mode ? env : 'development',
  node: {
    __dirname: false,
  },
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFileName,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname),
    }
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env'              
            ],                                               
          ],
          plugins: [
            [
              require('@babel/plugin-transform-runtime')
            ]
          ]
        },
      }
    ]
  }
});