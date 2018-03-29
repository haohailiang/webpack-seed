const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const paths = require('../base/paths.config.js');
const pagePathsArray = require('../base/page-paths-array.config.js');
const HashOutput = require('webpack-plugin-hash-output');

const configPlugins = [

	/* 全局shimming */
	new webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery',
		'window.jQuery': 'jquery',
		'window.$': 'jquery',
	}),

	/* 抽取出所有通用的部分 */
	new webpack.optimize.CommonsChunkPlugin({
		name: 'commons/commons',      // 需要注意的是，chunk的name不能相同！！！
		filename: '[name]/bundle.[chunkhash].js',
		minChunks: 4,
	}),

	/* 抽取出webpack的runtime代码()，避免稍微修改一下入口文件就会改动commonChunk，导致原本有效的浏览器缓存失效 */
	new webpack.optimize.CommonsChunkPlugin({
		name: 'webpack-runtime',
		filename: 'commons/commons/webpack-runtime.[hash].js',
	}),

	/* 抽取出chunk的css */
	new ExtractTextPlugin('[name]/styles.[contenthash].css'),

	/* 配置好Dll */
	// new webpack.DllReferencePlugin({
	// 	context: paths.rootDir, // 指定一个路径作为上下文环境，需要与DllPlugin的context参数保持一致，建议统一设置为项目根目录
	// 	manifest: require('../../manifest.json'), // 指定manifest.json
	// 	name: 'dll',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
	// }),
	
	new HashOutput({
		manifestFiles: 'webpack-runtime', // 指定包含 manifest 在内的 chunk
	}),
];

pagePathsArray.forEach((page) => {
	const htmlPlugin = new HtmlWebpackPlugin({
		filename: `${page}/page.html`,
		template: path.resolve(paths.pagesDir, `./${page}/html.js`),
		chunks: ['webpack-runtime', page, 'commons/commons'],
		hash: true, // 为静态资源生成hash值
		xhtml: true,
	});
	configPlugins.push(htmlPlugin);
});

module.exports = configPlugins;
