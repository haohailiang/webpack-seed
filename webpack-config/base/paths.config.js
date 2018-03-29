const path = require('path');
const configPath = {};

// 源文件目录
configPath.rootDir                = path.resolve(__dirname, '../../'); // 项目根目录
configPath.srcDir                 = path.resolve(configPath.rootDir, './src'); // 项目业务代码根目录
configPath.vendorDir              = path.resolve(configPath.rootDir, './vendor'); // 存放所有不能用npm管理的第三方库
configPath.dllDir                 = path.resolve(configPath.srcDir, './dll'); // 存放由各种不常改变的js/css打包而来的dll
configPath.pagesDir               = path.resolve(configPath.srcDir, './pages'); // 存放各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
configPath.publicResourceDir      = path.resolve(configPath.srcDir, './public-resource'); // 存放各个页面使用到的公共资源
configPath.logicDir               = path.resolve(configPath.publicResourceDir, './logic'); // 存放公用的业务逻辑
configPath.utilsDir               = path.resolve(configPath.publicResourceDir, './utils');  // 与业务逻辑无关的库都可以放到这里
configPath.configDir              = path.resolve(configPath.publicResourceDir, './config'); // 存放各种配置文件
configPath.componentsDir          = path.resolve(configPath.publicResourceDir, './components'); // 存放组件，可以是纯HTML，也可以包含js/css/image等，看自己需要
configPath.layoutDir              = path.resolve(configPath.publicResourceDir, './layout'); // 存放UI布局，组织各个组件拼起来，因应需要可以有不同的布局套路

// 生成文件目录
configPath.distDir = path.resolve(configPath.rootDir, './dist'); // 存放编译后生成的所有代码、资源（图片、字体等，虽然只是简单的从源目录迁移过来）

module.exports = configPath;
