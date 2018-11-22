//静态文件
var beta_path = '';
var config = {
    'tpl_config': {
        "root": "./src/tpl/", // tpl root 
        "encoding": "utf-8",
        "macro": "./src/tpl/global-macro/macro.vm", //global macro defined file
        "globalMacroPath": "./src/tpl/global-macro",
        "dataPath": "./src/data/" // test data root path
    },
    'html_output': './dist/html/',
    'jsp_output': './dist/html/',
    'view_config': {
        "root": "./src/view/"
    },
    'version': '2.0.32',
    'static_path': 'http://192.168.8.164:3000',
    'jsp_code': '<%@ page contentType="text/html;charset=UTF-8" %>\n<!DOCTYPE html>'
};
module.exports = config;