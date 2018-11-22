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

	module.exports = __webpack_require__(15);


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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var tpl = '<option value="0">所有等级</option>\
			  {{~ it:item:index }}\
					<option value="{{= item.id}}">{{= item.name}}</option>\
			  {{~}}';
	var tpl2 = '<option value="">所有等级</option>\
			  {{~ it:item:index }}\
					<option value="{{= item.id}}">{{= item.name}}</option>\
			  {{~}}';
	var $ajax = __webpack_require__(3);


	function selectEvent() {
		$('#all-team').change(function(){
			if($(this).val() === '0') {
				$('#all-team-child').hide().html('');
				return;
			}
			$('#all-team-child').show();
			$ajax.post('/getTeamChild.do',null,function(data){
				$('#all-team-child').html(doT.template(tpl)(data.data))
			});
		});
	}
	function team() {
		selectEvent();
		$ajax.post('/getTeam.do',null,function(data){
			$('#all-team').html(doT.template(tpl)(data.data))
		});
	}

	function level() {
		$ajax.post('/agent/agent_grade/list.do',null,function(data){
			$('#all-level').html(doT.template(tpl)(data.data))
		});
	}
	function level2() {
		$ajax.post('/agent/agent_grade/list.do',null,function(data){
			$('#all-level').html(doT.template(tpl2)(data.data))
		});
	}
	exports.team = team;
	exports.level = level;
	exports.level2 = level2;

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	$(function(){
		var self_tpl = __webpack_require__(2);
		var $ajax = __webpack_require__(3);
		var imgUpload = __webpack_require__(16);
		var team_level = __webpack_require__(10);
		team_level.level();
		var listPram = {
			real_name: "",
			name: "",
			mobile: "",
			wechat_id: "",
			authon_personalid: "",
			agent_grade: "",
			current_page: 1,
			page_size: 20,
			pageCount: ""
		};
		$("#searcher").click(function(){
			listPram.current_page = 1;
			getData();
		});

		// getData();
		function getData(){
			listPram.name = $("#user-nickName").val().trim();
			listPram.real_name = $("#user-name").val().trim();
			listPram.mobile = $("#user-phone").val().trim();
			listPram.wechat_id = $("#user-weChat").val().trim();
			listPram.authon_personalid = $("#user-id").val().trim();
			listPram.agent_grade = $("#all-level").val();
			$ajax.ajaxPost('/agent/agent_list/get_list.do', listPram, 
				function(data){
					if (data.success) {
						if (data.data.total_count) {
							$("#table-body tr, p.prompt").remove();
							$("#pager").css("display", "block");
							listPram.pageCount = Math.ceil(data.data.total_count / listPram.page_size);
							$("#pager").pager({ pagenumber: listPram.current_page, pagecount: listPram.pageCount, buttonClickCallback: PageClick,totalCounts: data.data.total_count});
							$('#table-body').html(doT.template(self_tpl.accountListTpl)(data.data.datas));
						}else{
							$("#table-body tr, p.prompt").remove();
							$("#pager").css("display", "none");
							$('.user-container').append("<p class='prompt'>暂无数据</p>");
						}
						
					};
			});
		};
		function PageClick (pageclickednumber) {
			listPram.current_page = pageclickednumber;
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
				$ajax.post('', {}, function(data) {
					
				});
			});
		});
		
		/**
		 *	功能：余额调整
		 *	
		 *
		*/

		var pram = {
			member_id : "",
			amount: "",
			adjust_type: "",
			biz_desc: ""
		};

		// 触发弹框 获取展示信息
		$(".user-container").on("click", ".balance-adjust", function(){
			$("#adjust_money").val("");
			$("#reason").val("");
			$("#left_money").text("");
			$('#myModal').modal();
			pram.member_id  = $(this).attr("user_id");
			$("#adjustUserName").text($(this).attr("user_name"));
			$("#adjustCurrentBalance").text($(this).attr("user_money"));
		});

		// 调整金额校验
		$("#adjust_money").keyup(function(){
			var value = $("#adjust_money").val();
			var re = /^\d{1,100}(\.(\d{1,2})?)?$/;
			if(!re.test(value)){
				$("#adjust_money").val("");
			};
			var max = parseFloat($("#adjustCurrentBalance").text());
			current = parseFloat(value);
			var status = $("#status").val();
			if(current > max && status == 17){
				$("#adjust_money").val("");
			};
		});
		$("#adjust_money").blur(function(){
			var numPre = parseFloat($("#adjustCurrentBalance").text());
			var num = parseFloat($("#adjust_money").val());
			if(!num){
				return;
			}
			var statu = $("#status").val();
			if(statu == "16"){
				$("#left_money").text(numPre + num);
			}else if(statu == "17"){
				$("#left_money").text(numPre - num);
			};
			
		});
		// 调整类型改变
		$("#status").change(function(){
		  	$("#adjust_money").val("");
		});
		// $("#table-body").on("click","#user-dele", function(){
		// 	var id = $(this).attr("data-id");
		// 	var enable = $(this).attr("data-status");
		// 	//询问框
		// 	layer.confirm('确定要删除该管理帐号吗？', {
		// 	  btn: ['确定','取消'] //按钮
		// 	}, function(index){
		// 		$ajax.post('', {}, function(data) {
					
		// 		});
		// 	});
		// });

		// 关闭弹框 发送输入信息
		$("#close").on("click", function(){
			if($("#reason").val().length > 0){
				pram.adjust_type = $("#status").val();
				pram.amount = $("#adjust_money").val();
				if (pram.amount == 0) {
					layer.msg("不能为空！");
				};
				pram.biz_desc = $("#reason").val();
				$ajax.ajaxPost('/account/adjust/change.do', pram, 
					function(data){
						if (data.success) {
							$('#myModal').modal('hide');
							layer.msg("账户调整成功！");
							getData();
						};
				});
				$("#adjust_money").val("");
				$("#reason").val("");
			}else{
				layer.msg("调整理由不能为空！");
			};
		});

	});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var $ajax = __webpack_require__(3);
	var imgUploadModalTpl = '<div class="modal fade" tabindex="-1" role="dialog" id="img-upload-modal">\
								<div class="modal-dialog" role="document">\
									<div class="modal-content">\
									  <div class="modal-header">\
										<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
										<h4 class="modal-title">选择图片</h4>\
									  </div>\
									  <div class="modal-body">\
										<div class="btn-group nav-select" id="img-tool-select">\
										  <a type="button" class="btn btn-default active" href="javascript:void(0)">选择</a>\
										  <a type="button" class="btn btn-default" href="javascript:void(0)">上传</a>\
										  <a type="button" class="btn btn-default" href="javascript:void(0)">网络</a>\
										</div>\
										<div class="modal-tab img-item">\
											<div class="img-item-container">\
											</div>\
											<nav aria-label="...">\
											  <ul class="pager">\
											  </ul>\
											</nav>\
										</div>\
										<div class="modal-tab img-upload" style="display: none;">\
											<div class="form-inline">\
											  <div class="form-group">\
												<input type="text" class="form-control thumbnail-input" imgsrc="">\
											  </div>\
											  <div class="form-group">\
												<div class="btn-success" id="picker">浏览</div>\
											  </div>\
											</div>\
											<div class="form-inline upload-btn">\
											  <div class="form-group">\
												<button type="button" class="btn btn-success" id="confirm-upload">上传图片</button>\
											  </div>\
											</div>\
										</div>\
										<div class="modal-tab img-network" style="display: none;">\
											<div class="form-inline">\
											  <div class="form-group">\
												<p class="form-control-static">图片地址：</p>\
											  </div>\
											  <div class="form-group">\
												<input type="text" class="network-img-input">\
											  </div>\
											</div>\
											<div class="form-inline use-btn">\
											  <div class="form-group">\
												<button type="button" class="btn btn-success use-network-img">使用该图片</button>\
											  </div>\
											</div>\
										</div>\
									  </div>\
									</div>\
								</div>\
							  </div>';
	var pagerTpl = '<li data-flag="last" style="display:inline-block;"><a href="javascript:void(0)" style="background:{{? it.current_page != 1}}#5cb85c{{??}}gray{{?}};color:#fff;">上一页</a></li>\
					<li data-flag="next" style="display:inline-block;"><a href="javascript:void(0)" style="background:{{? it.total_page != it.current_page}}#5cb85c{{??}}gray{{?}};color:#fff;">下一页</a></li>';
	var imgItemTpl = '{{~ it.imgList:item:index }}\
						{{? index < 12}}\
						 <img class="uploaded-img" src="{{= it.upload_path}}{{= item.image}}" alt="" data-imgurl="{{= item.image}}">\
						 {{?}}\
					 {{~}}';
	var api_path_config = __webpack_require__(4);
	// 优化retina, 在retina下这个值是2
	var ratio = window.devicePixelRatio || 1,
	    // 缩略图大小
	    thumbnailWidth = 100 * ratio,
	    thumbnailHeight = 100 * ratio,
	    // Web Uploader实例
	    uploader;
	var pagerConfig = {
		current_page: 1,
		page_size: 12,
		total_page: null
	}
	function initUploader(callback, isAutoUpload) {
	    // $('#uploader-container').html('<div id="gridFileList"></div><div id="picker">选择图片</div>');
	    // 初始化Web Uploader
	    uploader = WebUploader.create({
	        // 自动上传。
	        auto: isAutoUpload,
	        // swf文件路径
	        //swf: BASE_URL + '/js/Uploader.swf',
	        // 文件接收服务端。
	        // server: 'http://media.haiyn.com/upload.php',
	        server: api_path_config.webupload_path,//'http://192.168.8.143:8061/leaf-manager-web/file/upload.do',
	        // formData: {
	        //     user_id: 1,
	        //     biz_code: 'hanshu'
	        // },
	        // 选择文件的按钮。可选。
	        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
	        pick: {
	            id: '#picker',
	            multiple: false
	        },
	        // 只允许选择文件，可选。
	        accept: {
	            title: 'Images',
	            extensions: 'gif,jpg,jpeg,bmp,png',
	            // mimeTypes: 'image/*'
	            mimeTypes: 'image/jpg,image/png'
	        }
	    });
	    $("#picker").mouseenter(function() {
	        if (uploader) {
	            uploader.refresh();
	        }
	    });
	    // 当有文件添加进来的时候
	    uploader.on('fileQueued', function(file) {
	        
	        var $img = $('#img-upload-modal .thumbnail-input');
	        // 创建缩略图
	        uploader.makeThumb(file, function(error, src) {
	            if (error) {
	                $img.replaceWith('<span>不能预览</span>');
	                return;
	            }
	            $img.val(src);
	        }, thumbnailWidth, thumbnailHeight);
	    });
	    // 文件上传过程中创建进度条实时显示。
	    uploader.on('uploadProgress', function(file, percentage) {
	        var $li = $('#' + file.id),
	            $percent = $li.find('.progress span');

	        // 避免重复创建
	        if (!$percent.length) {
	            $percent = $('<p class="progress"><span></span></p>')
	                .appendTo($li)
	                .find('span');
	        }
	        $percent.css('width', percentage * 100 + '%');
	    });
	    // 文件上传成功，给item添加成功class, 用样式标记上传成功。
	    uploader.on('uploadSuccess', function(file, res) {
	        var imgSrc = res.data;
	        uploader = null;
	        var $img = $('#img-upload-modal .thumbnail-input');
	        $img.attr('imgsrc', imgSrc);
	        $('#img-upload-modal').modal('hide');
	        callback(imgSrc);
	    });
	    // 文件上传失败，现实上传出错。
	    uploader.on('uploadError', function(file) {
	        var $li = $('#' + file.id),
	            $error = $li.find('div.error');
	        // 避免重复创建
	        if (!$error.length) {
	            $error = $('<div class="error"></div>').appendTo($li);
	        }
	        $error.text('上传失败');
	    });
	    // 完成上传完了，成功或者失败，先删除进度条。
	    uploader.on('uploadComplete', function(file) {
	        $('#' + file.id).find('.progress').remove();
	    });
	    $('#confirm-upload').click(function() {
	        //console.log("上传...");
	        if (uploader) {
	            uploader.upload();
	        }
	    });
	}
	// function getImgList() {
	// 	$ajax.ajaxPost('/file/list.do', {}, function(data) {
	// 		if(data.success){
	// 			$('#img-upload-modal .img-item-container').html(doT.template(imgItemTpl)(data.data));
	// 			$('#img-upload-modal').modal('show');
	// 			initUploader(callback);
	// 		}
	// 	});
	// }
	var cacheImgList = null;
	function getImgByPage(current_page) {
		var imgList = [];
		for(var i=((current_page-1)*pagerConfig.page_size-1)<0 ? 0:((current_page-1)*pagerConfig.page_size-1) ,j=0; i<cacheImgList.length,j<pagerConfig.page_size; i++,j++){
			if(cacheImgList[i]){
				imgList.push(cacheImgList[i]);
			}
		}
		return imgList;
	}
	function init(callback) {
		$('#img-select-modal-container').html(imgUploadModalTpl);
		// getImgList();
		$ajax.ajaxPost('/file/list.do', {}, function(data) {
			if(data.success && data.data){
				cacheImgList = data.data.reverse();
				pagerConfig.total_page = Math.ceil(data.data.length / pagerConfig.page_size);
				data.upload_path = api_path_config.upload_path;
				data.imgList = getImgByPage(pagerConfig.current_page);
				$('#img-upload-modal .img-item-container').html(doT.template(imgItemTpl)(data));
				$('#img-upload-modal .pager').html(doT.template(pagerTpl)(pagerConfig));
				$('#img-upload-modal').modal('show');
				initUploader(callback);
				$(".webuploader-pick").css("padding","0");
				$(".webuploader-pick").eq(0).css("padding","6px 15px");
			}
		});
		$('#img-tool-select').delegate('a','click',function(){
			$(this).addClass('active').siblings('a').removeClass('active');
			$('#img-upload-modal .modal-tab').hide();
			var selectedTab = $('#img-tool-select a.active').index();
			if(selectedTab === 0) {
				$('#img-upload-modal .img-item').show();
			}
			if(selectedTab === 1) {
				$('#img-upload-modal .img-upload').show();
			}
			if(selectedTab === 2) {
				$('#img-upload-modal .img-network').show();
			}
		});
		$('#img-upload-modal').delegate('.uploaded-img','click',function(){
			$('#img-upload-modal').modal('hide');
			callback($(this).data('imgurl'));
		});
		$('#img-upload-modal .pager').delegate('li','click',function(){
			if($(this).data('flag') === 'next') {
				pagerConfig.current_page++;
			}
			if($(this).data('flag') === 'last') {
				pagerConfig.current_page--;
				if(pagerConfig.current_page < 1) {
					pagerConfig.current_page = 1;
					return;
				}
			}
			// $ajax.ajaxPost('/file/list.do', {}, function(data) {
			// 	if(data.success){
					var data = {};
					data.upload_path = api_path_config.upload_path;
					data.imgList = getImgByPage(pagerConfig.current_page);
					if(data.imgList.length > 0) {
						$('#img-upload-modal .img-item-container').html(doT.template(imgItemTpl)(data));
						$('#img-upload-modal .pager').html(doT.template(pagerTpl)(pagerConfig));
					}
			// 	}
			// });
		});
		$('#img-upload-modal').delegate('.use-network-img','click',function(){
			callback($('#img-upload-modal .network-img-input').val());
			$('#img-upload-modal').modal('hide');
		});
	}
	exports.init = init;

/***/ })
/******/ ]);