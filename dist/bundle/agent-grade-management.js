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

	module.exports = __webpack_require__(40);


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

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

	var self_tpl = __webpack_require__(41);
	var $ajax = __webpack_require__(3);
	$(function(){
		$ajax.ajaxPost('/agent/agent_grade/list.do', null, function(data) {
			$('#right-bar-container table').html(doT.template(self_tpl.gradeListTpl)(data.data))
		});
		$('#right-bar-container').delegate('#tips-close','click',function(){
			$(this).closest('.tips').remove();
		});
	});

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

	var self_tpl = {
		'gradeListTpl': '<thead>\
								<tr>\
								  <th>名称</th>\
								  <th>授权金额</th>\
								  <th>所属级别</th>\
								  <th>状态</th>\
								  <th>操作时间</th>\
								  <th>操作</th>\
								</tr>\
							</thead>\
							<tbody>\
								{{~ it:item:index }}\
								<tr>\
								  <td>{{= item.name}}</td>\
								  <td>{{= item.auth_amount_str}}</td>\
								  <td>{{? item.parent_grade_name}}{{= item.parent_grade_name}}{{??}}平台{{?}}</td>\
								  <td>\
								  {{? item.status == 0}}<span class="valid">启用</span>{{?}}\
								  {{? item.status == 1}}<span class="invalid">禁用</span>{{?}}\
								  </td>\
								  <td>{{= item.update_date}}</td>\
								  <td><a href="agent-grade-setting.html?id={{= item.id}}">修改</a></td>\
								</tr>\
								{{~}}\
							</tbody>'
		,'gradeSettingTpl':'<div class="tips">特别注意：添加等级请先从高级往低级添加。<span id="tips-close">×</span></div>\
							<div class="btn-group nav-select" id="nav-select">\
							  <a type="button" class="btn btn-default selected" href="javascript:void(0)">级别设置</a>\
							</div>\
							<br>\
							<br>\
							<div class="setting-container">\
								<div class="form-inline">\
								  <div class="form-group">\
									<p class="form-control-static">名称：</p>\
								  </div>\
								  <div class="form-group">\
									<input type="text" class="form-control" id="level_name" value="{{= it.name}}">\
								  </div>\
								</div>\
								<div class="form-inline">\
								  <div class="form-group">\
									<p class="form-control-static">授权金额：</p>\
								  </div>\
								  <div class="form-group">\
									<input type="text" class="form-control" id="auth_amount" value="{{= it.auth_amount_str}}">\
								  </div>\
								</div>\
								<div class="form-inline">\
								  <div class="form-group">\
									<p class="form-control-static">升级金额：</p>\
								  </div>\
								  <div class="form-group">\
									<input type="text" class="form-control" id="upgrade_amount" value="{{= it.upgrade_amount_str}}">\
								  </div>\
								</div>\
								<div class="form-inline">\
								  <div class="form-group">\
									<p class="form-control-static">可招募等级：</p>\
								  </div>\
								  <div class="form-group" id="allow_grade">\
								  </div>\
								</div>\
								<div class="form-inline">\
								  <div class="form-group">\
									<p class="form-control-static">可发货：</p>\
								  </div>\
								  <div class="form-group">\
									<label class="checkbox-inline">\
									  <input type="checkbox" id="allow_shipment" {{? it.allow_shipment == 0}}checked{{?}}> &nbsp;\
									</label>\
								  </div>\
								</div>\
								<div class="form-inline">\
								  <div class="form-group">\
									<p class="form-control-static">预警线：</p>\
								  </div>\
								  <div class="form-group">\
									<input type="text" class="form-control" id="warning_line" value="{{= it.warning_line}}">&nbsp;%&nbsp; <span>账户余额与所收货款的最低百分比</span>\
								  </div>\
								</div>\
								<div class="form-inline">\
								  <div class="form-group">\
									<p class="form-control-static">所属等级：</p>\
								  </div>\
								  <div class="form-group">\
									<select class="form-control" disabled id="parent_id">\
									  <option value="{{= it.parent_id}}">{{= it.parent_grade_name}}</option>\
									</select>\
								  </div>\
								</div>\
								<div class="form-inline">\
								  <div class="form-group">\
									<p class="form-control-static">需要上传身份证：</p>\
								  </div>\
								  <div class="form-group">\
									<label class="checkbox-inline">\
									  <input type="checkbox" id="need_idcard" {{? it.need_i_d_card == 0}}checked{{?}}> &nbsp;\
									</label>\
								  </div>\
								</div>\
								<div class="form-inline">\
								  <div class="form-group">\
									<p class="form-control-static">需要打款截图：</p>\
								  </div>\
								  <div class="form-group">\
									<label class="checkbox-inline">\
									  <input type="checkbox" id="payment_voucher" {{? it.payment_voucher == 0}}checked{{?}}> &nbsp;\
									</label>\
								  </div>\
								</div>\
								<div class="form-inline">\
								  <div class="form-group" style="vertical-align: top;">\
									<p class="form-control-static">申请说明：</p>\
								  </div>\
								  <div class="form-group">\
									<script id="application_des" name="content" type="text/plain">\
									</script>\
								  </div>\
								</div>\
								<div class="form-inline">\
								  <div class="form-group" style="vertical-align: top;">\
									<p class="form-control-static">升级说明：</p>\
								  </div>\
								  <div class="form-group">\
									<script id="upgrade_des" name="content" type="text/plain">\
									</script>\
								  </div>\
								</div>\
								<div class="form-inline">\
								  <div class="form-group">\
									<p class="form-control-static">价格表：</p>\
								  </div>\
								  <div class="form-group">\
									<input type="text" class="form-control" id="price-tab" value="{{= it.price_uri}}">&nbsp;<span>点击文本框选择图片 用于微信公众号菜单列表“查看价格”使用</span>\
								  </div>\
								</div>\
								<div class="form-inline">\
								  <div class="form-group">\
									<p class="form-control-static">自助升级：</p>\
								  </div>\
								  <div class="form-group">\
									<select class="form-control" id="allow_update">\
									  <option value="0" {{? it.allow_upgrade==0}}selected{{?}}>开启</option>\
									  <option value="1" {{? it.allow_upgrade==1}}selected{{?}}>关闭</option>\
									</select>\
								  </div>\
								</div>\
								<div class="form-inline">\
								  <div class="form-group">\
									<p class="form-control-static">状态：</p>\
								  </div>\
								  <div class="form-group">\
									<select class="form-control" id="status">\
									  <option value="0" {{? it.status==0}}selected{{?}}>启用</option>\
									  <option value="1" {{? it.status==1}}selected{{?}}>禁用</option>\
									</select>\
								  </div>\
								</div>\
							</div>\
							<div class="tool">\
								<button type="button" class="btn btn-success" id="save-btn">保存</button>\
								<a href="agent-grade-management.html" class="btn btn-default">取消</a>\
							</div>'
		,'allow_grade': '{{~ it:item:index }}\
						<label class="checkbox-inline">\
						  <input type="checkbox" value="{{= item.id}}" {{? item.selected&&item.selected == 1}}checked{{?}} class="item"> {{= item.name}}\
						</label>\
					   {{~}}'
		,'optionTpl': '<option value="{{= it.id}}" selected>{{= it.name}}</option>'
	};
	module.exports = self_tpl;


/***/ })

/******/ });