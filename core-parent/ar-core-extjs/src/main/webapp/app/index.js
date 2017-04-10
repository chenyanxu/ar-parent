var Ext;
DynamicLoading.css(rootPath+'/resources/ar-all.css');
DynamicLoading.js('/extjs62/classic/ext-all.js');
CONFIG.restRoot=rootPath;
var intervalObj = setInterval(function () {
  if (Ext) {
    clearInterval(intervalObj);
    DynamicLoading.js('/extjs62/classic/locale/locale-zh_CN.js');
    DynamicLoading.js(rootPath + '/app/app.js');
  }
}, 50);