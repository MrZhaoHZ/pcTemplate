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

	module.exports = __webpack_require__(51);


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

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

	var self_tpl = __webpack_require__(52);
	var $ajax = __webpack_require__(3);
	var tmp_path_config = __webpack_require__(4);
	$(function(){
		$("#batch").attr("disabled", true);
		$('#nav-select').delegate('.btn','click',function(){
			$(this).siblings('.btn').removeClass('selected');
			$(this).addClass('selected');
			pram.audit_status = $(this).attr("data_status");
			getData();
		});
		$('#right-bar-container').delegate('.select-all','click',function(){
			if(!$(this).prop("checked")) {
				$("[name = selectItem]:checkbox").prop("checked", false);
				$("#batch").attr("disabled", true);
			} else {
				$("[name = selectItem]:checkbox").prop("checked", true);
				$("#batch").attr("disabled", false);
			}
			// $("[name = selectItem]:checkbox").each(function () {
	  //           $(this).prop("checked", !$(this).prop("checked"));
	  //       });
		});
		// 处理多选框
		$("#table-container").on("click", "input:checkbox", function(){
			if($("input[name='selectItem']:checked").length !=0){
				$("#batch").attr("disabled", false);
			}else{
				$("#batch").attr("disabled", true);
			};
		});
		// 获取所有等级
		var tpl = '{{~ it:item:index }}\
					<option value="{{= item.id}}">{{= item.name}}</option>\
			  {{~}}';
		function cate() {
			$ajax.post('/agent/agent_grade/list.do',{},function(data){
				if (data.code == "10000") {
					$('#all_level').append(doT.template(tpl)(data.data));
				};
			});
		};
		cate();

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
	    var pram = {
	    	real_name: "",
	    	cross_level: "",
	    	agent_grade: "",
	    	start_time: "",
	    	end_time: "",
	    	audit_status: "",

			current_page: 1,
			page_size: 10,
			pageCount: ""
		};
		
		$("#search").on("click", function(){
			pram.real_name = $("#name").val().trim();
			pram.cross_level = $("#cross_level option:checked").attr("value") ? $("#cross_level option:checked").attr("value") : '';
			pram.agent_grade = $("#all_level option:checked").attr("value") ? $("#all_level option:checked").attr("value") : '';
			pram.start_time = $("#start-time").val();
			pram.end_time = $("#end-time").val();
			getData();
		});
		// function getAgencyCheckList() {
			
		// 	$ajax.ajaxPost('/agent/agent_upgrade/get_list.do', pram, function(data) {
		// 		pram.pageCount =  Math.ceil(data.data.total_count / pram.page_size);
		// 		$("#pager").pager({ pagenumber: pram.current_page, pagecount: pram.pageCount, buttonClickCallback: PageClick});
		// 		$('#table-container').html(doT.template(self_tpl.agencyCheckTpl)(data.data));
				
		// 	})
		// }
		// function PageClick (pageclickednumber) {
		// 	listPram.current_page = pageclickednumber;
		// 	getData();
		// };
		// getAgencyCheckList();

		getData();
		function getData(){
			// pram.name = $("#user-nickName").val().trim();
			// pram.real_name = $("#user-name").val().trim();
			// pram.mobile = $("#user-phone").val().trim();
			// pram.wechat_id = $("#user-weChat").val().trim();
			// pram.authon_personalid = $("#user-id").val().trim();
			// pram.agent_grade = $("#all-level").val();
			loadingIndex = __webpack_require__(18).open();
			$ajax.ajaxPost('/agent/agent_upgrade/get_list.do', pram, 
				function(data){
					if (data.success) {
						__webpack_require__(18).close(loadingIndex);
						if(data.data.datas) {
							$('#nodata-tips').hide();
							pram.pageCount = Math.ceil(data.data.total_count / pram.page_size);
							$("#pager").pager({ pagenumber: pram.current_page, pagecount: pram.pageCount, buttonClickCallback: PageClick,totalCounts: data.data.total_count});
							$('#table-container').html(doT.template(self_tpl.agencyCheckTpl)(data.data));
							$("#pager").show();
						} else {
							$('#nodata-tips').show();
							$('#table-container').html('');
							$("#pager").hide();
						}
					};
					$("#batch").attr("disabled", "true");
			});
		};
		function PageClick (pageclickednumber) {
			pram.current_page = pageclickednumber;
			getData();
		};
		// 审核通过和拒绝
		// 批量审核通过
		var cotent = [];
		$("#batch").on("click", function(){
			var items = $("input[name='selectItem']:checked");
			var itemLen = items.length;
			for(var i =0; i< itemLen; i++){
				cotent.push($(items[i]).attr("data_id"));
			};
			$ajax.ajaxPost('/agent/agent_upgrade/batch_audit.do', {cotent: JSON.stringify(cotent)}, 
				function(data){
					if (data.success) {
						location.reload();
					};
					getData();
			});
		});
		
		var pramRefuse = {
			audit_status: 4,
			remark: "",
			application_no: ""
		};
		$("#table-container").on("click", ".force_refuse, .refuse", function(){
			pramRefuse.application_no = parseInt($(this).attr("data_id"));
			pramRefuse.audit_status = '4';
			$('#nopass-modal').modal('show');
		});
		$(".btn-primary:first-child").on("click", function(){
			pramRefuse.remark = $("textarea").val().trim();
			layer.confirm('确定要执行操作吗？', {
			  btn: ['确定','取消'] //按钮
			}, function(){
			  $ajax.ajaxPost('/agent/agent_upgrade_audit/add_audit.do', pramRefuse, 
				function(data){
					if (data.success) {
						$('#nopass-modal').modal('hide');
						// layer.msg('拒绝成功！');
						location.reload();
					};
					getData();
				});
			});
		});
		// 通过
		// var pramRefuse = {
		// 	audit_status: '3',
		// 	application_no: ""
		// };
		$("#table-container").on("click", ".force_agree, .agree", function(){
			pramRefuse.application_no = parseInt($(this).attr("data_id"));
			pramRefuse.audit_status = '3';
			layer.confirm('确定要执行操作吗？', {
			  btn: ['确定','取消'] //按钮
			}, function(){
			  $ajax.ajaxPost('/agent/agent_upgrade_audit/add_audit.do', pramRefuse, 
				function(data){
					if (data.success) {
						layer.close(layer.index);
						layer.msg('成功！');
						getData();
					}else{
						if(data.code == "30075" || data.code == "30077"){
							layer.msg( data.msg, {
							  time: 5000 //2秒关闭（如果不配置，默认是3秒）
							});
						}
					};
				});
			});
		});
		$('#right-bar-container').delegate('.pass-btn','click',function(){
			// layer.confirm('确定要执行操作吗？', {
			//   btn: ['确定','取消'] //按钮
			// }, function(){
			//   // layer.msg('的确很重要', {icon: 1});
			// }, function(){
			//   // layer.msg('的确很重要', {icon: 1});
			// });
		});
		$('#right-bar-container').delegate('.nopass-btn','click',function(){
			
		});
		$('#right-bar-container').delegate('.detail-btn','click',function(){
			$('#user-info-modal').modal('show');
		});


		$("#exports-btn").click(function(){
			var pramPage = pram;
			pramPage.is_all = $("#exports-select").val();
			// pramPage.current_page = pram.current_page;
			// pramPage.page_size = pram.page_size;
			// var link = tmp_path_config.api_path_1 + "/agent/agent_upgrade/export.do?is_all=" + pramPage.is_all +　"&current_page=" + pramPage.current_page + "&page_size=" + pramPage.page_size;
			var link = __webpack_require__(12).doExports(tmp_path_config.api_path_1, '/agent/agent_upgrade/export.do', pramPage);
			window.location.href = link;
		});
	});

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

	var self_tpl = {
		'agencyCheckTpl': '<thead>\
							<tr>\
							  <th><input type="checkbox" class="select-all" id="select-all"></th>\
							  <th>申请时间</th>\
							  <th>姓名</th>\
							  <th>等级</th>\
							  <th>是否跨级</th>\
							  <th>申请等级</th>\
							  <th>现直属</th>\
							  <th>升级后直属</th>\
							  <th>打款金额</th>\
							  <th>状态</th>\
							  <th>操作</th>\
							</tr>\
						  </thead>\
						  <tbody>\
						  {{~ it.datas:item:index}}\
							<tr data-id="">\
							  <td><input type="checkbox" name="selectItem" data_id="{{= item.id}}"></td>\
							  <td>{{= item.create_time || ""}}</td>\
							  <td>\
							  <a href="agent-detail.html?id={{= item.member_id}}" target="_blank">{{= item.real_name}}</a>\
							  </td>\
							  <td>{{= item.grade_name || ""}}</td>\
							  <td>\
								{{? item.cross_level == 0}}\
									是\
								{{?? item.cross_level == 1}}\
									否\
								{{?}}\
							  </td>\
							  <td>{{= item.new_agent_grade_name || ""}}</td>\
							  <td>\
							  {{? item.parent_member_id != 1}}<a href="agent-detail.html?id={{= item.parent_member_id}}" target="_blank">{{= item.parent_name}}</a>{{??}}{{= item.parent_name}}{{?}}\
							  </td>\
							  <td>\
							  {{? item.new_parent_member_id != 1}}<a href="agent-detail.html?id={{= item.new_parent_member_id}}" target="_blank">{{= item.new_parent_name}}</a>{{??}}{{= item.new_parent_name}}{{?}}\
							  </td>\
							  <td>{{? item.payment_amount}}{{= item.payment_amount}}{{??}}-{{?}}</td>\
							  <td>\
									{{? item.audit_status == 8}}\
										待原上级审核\
									{{?? item.audit_status == 1}}\
										待总部审核\
									{{?? item.audit_status == 2}}\
										新上级拒绝\
									{{?? item.audit_status == 3}}\
										审核通过\
									{{?? item.audit_status == 4}}\
										总部拒绝\
									{{?? item.audit_status == 5}}\
										{{? item.new_parent_member_id == 1}}\
											待平台审核\
										{{??}}\
											{{? item.new_parent_member_id == item.parent_member_id}}\
											待平台审核\
											{{??}}\
											待新上级审核\
											{{?}}\
										{{?}}\
									{{?? item.audit_status == 6}}\
										原上级拒绝\
									{{?? item.audit_status == 9}}\
										待总部审核\
									{{?}}\
							  </td>\
							  <td>\
									{{? item.audit_status == 1 || item.audit_status == 9}}\
									<a class="force_agree" data_id="{{= item.id}}">同意&nbsp;&nbsp;</a>\
									<a class="force_refuse" data_id="{{= item.id}}">拒绝&nbsp;&nbsp;</a>\
									{{?}}\
									{{? item.audit_status == 8}}\
									<a class="force_agree" data_id="{{= item.id}}">强制同意&nbsp;&nbsp;</a>\
									<a class="force_refuse" data_id="{{= item.id}}">强制拒绝&nbsp;&nbsp;</a>\
									{{?}}\
									{{? item.audit_status == 5}}\
										{{? item.new_parent_member_id == 1}}\
											<a class="force_agree" data_id="{{= item.id}}">同意&nbsp;&nbsp;</a>\
											<a class="force_refuse" data_id="{{= item.id}}">拒绝&nbsp;&nbsp;</a>\
										{{??}}\
											{{? item.new_parent_member_id == item.parent_member_id}}\
												<a class="force_agree" data_id="{{= item.id}}">同意&nbsp;&nbsp;</a>\
												<a class="force_refuse" data_id="{{= item.id}}">拒绝&nbsp;&nbsp;</a>\
											{{??}}\
												<a class="force_agree" data_id="{{= item.id}}">强制同意&nbsp;&nbsp;</a>\
												<a class="force_refuse" data_id="{{= item.id}}">强制拒绝&nbsp;&nbsp;</a>\
											{{?}}\
										{{?}}\
									{{?}}\
									<a class="detail" data_id="{{= item.id}}" href="agent-upgrade-detail.html?id={{= item.id}}" target="_blank">详情</a>\
							  </td>\
							</tr>\
							{{~}}\
						  </tbody>'
		,'detailTpl': '<div>\
							<span>目前等级：{{= it.member.grade_name}}</span><span style="margin: 0 20px;">申请级别：{{= it.member.new_agent_grade_name}}</span><span>升级金额：￥{{= it.member.payment_amount}}</span>\
							<div class="img-info">\
								<div class="item">身份信息\
									<img src="{{= it.upload_path_h5}}{{= it.member.picture_front}}" class="img_ifram" alt="">\
								</div>\
								<div class="item">打款截图\
									<img src="{{= it.upload_path_h5}}{{= it.member.payment_voucher}}" class="img_ifram" alt="">\
								</div>\
							</div>\
						</div>\
						<table class="table table-bordered">\
							<thead>\
								<tr>\
								  <th>申请人信息</th>\
								  <th>现直属上级信息</th>\
								  <th>升级后直属上级信息</th>\
								</tr>\
							</thead>\
							<tbody>\
								<tr>\
								  <td>姓名：{{= it.member.name}}</td>\
								  <td>姓名：{{= it.parent_member.name}}</td>\
								  <td>姓名：{{= it.new_parent_member.name}}</td>\
								</tr>\
								<tr>\
								  <td>手机号：{{= it.member.mobile}}</td>\
								  <td>手机号：{{? it.parent_member.agent_grade != 0}}{{= it.parent_member.mobile}}{{??}}-{{?}}</td>\
								  <td>手机号：{{? it.new_parent_member.agent_grade != 0}}{{= it.new_parent_member.mobile}}{{??}}-{{?}}</td>\
								</tr>\
								<tr>\
								  <td>微信号：{{= it.member.wechat_id}}</td>\
								  <td>微信号：{{? it.parent_member.agent_grade != 0}}{{= it.parent_member.wechat_id}}{{??}}-{{?}}</td>\
								  <td>微信号：{{? it.new_parent_member.agent_grade != 0}}{{= it.new_parent_member.wechat_id}}{{??}}-{{?}}</td>\
								</tr>\
								<tr>\
								  <td>级别：{{= it.member.grade_name}}</td>\
								  <td>级别：{{? it.parent_member.agent_grade != 0}}{{= it.parent_member.grade_name}}{{??}}-{{?}}</td>\
								  <td>级别：{{? it.new_parent_member.agent_grade != 0}}{{= it.new_parent_member.grade_name}}{{??}}-{{?}}</td>\
								</tr>\
								<tr>\
								  <td>地址：{{= it.member.address}}</td>\
								  <td>地址：{{? it.parent_member.agent_grade != 0}}{{= it.parent_member.address}}{{??}}-{{?}}</td>\
								  <td>地址：{{? it.new_parent_member.agent_grade != 0}}{{= it.new_parent_member.address}}{{??}}-{{?}}</td>\
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
							    {{~ it.audit_result:item:index }}\
								<tr>\
								  <td>{{= item.real_name}}</td>\
								  <td>{{= item.create_date}}</td>\
								  <td>\
									{{? item.remark}}\
										{{= item.remark}}\
									{{??}}\
										提交成功\
									{{?}}\
								  </td>\
								  <td>\
									{{? item.audit_status == 8}}\
										待原上级审核\
									{{?? item.audit_status == 9}}\
										待总部审核\
									{{?? item.audit_status == 1}}\
										待总部审核\
									{{?? item.audit_status == 2}}\
										新上级拒绝\
									{{?? item.audit_status == 3}}\
										审核通过\
									{{?? item.audit_status == 4}}\
										总部拒绝\
									{{?? item.audit_status == 5}}\
										{{? item.new_parent_member_id == item.original_parent_member_id}}\
										待平台审核\
										{{??}}\
										待新上级审核\
										{{?}}\
									{{?? item.audit_status == 6}}\
										原上级拒绝\
									{{?}}\
								  </td>\
								</tr>\
								{{~}}\
							  </tbody>\
							</table>\
						</div>'
	};
	module.exports = self_tpl;


/***/ })

/******/ });