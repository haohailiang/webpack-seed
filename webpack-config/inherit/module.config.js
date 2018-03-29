const paths = require('../base/paths.config.js');
// const eslintFormatter = require('eslint-friendly-formatter');

const configModule = {
	rules: [
		// {
		// 	test: /\.js$/,
		// 	enforce: 'pre',
		// 	loader: 'eslint-loader',
		// 	include: paths.srcDir,
		// 	exclude: /bootstrap/,
		// 	options: {
		// 		formatter: eslintFormatter,
		// 		fix: true,
		// 	},
		// },
		{
			test: /\.js$/,
			include: paths.srcDir,
			loader: 'babel-loader',
			options: {
				presets: [['es2015', { loose: true }]],
				cacheDirectory: true,
				plugins: ['transform-runtime'],
			},
		},
		{
			test: /\.html$/,
			include: paths.srcDir,
			loader: 'html-loader',
		},
		{
			test: /\.ejs$/,
			include: paths.srcDir,
			loader: 'ejs-loader',
		},
		{
			// 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
			// 如下配置，将小于8192byte的图片转成base64码
			test: /\.(png|jpg|gif)\??.*$/,
			include: paths.srcDir,
			// loader: 'url-loader?limit=8192&name=./static/img/[hash].[ext]',
			loader: 'url-loader',
			options: {
				limit: 8192,
				name: './static/images/[hash].[ext]',
			},
		},
		{
			// 专供bootstrap方案使用的，忽略bootstrap自带的字体文件
			test: /\.(woff|woff2|svg|eot|ttf)$/,
			include: /glyphicons/,
			loader: 'null-loader',
		},
		{
			// 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
			test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
			include: paths.srcDir,
			// exclude: /glyphicons/,
			// loader: 'file-loader?name=static/fonts/[name].[ext]',
			loader: 'file-loader',
			options: {
				name: 'static/fonts/[name].[hash].[ext]',
			},
		},
	],
};

module.exports = configModule;