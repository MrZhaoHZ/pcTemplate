var api_path_config = require('../../../tmp_path_config.js');
function redirectURL() {
	location.href = 'http://' + api_path_config.bssdomain + '/leaf_manager_web/static/html/login.html';
}
function ajaxPost(url,param,callback) {
	$.post(api_path_config.api_path_1 + url,param,function(data){
		// if(data.isLogin) {
			// if(typeof data != 'object') {
			// 	callback(JSON.parse(data));
			// } else {
			// 	callback(data);
			// }
		// } else {
			// redirectURL();
		// }
		loginJudge(data, callback);
	});
}

function ajaxGet(url,param,callback) {
	$.get(api_path_config.api_path_1 + url,param,function(data){
		// if(data.isLogin) {
			// if(typeof data != 'object') {
			// 	callback(JSON.parse(data));
			// } else {
			// 	callback(data);
			// }
		// } else {
			
		// }
		loginJudge(data, callback);
	});
}


function ajaxPost4Autho(url,param,callback) {
	$.post(api_path_config.api_path_2 + url,param,function(data){
		// if(data.isLogin) {
			// if(typeof data != 'object') {
			// 	callback(JSON.parse(data));
			// } else {
			// 	callback(data);
			// }
		// } else {
			// redirectURL();
		// }
		loginJudge(data, callback);
	});
}
function ajaxGet4Autho(url,param,callback) {
	$.get(api_path_config.api_path_2 + url,param,function(data){
		// if(data.isLogin) {
			// if(typeof data != 'object') {
			// 	callback(JSON.parse(data));
			// } else {
			// 	callback(data);
			// }
		// } else {
			// redirectURL();
		// }
		loginJudge(data, callback);
	});
}
//登录跨域ajax跳转
function ajaxGet4AuthoCR(url,param,callback) {
	$.ajax({
        type: "get",
        data: param,
        url: api_path_config.api_path_2 + url,
        xhrFields:{
	      withCredentials: true
	    },
        success: function(data) {
   //      	if(typeof data != 'object') {
			// 	callback(JSON.parse(data));
			// } else {
			// 	callback(data);
			// }
			loginJudge(data, callback);
        }
    });
}
function getValicode(url) {
	return api_path_config.api_path_2 + url;
}

//登录拦截 权限拦截
function loginJudge(data, callback) {
	if(typeof data != 'object') {
		var data = JSON.parse(data);
		if(data.code === '40002') {
			redirectURL();
		} else if(data.code === '40003') {
			layer.msg(data.msg);
		} else {
			callback(data);
		}
	} else {
		if(data.code === '40002') {
			redirectURL();
		} else if(data.code === '40003') {
			layer.msg(data.msg);
		} else {
			callback(data);
		}
	}
}
exports.ajaxPost = ajaxPost;
exports.ajaxGet = ajaxGet;
exports.post = ajaxPost;
exports.get = ajaxGet;
exports.ajaxPost4Autho = ajaxPost4Autho;
exports.ajaxGet4Autho = ajaxGet4Autho;
exports.getValicode = getValicode;
exports.ajaxGet4AuthoCR = ajaxGet4AuthoCR;