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

	module.exports = __webpack_require__(126);


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

/***/ 13:
/***/ (function(module, exports) {

	function setItem(item, obj) {
		localStorage.setItem(item, JSON.stringify(obj));
	}

	function getItem(item) {
		return JSON.parse(localStorage.getItem(item));
	}

	function removeItem(item){
		localStorage.removeItem(item);
	}

	exports.setItem = setItem;
	exports.removeItem = removeItem;
	exports.getItem = getItem;

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

	var localStorage = __webpack_require__(13);
	//系统管理员
	function isSysAdmin() {
		var isSuperAdmin = false;
		var roleIdList = localStorage.getItem('roleIdList');
		// for(var i=0;i<roleIdList.length;i++){
		// 	if(roleIdList[i].role_id == '1') {
		// 		isSuperAdmin = true;
		// 		break;
		// 	}
		// }
		if (roleIdList.role_id == '1'){
			isSuperAdmin = true;
		}
		return isSuperAdmin;
	}

	//业务管理员
	function isBusiAdmin() {
		var isBusiAdmin = false;
		var roleIdList = localStorage.getItem('roleIdList');
		if (roleIdList.role_id == '2') {
			isBusiAdmin = true;
		}
		// for(var i=0;i<roleIdList.length;i++){
		// 	if(roleIdList[i].role_id == '2') {
		// 		isBusiAdmin = true;
		// 		break;
		// 	}
		// }
		return isBusiAdmin;
	}
	module.exports = {
		isSysAdmin: isSysAdmin,
		isBusiAdmin: isBusiAdmin
	};

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

	var $ajax = __webpack_require__(3);
	// var httpURL = require('../../common/http-url.js');
	var roleModule = __webpack_require__(123);
	var self_tpl = __webpack_require__(127);
	$(function() {
		// $.cookie("userRole","1");
		// console.log('isSysAdmin:' + roleModule.isSysAdmin());
		if(roleModule.isSysAdmin()){
			$('#create-user').show();
		}
		var parm = {
			login_name: "",
			// name: "",
			status: ""
		};
		getData(1);

		function getData(pagenumber) {
			parm.login_name = $("#user-account").val().trim();
			// parm.name = $("#user-name").val().trim();
			parm.status = $("#user-statu").val();
			$ajax.post('/user/list.do', {
				login_name: parm.login_name,
				// name: parm.name,
				status: parm.status
			},
			function(data) {
				if(data.success) {
					data.isSysAdmin = roleModule.isSysAdmin();
					data.isBusiAdmin = roleModule.isBusiAdmin();
					$('#table-body').html(doT.template(self_tpl.managementListTpl)(data));
				}
			});
		};

		function PageClick(pageclickednumber) {
			getData(pageclickednumber);
		};

		$("#searcher").click(function() {
			getData(1);
		});
		$("#user-statu").change(function() {
			getData(1);
		});
		$("#table-body").on("click", ".user-enable", function() {
			var id = $(this).attr("data-id");
			var enable = $(this).attr("data-status");
			var msg = (enable == 0) ? "确定要启用该帐号吗" : "确定要禁用该帐号吗?";
			var reqStr = (enable == 0) ? "/user/enabled.do" : "/user/disable.do";
			var layerMsg = (enable == 0) ? "启用帐号成功" : "禁用帐号成功";

			//询问框
			layer.confirm(msg, {
				btn: ['确定', '取消'] //按钮
			}, function(index) {
				$ajax.post(reqStr, {user_id: id},function(data) {
					if(data.success) {
						layer.msg(layerMsg);
						getData(1);
					}
				});
			});
		});
		// 重置密码
		$("#table-body").on("click", ".reset_pwd", function() {
			var id = $(this).attr("data-id");
			layer.confirm('确定要重置本账号密码吗？', {
				btn: ['确定', '取消'] //按钮
			}, function(index) {
				$ajax.post('/user/resetPW.do', {user_id: id}, function(data) {
					layer.msg("密码重置成功！");
				});
			});
		});
		// $("#table-body").on("click", "#user-dele", function() {
		// 	var id = $(this).attr("data-id");
		// 	var enable = $(this).attr("data-status");
		// 	//询问框
		// 	layer.confirm('确定要删除该管理帐号吗？', {
		// 		btn: ['确定', '取消'] //按钮
		// 	}, function(index) {
		// 		$.post('', {}, function(data) {

		// 		});
		// 	});
		// });

	});

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

	var self_tpl = {
		'managementListTpl': '{{~ it.data:item:index }}\
						<tr>\
							<td>{{= item.login_name}}</td>\
							<td>\
								{{? item.user_type == 1}}\
									业务管理员\
								{{?? item.user_type == 2}}\
									普通操作员\
								{{? }}\
							</td>\
						    <td style="display:none;">{{? item.role}}{{= item.role}}{{?}}</td>\
						    <td>{{= item.create_date}}</td>\
						    <td>\
								{{? item.status == 1}}\
									<span>正常</span>\
								{{?? item.status == 0}}\
									<span class="color-red">禁用</span>\
								{{? }}\
							</td>\
							<td>\
								{{? it.isSysAdmin }}\
								<a data-id="{{= item.id}}" class="user-enable" data-status="{{= item.status}}">\
									{{? item.status == 1}}禁用\
									{{?? item.status == 0}}启用\
									{{? }}\
								</a>\
								<a href="user-management-setting.html?id={{= item.id}}">&nbsp;编辑</a>\
								{{?}}\
								{{? it.isBusiAdmin }}\
								<a href="user-management-setting.html?id={{= item.id}}">&nbsp;角色设置</a>\
								{{?}}\
								<a data-id="{{= item.id}}" id="user-dele" style="display:none;">&nbsp;删除</a>\
								{{? it.isSysAdmin }}\
								<a data-id="{{= item.id}}" class="reset_pwd">&nbsp;&nbsp;重置密码</a>\
								{{?}}\
							</td>\
						</tr>\
					{{~}}',
		'managementLogTpl': '{{~ it:item:index }}\
						<tr>\
							<td>{{= item.name}}</td>\
							<td>{{= item.action}}</td>\
						    <td>\
								{{? item.status == 0}}\
									<a>成功</a>\
								{{?? item.status == 1}}\
									<a class="color-red">失败</a>\
								{{? }}\
							</td>\
							<td>{{= item.time}}</td>\
						</tr>\
					{{~}}',
		'managementBtnTpl': '<div>\
								<button type="button" class="btn btn-success add-user" id="add-user"><a class="link" href="user-management-new.html" style="color: white">+添加管理员</a></button>\
							</div>'
		,'userEditTpl': '<div>\
							<form class="container-left">\
							<div class="user-input user-hidden">\
								<span class="text-input">用户名：</span>\
								<input class="form-control input-content" id="user-name" value="{{= it.login_name}}" disabled>\
							</div>\
							<div class="user-input user-hidden" style="display:none;">\
								<span class="text-input">密码：</span>\
								<input type="password" class="form-control input-content" id="user-pwd" value="************" disabled>\
							</div>\
							<div class="user-input user-hidden" style="display:none;">\
								<span class="text-input">确认密码</span>\
								<input class="form-control input-content" id="user-conf-pwd">\
							</div>\
							{{? it.isBusiAdmin }}\
							<div class="user-input" id="role-tree-form">\
								<span class="text-input">角色：</span>\
								<div id="role-choise" class="role-choise ztree "></div>\
							</div>\
							{{?}}\
							{{? it.isSysAdmin }}\
							<div class="user-input">\
								<span class="text-input">用户类型：</span>\
								<label style="margin: 0 15px;">\
								    <input type="radio" class="radio-iput" name="user-type" value="1" {{? it.user_type==1}}checked{{?}}>业务管理员\
								</label>\
								<label>\
								    <input type="radio" class="radio-iput" name="user-type" value="2" {{? it.user_type==2}}checked{{?}}>普通操作员\
								</label>\
							</div>\
							{{?}}\
						</form>\
					</div>'
	};
	module.exports = self_tpl;


/***/ })

/******/ });