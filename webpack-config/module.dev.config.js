const paths = require('./base/paths.config.js');
const configModule = require('./inherit/module.config.js');

/*
  由于ExtractTextPlugin不支持热更新，因此选择在开发环境下直接用style-loader加载样式。
  如有问题，可切换回ExtractTextPlugin，即使不能用热更新，也可实现LiveReload
*/
configModule.rules.push({
	test: /\.css$/,
	exclude: /node_modules|bootstrap/,
	use: [
		{
			loader: 'style-loader',
		},
		{
			loader: 'css-loader',
		},
	],
});

configModule.rules.push({
	test: /\.css$/,
	include: /bootstrap/,
	use: [
		'style-loader', 'css-loader',
	],
});

configModule.rules.push({
	test: /\.less$/,
	include: paths.srcDir,
	use: [
		{
			loader: 'style-loader',
		},
		{
			loader: 'css-loader',
		},
		{
			loader: 'less-loader',
		},
	],
});

module.exports = configModule;
