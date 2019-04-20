/* eslint-disable */ 
const nodeConfig = require('./webpack.node.config');
const browserConfig = require('./webpack.web.config');

module.exports = [nodeConfig, browserConfig]