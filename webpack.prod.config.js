require('./npm-scripts/before-build-clean.script');

const configProd = {
	entry           : require('./webpack-config/entry.config.js'),
	output          : require('./webpack-config/output.config.js'),
	module          : require('./webpack-config/module.prod.config.js'),
	resolve         : require('./webpack-config/resolve.config.js'),
	plugins         : require('./webpack-config/plugins.prod.config.js'),
	externals       : require('./webpack-config/externals.config.js'),
};

module.exports = configProd;