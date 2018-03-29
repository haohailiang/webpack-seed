const path = require('path');
const paths = require('./base/paths.config.js');
const pagePathsArray = require('./base/page-paths-array.config.js');
const configEntry = {};

pagePathsArray.forEach((pagePath) => {
	configEntry[pagePath] = path.resolve(paths.pagesDir, pagePath + '/page.js');
});

module.exports = configEntry;

// configEntry
// {
// 	"alert/index":"/Users/haohailiang/Desktop/webpack-seed/src/pages/alert/index/page",
// 	"index/index":"/Users/haohailiang/Desktop/webpack-seed/src/pages/index/index/page",
// 	"index/login":"/Users/haohailiang/Desktop/webpack-seed/src/pages/index/login/page",
// 	"user/edit-password":"/Users/haohailiang/Desktop/webpack-seed/src/pages/user/edit-password/page",
// 	"user/modify-info":"/Users/haohailiang/Desktop/webpack-seed/src/pages/user/modify-info/page"
// }