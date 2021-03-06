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

	module.exports = __webpack_require__(111);


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

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 *  初始化页面顶部模块信息和侧边栏信息
	 *
	**/
	var self_tpl = __webpack_require__(112);
	var $ajax = __webpack_require__(3);
	var tmp_path_config = __webpack_require__(4);
	$(function(){
		//初始化顶部模块导航
		$ajax.get('/roleFunction/getMenu.do', {level: 1}, function(data) {
			if(data.success) {
				var activeNavId = $('input[name="nav-active"]').val();
				data.activeNavId = activeNavId;
				data.link_path = tmp_path_config.link_path;
				$('input[name="nav-active"]').before(doT.template(self_tpl.navTpl)(data));
				initAccountSetting();
				initMenu(activeNavId);
			}
		});
		//初始化用户信息栏
		function initAccountSetting() {
			// $.cookie('userName','admin');
			var userId = $.cookie('userId'),
				userName = $.cookie('userName');
			$('#account-setting').html(doT.template(self_tpl.accountSettingTpl)({userName:userName,link_path:tmp_path_config.link_path}));
			$('#account-setting').hover(function(){
				$(this).find('.dropdown').addClass('open');
			},function(){
				$(this).find('.dropdown').removeClass('open');
			});

			$('#logout').click(function(){
				$ajax.post('/logout.do', {}, function(data) {
					if(data.success) {
						$.cookie('userId', null, {path: '/'});
						$.cookie('userName', null, {path: '/'});
						location.href = '../login.html';
					}
				});
			});
		}
		//初始化侧边菜单
		function initMenu(activeNavId) {
			$ajax.get('/roleFunction/getMenu.do', {level: 2,value:activeNavId}, function(data) {
				if(data.success) {
					var activeMenuId = $('input[name="menu-active"]').val();
					if(activeMenuId == '0201') {
						activeMenuId = '0203';
					}
					data.activeMenuId = activeMenuId;
					data.link_path = tmp_path_config.link_path;
					$('#menu-container').html(doT.template(self_tpl.menuTpl)(data));
					initFooter();
				}
			});
		}

		function initFooter() {
			$('body').append(doT.template(self_tpl.footerTpl)());
		}
	});

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

	var self_tpl = {
		'navTpl':   '<nav class="navbar navbar-default navbar-fixed-top" role="navigation">\
						<div class="container">\
							<div class="navbar-header">\
								<a class="navbar-brand" href="#">微商管理</a>\
							</div>\
							<div id="navbar" class="navbar-collapse">\
								<ul class="nav navbar-nav" id="nav-container">\
									{{~ it.data:item:index }}\
										<li {{? it.activeNavId==item.id}}class="active"{{?}}><a href="{{= it.link_path }}{{= item.url }}" data-id="{{= item.id }}">{{= item.name }}</a></li>\
									{{~}}\
								</ul>\
								<ul class="nav navbar-nav navbar-right" id="account-setting">\
								</ul>\
							</div>\
						</div>\
					</nav>'
		,'accountSettingTpl': '<li class="dropdown">\
						<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-user"></i> {{= it.userName}} <span class="caret"></span></a>\
						<ul class="dropdown-menu" role="menu">\
							<li><a href="{{= it.link_path}}main/modify-pwd.html">修改密码</a></li>\
							<li class="divider"></li>\
							<li id="logout"><a href="javascript:void(0)">退出</a></li>\
						</ul>\
					</li>'
		,'menuTpl': '<ul>\
						{{~ it.data:item:index }}\
							<li {{? it.activeMenuId==item.id}}class="active"{{?}}><a href="{{= it.link_path }}{{= item.url }}" data-id="{{= item.id }}">{{= item.name }}</a></li>\
						{{~}}\
					</ul>'
		,'footerTpl':   '<footer class="page-footer">\
							<div class="container">\
								Copyright © 2016 XXX微商 浙ICP备XXXXXXXX号\
							</div>\
						</footer>'
	};
	module.exports = self_tpl;



/***/ })

/******/ });