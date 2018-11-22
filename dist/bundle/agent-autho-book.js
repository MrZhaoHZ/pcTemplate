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

	module.exports = __webpack_require__(34);


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

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

	var $ajax = __webpack_require__(3);
	var httpURL = __webpack_require__(6);
	$(function() {
		var eleTpl =    '<img src="{{= it.back_picture }}" alt="" />\
						{{~ it.list:item:index }}\
							{{? it.eleType[item.type].type=="title"}}\
							<span style="position: absolute;left: {{= item.app_x }};top: {{= item.app_y }};font-family:{{= it.fontFamilyFlag[item.type_face].code }};font-size:{{= item.font_size }}px;color:{{= item.font_color }};font-weight:{{? item.is_bold==1}}bold{{?}}">\
								{{? item.type==3}}{{= it.userInfo.authorization_no}}{{?}}\
								{{? item.type==4}}{{= it.userInfo.real_name}}{{?}}\
								{{? item.type==5}}{{= it.userInfo.wechat_id}}{{?}}\
								{{? item.type==6}}{{= it.userInfo.name}}{{?}}\
								{{? item.type==7 || item.type==10}}{{= it.userInfo.grade_name}}{{?}}\
								{{? item.type==8}}{{= it.userInfo.start_time.substr(0,10)}}{{?}}\
							</span>\
							{{?}}\
							{{? it.eleType[item.type].type=="img"}}\
							<img src="{{? item.type==1}}{{= it.imge}}{{?}}{{? item.type==2}}{{= it.userInfo.pic}}{{?}}" style="position: absolute;left: {{= item.app_x }};top: {{= item.app_y }};width: {{= item.width }}px;height: {{= item.height }}px;"></img>\
							{{?}}\
						{{~}}';
		var bookTabTpl = '{{~ it:item:index }}\
							<span class="{{? index==0}}active{{?}}" data-tab="{{= item.id}}">{{= item.name}}</span>\
						  {{~}}';
		
		var eleFlag = {
			'1': {
				'type': 'img',
				'name': '二维码'
			},
			'2': {
				'type': 'img',
				'name': '图像'
			},
			'3': {
				'type': 'title',
				'name': '授权编号'
			},
			'4': {
				'type': 'title',
				'name': '姓名'
			},
			'5': {
				'type': 'title',
				'name': '微信号'
			},
			'6': {
				'type': 'title',
				'name': '微信昵称'
			},
			'7': {
				'type': 'title',
				'name': '代理级别'
			},
			'10': {
				'type': 'title',
				'name': '代理级别'
			},
			'8': {
				'type': 'title',
				'name': '授权开始时间'
			},
			'9': {
				'type': 'title',
				'name': '授权结束时间'
			}
		}
		var eleType = {
			'1': {
				'type': 'img',
			},
			'2': {
				'type': 'img',
			},
			'3': {
				'type': 'title',
			},
			'4': {
				'type': 'title',
			},
			'5': {
				'type': 'title',
			},
			'6': {
				'type': 'title',
			},
			'7': {
				'type': 'title',
			},
			'10': {
				'type': 'title',
			},
			'8': {
				'type': 'title',
			},
			'9': {
				'type': 'title',
			}
		};
		var fontFamilyFlag = {
			'1': {
				'name': '黑体',
				'code': 'SimHei'
			},
			'2': {
				'name': '黑体加粗',
				'code': 'SimHei'
			},
			'3': {
				'name': '微软雅黑',
				'code': 'Microsoft YaHei'
			},
			'4': {
				'name': '微软雅黑加粗',
				'code': 'Microsoft YaHei'
			}
		};
		var agentId = httpURL.getQueryString('agentid');
		var bookId = httpURL.getQueryString('bookid');
		var userInfo = {};
		function getAgentIndo(){
			$ajax.post('/agent/agent_list/get_cert.do',{member_id: agentId}, function(data){
				if (data.success) {
					var memberInfo = data.data.member;
					var agentInfo = data.data.agent;
					userInfo.erweima = null;
					userInfo.pic = memberInfo.portrait_uri;
					userInfo.authorization_no = agentInfo.authorization_no;
					userInfo.real_name = memberInfo.real_name;
					userInfo.wechat_id = memberInfo.wechat_id;
					userInfo.name = memberInfo.name;
					userInfo.grade_name = agentInfo.grade_name;
					userInfo.start_time = agentInfo.start_time;
					getBookDetail(bookId);
				};
			});
		}
		function getBookDetail(id) {
			$ajax.post('/agent/certificate_template/get.do',{id: id}, function(data){
				if (data.success) {
					var bookInfo = data.data;
					bookInfo.fontFamilyFlag = fontFamilyFlag;
					bookInfo.eleType = eleType;
					bookInfo.eleFlag = eleFlag;
					bookInfo.userInfo = userInfo;
					$('#book-container').html(doT.template(eleTpl)(bookInfo));
				};
			});
		}
		getAgentIndo(1);
		$('#nav').on('click','span',function(){
			if(!$(this).hasClass('active')) {
				$('#book-container').html('');
				getBookDetail($(this).data('tab'));
			}
			$(this).addClass('active').siblings('span').removeClass('active');
		});
	});



/***/ })

/******/ });