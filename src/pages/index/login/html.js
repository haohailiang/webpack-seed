const config         = require('devOnlineSwitchModule');
const noJquery       = require('linkPathUtilModule');
const content        = require('./templates/main.ejs');
const layout         = require('layoutWithoutNav');
const dirsConfig     = config.DIRS;

const loginBoxHtml = require('./templates/login-box.ejs')({
  constructInsideUrl: noJquery.constructInsideUrl,
});
const forgetPasswordHtml = require('./templates/forget-password-box.html');
const renderData = Object.assign({}, dirsConfig, { loginBoxHtml, forgetPasswordHtml });

module.exports = layout.init({
  pageTitle: '',
}).run(content(renderData));
