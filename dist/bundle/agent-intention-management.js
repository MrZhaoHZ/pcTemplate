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

	module.exports = __webpack_require__(43);


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

/***/ 12:
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

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

	var self_tpl = __webpack_require__(44);
	var $ajax = __webpack_require__(3);
	var tmp_path_config = __webpack_require__(4);
	$(function(){

		var filterCondition = {
			current_page: '1',
			page_size: '20'
		};
		function getAgencyList(pageIndex) {
			filterCondition.current_page = pageIndex;
			$ajax.post('/agent_purpose/get_list.do',filterCondition,function(data){
				if(data.success){
					if(data.data && data.data[0] !=null){
						$('#nodata-tips').hide();
						$('#table-container').html(doT.template(self_tpl.listTpl)(data.data.datas));
						$("#pager").pager({ pagenumber: pageIndex, pagecount: Math.ceil(data.data.total_count / filterCondition.page_size), buttonClickCallback: getAgencyList,totalCounts: data.data.total_count});
						$("#pager").show();
					} else {
						$('#nodata-tips').show();
						$('#table-container').html('');
						$("#pager").hide();
					}
				}
			});
		}
		initLevelOption();
		//初始化等级列表下拉框
		function initLevelOption() {
			$ajax.post('/agent/agent_grade/list.do',null,function(data){
				if(data.success) {
					$('#agent_grade').html(doT.template(self_tpl.optionTpl)(data.data));
				}
			});
		}
		var timepickerCfg = {
			minInterval: (1000 * 60),
			showSecond: true,
			timeFormat: 'HH:mm:ss',
			start: {
				maxDate: new Date()
			},
			end: {
				//new Date()
			}
		};
		$.timepicker.datetimeRange(
			$('#start_time'),
			$('#end_time'),
			timepickerCfg
		);
		getAgencyList(1);
		$('#nav-select').delegate('.btn','click',function(){
			$(this).siblings('.btn').removeClass('selected');
			$(this).addClass('selected');
			filterCondition.status = $(this).data('id');
			getAgencyList(1);
		});
		$('#table-container').delegate('.cancel-btn','click',function(){
			var id = $(this).closest('tr').data('id');
			layer.confirm('确定取消吗？', {
				btn: ['确定','取消'] //按钮
			}, function(){
				$ajax.post('/agent_purpose/cancelled.do',{id:id},function(data){
					if(data.success) {
						getAgencyList(1);
						layer.closeAll();
					}
				});
			}, function(){
				return;
			});
		});
		$('#table-container').delegate('.audit-btn','click',function(){
			var id = $(this).closest('tr').data('id');
			layer.confirm('确定取消吗？', {
				btn: ['确定','取消'] //按钮
			}, function(){
				$ajax.post('/agent_purpose/audit.do',{id:id},function(data){
					if(data.success) {
						getAgencyList(1);
						layer.closeAll();
					}
				});
			}, function(){
				return;
			});
		});
		$('#table-container').delegate('.contacted-btn','click',function(){
			var id = $(this).closest('tr').data('id');
			layer.confirm('确定此操作吗？', {
				btn: ['确定','取消'] //按钮
			}, function(){
				$ajax.post('/agent_purpose/contacted.do',{id:id},function(data){
					if(data.success) {
						getAgencyList(1);
						layer.closeAll();
					}
				});
			}, function(){
				return;
			});
		});
		$('#table-container').delegate('.un-contacted-btn','click',function(){
			var id = $(this).closest('tr').data('id');
			layer.confirm('确定此操作吗？', {
				btn: ['确定','取消'] //按钮
			}, function(){
				$ajax.post('/agent_purpose/lose_contact.do',{id:id},function(data){
					if(data.success) {
						getAgencyList(1);
						layer.closeAll();
					}
				});
			}, function(){
				return;
			});
		});
		$('#table-container').delegate('.busi-btn','click',function(){
			var id = $(this).closest('tr').data('id');
			layer.confirm('确定此操作吗？', {
				btn: ['确定','取消'] //按钮
			}, function(){
				$ajax.post('/agent_purpose/audit.do',{id:id},function(data){
					if(data.success) {
						getAgencyList(1);
						layer.closeAll();
					}
				});
			}, function(){
				return;
			});
		});
		$('#table-container').delegate('.un-busi-btn','click',function(){
			var id = $(this).closest('tr').data('id');
			layer.confirm('确定此操作吗？', {
				btn: ['确定','取消'] //按钮
			}, function(){
				$ajax.post('/agent_purpose/cancelled.do',{id:id},function(data){
					if(data.success) {
						getAgencyList(1);
						layer.closeAll();
					}
				});
			}, function(){
				return;
			});
		});
		$('#filter-btn').click(function(){
			filterCondition = {
				real_name: $('#real_name').val(),
				mobile: $('#mobile').val(),
				wechat_id: $('#wechat_id').val(),
				agent_grade: $('#agent_grade option:checked').val(),
				start_time: $('#start_time').val(),
				end_time: $('#end_time').val(),
				status: $('#status option:selected').val(),
				page_size: '20'
			}
			getAgencyList(1);
		});

		$("#exports-btn").click(function(){
			var pramPage = filterCondition;
			pramPage.is_all = $("#exports-select").val();
			// pramPage.current_page = filterCondition.current_page;
			// pramPage.page_size = filterCondition.page_size;
			// var link = tmp_path_config.api_path_1 + "/agent_purpose/export.do?is_all=" + pramPage.is_all +　"&current_page=" + pramPage.current_page + "&page_size=" + pramPage.page_size;
			var link = __webpack_require__(12).doExports(tmp_path_config.api_path_1, '/agent_purpose/export.do', pramPage);
			window.location.href = link;
		});
	});

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

	var self_tpl = {
		'listTpl': '<thead>\
						<tr>\
						  <th>姓名</th>\
						  <th>手机</th>\
						  <th>微信号</th>\
						  <th>意向等级</th>\
						  <th>渠道</th>\
						  <th>状态</th>\
						  <th>时间</th>\
						  <th>操作</th>\
						</tr>\
				  	</thead>\
				  	<tbody>\
				  	    {{~ it:item:index }}\
						<tr data-id="{{= item.id}}">\
						  <td>{{= item.real_name}}</td>\
						  <td>{{= item.mobile}}</td>\
						  <td>{{= item.wechat_id}}</td>\
						  <td>{{? item.grade_name}}{{= item.grade_name}}{{??}}-{{?}}</td>\
						  <td>{{? item.place_name}}{{= item.place_name}}{{??}}微信{{?}}</td>\
						  <td>\
						  {{? item.status == 0}}\
						  待联系\
						  {{?? item.status == 1}}\
						  联系\
						  {{?? item.status == 2}}\
						  未联系\
						  {{?? item.status == 3}}\
						  合作\
						  {{?? item.status == 4}}\
						  未合作\
						  {{?}}\
						  </td>\
						  <td>{{= item.update_date}}</td>\
						  <td>\
						  {{? item.status == 0}}\
						  <a href="javascript:void(0);" class="contacted-btn">联系</a>\
						  <a href="javascript:void(0);" class="un-contacted-btn">未联系</a>\
						  {{?}}\
						  {{? item.status == 1}}\
						  <a href="javascript:void(0);" class="busi-btn">合作</a>\
						  <a href="javascript:void(0);" class="un-busi-btn">未合作</a>\
						  {{?}}\
						  {{? item.status == 2 || item.status == 3 || item.status == 4}}\
						  -\
						  {{?}}\
						  </td>\
						</tr>\
						{{~}}\
				  	</tbody>'
		,'optionTpl':  '<option value="0">全部</option>\
						{{~ it:item:index }}\
						<option value="{{= item.id}}">{{= item.name}}</option>\
					   {{~}}'
	};
	module.exports = self_tpl;


/***/ })

/******/ });