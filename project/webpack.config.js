const configDev = require('./config/webpack.dev.config');
const configBuild = require('./config/webpack.build.config');
const configServer = require('./config/webpack.server.config');

let config = {};

if (process.env.NODE_ENV === 'development') {
  config = configDev;
} else if (process.env.NODE_ENV === 'build') {
  config = configBuild;
} else if (process.env.NODE_ENV === 'production') {
  config = configServer;
}

module.exports = config;
