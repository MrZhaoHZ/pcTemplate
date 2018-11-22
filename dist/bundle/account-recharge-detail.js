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

	module.exports = __webpack_require__(19);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	var self_tpl = {
		'accountListTpl': '{{~ it:item:index }}\
						<tr>\
							<td>{{= item.real_name}}</td>\
							<td>{{= item.mobile}}</td>\
						    <td>{{= item.amount_str}}</td>\
						    <td>{{= item.agent_grade_name}}</td>\
						    {{? item.superior_member_id == 1}}\
						    	<td>{{= item.direct_superior}}</td>\
						    {{??}}\
						    	<td><a  href="../agent/agent-detail.html?id={{= item.superior_member_id}}" target="_blank">{{= item.direct_superior}}</a></td>\
						    {{?}}\
						    {{? item.top_member_id == 1}}\
						    	<td>{{= item.top_name}}</td>\
						    {{??}}\
						    	<td><a href="../agent/agent-detail.html?id={{= item.top_member_id}}" target="_blank">{{= item.top_name}}</a></td>\
						    {{?}}\
						    <td>{{= item.directly_count}}</td>\
						    <td>{{= item.team_count}}</td>\
						    <td>\
								{{? item.status == 0}}\
									正常\
								{{?? item.status == 1}}\
									取消\
								{{? }}\
							</td>\
							<td>\
								<a href="account-balance.html?user_id={{= item.member_id}}" target="_blank">&nbsp;余额流水</a>\
								<a class="balance-adjust" user_id="{{= item.member_id}}" user_name="{{= item.real_name}}" user_money="{{= item.amount_str}}">&nbsp;账户调整</a>\
							</td>\
						</tr>\
					{{~}}',
		'accountBalanceTpl': '{{~ it:item:index }}\
						<tr>\
							<td>{{= item.name}}</td>\
							<td>{{= item.agent_grade}}</td>\
						    <td>{{= item.amount_str}}</td>\
						    <td>{{= item.changed_str}}</td>\
						    <td>{{= item.busi_audit_type_str || ""}}</td>\
						    <td>{{= item.create_date}}</td>\
						    <td>\
						    	{{? item.biz_object_id}}\
						    		<a href="../order/order-detail.html?id={{= item.biz_object_id}}" target="_blank">{{= item.busi_desc || "-"}}</a>\
						    	{{?? }}\
						    		{{= item.busi_desc || "-"}}\
						    	{{?}}\
						    </td>\
						</tr>\
					{{~}}',
		'accountAdjustTpl':  '{{~ it.data:item:index }}\
						<tr>\
						<td>{{= index}}</td>\
							<td>{{= item.operator}}</td>\
							<td>{{= item.time}}</td>\
						    <td>{{= item.operation}}</td>\
						    <td>{{= item.remark}}</td>\
						</tr>\
					{{~}}',
		'accountDelegateBalanceTpl': '{{~ it:item:index }}\
						<tr>\
							<td>{{= item.name}}</td>\
							<td>{{= item.agent_grade}}</td>\
						    <td>{{= item.amount_str}}</td>\
						    <td>{{= item.changed_str}}</td>\
						    <td>{{= item.busi_audit_type_str || ""}}</td>\
						    <td>{{= item.create_date}}</td>\
						    <td>\
						    	{{? item.isNum == 1}}\
						    		<a href="../order/order-detail.html?id={{= item.busi_object_id}}" target="_blank">{{= item.busi_desc || "-"}}</a>\
						    	{{?? }}\
						    		{{= item.busi_desc || "-"}}\
						    	{{?}}\
						    </td>\
						</tr>\
					{{~}}',
		'accountRechargeTpl': '{{~ it:item:index }}\
						<tr data_id="{{= item.biz_id}}" data_member="{{= item.member_id}}" data_biz="{{= item.biz_status_name}}">\
							{{ var can_check = 0; if(item.biz_status_name == "上级拒绝" || item.biz_status_name == "总部拒绝" || item.biz_status_name == "审核通过"){ can_check = 1;};}}\
							<td><input type="checkbox" data_id="{{= item.user_id}}" class="item" {{? can_check == 1}} disabled="false" {{?? }} name="item" {{? }} /></td>\
							<td>{{= item.name}}</td>\
							<td>{{= item.real_name}}</td>\
							<td><img src="{{= item.portrait_uri}}" /></td>\
						    <td>{{= item.parent_name}}</td>\
						    <td>{{= item.account_amount_d}}</td>\
						    <td>{{= item.apply_date}}</td>\
						    <td>{{= item.topup_amount_d}}</td>\
						    <td>{{= item.biz_status_name}}</td>operation\
						    <td data_id="{{= item.biz_id}}">{{? item.biz_status_name == "待上级审核"}}\
									<a class="force_pass">强制通过&nbsp;</a>\
									<a class="force_refuse">强制拒绝&nbsp;</a>\
								{{?? item.biz_status_name == "待总部审核"}}\
									<a class="pass">通过&nbsp;</a>\
									<a class="refuse">拒绝&nbsp;</a>\
								{{? }}\
									<a href="account-recharge-detail.html?user_id={{= item.biz_id}}" class="detail" target="_blank">详情</a>\
							</td>\
						</tr>\
					{{~}}',
					'accountRechargeDetailTpl': '<tr>\
						    <td>{{= it.real_name}}</td>\
						    <td>{{= it.apply_date}}</td>\
						    <td>{{= it.simple_desc || "-"}}</td>\
						    <td>{{= it.biz_status_name}}</td>\
						</tr>',
					'accountRechargeDetailTpl1': '<tr>\
						    <td>{{= it.creators}}</td>\
						    <td>{{= it.create_date}}</td>\
						    <td>{{= it.audit_desc || "-"}}</td>\
						    <td>{{= it.status_str || "-"}}</td>\
						</tr>'
	};
	module.exports = self_tpl;


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

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

	$(function(){
		var self_tpl = __webpack_require__(2);
		var $ajax = __webpack_require__(3);
		var httpURL = __webpack_require__(6);
		var userId = httpURL.getQueryString('user_id');
		/**
		 *	功能：获取充值审核详情
		 *	
		 *
		*/

		//var bizId = httpURL.getQueryString("bizId");
		//var bizId = 23;
		getData();
		function getData(){
			$ajax.ajaxPost('/account/topup/detail.do', {biz_id: userId}, function(data) {
				if (data.success) {
					var item = data.data.member_account_d_t_o_list[0];
					$("#detail_name").text(item.real_name);
					$("#detail_nick_name").text(item.name);
					$("#detail_phone").text(item.mobile);
					$("#detail_balance").text(item.account_amount_d);
					$("#detail_superior").text(item.parent_name);
					$("#detail_money").text(item.topup_amount_d);
					if(data.data.date){
						$("#detail_status").text(data.data.date.status_str);
					}else{
						$("#detail_status").text(item.biz_status_name);
					}
					console.log(doT.template(self_tpl.accountRechargeDetailTpl)(data.data.member_account_d_t_o_list[0]));
					$('#table-body').append(doT.template(self_tpl.accountRechargeDetailTpl)(data.data.member_account_d_t_o_list[0]));
					$('#table-body').append(doT.template(self_tpl.accountRechargeDetailTpl1)(data.data.date));
				};
			});
		};
	});


/***/ })

/******/ });