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

	module.exports = __webpack_require__(42);


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


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

	var self_tpl = __webpack_require__(41);
	var $ajax = __webpack_require__(3);
	var imgUpload = __webpack_require__(16);
	var httpURL = __webpack_require__(6);
	var api_path_config = __webpack_require__(4);
	$(function(){
		var agentId = httpURL.getQueryString('id');
		var ue1;
		var ue2;
		// UE.Editor.prototype._bkGetActionUrl = UE.Editor.prototype.getActionUrl;
		// UE.Editor.prototype.getActionUrl = function(action) {
		// 	if (action == 'uploadimage' || action == 'uploadscrawl' || action == 'uploadvideo') {
		// 		// return '${ctx}/manage/attach/uploadFile.do';
		// 		return 'http://192.168.8.143:8061/leaf-manager-web/file/uploadFile.do';
		// 	} else {
		// 		return this._bkGetActionUrl.call(this, action);
		// 	}
		// }
		if(!agentId) {
			$('#right-bar-container').show();
			initParentLevel();
			ue1 = UE.getEditor('application_des', {
				toolbars: [[
					// 'fullscreen', 'source', '|', 'undo', 'redo', '|',
					'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
					// 'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
					, 'fontfamily', 'fontsize', '|',
					// 'directionalityltr', 'directionalityrtl', 'indent', '|',
					'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify'//,
					//'simpleupload'
					// 'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
					// 'simpleupload', 'insertimage', 'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'map', 'gmap', 'insertframe', 'insertcode', 'webapp', 'pagebreak', 'template', 'background', '|',
					// 'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
					// 'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
					// 'print', 'preview', 'searchreplace', 'drafts', 'help'
				]],
				autoHeightEnabled: false,
				autoFloatEnabled: true,
				initialFrameHeight: 100,
				initialFrameWidth:500,
				serverUrl: api_path_config.ueupload_path
			});
			ue2 = UE.getEditor('upgrade_des', {
				toolbars: [[
					// 'fullscreen', 'source', '|', 'undo', 'redo', '|',
					'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
					// 'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
					, 'fontfamily', 'fontsize', '|',
					// 'directionalityltr', 'directionalityrtl', 'indent', '|',
					'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify'//,
					//'simpleupload'
					// 'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
					// 'simpleupload', 'insertimage', 'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'map', 'gmap', 'insertframe', 'insertcode', 'webapp', 'pagebreak', 'template', 'background', '|',
					// 'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
					// 'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
					// 'print', 'preview', 'searchreplace', 'drafts', 'help'
				]],
				autoHeightEnabled: false,
				autoFloatEnabled: true,
				initialFrameHeight: 100,
				initialFrameWidth:500
			});
		} else {
			$ajax.ajaxPost('/agent/agent_grade/get.do', {id: agentId}, function(data) {
				if(data.success) {
					$('#right-bar-container').html(doT.template(self_tpl.gradeSettingTpl)(data.data));
					initCanDevelepLevel(agentId);
					ue1 = UE.getEditor('application_des', {
						toolbars: [[
							// 'fullscreen', 'source', '|', 'undo', 'redo', '|',
							'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
							// 'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
							, 'fontfamily', 'fontsize', '|',
							// 'directionalityltr', 'directionalityrtl', 'indent', '|',
							'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify'//,
							//'simpleupload'
							// 'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
							// 'simpleupload', 'insertimage', 'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'map', 'gmap', 'insertframe', 'insertcode', 'webapp', 'pagebreak', 'template', 'background', '|',
							// 'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
							// 'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
							// 'print', 'preview', 'searchreplace', 'drafts', 'help'
						]],
						autoHeightEnabled: false,
						autoFloatEnabled: true,
						initialFrameHeight: 100,
						initialFrameWidth:500
					});
					ue2 = UE.getEditor('upgrade_des', {
						toolbars: [[
							// 'fullscreen', 'source', '|', 'undo', 'redo', '|',
							'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
							// 'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
							, 'fontfamily', 'fontsize', '|',
							// 'directionalityltr', 'directionalityrtl', 'indent', '|',
							'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify'//,
							//'simpleupload'
							// 'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
							// 'simpleupload', 'insertimage', 'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'map', 'gmap', 'insertframe', 'insertcode', 'webapp', 'pagebreak', 'template', 'background', '|',
							// 'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
							// 'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
							// 'print', 'preview', 'searchreplace', 'drafts', 'help'
						]],
						autoHeightEnabled: false,
						autoFloatEnabled: true,
						initialFrameHeight: 100,
						initialFrameWidth:500
					});
					ue1.ready(function() {
						ue1.setContent(data.data.application_des, false);
					});
					ue2.ready(function() {
						ue2.setContent(data.data.upgrade_des, false);
					});
					$('#right-bar-container').show();
				}
			});
		}
		//新建，所属等级
		function initParentLevel() {
			$ajax.ajaxPost('/agent/agent_grade/parent.do', null, function(data) {
				$('#parent_id').html(doT.template(self_tpl.optionTpl)(data.data));
			});
		}
		//编辑，可招募等级
		function initCanDevelepLevel(id) {
			$ajax.ajaxPost('/agent/agent_grade/allow.do', {id:id}, function(data) {
				$('#allow_grade').html(doT.template(self_tpl.allow_grade)(data.data));
			});
		}
		function subLevel() {
			$ajax.ajaxPost('/agent/agent_grade/list.do', null, function(data) {
				$('#allow_grade').html(doT.template(self_tpl.subLevelTpl)(data.data));
			});
		}
		$('#right-bar-container').delegate('#price-tab','focus',function(){
			imgUpload.init(imgUploadAfter);
		});
		$('#right-bar-container').delegate('#tips-close','click',function(){
			$(this).closest('.tips').remove();
		});
		function imgUploadAfter(value) {
			$('#price-tab').val(value);
		}
		var valiMsg = '';
		function validateForm() {
			//正数，支持两位小数
			function sumValidate(value) {
				var isValid = false;
				var re = /^\d{1,8}(\.(\d{1,2})?)?$/;
				if(re.test(value)){
					isValid = true;
				};
				return isValid;
			}
			if($('#level_name').val() === '') {
				valiMsg = '请输入级别名称！';
				return;
			}
			if($('#auth_amount').val() === '') {
				valiMsg = '请输入授权金额！';
				return;
			} else {
				if(!sumValidate($('#auth_amount').val())) {
					valiMsg = '授权金额必须为正数(支持两位小数)';
					return;
				}
			}
			if($('#upgrade_amount').val() === '') {
				valiMsg = '请输入升级金额！';
				return;
			} else {
				if(!sumValidate($('#upgrade_amount').val())) {
					valiMsg = '升级金额必须为正数(支持两位小数)';
					return;
				}
			}
			if(!sumValidate($('#warning_line').val())) {
				valiMsg = '预警线必须为正数(支持两位小数)';
				return;
			}
		}
		$('#right-bar-container').delegate('#save-btn','click',function(){
			// alert(ue.getContent())
			valiMsg = '';
			validateForm()
			if(valiMsg) {
				layer.msg(valiMsg);
				return;
			}
			var param = {
				name: $('#level_name').val(),
				auth_amount: $('#auth_amount').val(),
				upgrade_amount: $('#upgrade_amount').val(),
				allow_shipment: $('#allow_shipment').is(':checked') ? 0 : 1,
				allow_upgrade: $('#allow_update option:checked').val(),
				status: $('#status option:checked').val(),
				application_des: ue1.getContent(),
				upgrade_des: ue2.getContent(),
				price_uri: $('#price-tab').val(),
				need_idcard: $('#need_idcard').is(':checked') ? 0 : 1,
				payment_voucher: $('#payment_voucher').is(':checked') ? 0 : 1,
				parent_id: $('#parent_id option:checked').val(),
				warning_line: $('#warning_line').val()
			}
			if(agentId) {
				param.id = agentId;
				//可招募等级
				var allowGrade = [];
				$('#allow_grade .item:checked').each(function(){
					allowGrade.push($(this).val());
				});
				param.allow_grade = allowGrade.join('#');
			}
			$ajax.ajaxPost('/agent/agent_grade/save.do', param, function(data) {
				if(data.success) {
					location.href = 'agent-grade-management.html';
				} else {
					if(data.code === '40001'){
						layer.msg(data.msg);
					}
				}
			});
		});
	});

/***/ })

/******/ });