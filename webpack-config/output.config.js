const paths = require('./base/paths.config.js');

const configOutput = {
	path: paths.distDir,
	publicPath: '/',
	filename: '[name]/entry.[chunkhash].js',    // [name]表示entry每一项中的key，用以批量指定生成后文件的名称
	chunkFilename: '[id].[chunkhash].bundle.js',
};

module.exports = configOutput;

// globInstance.found 为name的值数组
// [
// 	"alert/index",
// 	"index/index",
// 	"index/login",
// 	"user/edit-password",
// 	"user/modify-info"
// ]