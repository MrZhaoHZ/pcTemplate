/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(60);


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

	var api_path_config = __webpack_require__(4);
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

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	module.exports = {
		"api_path_1": "https://bsstest1.yyzws.com/leaf_manager_web",
		"api_path_2": "https://ssotest1.yyzws.com/leaf_sso_web",
		"link_path": "https://bsstest1.yyzws.com/leaf_manager_web/static/html/",
		"static_path": "https://statictest.yyzws.com/",
		"upload_path": "https://yiyezi.yyzws.com/in/",
		"upload_path_aly": "https://yiyezi.yyzws.com/in/",
		"upload_path_h5": "https://yiyezi.yyzws.com/ex/",
		"ueupload_path": "https://bsstest1.yyzws.com/leaf_manager_web/file/ueupload.do",
		"webupload_path": "https://bsstest1.yyzws.com/leaf_manager_web/file/upload.do",
		"wxdomain": "wxtest1.yyzws.com",
		"bssdomain": "bsstest1.yyzws.com",
		"appid": "wxe2ad70729e334402"
	}

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	function getQueryString(name) {
	    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) {
	        return unescape(r[2]);
	    }
	    return null;
	}
	exports.getQueryString = getQueryString;

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

	var self_tpl = {
		'channelListTpl': '<thead>\
								<tr>\
								  <th>渠道编码</th>\
								  <th>渠道名称</th>\
								  <th>状态</th>\
								  <th>操作</th>\
								</tr>\
							</thead>\
							<tbody>\
								{{~ it:item:index }}\
								<tr data-id="{{= item.id}}">\
								  <td>{{= item.place_code}}</td>\
								  <td>{{= item.place_name}}</td>\
								  <td>{{? item.status == 1}}启用{{?? item.status == 2}}禁用{{?}}</td>\
								  <td>\
								  <a href="channel-setting.html?id={{= item.id}}">编辑</a>\
								  -\
								  {{? item.status == 1}}\
								  <a href="javascript:void(0);" class="invalidate-btn">禁用</a>\
								  {{?? item.status == 2}}\
								  <a href="javascript:void(0);" class="validate-btn">启用</a>\
								  {{?}}\
								  </td>\
								</tr>\
								{{~}}\
							</tbody>'
		,'channelSettingTpl':'<div class="btn-group nav-select" id="nav-select">\
							  <a type="button" class="btn btn-default selected" href="javascript:void(0)">推广渠道设置</a>\
							</div>\
							<br>\
							<br>\
							<div class="setting-container">\
								<div class="form-inline">\
								  <div class="form-group">\
									<p class="form-control-static">渠道编码：</p>\
								  </div>\
								  <div class="form-group">\
									<input type="text" class="form-control" id="place_code" value="{{= it.place_code}}">\
								  </div>\
								</div>\
								<div class="form-inline">\
								  <div class="form-group">\
									<p class="form-control-static">渠道名称：</p>\
								  </div>\
								  <div class="form-group">\
									<input type="text" class="form-control" id="place_name" value="{{= it.place_name}}">\
								  </div>\
								</div>\
							</div>\
							<div class="tool">\
								<button type="button" class="btn btn-success" id="save-btn">保存</button>\
								<a href="channel-list.html" class="btn btn-default">取消</a>\
							</div>'
	};
	module.exports = self_tpl;


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

	var self_tpl = __webpack_require__(59);
	var $ajax = __webpack_require__(3);
	// var imgUpload = require('../../common/img-upload.js');
	var httpURL = __webpack_require__(6);
	var api_path_config = __webpack_require__(4);
	$(function(){
		var channelId = httpURL.getQueryString('id');
		var reqStr = null;
		if(!channelId) {
			reqStr = '/agent_purpose/add_place_source.do';
			$('#right-bar-container').show();
		} else {
			reqStr = '/agent_purpose/modify_place_source.do';
			$ajax.ajaxPost('/agent_purpose/get_place_source.do', {id: channelId}, function(data) {
				if(data.success) {
					$('#right-bar-container').html(doT.template(self_tpl.channelSettingTpl)(data.data));
					$('#right-bar-container').show();
				}
			});
		}
		
		var valiMsg = '';
		function validateForm() {
			if($('#place_code').val() === '') {
				valiMsg = '请输入渠道编码！';
				return;
			}
			if($('#place_name').val() === '') {
				valiMsg = '请输入渠道名称！';
				return;
			}
		}
		$('#right-bar-container').delegate('#save-btn','click',function(){
			valiMsg = '';
			validateForm()
			if(valiMsg) {
				layer.msg(valiMsg);
				return;
			}
			var param = {
				place_code: $('#place_code').val(),
				place_name: $('#place_name').val(),
			}
			if(channelId) {
				param.id = channelId;
			}
			$ajax.ajaxPost(reqStr, param, function(data) {
				if(data.success) {
					location.href = 'channel-list.html';
				} else {
					if(data.code === '40001'){
						layer.msg(data.msg);
					}
				}
			});
		});
	});

/***/ })

/******/ });