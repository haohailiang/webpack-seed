const path = require('path');
const paths = require('./base/paths.config.js');

const configResolve = {

	// 模块别名的配置，为了使用方便，一般来说所有模块都是要配置一下别名的
	alias: {
		/* 各种目录 */
		fontsDir                     : path.resolve(paths.publicResourceDir, 'fonts/'),
		configDir                    : paths.configDir,
		vendorDir                    : paths.vendorDir,

		/* vendor */
		/* bootstrap 相关 */
		metisMenu                    : path.resolve(paths.vendorDir, 'metisMenu/'),

		/* libs */
		linkPathUtilModule           : path.resolve(paths.utilsDir, 'linkPathUtil.module.js'),

		utils                        : path.resolve(paths.utilsDir, 'utils.module.js'),

		/* less */
		lessDir                      : path.resolve(paths.publicResourceDir, 'less'),

		/* components */

		/* layout */
		layout                       : path.resolve(paths.layoutDir, 'layout/html.js'),
		layoutWithoutNav             : path.resolve(paths.layoutDir, 'layout-without-nav/html.js'),

		/* logic */
		commonLogic                  : path.resolve(paths.logicDir, 'common.page.js'),

		/* config */
		devOnlineSwitchModule        : path.resolve(paths.configDir, 'devOnlineSwitch.config.js'),
	},

	// 当require的模块找不到时，尝试添加这些后缀后进行寻找
	extensions                       : ['.js', '.css', '.less'],
};

module.exports = configResolve;
