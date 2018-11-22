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

	module.exports = __webpack_require__(57);


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

/***/ 55:
/***/ (function(module, exports) {

	var self_tpl = {
		'listTpl': '<thead>\
						<tr>\
						  <th>编号</th>\
						  <th>名称</th>\
						  <th>操作</th>\
						</tr>\
				  	</thead>\
				  	<tbody>\
				  	    {{~ it.datas:item:index }}\
						<tr data-id="{{= item.id}}">\
						  <td>{{= item.id}}</td>\
						  <td>{{= item.name}}</td>\
						  <td><a href="autho-book-setting.html?id={{= item.id}}">编辑</a>&nbsp;<a href="javascript:void(0)" class="preview-btn">预览</a></td>\
						</tr>\
						{{~}}\
				  	</tbody>'
		,'bookDetail': '<div class="btn-group nav-select" id="nav-select">\
						  <a type="button" class="btn btn-default selected" href="javascript:void(0)">授权书设置</a>\
						</div>\
						<br>\
						<br>\
						<div class="form-inline">\
						  <div class="form-group">\
							<p class="form-control-static">名称：</p>\
						  </div>\
						  <div class="form-group">\
							<input type="text" class="form-control" id="bookName" value="{{= it.name}}">&nbsp;&nbsp; <span class="tab-tip">以TAB标签形式前台展示</span>\
						  </div>\
						</div>\
						<div class="book-container" id="book-container">\
							<div class="book-img" id="bookImg" bookimg="{{= it.back_picture}}" style="background: url({{= it.back_picture}}) 0 0 no-repeat;background-size: contain;"></div>\
							<div class="draggable img Hd" id="ele2" data-id="2"><img src="../../images/tuxiang.png" alt=""></div>\
							<div class="draggable title Hd" id="ele3" data-id="3">授权编号</div>\
							<div class="draggable title Hd" id="ele4" data-id="4">姓名</div>\
							<div class="draggable title Hd" id="ele5" data-id="5">微信号</div>\
							<div class="draggable title Hd" id="ele6" data-id="6">微信昵称</div>\
							<div class="draggable title Hd" id="ele7" data-id="7">代理级别</div>\
							<div class="draggable title Hd" id="ele7" data-id="10">代理级别</div>\
							<div class="draggable title Hd" id="ele8" data-id="8">授权开始时间</div>\
							<div class="draggable title Hd" id="ele9" data-id="9">授权结束时间</div>\
						</div>\
						<div class="tools">\
							<button type="button" class="btn btn-success" id="bg-btn">背景图片</button>\
							<button type="button" class="btn btn-success" id="save-btn">保存</button>\
							<button type="button" class="btn btn-success" id="preview-btn">预览</button>\
							<a href="autho-book-list.html" class="btn btn-success">取消</a>\
						</div>'
		,'eleAbosute': 	'{{~ it.list:item:index }}\
							{{? it.eleType[item.type].type=="img"}}\
								{{? item.type== "2"}}\
								<div class="draggable img" id="ele2" data-id="2" style="position: absolute;left: {{= item.x }}px;top: {{= item.y }}px;"><img src="../../images/tuxiang.png" alt=""></div>\
								{{?}}\
							{{?}}\
							{{? it.eleType[item.type].type=="title"}}\
								<div class="draggable title" id="ele{{= item.type}}" data-id="{{= item.type}}" style="position: absolute;left: {{= item.x }}px;top: {{= item.y }}px;">{{= it.eleFlag[item.type].name }}</div>\
							{{?}}\
						{{~}}'
	};
	module.exports = self_tpl;


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

	var self_tpl = __webpack_require__(55);
	var $ajax = __webpack_require__(3);
	var imgUpload = __webpack_require__(16);
	var localStorageTool = __webpack_require__(13);
	var httpURL = __webpack_require__(6);
	var api_path_config = __webpack_require__(4);
	$(function(){
		// var eleIndexArray = ["1","2","3","4","5","6","7","8","9"];
		var eleFlag = {
			'1': {
				'type': 'img',
				'name': '二维码'
			},
			'2': {
				'type': 'img',
				'name': '图像'
			},
			'3': {
				'type': 'title',
				'name': '授权编号'
			},
			'4': {
				'type': 'title',
				'name': '姓名'
			},
			'5': {
				'type': 'title',
				'name': '微信号'
			},
			'6': {
				'type': 'title',
				'name': '微信昵称'
			},
			'7': {
				'type': 'title',
				'name': '代理级别'
			},
			'10': {
				'type': 'title',
				'name': '代理级别'
			},
			'8': {
				'type': 'title',
				'name': '授权开始时间'
			},
			'9': {
				'type': 'title',
				'name': '授权结束时间'
			}
		}
		var eleType = {
			'1': {
				'type': 'img',
			},
			'2': {
				'type': 'img',
			},
			'3': {
				'type': 'title',
			},
			'4': {
				'type': 'title',
			},
			'5': {
				'type': 'title',
			},
			'6': {
				'type': 'title',
			},
			'7': {
				'type': 'title',
			},
			'10': {
				'type': 'title',
			},
			'8': {
				'type': 'title',
			},
			'9': {
				'type': 'title',
			}
		};
		//图片元素宽高缓存 {'1':{'width':**,'height':**}}
		var imgCache = {};
		//文字元素格式缓存 {'3':{'fontFamily':**,'fontSize':**,'color':**}}
		var titleCache = [];
		var saveData = {};
		var itemList = [];
		var bookId = httpURL.getQueryString('id');
		if(!bookId){
			$('#right-bar-container').show();
			initDrag();
		} else {
			$ajax.post('/agent/certificate_template/get.do',{id:bookId},function(data){
				if(data.success) {
					var bookData = data.data;
					// data.data.eleIndexArray = eleIndexArray;
					$('#bookName').val(bookData.name);
					var tempimg = new Image();
					tempimg.src = bookData.back_picture;
					setTimeout(function(){
						$('#bookImg').css({
							'background': 'url(' + bookData.back_picture + ') 0 0 no-repeat',
							'background-size': 'contain',
							'height': tempimg.height
						}).attr('bookimg',bookData.back_picture);
						// $('#book-container').prepend('<div class="book-img" id="bookImg" 				="' + bookData.bookImg + '" style="background: url(' + bookData.bookImg + ') 0 0 no-repeat;background-size: contain;"></div>');
						// $('#right-bar-container').html(doT.template(self_tpl.bookDetail)(data.data));
						var eleData = bookData.list;
						for(var i=0;i<eleData.length;i++) {
							$('#ele' + eleData[i].type).remove();
						}
						bookData.eleType = eleType;
						bookData.eleFlag = eleFlag;
						var innerHTML = doT.template(self_tpl.eleAbosute)(bookData);
						$('#img-format-container').before(innerHTML);
						$('#book-container .Hd').removeClass('Hd');
						$('#right-bar-container').show();
						initDrag();
						initCache(eleData);
					},1000);
				}
			});
		}
		
		function initDrag(eleData) {
			var $draggables = $('.draggable').draggabilly({
				// contain to parent element
				containment: true
			});
		}
		function initCache(eleData) {
			for(var i=0;i<eleData.length;i++) {
				if(eleType[eleData[i].type].type === 'img') {
					imgCache[eleData[i].type] = {};
					imgCache[eleData[i].type].width = eleData[i].width;
					imgCache[eleData[i].type].height = eleData[i].height;
				}
				if(eleType[eleData[i].type].type === 'title') {
					titleCache[eleData[i].type] = {};
					titleCache[eleData[i].type].fontFamily = eleData[i].type_face;
					titleCache[eleData[i].type].fontSize = eleData[i].font_size;
					titleCache[eleData[i].type].color = eleData[i].font_color;
				}
			}
		}
		function filterElem() {
			$('#book-container .draggable').each(function(){
				var item = {};
				var flagId = $(this).data('id');
				if(!ifExists($('#ele'+flagId))) {
					return true;
				}
				item.type = flagId;
				item.id = flagId;
				// item.type = eleFlag[flagId].type;
				if(eleFlag[flagId].type === 'img') {
					formatImgEleFun(item);
					positionFun($('#ele'+flagId),item);
				}
				if(eleFlag[flagId].type === 'title') {
					formatTitleEleFun(item);
					positionFun($('#ele'+flagId),item);
				}
				itemList.push(item);
			});
		}
		function formatImgEleFun(item) {
			var temp = imgCache[item.id];
			if(!temp){
				item.width = '50';
				item.height = '50';
			} else {
				item.width = imgCache[item.id].width;
				item.height = imgCache[item.id].height;
			}
		}
		function formatTitleEleFun(item) {
			var temp = titleCache[item.id];
			if(!temp){
				item.type_face = '1';
				item.font_size = '14';
				item.is_bold = "0";
				item.font_color = '#000000';
				return;
			} else {
				item.type_face = temp.fontFamily;
				item.font_size = temp.fontSize;
				item.is_bold = temp.fontWeight ? temp.fontWeight : "0";
				item.font_color = temp.color;
			}
		}
		//判断元素是否拖动到有效位置
		function ifExists(elem) {
			var imgContainerWidth = $('#book-container .book-img').width();
			var position_left = elem.position().left;
			if(position_left < imgContainerWidth) {
				return true;
			}
			return false;
		}
		function positionFun(elem, item) {
			var bookContainerWidth = $('#book-container').width();
			var bookContainerHeight = $('#book-container').height();
			var imgContainerWidth = $('#book-container .book-img').width();
			var imgContainerHeight = $('#book-container .book-img').height();
			// console.log('realName position:' + $('#realName').position());
			var position_left = elem.position().left;
			var position_top = elem.position().top;
			// console.log('realName position: left:' + realName_left*100/bookContainerWidth + '%')
			// console.log('realName position: top:' + realName_top*100/bookContainerHeight + '%');
			// console.log('realName mobile position: left:' + realName_left*100/imgContainerWidth + '%')
			// console.log('realName mobile position: top:' + realName_top*100/imgContainerHeight + '%');
			// console.log('****************************************');
			// console.log('wechatId position:' + $('#wechatId').position());
			// item.x = (position_left*100/bookContainerWidth).toFixed(2) + '%';
			// item.y = (position_top*100/bookContainerHeight).toFixed(2) + '%';
			// item.app_x = (position_left*100/imgContainerWidth).toFixed(2) + '%';
			// item.app_y =  (position_top*100/imgContainerHeight).toFixed(2) + '%';
			item.x = position_left;
			item.y = position_top;
			item.app_x = position_left;
			item.app_y = position_top;
		}
		// var $draggables = $('.draggable').draggabilly({
		//     // contain to parent element
		//     containment: true
		// });

		$('#right-bar-container').delegate('#save-btn','click',function(){
			if(!$('#bookName').val()) {
				layer.msg('授权书名称不能为空');
				return;
			}
			saveData = {};
			itemList = [];
			// localStorageTool.removeItem('authoBookPreview');
			if(bookId){
				saveData.id = bookId;
			}
			saveData.name = $('#bookName').val();
			saveData.back_picture = $('#bookImg').attr('bookimg');
			filterElem();
			saveData.list = itemList;
			console.log(saveData);
			// localStorageTool.setItem("authoBookPreview", JSON.stringify(saveData));  
			$ajax.post('/agent/certificate_template/save.do',{content:JSON.stringify(saveData)},function(data){
				if(data.success) {
					location.href = 'autho-book-list.html';
				}
			});
		});
		$('#right-bar-container').delegate('#preview-btn','click',function(){
			saveData = {};
			itemList = [];
			localStorageTool.removeItem('authoBookPreview');
			saveData.name = $('#bookName').val();
			saveData.back_picture = $('#bookImg').attr('bookimg');
			filterElem();
			saveData.list = itemList;
			localStorageTool.setItem("authoBookPreview", saveData);  
			// layer.open({
			//   type: 2,
			//   title: '预览',
			//   shadeClose: true,
			//   shade: 0.8,
			//   area: ['414px', '736px'],
			//   content: 'autho-book-mobile.html?type=pc-preview'//iframe的url
			// }); 

			$ajax.post('/agent/certificate_template/previewDetails.do',{content:JSON.stringify(saveData)},function(data){
				if(data.success) {
					$('#preview-layer').remove();
					$('.tools').append('<div id="preview-layer" style="display:none;"><img src="' + api_path_config.upload_path + data.data + '" style="width:100%;"></div>');
					setTimeout(function(){
						layer.open({
						  type: 1,
						  title: false,
						  closeBtn: 1,
						  area: '640px',
						  skin: 'layui-layer-nobg', //没有背景色
						  shadeClose: true,
						  content: $('#preview-layer')
						});
					},1000);
				}
			});
		});
		// $('#book-container .book-img').css({
		// 	'background': 'url("http://192.168.8.143:3002/temp/images/book.jpg") 0 0 no-repeat',
		// 	'background-size': 'contain'
		// });
		// $('#bookImg').attr('bookimg','http://192.168.8.143:3002/temp/images/book.jpg');
		$('#right-bar-container').delegate('#bg-btn','click',function(){
			imgUpload.init(function(value){
				var imgUrl = api_path_config.upload_path + value;
				var tempimg = new Image();
				tempimg.src = imgUrl;
				setTimeout(function(){
					if(tempimg.width != 640){
						layer.msg('请使用宽度为640px的图片...');
						return;
					}
					// tempimg.src = "http://imgtest.hanshuweishang.com/imgtest-hsws/ex/20170612160436933.jpg";
					$('#book-container .book-img').css({
						'background': 'url("' + imgUrl + '") 0 0 no-repeat',
						'background-size': 'contain',
						//'width': img.width,
						'height': tempimg.height
					});
					$('#bookImg').attr('bookimg',imgUrl);
				},1000);
			},false);
		});
		
		$('INPUT.minicolors').minicolors({
			defaultValue: '#000000',
			// change: function(hex, opacity) {
			// 	console.log(hex + ' - ' + opacity);
			// },
			hide: function() {
				var selectedEleId = $('#titleEleSelect').val();
				if(titleCache[selectedEleId]) {
					titleCache[selectedEleId].color = $(this).val();
				}
			}
		});
		// $('INPUT.minicolors').minicolors('value',['#eb0e0e']);
		$('#img-format-container').delegate('#imgEleSelect','change',function(){
			var selectedEleId = $(this).val();
			if(selectedEleId != '0') {
				if(imgCache[selectedEleId]) {
					$('#img-format-container .width-input').val(imgCache[selectedEleId].width);
					$('#img-format-container .height-input').val(imgCache[selectedEleId].height);
				} else {
					imgCache[selectedEleId] = {};
					imgCache[selectedEleId].width = '50';
					imgCache[selectedEleId].height = '50';
					$('#img-format-container .width-input').val('50');
					$('#img-format-container .height-input').val('50');
				}
			} else {
				$('#img-format-container .width-input').val('');
				$('#img-format-container .height-input').val('');
			}
		});

		$('#img-format-container').delegate('input','change',function(){
			//更新imgCache
			var selectedEleId = $('#imgEleSelect').val();
			if(selectedEleId != '0') {
				if(!imgCache[selectedEleId]) {
					imgCache[selectedEleId] = {};
				}
				if($(this).hasClass('width-input')){
					imgCache[selectedEleId].width = $(this).val();
				}
				if($(this).hasClass('height-input')){
					imgCache[selectedEleId].height = $(this).val();
				}
			}
		});
		/**********************************/
		$('#title-format-container').delegate('#titleEleSelect','change',function(){
			var selectedEleId = $(this).val();
			if(selectedEleId != '0') {
				var temp = titleCache[selectedEleId];
				if(temp) {
					// temp.fontFamily = $('#fontFamilySelect').val();
					// temp.fontSize = $('#fontFamilySelect').val();
					$('#fontFamilySelect option[value="' + temp.fontFamily + '"]').prop('selected','selected');
					$('#fontSizeSelect option[value="' + temp.fontSize + '"]').prop('selected','selected');
					$('INPUT.minicolors').minicolors('value',[temp.color]);
				} else {
					$('#fontFamilySelect option[value="1"]').prop('selected','selected');
					$('#fontSizeSelect option[value="14"]').prop('selected','selected');
					$('INPUT.minicolors').minicolors('value',['#000000']);
					titleCache[selectedEleId] = {};
					titleCache[selectedEleId].fontFamily = '1';
					titleCache[selectedEleId].fontSize = '14';
					titleCache[selectedEleId].color = '#000000';
				}
			} else {
				$('#fontFamilySelect option[value="0"]').prop('selected','selected');
				$('#fontSizeSelect option[value="0"]').prop('selected','selected');
				$('INPUT.minicolors').minicolors('value',['#000000']);
			}
		});
		$('#title-format-container').delegate('.fontFamilySelect,.fontSizeSelect','change',function(){
			//titleCache
			var selectedEleId = $('#titleEleSelect').val();
			if(selectedEleId != '0') {
				if(!titleCache[selectedEleId]) {
					titleCache[selectedEleId] = {};
				}
				if($(this).hasClass('fontFamilySelect')){
					titleCache[selectedEleId].fontFamily = $(this).val();
					if($(this).val() === '2' || $(this).val() === '4') {
						titleCache[selectedEleId].fontWeight = '1';
					}
				}
				if($(this).hasClass('fontSizeSelect')){
					titleCache[selectedEleId].fontSize = $(this).val();
				}
			}
		});
		$('#title-format-container').delegate('input','change',function(){
			//更新titleCache
			var selectedEleId = $('#titleEleSelect').val();
			if(selectedEleId != '0') {
				if(!titleCache[selectedEleId]) {
					titleCache[selectedEleId] = {};
				}
				if($(this).hasClass('minicolors')){
					titleCache[selectedEleId].color = $(this).val();
				}
			}
		});
	});

/***/ })

/******/ });