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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(14);


/***/ }),
/* 1 */,
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var localStorage = __webpack_require__(13);

	function doExports(api_path, reqStr, param) {
		var exportsUrl = api_path + reqStr + '?';
		for(var i in param) {
			if(param[i]) {
				exportsUrl += i + '=' + param[i] + '&';
			}
		}
		return exportsUrl;
	}


	module.exports = {
		doExports: doExports,
	};

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	$(function(){
		var self_tpl = __webpack_require__(2);
		var $ajax = __webpack_require__(3);
		var api_path_config = __webpack_require__(4);
		/**
		 *	功能：获取代理余额流水
		 *	
		 *
		*/
		var pram = {
			name: "",
			mobile: "",
			biz_audit_type: "",
			current_page: 1,
			page_size: 20
		};
		var pageCount = "";
		$("#searcher").click(function(){
			pram.current_page = 1;
			getData();
		});
		$("#user-statu").change(function(){
			getData();
		});
		// getData();
		function getData(){
			pram.name = $("#user-nickName").val().trim();
			pram.mobile = $("#user-phone").val().trim();
			pram.biz_audit_type = $("#user-scene").val();
			$ajax.post('/account/all/detail.do', pram, 
				function(data){
					if (data.success) {
						pageCount = Math.ceil(data.data.total_count / pram.page_size);
						if (data.data.total_count == 0) {
							$("#table-body tr, p.prompt").remove();
							$("#pager").css("display", "none");
							$('.user-container').append("<p class='prompt'>暂无数据</p>");
						}else {
							$("#pager").css("display", "block");
							$("#pager").pager({ pagenumber: pram.current_page, pagecount: pageCount, buttonClickCallback: PageClick,totalCounts: data.data.total_count});
							var reg = new RegExp("^[0-9]*$");
	    					var items = data.data.datas;
	      					for(var i=0;i<items.length;i++){
	      						var item = items[i].busi_desc;
	      						var bool = reg.test(item);
	      						if(bool){
	      							if(item.length == 20){
	      								items[i].isNum = 1
	      							}else{
	      								items[i].isNum = 0
	      							}
	      						}else{
	      							items[i].isNum = 0
	      						}
	      					}
							$('#table-body').html(doT.template(self_tpl.accountDelegateBalanceTpl)(items));
							$(".prompt").remove();
						};
					};
			});
		};
		function PageClick (pageclickednumber) {
			pram.current_page = pageclickednumber;
			getData();
		};

		$("#table-body").on("click","#user-enable", function(){
			var id = $(this).attr("data-id");
			var enable = $(this).attr("data-status");
			var msg = (enable == 0) ? "确定要启用该管理帐号吗" :"确定要禁止该管理帐号吗?";
			//询问框
			layer.confirm('msg', {
			  btn: ['确定','取消'] //按钮
			}, function(index){
				$ajax.post('', pram, function(data) {
				
				});
			});
		});
		/**
		 *	功能：导出
		 *	
		 *
		*/
		$("#export").on("click", function(){
			var pramPage = pram;
			pramPage.is_all = $("#selection").val();
			// pramPage.current_page = pram.current_page;
			// pramPage.page_size = pram.page_size;
			// var link = api_path_config.api_path_1 + '/account/all/export.do?' + "is_all=" + pramPage.is_all +　"&current_page=" + pramPage.current_page + "&page_size=" + pramPage.page_size;
			var link = __webpack_require__(12).doExports(api_path_config.api_path_1, '/account/all/export.do', pramPage);
			window.location.href = link;
	//		$ajax.ajaxPost('/account/all/export.do', pramPage, 
	//			function(data){
	//				if (data.success) {
	//					layer.msg("导出成功！");
	//				};
	//		});
		});

	});


/***/ })
/******/ ]);