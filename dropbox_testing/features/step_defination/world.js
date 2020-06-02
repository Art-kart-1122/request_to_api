const Dropbox = require('./../../src/DropboxAgentApi');
const config = require('config');

module.exports = new Dropbox(config.get('token'));