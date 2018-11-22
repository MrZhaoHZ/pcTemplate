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

	module.exports = __webpack_require__(22);


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

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

	$(function () {
	    var self_tpl = __webpack_require__(23);
	    var $ajax = __webpack_require__(3);
	    var tmp_path_config = __webpack_require__(4);
	    var api_path_config = __webpack_require__(4);
	    var imgUpload = __webpack_require__(16);
	    var httpURL = __webpack_require__(6);
	    var _id = httpURL.getQueryString('data-id');

	    if(_id != null){    //编辑渲染内容列表
	        $ajax.ajaxPost('/active_item/get_item.do?id=' + _id, {}, function (data) {
	            if (data.success) {
	                $("#goods_name").val(data.data.item_name);
	                $("#goods_code").val(data.data.item_sn);
	                $("#goods_company").val(data.data.unit);
	                $("#goods_price").val(data.data.item_price_str);
	                $("#goods_explain").val(data.data.item_desc);
	                new_obj = $('<div class="per_img ">' +
	                    '	<span class="icon">X</span>' +
	                    '</div>');
	                var background = 'url(' + api_path_config.upload_path + data.data.image_uri + ') 0 0 no-repeat';
	                new_obj.css({
	                    'background': background,
	                    'background-size': 'contain'
	                });
	                new_obj.attr('data_img', data.data.image_uri);
	                $(".add_box").before($(new_obj));
	            }
	        });
	    } 

	    // 图片上传
	    if ($(".per_img ").length == 0) {
	        $("#add_img_goods").on("click", function () {
	            imgUpload.init(function (value) {
	                var realValue = api_path_config.upload_path + value;
	                new_obj = $('<div class="per_img ">' +
	                    '	<span class="icon">X</span>' +
	                    '</div>');
	                var url = 'url(' + realValue + ') 0 0 no-repeat';
	                new_obj.css({
	                    'background': url,
	                    'background-size': 'contain'
	                });
	                new_obj.attr('data_img', value);
	                $(".per_img").remove();
	                $(".add_box").before($(new_obj));

	            }, false);
	        });
	    }

	    $(".user-container").on("click", ".per_img .icon", function () {
	        $(this).parent().remove();
	    });



	    //根据选中商品进行添加/修改添加事件
	    var addGoodsPram = {};
	    $("body").on("click", "#addChoiceGoods", function () {
	        addGoodsPram.item_name = $("#goods_name").val().trim();
	        addGoodsPram.item_sn = $("#goods_code").val().trim();
	        addGoodsPram.image_uri = $(".per_img").attr("data_img");
	        addGoodsPram.item_unit = $("#goods_company").val().trim();
	        addGoodsPram.item_price = $("#goods_price").val().trim();
	        addGoodsPram.item_desc = $("#goods_explain").val().trim();
	        if (!addGoodsPram.item_name) {
	            layer.msg("请输入商品名！");
	            return;
	        } else if (!addGoodsPram.item_sn) {
	            layer.msg("请输入商品编码！");
	            return;
	        }
	        else if (!addGoodsPram.item_unit) {
	            layer.msg("请选择商品单位！");
	            return;
	        } else if (!addGoodsPram.item_price) {
	            layer.msg("请输入商品价格！");
	            return;
	        } else if (!addGoodsPram.item_desc) {
	            layer.msg("请输入商品说明！");
	            return;
	        }
	        else if (!addGoodsPram.image_uri) {
	            layer.msg("请选择商品图片！");
	            return;
	        }
	        if (_id == null) {
	            $ajax.ajaxPost('/active_item/add_item.do', addGoodsPram, function (data) {
	                if (data.success) {
	                    window.location.href = "activity-goods-management.html";
	                } else if (data.code == "21001" || data.code == "21002" || data.code == "21003" || data.code == "21004"){
	                    layer.msg(data.msg);
	                }
	            });
	        } else if (_id != null) {
	            $ajax.ajaxPost('/active_item/modify_itemById.do?id=' + _id, addGoodsPram, function (data) {
	                if (data.success) {
	                    window.location.href = "activity-goods-management.html";
	                } else if (data.code == "21001" || data.code == "21002" || data.code == "21003" || data.code == "21004") {
	                    layer.msg(data.msg);
	                }
	            });
	        }
	    });


	    //input框内容校验
	    //排序
	    $("body").on("keyup", ".sort", function () {
	        var value = $(this).val().trim();
	        var re = /^\d{1,2}$/;
	        if (!re.test(value)) {
	            $(this).val("");
	        }
	    });
	    //数量
	    $("body").on("keyup", ".amount", function () {
	        var value = $(this).val().trim();
	        var re = /^\+?[0-9][0-9]*$/;
	        if (!re.test(value)) {
	            layer.msg("输入内容为数字");
	            $(this).val("");
	        }
	    });
	    //价格
	    $("body").on("keyup", "#goods_price", function () {
	        var value = $(this).val().trim();
	        var re = /^\d{1,6}(\.(\d{1,2})?)?$/;
	        if (!re.test(value)) {
	            layer.msg("价格为数字，且小数点后为两位");
	            $(this).val("");
	        }
	    });
	    //编码
	    $("body").on("keyup", "#goods_code", function () {
	        var value = $(this).val().trim();
	        var gre = /^[0-9a-zA-Z]*$/g;
	        if (!gre.test(value)) {
	            layer.msg("商品编码只能输入数字和字母！");
	            $(this).val("");
	            return;
	        }
	    });
	});

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

	var self_tpl = {
	    'activityListName': '{{~ it.data:value1:index1 }}\
	                            <tr>\
							        <td>{{= value1.act_name}}</td>\
							        <td>{{= value1.start_date}}</td>\
	                                <td>{{= value1.end_date}}</td>\
	                                {{? value1.act_status == 1}}\
	                                <td>未发布</td>\
	                                {{?? value1.act_status == 2}}\
	                                <td>活动进行中</td>\
	                                {{?? value1.act_status == 3}}\
	                                <td>已撤下</td>\
	                                {{?? value1.act_status == 4 || value1.act_status == 6}}\
	                                <td>活动结束</td>\
	                                {{?? value1.act_status == 5}}\
	                                <td>即将开始</td>\
	                                {{? }}\
	                                <td>\
	                                {{? value1.act_status == 3}}\
	                                <a  style="cursor:pointer" href="activity-set-edit.html?data-id='+ "{{= value1.id }}" +'">编辑</a>&nbsp;&nbsp;\
	                                {{?? value1.act_status == 1}}\
	                                <a  style="cursor:pointer" href="activity-set-edit.html?data-id='+ "{{= value1.id }}" +'">编辑</a>&nbsp;&nbsp;\
	                                {{?? value1.act_status == 2}}\
	                                <a  style="cursor:pointer" class="edit-laye" href="javascript:void(0)"=>编辑</a>&nbsp;&nbsp;\
	                                {{?? value1.act_status == 4 || value1.act_status == 6}}\
	                                <a  style="cursor:pointer" class="activity-end" href="javascript:void(0)"=>编辑</a>&nbsp;&nbsp;\
	                                {{?? value1.act_status == 5}}\
	                                <a  style="cursor:pointer" class="edit-laye" href="javascript:void(0)"=>编辑</a>&nbsp;&nbsp;\
	                                <a  style="cursor:pointer" class="withdraw" data-id = "{{= value1.id}}">撤下</a>\
	                                {{? }}\
	                                {{? value1.act_status == 2}}\
	                                <a  style="cursor:pointer" class="withdraw" data-id = "{{= value1.id}}">撤下</a>\
	                                {{?? value1.act_status == 3}}\
	                                <a  style="cursor:pointer" class="release" data-id = "{{= value1.id}}">发布</a>\
	                                {{?? value1.act_status == 1}}\
	                                <a  style="cursor:pointer" class="release" data-id = "{{= value1.id}}">发布</a>\
	                                 {{?? value1.act_status == 4 || value1.act_status == 6}}\
	                                <a  style="cursor:pointer" class="activity-end" href="javascript:void(0)"=></a>&nbsp;&nbsp;\
	                                {{?}}\
	                                </td>\
	                            </tr>\
	                        {{~}}',
	    'modelList': ' {{~ it.data.modelSelectionD_T_O_S:item:index}}\
	                        <tr>\
	                            <td><input data_id="{{= item.id}}" type="checkbox" {{= item.marked==0? "" :"checked"}} name="selectItem"></td>\
	                            <td>{{= item.name}}</td>\
	                            <td>{{= item.mobile}}</td>\
	                            <td>{{= item.desc || ""}}</td>\
	                            <td>\
	                                {{? item.marked==0}}\
	                                未标记\
	                                {{?? item.marked==1}}\
	                                已标记\
	                                {{?}}\
	                            </td>\
	                            <td>{{= item.img.length}}</td>\
	                            <td class="img_btn" data_img={{= item.img}}><img data_img={{= item.img}} style="width:50px;height:50px" src={{= it.path + item.img[0] || ""}}></td>\
	                        </tr>\
	                    {{~}}',
	    'activityGoodsList': '{{~ it.data.data:item:index}}\
	                            <tr>\
	                                <td><img style="width:50px" src={{= it.path + item.image_uri}}></td>\
	                                <td>{{= item.item_name}}</td>\
	                                <td>{{= item.item_sn}}</td>\
	                                <td>{{= item.unit}}</td>\
	                                <td>{{= item.item_price_str}}</td>\
	                                {{? item.invalid==0}}\
	                                <td>正常</td>\
	                                {{?? item.invalid==1}}\
	                                <td>已作废</td>\
	                                {{?? !item.invalid}}\
	                                <td></td>\
	                                {{?}}\
	                                <td>\
	                                    {{?  item.invalid==0}}\
	                                     <a class="add-goods" style="cursor:pointer" href="activity-addGoods-management.html?data-id={{= item.id}}">编辑</a>&nbsp;\
	                                     <a class="to-viod" style="cursor:pointer" data-id={{= item.id}}>作废</a>\
	                                     {{?? item.invalid==1}}\
	                                     <a class="add-goods bad" style="cursor:pointer;color:#ccc;" href="javascript:void(0);">编辑</a>&nbsp;\
	                                     <a class="bad" style="cursor:pointer;color:#ccc;" data-id={{= item.id}}>作废</a>\
	                                     {{?}}\
	                                </td>\
	                            </tr >\
	                          {{~}}',
	    'activityOrderList': '{{~ it:item:index}}\
	        {{? item.act_order_details_d_t_o_list}}\
	            {{ for(var j=0, len=item.act_order_details_d_t_o_list.length; j<len; j++) { }}\
	                            <tr data_id="{{= item.id}}">\
	                                <td>{{= item.activity_name}}</td>\
	                                <td rowspan="{{= len}}">{{= item.act_order_details_d_t_o_list[j].item_name}}</td>\
	                                <td>{{= item.mobile}}</td>\
	                                <td>{{= item.province_name}}{{= item.city_name}}{{= item.area_name}}{{= item.address}}</td>\
	                                <td>{{= item.create_date}}</td>\
	                                {{? item.order_status==0}}\
	                                <td>待支付</td>\
	                                {{?? item.order_status==1}}\
	                                <td>待发货</td>\
	                                {{?? item.order_status==2}}\
	                                <td>已作废</td>\
	                                {{?? item.order_status==3}}\
	                                <td>已发货</td>\
	                                {{?? item.order_status==-1}}\
	                                <td></td>\
	                                {{?}}\
	                                <td>{{= item.reco_mobile}}</td>\
	                                <td>\
	                                    {{? item.order_status == 0 }}\
	                                        <a class="remove" data_status="{{= item.order_status}}">作废</a>\
	                                    {{?? item.order_status == 1}}\
	                                        <a class="remove" data_status="{{= item.order_status}}">作废</a>\
	                                        <a class="fahuo">发货</a>\
	                                    {{?? item.order_status==2}}\
	                                        <a class="remove" data_status="{{= item.order_status}}">已作废</a>\
	                                    {{?? item.order_status==3}}\
	                                        <a style="display:block;word-break:keep-all;white-space:nowrap;cursor:pointer;">已发货</a>\
	                                        <a style="display:block;word-break:keep-all;white-space:nowrap;cursor:pointer;">成为代理商</a>\
	                                    {{?}}\
	                                </td>\
	                            </tr >\
	            {{ } }}\
	        {{??}}\
	        {{?}}\
	    {{~}}',
	    'activityOrderListNew': '{{~ it:item:index}}\
	            <tr data_id="{{= item.id}}">\
	                <td>{{= item.activity_name}}</td>\
	                <td>{{= item.consignee}}</td>\
	                <td>{{= item.mobile}}</td>\
	                <td>{{= item.province_name}}{{= item.city_name}}{{= item.area_name}}{{= item.address}}</td>\
	                <td>{{= item.create_date}}</td>\
	                {{? item.order_status==0}}\
	                <td>待支付</td>\
	                {{?? item.order_status==1}}\
	                <td>支付中</td>\
	                {{?? item.order_status==2}}\
	                <td>支付完成</td>\
	                {{?? item.order_status==6}}\
	                <td>订单关闭</td>\
	                {{?? item.order_status==7}}\
	                <td>发货中</td>\
	                {{?? item.order_status==8}}\
	                <td>已发货</td>\
	                {{?? item.order_status==-1}}\
	                <td></td>\
	                {{??}}\
	                <td></td>\
	                {{?}}\
	                {{? item.gen_agent==1}}\
	                <td>是</td>\
	                {{?? item.gen_agent==2}}\
	                <td>否</td>\
	                {{?}}\
	                <td>{{= item.reco_mobile}}</td>\
	                <td>{{= item.express || ""}}</td>\
	                <td>{{= item.express_no || ""}}</td>\
	                <td>\
	                    {{? (item.order_status==7 || item.order_status==2 || item.order_status==8 )&& item.gen_agent==2}}\
	                        <a id="do_daili" style="display:block;word-break:keep-all;white-space:nowrap;cursor:pointer;">成为代理</a>\
	                    {{?}}\
	                    {{? item.order_status != 6}}\
	                        <a id="g_status" style="display:block;word-break:keep-all;white-space:nowrap;cursor:pointer;">更改状态</a>\
	                    {{?}}\
	                    {{? item.order_status==8}}\
	                        <a href="https://m.kuaidi100.com/index_all.html?postid={{= item.express_no}}" target="_blank" id="see_load" style="display:block;word-break:keep-all;white-space:nowrap;cursor:pointer;">查看物流</a>\
	                    {{?}}\
	                </td>\
	            </tr >\
	    {{~}}',
	    'expressOptionTpl': '<option value="">选择物流公司</option>\
	                         {{~ it.data:item:index }}\
	                            <option value="{{= item.express_code}}" {{? it.express_code== item.express_code}}selected{{?}}>{{= item.express_name}}</option>\
	                         {{~}}',
	    'activityStatisticsListName': '{{~ it.data:value1:index1 }}\
	                            <tr>\
							        <td>{{= value1.act_name}}</td>\
							        <td>{{= value1.show_start_date}}</td>\
	                                <td>{{= value1.show_end_date}}</td>\
	                                {{? value1.act_status == 1}}\
	                                <td>未发布</td>\
	                                {{?? value1.act_status == 2}}\
	                                <td>已发布</td>\
	                                {{?? value1.act_status == 3}}\
	                                <td>已撤下</td>\
	                                {{?? value1.act_status == 4}}\
	                                <td>活动结束</td>\
	                                {{? }}\
	                                <td>\
	                                    <a href="statistics-details.html?choice=order&data-id={{= value1.id}}" style="color:#428bca" > 订单统计</a>&nbsp;\
	                                    <a href="statistics-details.html?choice=stock&data-id={{= value1.id}}"" style = "color:#428bca" > 库存展示</a>&nbsp;\
	                                    <a href="statistics-details.html?choice=drainage&data-id={{= value1.id}}"" style="color:#428bca">引流数量</a> &nbsp;\
	                                    <a href="statistics-details.html?choice=draw&data-id={{= value1.id}}"" style="color:#428bca">抽奖详情</a> &nbsp;\
	                                    <a href="statistics-details.html?choice=reward&data-id={{= value1.id}}"" style="color:#428bca">引流奖励</a> &nbsp;\
	                                </td >\
	                            </tr>\
	                        {{~}}',
	    'activityGoods': '{{~ it:item:index}}\
	                            <li>\
	                                <div class= "prodImage" >\
	                                    <img src={{= item.picture_url}} alt="">\
	                                </div>\
	                                <div class="prodInfor">\
	                                    <p class="" style="margin-bottom:5px;">{{= item.item_name}}</p>\
	                                    <p class="">\
	                                        <label>价格:</label>\
	                                        <span class="itemPrice">{{= item.item_price}}</span>\
	                                    </p>\
	                                    <p class="">\
	                                        <label>数量:</label>\
	                                        <span class="num">{{= item.single_buy_num}}</span>\
	                                    </p>\
	                                    <p class="">\
	                                        <label>规格:</label>\
	                                        <span class="num">{{= item.unit}}</span>\
	                                    </p>\
	                                    <p class="">\
	                                        <label>库存:</label>\
	                                        <span class="total">{{= item.total_inv}}</span>\
	                                 </p>\
	                                    <p class="dinghuo">\
	                                        <a class="xd" href="javascript:void(0);">下单</a>\
	                                    </p>\
	                                </div>\
	                            </li >\
	                          {{~}}',
	};
	module.exports = self_tpl;

/***/ })

/******/ });