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

	module.exports = __webpack_require__(17);


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
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	$(function(){
		var $ajax = __webpack_require__(3);
		var self_tpl = __webpack_require__(2);
		/**
		 *	功能：处理tab按钮
		 *	
		 *
		*/
		$(".user-container .btn-tab:first-child").css("border-bottom", "none");
		$(".user-container .btn-tab").on("click", function(){
			pram.status = $(this).attr("data-val");
			pram.pageCount = "";
			pram.current_page = 1;
			getData();
			$("#table-body tr").remove();
			$(".user-container .btn-tab").css("border-bottom", "1px solid #ccc");
			$(this).css("border-bottom", "none");
		});
		/**
		 *	功能：查询
		 *
		 *
		*/
		$("#search").on("click", function(){
			var phone = $("#mobile").val();
			if(phone){
				if(!(/^1\d{10}$/.test(phone))){ 
		 			$("#mobile").val("");
		 			layer.msg("手机号输入不合法！");
		 			return;
		 		};
			};
			pram.current_page = 1;
			pram.start_date = $("#start-time").val();
			pram.end_date = $("#end-time").val();;
			pram.mobile = $("#mobile").val().trim();
			pram.name = $("#name").val().trim();
			getData();
		});
		/**
		 *	功能：日期选择
		 *
		 *
		*/
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
		/**
		 *	功能：获取充值列表
		 *
		 *
		*/
		var pram = {
			status: "",
			start_date: "",
			end_date: "",
			mobile: "",
			name: "",
			current_page: 1,
			page_size: 20,
			pageCount: ""
		};
		//getData();
		function getData(){
			loadingIndex = __webpack_require__(18).open();
			$ajax.post('/account/topup/get.do', pram, function(data) {
				if (data.code == "10000") {
					__webpack_require__(18).close(loadingIndex);
					$('#table-body').html(doT.template(self_tpl.accountRechargeTpl)(data.data.member_account_d_t_o_list));
					pram.pageCount = Math.ceil(data.data.total_counts / pram.page_size);
					$("#pager").pager({ pagenumber: pram.current_page, pagecount: pram.pageCount, buttonClickCallback: PageClick,totalCounts: data.data.total_counts});
					$("#batch_recharge").attr("disabled", true);
					$("#checked").prop("checked", false);
				};
			});
		};
		function PageClick (pageclickednumber) {
			pram.current_page = pageclickednumber;
			getData();
		};

		/**
		 *	功能：拒绝审核
		 *		强制通过和通过一样接口  强制拒绝和拒绝一样接口参数
		 *
		*/
		// 拒绝弹窗
		$("#table-body").on("click",".refuse", function(){
			var id = $(this).parent().attr("data_id");
			getPramCheckBox(this);
			//询问框
			//页面层-自定义
			layer.open({
				title: "拒绝理由",
				shadeClose: false,
				content: '<div class="open_div">'+
							'	<textarea placeholder="请输入拒绝理由" class="form-control" id="reason"></textarea>'+
							'</div>',
				scrollbar: false,
				yes: function(index, layero){
					var reason = $("#reason").val();
					if(reason.length){
						pramSingle.substitued = "0";
						refusePost();
					};
				}
			});
		});
		// 强制拒绝弹窗
		$("#table-body").on("click",".force_refuse", function(){
			var id = $(this).parent().attr("data_id");
			getPramCheckBox(this);
			//询问框
			//页面层-自定义
			layer.open({
				title: "拒绝理由",
				shadeClose: false,
				content: '<div class="open_div">'+
							'	<textarea placeholder="请输入拒绝理由" class="form-control" id="reason"></textarea>'+
							'</div>',
				scrollbar: false,
				yes: function(index, layero){
					var reason = $("#reason").val();
					if(reason.length){
						pramSingle.substitued = "1";
						refusePost();
					};
				}
			});
		});
		// 拒绝请求
		function refusePost(){
			//var tmp = JSON.stringify(pramCheck);
			pramSingle.biz_desc = $("#reason").val();
			$ajax.ajaxPost('/account/topup/reject.do', pramSingle, function(data){
				if (data.code == 10000) {
					layer.close();
					layer.msg("操作成功！");
					$("[name = item]:checkbox").prop("checked", false);
					getData();
				};
			});
		};
		// 通过弹窗
		$("#table-body").on("click",".pass", function(){
			var id = $(this).parent().attr("data_id");
			getPramPassClick(this);
			//询问框
			layer.confirm('该记录处于 待总部审核 确定要执行操作吗？', {
			  btn: ['确定','取消'] //按钮
			}, function(index){
				pramArr[0].substitued = "0";
				passPost();
			});
		});
		// 强制通过弹窗
		$("#table-body").on("click",".force_pass", function(){
			var id = $(this).parent().attr("data_id");
			getPramPassClick(this);
			//询问框
			layer.confirm('该记录处于 待上级审核 确定要执行操作吗？', {
			  btn: ['确定','取消'] //按钮
			}, function(index){
				if (pramArr.length == 1) {
					pramArr[0].substitued = "1";
				};
				passPost();
			});
		});
		// 通过请求
		function passPost(){
			layer.closeAll();
			var tmp = JSON.stringify(pramArr);
			var index = layer.load(1, {
				shadeClose: false,
			  shade: [0.1,'#fff'] //0.1透明度的白色背景
			});
			$ajax.ajaxPost('/account/topup/review.do', { topup_list_str: tmp}, function(data){
				layer.closeAll();
				if (data.code == 10000) {
					layer.close();
					layer.msg("操作成功！");
					$("[name = item]:checkbox").prop("checked", false);
					getData();
				}else{
					if(data.code == "30075" || data.code =="30077"){
						layer.msg( data.msg, {
						  time: 5000 //2秒关闭（如果不配置，默认是3秒）
						});
					}
				};
			});
		};
		/**
		 *	功能：批量处理
		 *	
		 *
		*/
		 $("#checked").bind("click", function () {
		 	var check = this.checked;
		 	if(check){
		 		$("[name = item]:checkbox").prop("checked", true);
		 		$("#batch_recharge").attr("disabled", false);
		 	} else{
		 		$("[name = item]:checkbox").prop("checked", false);
		 		$("#batch_recharge").attr("disabled", true);
		 	};
	      });
		$("#table").on("click", "input:checkbox", function(){
			if($("input[name='item']:checked").length !=0){
				$("#batch_recharge").attr("disabled", false);
			}else{
				$("#batch_recharge").attr("disabled", true);
			};
		});
		var pramArr = [];
		var pramCheck = {
			substitued: "0",
			topup_id: "",
			member_id: ""
		};
		var pramSingle = {
			substitued: "",
			topup_id: "",
			member_id: "",
			biz_desc: ""
		};
		// 获取所有选中的框对应的信息（批量审核）
		function getPramArrCheckBox(){
			pramArr = [];
			var items = $("input[name='item']:checked");
			var len = items.length;
			for(var i =0; i< len; i++){
				pramCheck = {
					substitued: "0",
					topup_id: "",
					member_id: ""
				};
				var parent = $(items[i]).parent().parent();
				pramCheck.topup_id = parent.attr("data_id");
				pramCheck.member_id = parent.attr("data_member");
				//pram.audit_member_id = parent.attr("data_id");
				//pramCheck.audit_member_id = "23";
				pramArr.push(pramCheck);
			};
		};
		// 获取所有选中的框对应的信息（单个通过审核）
		function getPramPassClick(_this){
			pramArr = [];
			var parent = $(_this).parent().parent();

			pramCheck.topup_id = parent.attr("data_id");
			pramCheck.member_id = parent.attr("data_member");
			//pram.audit_member_id = parent.attr("data_id");
			//pramCheck.audit_member_id = "23";
			pramArr.push(pramCheck);
		};
		// 获取单个选中框对应的信息（拒绝）
		function getPramCheckBox(_this){
			var parent = $(_this).parent().parent();
			pramSingle.topup_id = parent.attr("data_id");
			pramSingle.member_id = parent.attr("data_member");
			//pramSingle.audit_member_id = parent.attr("data_id");
			//pramSingle.audit_member_id = "23"
		};
		// 批量审核
		$("#batch_recharge").on("click", function(){
			getPramArrCheckBox();
			var tmp = JSON.stringify(pramArr);
			$ajax.ajaxPost('/account/topup/review.do', { topup_list_str: tmp}, function(data){
				if (data.code == 10000) {
					layer.msg("操作成功！");
					$("[name = item]:checkbox").prop("checked", false);
					getData();
				};
			});
		});

	});


/***/ }),
/* 18 */
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

/***/ })
/******/ ]);