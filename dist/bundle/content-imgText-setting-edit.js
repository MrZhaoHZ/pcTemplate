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

	module.exports = __webpack_require__(71);


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

/***/ 63:
/***/ (function(module, exports) {

	var self_tpl = {
		'contentArticleManagementTpl': '{{~ it.articleList:item:index }}\
						<tr>\
						    <td>{{= item.id}}</td>\
						    <td>{{= item.title}}</td>\
						    <td>{{= item.brief}}</td>\
						    <td>{{= item.create_date}}</td>\
						    <td>{{= item.update_date}}</td>\
						    <td>{{= item.content_browse || "0"}}</td>\
						    <td>{{= item.content_praise_num || "0"}}</td>\
						    <td data_id={{= item.content_id}}><a href="content-article-edit.html?data_id={{= item.id}}" class="edit">编辑</a>&nbsp;<a data_id={{= item.id}} class="dele">删除</a></td>\
						</tr>\
					{{~}}',
		'contentImgTextReplyTpl': '{{~ it:item:index }}\
						<tr>\
						    <td>{{= item.keywords}}</td>\
						    <td>{{= item.response}}</td>\
						    <td>\
								{{? item.type == 0}}\
									文字回复\
								{{?? item.type == 1}}\
									图文回复\
								{{?}}\
						    </td>\
						    <td>{{= item.create_date}}</td>\
						    <td data_id="{{= item.id}}"><a href="content-imgText-setting-edit.html?data_id={{= item.id}}" class="edit">编辑</a>&nbsp;<a data_id={{= item.id}} class="dele">删除</a></td>\
						</tr>\
					{{~}}',
		'contentCustomMenuTpl': '{{~ it:item:index }}\
						<tr>\
							{{? item.menu_level == 2}}\
								<td class="name"><p><span>&nbsp;&nbsp;&nbsp;&nbsp; |---</span><span class="text">{{= item.name}}</span></p></td>\
							{{?? item.menu_level == 1}}\
								<td class="name"><p><span class="text">{{= item.name}}</span></p></td>\
							{{?}}\
						    <td class="key_world">{{= item.keywords || ""}}</td>\
						    <td class="link">{{= item.uri || ""}}</td>\
						    <td class="sort">{{= item.sort}}</td>\
						    <td data_id="{{= item.id}}"><a class="edit" data_id={{= item.id}} data_type={{= item.type}} data_parent_id={{= item.parent_id || ""}}>编辑</a>&nbsp;<a class="dele">删除</a></td>\
						</tr>\
					{{~}}',
		'contentCarouselManagementTpl': '{{~ it.data:item:index }}\
						<tr>\
							<td>\
								<img src="{{= it.path}}{{= item.image_uri}}"/>\
								<p>{{= item.name}}</p>\
							</td>\
						    <td>{{= item.uri}}</td>\
						    <td>{{= item.sort}}</td>\
						    <td data-id="{{= item.id}}"><a href="content-carousel-edit.html?data_id={{= item.id}}">编辑</a>&nbsp;&nbsp;<a class="dele">删除</a></td>\
						</tr>\
					{{~}}',
		'contentImgTextSettingTpl': '{{~ it:item:index }}\
						<p class="article" data_info={{= item.brief}} data_title={{= item.title}} data_img={{= item.cover_picture}} data_id={{= item.id}}>{{= item.title}}</p>\
					{{~}}',
		'contentImgTextBlockTpl': '<div class="per_block">\
										<p>\
											<span class="left">标题：</span>\
											<input class="right form-control title" />\
											<button type="button" class="btn btn-success add_article">选择文章</button>\
										</p>\
										<p>\
											<span class="left">描述：</span>\
											<input maxlength="200" class="right form-control info" />\
										</p>\
										<p>\
											<span class="left">图片：</span>\
											<span class="add_img">+</span>\
										</p>\
										<p>\
											<span class="info left">网址：</span>\
											<input class="right form-control link" />\
										</p>\
										<p>\
											<button type="button" class="btn btn-success dele">删除</button>\
										</p>\
									</div>'
	};
	module.exports = self_tpl;

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

	$(function(){
		var self_tpl = __webpack_require__(63);
		var $ajax = __webpack_require__(3);
		var imgUpload = __webpack_require__(16);
		var httpURL = __webpack_require__(6);
		var api_path_config = __webpack_require__(4);
		var data_id = httpURL.getQueryString('data_id');
		var articleTmp = ""; // 点击添加按钮是所在的per_block
		var pramArticle = {
			current_page: "1",
			page_size: "10",
			pageCount: ""
		};
		var realValue = api_path_config.upload_path;
		// 添加文章
		$(".block").on("click", ".add_article", function(){
			articleTmp = $(this).parents(".per_block");
			$('#myModal').modal();
			getData();
			function getData(pagenumber){
				$ajax.ajaxPost('/content/article_list.do', pramArticle,function(data){
					pramArticle.pageCount = Math.ceil(data.data.totalCount / pramArticle.page_size);
					$('#home_content').html(doT.template(self_tpl.contentImgTextSettingTpl)(data.data.articleList));
					$("#pager").pager({ pagenumber: pramArticle.current_page, pagecount: pramArticle.pageCount, buttonClickCallback: PageClick});
				});
			};
			function PageClick (pageclickednumber) {
				pramArticle.current_page = pageclickednumber;
				getData();
			};
		});
		var articlePrefix = "";
		if(api_path_config.api_path_1.indexOf('bsstest') != -1) {
			prefix= "http://wxtest.hanshuweishang.com/html/article.html?id=";
		} else {
			prefix= "http://wx.hanshuweishang.com/html/article.html?id=";
		};
		$("#myModal").on("click", ".modal-body .article", function(){
			articleTmp.attr("data_id", $(this).attr("data_id"));
			articleTmp.find(".title").val($(this).attr("data_title"));
			articleTmp.find(".info").val($(this).attr("data_info"));
			articleTmp.find(".add_img").css("background-image", "url(" + realValue + $(this).attr("data_img") + ")");
			articleTmp.find(".add_img").attr("data_img", $(this).attr("data_img"));
			articleTmp.find(".link").val( prefix + $(this).attr("data_id"));
			$('#myModal').modal('hide');
		});

		$("#myModal").on("click", ".modal-body .modal_title", function(){
			if ($(".tab-pane:first").hasClass("active")) {
				$(".confirm").css("display", "inline-block");
			}else{
				$(".confirm").css("display", "none");
			}
		});
		// 网络文章选择
		$(".confirm").on("click", function(){

			
			articleTmp.find(".title").val($(".net_link").val().trim());
			articleTmp.find(".info").val($(".net_info").val().trim());
			
			articleTmp.find(".link").val($(".net_link").val().trim());
			$('#myModal').modal('hide')
		});
		$(".radio-input").on("click", function(){
			var val = $(".radio-input:checked").attr("value");
			//console.log(val)
			$(".text, .block, .add_block").css("display", "none");
			if (val == 0) {
				$(".text").css("display", "inline-block");
			}else{
				$(".block, .add_block").css("display", "inline-block");
			};
		});
		$(".text, .block, add_block").css("display", "none");
		getInfo();
		function getInfo(){
			$ajax.post('/content/get_reply.do', { id: data_id}, 
				function(data){
					var pram = data.data;
					$("#key_world").val(pram.keywords);
					$(".radio-input[value=" +pram.type + "]").attr("checked", "checked");
					$(".radio-input[value=" +pram.type + "]").trigger("click");
					$("input:radio:checked").attr("value", pram.status);
					// if (pram.status == 1) {
					// 	$(".text").css("display", "inline-block");
					// 	$(".radio-input:first").attr("checked",true);
					// }else{
					// 	$(".block, .add_block").css("display", "inline-block");
					// 	$(".radio-input:last").attr("checked",true);
					// };
					if (pram.type == 0) {
						$("#text_reply").val(pram.response || "");
					}else if (pram.type == 1) {
						var domFrist = $(".block .per_block").eq(0);
						var tmpData = data.data.reply_desc_d_t_o_s[0];
						domFrist.find('.title').val(tmpData.title);
						domFrist.find('.info').val(tmpData.brief);
						domFrist.find('.link').val(tmpData.uri);
						domFrist.find('.add_img').css('background-image', "url(" + realValue + tmpData.cover_picture + ")");
						domFrist.find('.add_img').attr("data_img",tmpData.cover_picture);

						var len = pram.reply_desc_d_t_o_s.length;
						for(var i=1; i< len; i++){
							$('.block').append(doT.template(self_tpl.contentImgTextBlockTpl)());
							var currentDon = $(".block .per_block").eq(i);
							var currentData = pram.reply_desc_d_t_o_s[i];
							currentDon.find('.title').val(currentData.title);
							currentDon.find('.info').val(currentData.brief);
							currentDon.find('.link').val(currentData.uri);
							currentDon.find('.add_img').css('background-image', "url(" + realValue + currentData.cover_picture + ")");
							currentDon.find('.add_img').attr("data_img",tmpData.cover_picture);
						};
					};
				});
		};
		// 图片上传
		var imgTmp = "";
		$('.block').delegate('.add_img','click',function(){
			imgTmp = this;
			imgUpload.init(imgUploadAfter);
		});
		function imgUploadAfter(value) {
			$(imgTmp).css("background-image", "url(" + api_path_config.upload_path + value + ")");
			$(imgTmp).attr("data_img", value);
			//$(imgTmp).parents(".per_block").find(".link").val(value);
			$('#myModal').modal("hide");
		};
		
		$("#add_block").on("click", function(){
			if($(".block .per_block").length<5){
				$('.block').append(doT.template(self_tpl.contentImgTextBlockTpl)());
			};
		});
		$(".block").on("click", ".dele", function(){
			$(this).parents(".per_block").slideUp("slow", function() {//slide up
		      	$(this).parents(".per_block").remove();//then remove from the DOM
		    });
			//$(this).parents(".per_block").remove();
		});

		var pram = {
			id: "",
			keywords: "",
			type: "",
			response: "",
			reply_desc_d_t_o_s: []
		};
		$("#save").on("click", function(){
			pram.id = data_id;
			pram.keywords = $("#key_world").val().trim();
			if (!pram.keywords) {
				layer.msg("请输入关键字！");
				return;
			}
			pram.type = $("input:radio:checked").attr("value");
			if (pram.type == 0) {
				pram.response = $("#text_reply").val().trim();
			}else if (pram.type == 1) {
				var len = $(".block .per_block").length;
				for(var i=0; i< len; i++){
					var per_block= {
						title: "",
						brief: "",
						cover_picture: "",
						uri: ""
					};
					var dom = $(".block .per_block").eq(i);
					if (!dom.find('.title').val()) {
						layer.msg("标题不能为空！");
						return;
					};
					per_block.title = dom.find('.title').val().trim();
					if (!dom.find('input.info').val()) {
						layer.msg("描述不能为空！");
						return;
					};
					per_block.brief = dom.find('input.info').val().trim();
					if (!dom.find('.add_img').attr("data_img")) {
						layer.msg("图片不能为空！");
						return;
					};
					per_block.cover_picture = dom.find('.add_img').attr("data_img");

					if (!dom.find('.link').val()) {
						layer.msg("网址不能为空！");
						return;
					};
					per_block.uri = dom.find('.link').val().trim();
					per_block.id = dom.attr("data_id");
					pram.reply_desc_d_t_o_s.push(per_block);
				};
			};
			var str = JSON.stringify(pram);
			console.log(str)
			$ajax.post('/content/save_reply.do', { content: JSON.stringify(pram)}, 
				function(data){
					if (data.success) {
						window.location.href = "content-imgText-reply.html";
					};
			});
		});
		$("#cancel").on("click", function(){
			window.location.href = "content-imgText-reply.html";
		});
	});

/***/ })

/******/ });