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

	module.exports = __webpack_require__(32);


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

/***/ 16:
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

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

	$(function(){
		var self_tpl = __webpack_require__(33);
		var $ajax = __webpack_require__(3);
		var imgUpload = __webpack_require__(16);
	//	var team_level = require('../../common/team-level.js');
	//	team_level.level();
		var listPram = {
			current_page: 1,
			page_size: 20,
			pageCount: ""
		};
	//	$("#searcher").click(function(){
	//		listPram.current_page = 1;
	//		getData();
	//	});

		getData();
		function getData(){
	//		listPram.name = $("#user-nickName").val().trim();
	//		listPram.real_name = $("#user-name").val().trim();
	//		listPram.mobile = $("#user-phone").val().trim();
	//		listPram.wechat_id = $("#user-weChat").val().trim();
	//		listPram.authon_personalid = $("#user-id").val().trim();
	//		listPram.agent_grade = $("#all-level").val();
			$ajax.ajaxPost('/memberSign/list.do ', listPram,
			//$.post('http://bsstest.hanshuweishang.com/leaf_manager_web/memberSign/list.do', listPram,
				function(data){
					if (data.datas) {
						$("#table-body tr, p.prompt").remove();
						$("#pager").css("display", "block");
						listPram.pageCount = Math.ceil(data.total_count / listPram.page_size);
						$("#pager").pager({ pagenumber: listPram.current_page, pagecount: listPram.pageCount, buttonClickCallback: PageClick,totalCounts: data.datas.total_count});
						$('#table-body').html(doT.template(self_tpl.accountListTpl)(data.datas));
					}else{
						$("#table-body tr, p.prompt").remove();
						$("#pager").css("display", "none");
						$('.user-container').append("<p class='prompt'>暂无数据</p>");
					}
			});
		};
		function PageClick (pageclickednumber) {
			listPram.current_page = pageclickednumber;
			getData();
		};
	});


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


/***/ })

/******/ });