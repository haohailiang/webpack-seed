const path = require('path');
const paths = require('../base/paths.config.js');

module.exports = {
	configFile: path.resolve(paths.rootDir, './.eslintrc.js'),
	failOnWarning: true,
	failOnError: true,
	cache: true,
};
