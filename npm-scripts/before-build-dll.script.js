const fs = require('fs');
const rimraf = require('rimraf');
const paths = require('../webpack-config/base/paths.config.js');

rimraf(paths.dllDir, fs, function cleanDll() {
  console.log('dll目录已清空');
});
