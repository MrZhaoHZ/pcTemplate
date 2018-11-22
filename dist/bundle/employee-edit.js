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

	module.exports = __webpack_require__(90);


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

/***/ 89:
/***/ (function(module, exports) {

	var self_tpl = {
		'empTpl':   '<div class="btn-group dep-heaer">\
						<button type="button" class="btn btn-default selected">{{? it.type=="edit"}}编辑员工{{??}}新建员工{{?}}</button>\
					</div>\
					<div class="dep-info">\
						<form class="form-horizontal" dep="form">\
						  <div class="form-group">\
							<label for="dep-name" class="col-sm-2 control-label">姓名：</label>\
							<div class="col-sm-4">\
							  <input type="email" class="form-control" id="name" placeholder="请填写姓名" value="{{? it.name}}{{= it.name}}{{?}}">\
							</div>\
						  </div>\
						  <div class="form-group">\
							<label for="dep-name" class="col-sm-2 control-label">性别：</label>\
							<div class="col-sm-4">\
								<label class="radio-inline">\
								  	<input type="radio" name="empSex" value="nan" {{? it.gender&&it.gender=="nan"}}checked{{?}}{{? !it.gender}}checked{{?}}> 男\
								</label>\
								<label class="radio-inline"> \
								  <input type="radio" name="empSex" value="nv" {{? it.gender&&it.gender=="nv"}}checked{{?}}> 女\
								</label>\
							</div>\
						  </div>\
						  <div class="form-group">\
							<label for="dep-name" class="col-sm-2 control-label">年龄：</label>\
							<div class="col-sm-4">\
							  <input type="email" class="form-control" id="age" placeholder="请填写年龄" value="{{? it.age}}{{= it.age}}{{?}}">\
							</div>\
						  </div>\
						  <div class="form-group">\
							<label for="dep-name" class="col-sm-2 control-label">手机号：</label>\
							<div class="col-sm-4">\
							  <input type="email" class="form-control" id="mobile" placeholder="请填写手机号" value="{{? it.mobile}}{{= it.mobile}}{{?}}">\
							</div>\
						  </div>\
						  <div class="form-group">\
							<label for="dep-name" class="col-sm-2 control-label">部门：</label>\
							<div class="col-sm-4">\
								<select class="form-control" id="depSelect">\
								  {{? it.empInfo&&it.depInfo}}\
								  	{{~ it.depInfo:item:index }}\
									  <option value="{{= item.id}}" {{? it.empInfo.depId==item.id}}selected{{?}}>{{= item.name}}</option>\
								  	{{~}}\
								  {{?}}\
								  {{? !it.empInfo&&it.depInfo}}\
								  	{{~ it.depInfo:item:index }}\
									  <option value="{{= item.id}}">{{= item.name}}</option>\
								  	{{~}}\
								  {{?}}\
								</select>\
							</div>\
						  </div>\
						  <div class="form-group">\
							<label for="dep-name" class="col-sm-2 control-label">用户：</label>\
							<div class="col-sm-4">\
								<select class="form-control" id="userSelect">\
								  {{? it.empInfo&&it.userInfo}}\
								  	{{~ it.userInfo:item:index }}\
									  <option value="{{= item.id}}" {{? it.empInfo.userId==item.id}}selected{{?}}>{{= item.name}}</option>\
								  	{{~}}\
								  {{?}}\
								  {{? !it.empInfo&&it.userInfo}}\
								  	{{~ it.userInfo:item:index }}\
									  <option value="{{= item.id}}">{{= item.name}}</option>\
								  	{{~}}\
								  {{?}}\
								</select>\
							</div>\
						  </div>\
						  <div class="form-group">\
						  	<label for="dep-name" class="col-sm-2 control-label"></label>\
						  	<div class="col-sm-4">\
						  		<button type="button" class="btn btn-default" id="save-emp" style="margin:0 5px;">保存</button>\
								<button type="button" class="btn btn-warning" id="delete-emp" style="margin:0 5px;display:none;">删除</button>\
								<button type="button" class="btn btn-success" id="cancel-save-emp">取消</button>\
						  	</div>\
						  </div>\
						</form>\
					</div>'
		,'depOptionTpl': '{{~ it:item:index }}\
						  <option value="{{= item.id}}" {{? it.depId==item.id}}selected{{?}}>{{= item.department_name}}</option>\
					  	 {{~}}'
		,'userOptionTpl': '{{~ it:item:index }}\
						  <option value="{{= item.id}}" {{? it.userId==item.id}}selected{{?}}>{{= item.login_name}}</option>\
					  	 {{~}}'
		,'empListTpl': '{{~ it:item:index }}\
						  <tr data-id="{{= item.id}}">\
						  <td style="display:none;"><input type="checkbox" name="selectItem"></td>\
						  <td>{{= item.name}}</td>\
						  <td>{{? item.gender=="nv"}}女{{?? item.gender=="nan"}}男{{?}}</td>\
						  <td>{{= item.age}}</td>\
						  <td>{{= item.mobile}}</td>\
						  <td>{{= item.employee_department_d_t_os[0].department_name}}</td>\
						  <td>{{= item.user_name}}</td>\
						  <td><a href="employee.html?id={{= item.id}}">编辑</a>&nbsp;<a href="javascript:void(0)" class="delete-btn">删除</a></td>\
						</tr>\
					  	 {{~}}'
	};
	module.exports = self_tpl;


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

	var self_tpl = __webpack_require__(89);
	var httpURL = __webpack_require__(6);
	var $ajax = __webpack_require__(3);
	$(function() {
		var type = httpURL.getQueryString('type');
		var empId = httpURL.getQueryString('id');
		if(type === 'edit') {
			$('.list-group').hide();
			$('.edit-group').show();
			$ajax.ajaxPost('/getEmpInfo.do', {id: empId}, function(data) {
				data.data.type = "edit";
				$('#edit-area').html(doT.template(self_tpl.empTpl)(data.data))
			})
		} else {
			// var setting = {
			// 	check: {
			// 		enable: false
			// 	},
			// 	data: {
			// 		simpleData: {
			// 			enable: true
			// 		}
			// 	}
			// };
			// $.post('/getDepartment.do', {}, function(data) {
			// 	$.fn.zTree.init($("#depTree"), setting, data.data.list);
			// });
			$('.edit-group').toggle();
			$.post('/getDepUserInfo.do', {}, function(data) {
				$('#edit-area').html(doT.template(self_tpl.empTpl)(data.data))
			});
		}



		$('#edit-area').delegate('#cancel-save-dep','click',function(){
			location.href = 'employee-list.html';
		});

		$('#edit-area').delegate('#save-dep','click',function(){
			var param = {
				id: $('#dep-id').val(),
				name: $('#dep-name').val(),
				sex: $('input[name="empSex"]:checked').val(),
				depId: $('#depSelect option:checked').val(),
				userId: $('#userSelect option:checked').val()
			}
			$.post('/saveDepInfo.do', param, function(data) {
				if(data.isSuccess) {
					location.href = 'employee-list.html';
				} else {
					layer.msg(data.msg);
				}
			});
		});

		// $('#add-btn').click(function(){
		// 	$('.list-group').toggle();
		// 	$('.edit-group').toggle();
		// 	$.post('/getDepUserInfo.do', {}, function(data) {
		// 		$('#edit-area').html(doT.template(self_tpl.empTpl)(data.data))
		// 	});
		// });
	});


/***/ })

/******/ });