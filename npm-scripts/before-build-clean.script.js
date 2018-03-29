const fs = require('fs');
const rimraf = require('rimraf');
const paths = require('../webpack-config/base/paths.config.js');

rimraf(paths.distDir, fs, function cleanDist() {
	console.log('dist目录已清空');
});

// 清空编译目录