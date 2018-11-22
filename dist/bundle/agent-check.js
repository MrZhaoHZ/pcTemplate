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

	module.exports = __webpack_require__(35);


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

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

	var provincetpl = '<option value="0">所有省</option>\
					{{~ it:item:index }}\
					<option value="{{= item.code}}">{{= item.name}}</option>\
			  	{{~}}';
	var citytpl = '<option value="0">所有市</option>\
					{{~ it:item:index }}\
					<option value="{{= item.code}}">{{= item.name}}</option>\
			  	{{~}}';
	var districttpl = '<option value="0">所有区县</option>\
					{{~ it:item:index }}\
					<option value="{{= item.code}}">{{= item.name}}</option>\
			  	{{~}}';
	var $ajax = __webpack_require__(3);


	function selectEvent() {
		$('#area-province').change(function(){
			if($(this).val() === '0') {
				$('#area-city').html('<option value="0">所有市</option>')
				$('#area-district').html('<option value="0">所有区县</option>');
				return;
			}
			$ajax.post('/agent/get_delivery.do',{level:2,code:$(this).val()},function(data){
				$('#area-city').html(doT.template(citytpl)(data.data))
			});
		});
		$('#area-city').change(function(){
			if($(this).val() === '0') {
				$('#area-district').html('<option value="0">所有区县</option>');
				return;
			}
			$ajax.post('/agent/get_delivery.do',{level:3,code:$(this).val()},function(data){
				$('#area-district').html(doT.template(districttpl)(data.data))
			});
		});
	}
	function init() {
		selectEvent();
		$ajax.post('/agent/get_delivery.do',{level:1},function(data){
			$('#area-province').html(doT.template(provincetpl)(data.data))
		});
	}


	exports.init = init;

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

/***/ 18:
/***/ (function(module, exports) {

	function open() {
		// layer.msg('正在处理');
		// return layer.load(1, {
		// 	  shade: [0.1,'#fff'] //0.1透明度的白色背景
		// 	});
		return layer.msg('正在处理', {
				  icon: 16
				  ,shade: 0.01
				  ,time: 0
				});
	}

	function close(loadingIndex) {
		layer.close(loadingIndex);
	}


	module.exports = {
		open: open,
		close: close
	}

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

	var self_tpl = {
		'agentCheckList': '<thead>\
							<tr>\
							  <th><input type="checkbox" class="select-all"></th>\
							  <th>顶级</th>\
							  <th>直属上级</th>\
							  <th>姓名</th>\
							  <th>申请级别</th>\
							  <th>授权金额</th>\
							  <th>付款截图</th>\
							  <th>身份证号</th>\
							  <th>本人证件</th>\
							  <th>状态</th>\
							  <th>操作</th>\
							  <th>重复类型</th>\
							  <th>重复人手机号</th>\
							</tr>\
						  </thead>\
						  <tbody>\
						  	{{~ it.datas:item:index }}\
							<tr data-id="{{= item.application_id}}">\
							  <td>{{? item.audit_status == 1 || item.audit_status == 0}}<input type="checkbox" name="selectItem">{{?}}</td>\
							  <td>{{? item.top_member_id != 1}}<a href="agent-detail.html?id={{= item.top_member_id}}" target="_blank">{{= item.top_name}}</a>{{??}}{{= item.top_name}}{{?}}</td>\
							  <td>{{? item.parent_member_id != 1}}<a href="agent-detail.html?id={{= item.parent_member_id}}" target="_blank">{{= item.parent_name}}</a>{{??}}{{= item.parent_name}}{{?}}</td>\
							  <td>{{= item.real_name}}</td>\
							  <td>{{= item.grade_name}}</td>\
							  <td>{{? item.payment_amount}}{{= item.payment_amount}}{{??}}-{{?}}</td>\
							  <td>{{? item.payment_voucher}}<a href="javascript:void(0);" target="_blank" class="see-img">点击查看</a><div class="see-img-layer" style="display: none;"><img src="{{? item.payment_voucher}}{{? item.payment_voucher.indexOf("http") != -1}}{{= item.payment_voucher}}{{??}}{{= it.upload_path_h5}}{{= item.payment_voucher}}{{?}}{{?}}" style="width:100%;"></div>{{??}}-{{?}}</td>\
							  <td>{{? item.authon_personal_id}}{{= item.authon_personal_id}}{{??}}-{{?}}</td>\
							  <td>{{? item.authon_personal_id}}<a href="javascript:void(0);" target="_blank" class="see-img">点击查看</a><div class="see-img-layer" style="display: none;"><img src="{{? item.picture_front}}{{? item.picture_front.indexOf("http") != -1}}{{= item.picture_front}}{{??}}{{= it.upload_path_h5}}{{= item.picture_front}}{{?}}{{?}}" style="width:100%;"></div>{{??}}-{{?}}</td>\
							  <td>\
							  {{? item.audit_status == 8 }}\
							  	待上级审核\
							  {{?}}\
							  {{? item.audit_status == 9 }}\
							  	待总部审核\
							  {{?}}\
							  {{? item.audit_status == 1 }}待总部审核{{?}}\
							  {{? item.audit_status == 2 }}上级拒绝{{?}}\
							  {{? item.audit_status == 3 }}总部通过{{?}}\
							  {{? item.audit_status == 4 }}总部拒绝{{?}}\
							  </td>\
							  <td>\
							  {{? item.audit_status == 9 }}\
								<a href="javascript:void(0)" class="pass-btn" data-status="3">通过</a>&nbsp;<a href="javascript:void(0)" class="nopass-btn" data-status="4">拒绝</a>&nbsp;\
							  {{?}}\
							  {{? item.audit_status == 8 }}\
								<a href="javascript:void(0)" class="pass-btn" data-status="3">强制通过</a>&nbsp;<a href="javascript:void(0)" class="nopass-btn" data-status="4">强制拒绝</a>&nbsp;\
							  {{?}}\
							  {{? item.audit_status == 1 }}\
								<a href="javascript:void(0)" class="pass-btn" data-status="3">通过</a>&nbsp;<a href="javascript:void(0)" class="nopass-btn" data-status="4">拒绝</a>&nbsp;\
							  {{?}}\
							  <a href="javascript:void(0);" class="detail-btn">详情</a>\
							  </td>\
							  <td>\
							  	{{? item.unusual_sign == 1 }}地址重复{{?}}\
							  	{{? item.unusual_sign == 2 }}微信号重复{{?}}\
							  	{{? item.unusual_sign == 3 }}地址和微信号重复{{?}}\
							  	{{? item.unusual_sign == 0 }}-{{?}}\
							  	</td>\
							  <td>{{= item.repeat_mobile || "-"}}</td>\
							</tr>\
							{{~}}\
						  </tbody>'
		,detailTpl: '<div>\
					  	<table class="table table-bordered">\
						  <tbody>\
							<tr>\
							  <td>姓名：{{= it.real_name}}</td>\
							  <td>微信号：{{= it.wechat_id}}</td>\
							</tr>\
							<tr>\
							  <td>手机号码：{{= it.mobile}}</td>\
							  <td>身份证号：{{? it.authon_personal_id}}{{= it.authon_personal_id}}{{??}}无身份信息{{?}}</td>\
							</tr>\
							<tr>\
							  <td>所属上级：{{= it.parent_name}}</td>\
							  <td>顶级：{{= it.top_name}}</td>\
							</tr>\
							<tr>\
							  <td>身份信息：<img src="{{? it.authon_personal_id}}{{= it.upload_path_h5}}{{= it.picture_front}}{{?}}" alt="无身份信息" style="display:block;width:200px;height:100px;" /></td>\
							  <td>打款截图：<img src="{{= it.upload_path_h5}}{{= it.payment_voucher}}" alt="无打款截图" style="display:block;width:200px;height:100px;"/></td>\
							</tr>\
							<tr>\
							  <td>申请级别：{{= it.grade_name}}</td>\
							  <td>打款金额：￥{{? it.payment_amount}}{{= it.payment_amount}}{{??}}无打款金额{{?}}</td>\
							</tr>\
							<tr>\
							  <td colspan="2">地址：{{= it.address}}</td>\
							</tr>\
						  </tbody>\
						</table>\
						<div class="check-process">\
							<span>审核流程</span>\
							<table class="table table-bordered">\
							  <thead>\
								<tr>\
								  <th>姓名</th>\
								  <th>处理时间</th>\
								  <th>备注</th>\
								  <th>状态</th>\
								</tr>\
							  </thead>\
							  <tbody>\
							    {{~ it.list:item:index }}\
								<tr>\
								  <td>{{= item.auditor_name}}</td>\
								  <td>{{= item.create_date}}</td>\
								  <td>\
								  {{? item.audit_status== 8 || item.audit_status== 9}}用户提交申请{{?}}\
								  {{? item.audit_status== 2}}{{? item.auditor_type !=1 }}上级{{??}}平台{{?}}拒绝：{{? item.remark}}{{= item.remark}}{{?}}{{?}}\
								  {{? item.audit_status== 1}}{{? item.auditor_type !=1 }}上级{{??}}平台代上级{{?}}审核通过{{?}}\
								  {{? item.audit_status== 4}}总部拒绝：{{? item.remark}}{{= item.remark}}{{?}}{{?}}\
								  {{? item.audit_status== 3}}审核通过{{?}}\
								  </td>\
								  <td>\
								  {{? item.audit_status== 8}}待上级审核{{?}}\
								  {{? item.audit_status== 9}}待平台审核{{?}}\
								  {{? item.audit_status== 2}}上级拒绝{{?}}\
								  {{? item.audit_status== 1}}待总部审核{{?}}\
								  {{? item.audit_status== 4}}总部拒绝{{?}}\
								  {{? item.audit_status== 3}}审核通过{{?}}\
								  </td>\
								</tr>\
								{{~}}\
							  </tbody>\
							</table>\
						</div>\
					</div>'
		,'optionTpl':  '<option value="0">所有等级</option>\
						{{~ it:item:index }}\
						<option value="{{= item.id}}">{{= item.name}}</option>\
					   {{~}}'
		,'accountListTpl': '{{~ it:item:index }}\
						<tr>\
							<td><a  href="../agent/agent-detail.html?id={{= item.member_id}}">{{= item.name}}</a></td>\
							<td>{{= item.type_name}}</td>\
							<td>{{= item.mobile}}</td>\
						    <td>{{= item.authon_personal_id}}</td>\
						    <td>{{= item.wechat_id}}</a></td>\
							<td>{{= item.address}}</td>\
							<td>{{= item.create_date}}</td>\
						    <td><a  href="../agent/agent-detail.html?id={{= item.other_member_id}}">{{= item.name}}</a></td>\
						</tr>\
					{{~}}',
					   
	};
	module.exports = self_tpl;


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

	var self_tpl = __webpack_require__(33);
	var $ajax = __webpack_require__(3);
	var area = __webpack_require__(9);
	var tmp_path_config = __webpack_require__(4);
	$(function(){
		area.init();
		$('#nav-select').delegate('.btn','click',function(){
			$(this).siblings('.btn').removeClass('selected');
			$(this).addClass('selected');
			filterCondition.audit_status = $(this).data('id');
			getAgencyCheckList(1);
		});
		$('#right-bar-container').delegate('.select-all','click',function(){
			if(!$(this).prop("checked")) {
				$("[name = selectItem]:checkbox").prop("checked", false);
			} else {
				$("[name = selectItem]:checkbox").prop("checked", true);
			}
			// $("[name = selectItem]:checkbox").each(function () {
	  //           $(this).prop("checked", !$(this).prop("checked"));
	  //       });
		});
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
	        $('#start-time'),
	        $('#end-time'),
	        timepickerCfg
	    );
	   	var filterCondition = {page_size:20};
		function getAgencyCheckList(pageIndex) {
			filterCondition.current_page = pageIndex;
			loadingIndex = __webpack_require__(18).open();
			// console.log('lodingIndex 2:' + loadingIndex);
			$ajax.ajaxPost('/agent/agent_register/get_list.do', filterCondition, function(data) {
				if(data.success){
					__webpack_require__(18).close(loadingIndex);
					if(data.data.datas){
						$('#nodata-tips').hide();
						data.data.upload_path = tmp_path_config.upload_path;
						data.data.upload_path_h5 = tmp_path_config.upload_path_h5;
						$('#table-container').html(doT.template(self_tpl.agentCheckList)(data.data));
						$("#pager").pager({ pagenumber: pageIndex, pagecount:  Math.ceil(data.data.total_count / filterCondition.page_size), buttonClickCallback: getAgencyCheckList,totalCounts: data.data.total_count});
						$('#tool-area').show();
					} else {
						$('#nodata-tips').show();
						$('#table-container').html('');
						$('#tool-area').hide();
					}
				}
			})
		}
		//getAgencyCheckList(1);

		$('#right-bar-container').delegate('.pass-btn','click',function(){
			var id = $(this).closest('tr').data('id');
			var status = $(this).data('status');
			layer.confirm('确定通过吗？', {
	            btn: ['确定','取消'] 
	        }, function(){
	        	loadingIndex = __webpack_require__(18).open();
	        	// console.log('lodingIndex 1:' + loadingIndex);
	            $ajax.post('/agent/agent_register/modify_audit.do',{application_id:id,audit_status:status},function(data){
					if(data.success) {
						//setTimeout(function(){
							__webpack_require__(18).close(loadingIndex);
							layer.closeAll();
							getAgencyCheckList(1);
						//},3000);
						
					}else{
						if(data.code == "30075"){
							layer.msg( data.msg, {
							  time: 5000 //2秒关闭（如果不配置，默认是3秒）
							});
						}
					};
				});
	        }, function(){
	            return;
	        });
		});
		$('#right-bar-container').delegate('.nopass-btn','click',function(){
			$('#nopass-modal').modal('show');
			$('#nopass-submit').attr('data-status',$(this).data('status'));
			$('#nopass-submit').attr('data-id',$(this).closest('tr').data('id'));
		});
		$('#right-bar-container').delegate('.detail-btn','click',function(){
			var id = $(this).closest('tr').data('id');
			$ajax.post('/agent/agent_register/get_register.do',{application_id:id},function(data){
				if(data.success) {
					data.data.upload_path = tmp_path_config.upload_path;
					data.data.upload_path_h5 = tmp_path_config.upload_path_h5;
					$('#user-info-modal .modal-body').html(doT.template(self_tpl.detailTpl)(data.data));
					$('#user-info-modal').modal('show');
				}
			});
		});
		$('body').delegate('#nopass-submit','click',function(e){
			__webpack_require__(36).btnCtrl(e, function(target){
				if($('#nopass-reason').val() === ''){
					layer.msg('请填写拒绝理由');
					$('#nopass-reason').focus();
					return;
				}
				$ajax.post('/agent/agent_register/modify_audit.do',{application_id:target.attr('data-id'),audit_status:target.data('status'),remark:$('#nopass-reason').val()},function(data){
					if(data.success) {
						getAgencyCheckList(1);
						$('#nopass-modal').modal('hide');
						$('#nopass-reason').val('');
					}
				});
			})
		});
		//批量审核
		$('#batch-check').click(function(){
			layer.confirm('确定批量通过吗？', {
	            btn: ['确定','取消'] 
	        }, function(){
	            var selectedAgent = $('#table-container tbody input:checked');
				if(selectedAgent.length < 1) {
					layer.msg('请选择代理');
					return;
				}
				var agentList = [];
				selectedAgent.each(function(){
					agentList.push($(this).closest('tr').data('id'));
				});
				$ajax.post('/agent/agent_register/batch_audit.do', {content:agentList.join('#')}, function(data) {
					if(data.success) {
						location.reload();
					}
				})
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
				start_time: $('#start-time').val(),
				end_time: $('#end-time').val(),
				audit_status: $('#status option:checked').val(),
				province_code: $('#area-province option:checked').val(),
				city_code: $('#area-city option:checked').val(),
				area_code: $('#area-district option:checked').val(),
				unusual_sign: $('#issue-delegate option:checked').val(),
				page_size: 20
			}
			getAgencyCheckList(1);
		});
		(function (){
			$ajax.post('/agent/agent_grade/list.do',null,function(data){
				if(data.success) {
					$('#agent_grade').html(doT.template(self_tpl.optionTpl)(data.data));
				}
			});
		})();
		

		$('#right-bar-container').delegate('.see-img','click',function(){
			var target = $(this).siblings('.see-img-layer')
			layer.open({
			  type: 1,
			  closeBtn: 1,
			  title: "信息",
			  area: '516px',
			  skin: 'layui-layer-nobg', //没有背景色
			  shadeClose: true,
			  content: target
			});
		});

		$("#exports-btn").click(function(){
			var pramPage = filterCondition;
			pramPage.is_all = $("#exports-select").val();
			// pramPage.current_page = filterCondition.current_page;
			// pramPage.page_size = filterCondition.page_size;
			// var link = tmp_path_config.api_path_1 + "/agent/agent_register/export.do?is_all=" + pramPage.is_all +　"&current_page=" + pramPage.current_page + "&page_size=" + pramPage.page_size;
			var link = __webpack_require__(12).doExports(tmp_path_config.api_path_1, '/agent/agent_register/export.do', pramPage);
			window.location.href = link;
		});
	});

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

	function btnCtrl(event, callback) {
		var target = $(event.target);
		var oldColor = target.css('background-color');
		if(target.hasClass('btn-trigging')) {
			return;
		} else {
			target.addClass('btn-trigging');
			target.css({'background-color': 'gray'});
			callback(target);
			setTimeout(function(){
				target.removeClass('btn-trigging');
				target.css({'background-color': oldColor});
			},1000);
		}
	}


	module.exports = {
		btnCtrl: btnCtrl
	}

/***/ })

/******/ });