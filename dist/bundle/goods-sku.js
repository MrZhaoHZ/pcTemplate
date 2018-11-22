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

	module.exports = __webpack_require__(107);


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

/***/ 74:
/***/ (function(module, exports) {

	var self_tpl = {
		'goodsManagementTpl': '{{~ it.data:value1:index1 }}\
						<tr>\
								{{ var item =value1;}}\
							<td><input name="item" data_id={{= item.id}} data_status="{{= item.item_status}}" name="item" type="checkbox" value="" /></td>\
							<td class="goods_name">\
								<img src="{{= it.path + item.image_uri}}"/>\
								<p>{{= item.spu_name}}</p>\
							</td>\
						    <td>{{= item.category_name}}</td>\
						    <td>\
								{{? item.item_status == 0}}\
									<span>新建</span>\
								{{?? item.item_status == 1}}\
									<span>上架</span>\
								{{?? item.item_status == 2}}\
									<span>下架</span>\
								{{? }}\
							</td>\
						    <td>\
						    	<a href="goods-base-edit.html?sku_id={{= item.id}}&type=0">编辑</a>&nbsp;&nbsp;\
						    	{{? item.item_status == 0}}\
									<a data_id="{{= item.id}}" class="on_sell">上架</a>&nbsp;&nbsp;\
								{{?? item.item_status == 1}}\
									<a data_id="{{= item.id}}" class="off_sell">下架</a>&nbsp;&nbsp;\
								{{?? item.item_status == 2}}\
									<a data_id="{{= item.id}}" class="on_sell">上架</a>&nbsp;&nbsp;\
								{{? }}\
								{{? item.item_status == 0}}\
									<a data_id="{{= item.id}}" class="join_garbage">加入回收站</a>&nbsp;&nbsp;\
								{{?? item.item_status == 2}}\
									<a data_id="{{= item.id}}" class="join_garbage">加入回收站</a>&nbsp;&nbsp;\
								{{? }}\
						    	<a href="goods-base-edit.html?sku_id={{= item.id}}&type=1">复制</a>\
						    </td>\
						</tr>\
					{{~}}',
		'goodsGarbageTpl': '{{~ it.data:value1:index1 }}\
						<tr>\
								{{ var item =value1;}}\
							<td><input name="item" data_id={{= item.id}} name="item" type="checkbox" value="" /></td>\
							<td class="goods_name">\
								<img src="{{= it.path + item.image_uri}}"/>\
								<p>{{= item.spu_name}}</p>\
							</td>\
						    <td>{{= item.category_name}}</td>\
						    <td>\
								{{? item.item_status == 0}}\
									<span>新建</span>\
								{{?? item.item_status == 1}}\
									<span>上架</span>\
								{{?? item.item_status == 2}}\
									<span>下架</span>\
								{{? }}\
							</td>\
						    <td><a href="goods-base-edit.html?sku_id={{= item.id}}&type=0" style="display:none;">编辑</a>&nbsp;&nbsp;<a  href="goods-base-edit.html?sku_id={{= item.id}}&type=1&isGarbage=1">复制</a></td>\
						</tr>\
					{{~}}',
		'goodsTableHeadTpl': '<th><input name="choose" type="checkbox" id="checked" value="" /></th>\
						    <th>商品</th>\
							{{~ it:item:index }}\
								<th style="display:none;">{{= item.grade_name}}</th>\
							{{~}}\
						    <th>分类</th>\
						    <th>状态</th>\
						    <th>操作</th>',
		'goodsGarbageTableHeadTpl': '<th><input name="choose" type="checkbox" id="checked" value="" /></th>\
						    <th>商品</th>\
							{{~ it:item:index }}\
								<th style="display:none;">{{= item.grade_name}}</th>\
							{{~}}\
						    <th>分类</th>\
						    <th>状态</th>\
						    <th>操作</th>',
		'goodsCategoryTpl': '{{~ it:item:index }}\
								<tr>\
								    <td>{{= item.category_name}}</td>\
								    <td>{{= item.sort}}</td>\
								    <td><a data-id="{{= item.id}}" name="{{= item.category_name}}" sort="{{= item.sort}}" class="edit">编辑</a>&nbsp;&nbsp;<a class="dele" data-id="{{= item.id}}">删除</a></td>\
								</tr>\
							{{~}}',
		'goodsCustomAttrListTpl': '{{~ it:item:index }}\
								<tr>\
								    <td>{{= item.prop_name}}</td>\
								    <td>\
										{{? item.data_type == 1}}\
											整数\
										{{?? item.data_type == 2}}\
											浮点数\
										{{?? item.data_type == 3}}\
											单字符\
										{{?? item.data_type == 4}}\
											字符串\
										{{? }}\
								    </td>\
								    <td><a data_is_using="{{= item.flag}}" data-id="{{= item.id}}" class="edit">编辑</a>&nbsp;&nbsp;<a style="display:none;" class="dele" data_is_using="{{= item.flag}}" data-id="{{= item.id}}">删除</a></td>\
								</tr>\
							{{~}}',
		'goodsGroupListTpl': '{{~ it:item:index }}\
								<tr>\
								    <td>{{= item.group_name}}</td>\
								    <td>\
								    	{{? item.showing == "0"}}\
								    		否&nbsp;&nbsp;\
								    	{{?? item.showing == "1"}}\
								    		是&nbsp;&nbsp;\
								    	{{?}}\
								    </td>\
								    <td>{{= item.turn}}</td>\
								    <td>\
								    	<a class="edit" data_is_using="{{= item.showing}}" data-id="{{= item.id}}">编辑</a>\
								    	{{? item.showing == "0"}}\
								    		<a data_is_using="{{= item.showing}}" data-id="{{= item.id}}" class="on">展示</a>&nbsp;&nbsp;\
								    	{{?? item.showing == "1"}}\
								    		<a class="off" data_is_using="{{= item.showing}}" data-id="{{= item.id}}">撤下</a>\
								    	{{?}}\
								    	<a class="dele" data_is_using="{{= item.showing}}" data-id="{{= item.id}}">删除</a>\
								    </td>\
								</tr>\
							{{~}}'
		,'goodsPerGroupTpl': 	'<table class="table table-bordered tab-content-center">\
								  <thead>\
									<tr>\
									  <th>商品</th>\
									  <th>顺序</th>\
									  <th>操作</th>\
									</tr>\
								  </thead>\
								  <tbody>\
								  	{{~ it:item:index }}\
										<tr data-id="{{= item.spu_id}}">\
										  <td class="name">{{= item.spu_name}}</td>\
										  <td class="sorttd"><input value="{{= item.turn}}" data-id="{{= item.id}}" maxlength="3" class="form-control sort"/></td>\
										  <td>\
											<a data_id="{{= item.spu_id}}" class="remove">移除</a>\
										  </td>\
										</tr>\
									{{~}}\
								  </tbody>\
								</table>'
		,'goodsListTpl': '<option>请选择商品</option>\
							{{~ it:item:index }}\
								<option data_id="{{= item.id}}">{{= item.spu_name}}</option>\
							{{~}}'
		,'goodsAttrListTpl': '<option>请选属性</option>\
							{{~ it.data:item:index }}\
								<option data_id="{{= it.id}}">{{= item.enum_value}}</option>\
							{{~}}'
		,'goodsAttrTypeTpl': '<option value="1">整数</option>\
		        			<option value="2">浮点数</option>\
		        			<option value="4">字符串</option>'
		,'customAttrTpl': '<option>请选择属性</option>\
							{{~ it:item:index }}\
								<option data_id="{{= item.id}}" data_type="{{= item.range_type}}">{{= item.prop_name}}</option>\
							{{~}}'
		,'editCustomAttrTpl': '<select class="form-control options custom_pro">\
								<option>请选择属性</option>\
								{{~ it.data:item:index }}\
									<option data_id="{{= it.id}}">{{= item.enum_value}}</option>\
								{{~}}'
		,'goodsLists': '<option>请选择商品</option>\
								{{~ it:item:index }}\
									<option data_id="{{= it.id}}">{{= item.spu_name}}</option>\
								{{~}}'
		,'goodsUnitList': '<option>请选择属性</option>\
								{{~ it:item:index }}\
							  		<option>{{= item}}</option>\
								{{~}}'
		,"newTable": '<thead>\
					  	<tr>\
					  		<th rowspan="2"><input name="choose" type="checkbox"  id="checked" value="" /></th>\
						    <th rowspan="2">图片</th>\
						    <th rowspan="2" class="goods_code">商品编码</th>\
						    <th class="specifications" colspan="2">规格</th>\
						    <th rowspan="2" class="min_width">微信价</th>\
						    <th rowspan="2" class="min_width">市场价</th>\
						    <th rowspan="2">操作</th>\
						</tr>\
						<tr class="second_tr">\
						    <th>单位</th>\
						    <th class="inser_th_dom">发货方</th>\
						</tr>\
						<tbody id="table_body">\
							<tr style="display: none;">\
							  <td><input name="item" name="item" type="checkbox" value="" /></td>\
							  <td class="add_img_dom"><img class="sku_img" src="" alt="+"></span></td>\
							  <td><input  maxlength="30" class="form-control sku_sn"/></td>\
							  <td class="unitTd">\
							  	<select class="form-control options unit">\
							  	</select>\
							  </td>\
							  <td>\
							  	<select class="form-control options deliver_type">\
							  		<option>请选择属性</option>\
							  		<option data_id="1" value="1">上级发货</option>\
							  		<option data_id="2" value="2">厂家发货</option>\
							  	</select>\
							  </td>\
							  <td class="inser_td_dom"><input  maxlength="30" class="form-control wechat_price price_num"/></td>\
							  <td><input  maxlength="30" class="form-control market_price price_num"/></td>\
							  <td>\
								<a class="remove">移除</a>\
							  </td>\
							</tr>\
						</tbody>\
					  </thead>'
		,"copyAndEditTable": '<thead>\
					  	<tr>\
					  		<th rowspan="2"><input name="choose" type="checkbox" id="checked" value="" /></th>\
						    <th rowspan="2">图片</th>\
						    <th rowspan="2" class="goods_code">商品编码</th>\
						    <th class="specifications" colspan="{{= it.data.spu_property_v_o_list.length + 2}}">规格</th>\
						    <th rowspan="2" class="min_width">微信价</th>\
						    <th rowspan="2" class="min_width">市场价</th>\
						    <th rowspan="2">操作</th>\
						</tr>\
						<tr class="second_tr">\
						    <th>单位</th>\
						    <th class="inser_th_dom">发货方</th>\
						      {{~ it.data.spu_property_v_o_list:item:index }}\
						      	{{? it.isNew == 0}}\
									<th class="add_th" data_id="{{= item.property_id}}" data_type="{{= item.range_type}}"><span class="custom_attr">{{= item.property_name}}</span><span class="dele_th">X</span></th>\
							  	{{??}}\
									<th class="add_th" data_id="{{= item.property_id}}" data_type="{{= item.range_type}}"><span class="custom_attr">{{= item.property_name}}</span></th>\
							     {{?}}\
							  {{~}}\
						</tr>\
						<tbody id="table_body">\
							{{ for(var j=0; j< it.data.item_sku_d_t_o_list.length; j++) { }}\
								<tr>\
								<td><input name="item" name="item" data_id={{= it.data.item_sku_d_t_o_list[j].id}} data_status="{{= it.data.item_sku_d_t_o_list[j].sku_status}}" type="checkbox" value="" /></td>\
								  <td class="add_img_dom"><img class="sku_img" src="{{= it.data.path + it.data.item_sku_d_t_o_list[j].image_uri}}" data_url="{{= it.data.item_sku_d_t_o_list[j].image_uri}}" alt="+"></span></td>\
								  <td><input  maxlength="30" class="form-control sku_sn" data_sn="{{= it.data.item_sku_d_t_o_list[j].sku_sn}}" value="{{= it.data.item_sku_d_t_o_list[j].sku_sn}}"/></td>\
								  <td class="unitTd">\
								  	<select class="form-control options unit">\
								  	</select>\
								  </td>\
								  <td>\
								  	<select class="form-control options deliver_type">\
								  		<option>请选择属性</option>\
								  		{{? it.data.item_sku_d_t_o_list[j].deliver_type == 1}}\
								    		<option data_id="1" value="1"  selected = "selected">上级发货</option>\
								    	{{?? it.data.item_sku_d_t_o_list[j].deliver_type == 2}}\
								    		<option data_id="1" value="1">上级发货</option>\
								    	{{?}}\
								    	{{? it.data.item_sku_d_t_o_list[j].deliver_type == 1}}\
								    		<option data_id="2" value="2">厂家发货</option>\
								    	{{?? it.data.item_sku_d_t_o_list[j].deliver_type == 2}}\
								    		<option data_id="2" value="2" selected = "selected">厂家发货</option>\
								    	{{?}}\
								  	</select>\
								  </td>\
								  <td class="inser_td_dom"><input  maxlength="30" class="form-control wechat_price price_num" value="{{= it.data.item_sku_d_t_o_list[j].sku_wechat_price }}"/></td>\
								  <td><input  maxlength="30" class="form-control market_price price_num" value="{{= it.data.item_sku_d_t_o_list[j].sku_market_price }}"/></td>\
								  <td>\
								  	{{? it.isNew == 0}}\
										<a data_statu="{{= it.data.item_sku_d_t_o_list[j].sku_status}}" data_id="{{= it.data.item_sku_d_t_o_list[j].id}}" class="remove">移除</a>\
										<a data_id="{{= it.data.item_sku_d_t_o_list[j].id}}" class="on_sell" style="display:none">上架</a>&nbsp;&nbsp;\
								  	{{?? it.isNew == 1}}\
										{{? it.data.item_sku_d_t_o_list[j].sku_status == 0 }}\
											<a data_statu="{{= it.data.item_sku_d_t_o_list[j].sku_status}}" class="remove">移除</a>\
											<a data_id="{{= it.data.item_sku_d_t_o_list[j].id}}" class="on_sell">上架</a>&nbsp;&nbsp;\
										{{?? it.data.item_sku_d_t_o_list[j].sku_status == 1 }}\
											<a data_id="{{= it.data.item_sku_d_t_o_list[j].id}}" class="off_sell">下架</a>&nbsp;&nbsp;\
										{{?? it.data.item_sku_d_t_o_list[j].sku_status == 2}}\
											<a data_id="{{= it.data.item_sku_d_t_o_list[j].id}}" class="on_sell">上架</a>&nbsp;&nbsp;\
										{{? }}\
									{{?? it.isNew == 2}}\
										{{? it.data.item_sku_d_t_o_list[j].sku_status == 0 }}\
											<a data_statu="{{= it.data.item_sku_d_t_o_list[j].sku_status}}" class="remove">移除</a>\
										{{? }}\
								     {{?}}\
								  </td>\
								</tr>\
							 {{ } }}\
						</tbody>\
					  </thead>'
	};
	module.exports = self_tpl;


/***/ }),

/***/ 95:
/***/ (function(module, exports) {

	function setItem(item, obj) {
		localStorage.setItem(item, obj);
	}

	function getItem(item) {
		return localStorage.getItem(item);
	}

	function removeItem(item){
		localStorage.removeItem(item);
	}

	exports.setItem = setItem;
	exports.removeItem = removeItem;
	exports.getItem = getItem;

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

	/*
	 
	 *  DELIVER_TYPE("sx001","发货类型"),

	        UNIT("sx002","单位"),

	        COLOR("sx003","颜色"),

	        SIZE("sx004","尺寸"),

	        BRAND("sx005","品牌"),

	        STYLE("sx006","风格"),

	        MATERIAL("sx007","材质"),

	        VOLUME("sx008","容量"),

	        PLACE("sx009","产地"),

	        SERIES("sx010","系列");

	 * 
	 * */
	$(function(){
		var api_path_config = __webpack_require__(4);
		var self_tpl = __webpack_require__(74);
		var $ajax = __webpack_require__(3);
		var httpUrl = __webpack_require__(6);
		var imgUpload = __webpack_require__(16);
		var localStorage =  __webpack_require__(95);
		var spuName = localStorage.getItem("spu_name");
			$("#spu_name").text(spuName);
		var spu_id = httpUrl.getQueryString('spu_id');
		var type = httpUrl.getQueryString('type'); // type == 1新建  ==2编辑  3：复制
		var pre_spu_id = httpUrl.getQueryString('pre_spu_id');
		var isGarbage = httpUrl.getQueryString('isGarbage');
		var isEdit = false;
		var editProData = [];
		var costomArr = [];
		if(type == 2){ // 2 编辑 
			isEdit = true;
			getSkuData();
		} else if(type == 1){ // 1 新建
			$("#table").html(doT.template(self_tpl.newTable)());
			getUnitAttr(); // 添加单位属性值
		}else if(type == 3){ // 3：复制
			isEdit = true;
			getSkuData();
		};
		var count = 0; // 只有count == 0 并且是新建的时候才不可点击
		var isNewStatus = "" // ;
		var editAndCopyData = null; // 存储数据，用来给单位属性设置默认值
		function getSkuData(){
			var url = "/commodity/sku/list.do";
			if(type == 3 && isGarbage == 1){
				url = "/commodity/sku/copy.do";
			};
			var spuId = spu_id;
			if(type == 3){
				spuId = pre_spu_id
			}
			$ajax.ajaxPost(url, {"spu_id": spuId }, function(data) {
				if (data.success) {
					data.data.path = api_path_config.upload_path;
					if(!data.data.item_sku_d_t_o_list){
						layer.msg("本商品没有对应的sku！");
						$("#table").html(doT.template(self_tpl.newTable)());
						getUnitAttr(); // 添加单位属性值
						return;
					};
					getUnitAttr(); // 添加单位属性值
					if(data.data.item_sku_d_t_o_list.length == 0){ // 编辑新建的时候没有数据的展示
						$("#table").html(doT.template(self_tpl.newTable)());
						return;
					}
					// 编辑的时候有数据展示
					editAndCopyData = data.data.item_sku_d_t_o_list;
					isNewStatus = data.data.item_sku_d_t_o_list[0].item_status; // 0-新建 1-上架2-下架
					$('#table').html(doT.template(self_tpl.copyAndEditTable)({ "data":data.data, "isNew": isNewStatus}));
					 if(type == 3){
						$(".sku_sn").val("");
					};
					if(isEdit){// 编辑的时候
						deltCostomAttr(data.data.spu_property_v_o_list);
						if (data.data.spu_property_v_o_list.length >0) { // 有自定义属性的时候
							for(var i=0; i<data.data.item_sku_d_t_o_list.length; i++){ // 吧自定义属添加到一个数组里边
								editProData.push(data.data.item_sku_d_t_o_list[i].prop_map);
							};
						};
						
					};
					$(".btn_click").attr("disabled", true);
				};
			});
		};
		// 编辑页面  吧自定义属性列表里已经在本商品中添加的自定义属性
		function deltCostomAttr(data){
			for(var i=0; i< data.length; i++){
				$("#attr_list option[data_id=" + data[i].property_id +"]").remove();
			};
			$("#attr_list option[data_id=2]").remove(); // 删除id== 2 的属性（单位） 
		}
		// 获取自定义属性列表
		getAttrList();
		function reloadFun(){
			window.location.reload();
		};
		function getAttrList(){
			//$.post('/goodsGoodsList.do', {}, function(data) {
			var proData = ""
			$ajax.ajaxPost('/item/item_property/get_list.do', {}, function(data) {
				if (data.success) {
					$('#attr_list').html(doT.template(self_tpl.customAttrTpl)(data.data));
					setTimeout(function(){
						editAttr();
					},500);
				}
			});
		};

		// 获取属性列表
	//	function getAttrList(dom){
	//		$.post('/goodsGoodsList.do', {}, function(data) {
	//		//$ajax.ajaxPost('/item/item_property/save.do', pram, function(data) {
	//			if (data.success) {
	//				dom.html(doT.template(self_tpl.goodsAttrListTpl)(data.data.list));
	//			}
	//		});
	//	};
	//	
		var isSnRepeat = {};
		$("body").on("blur", ".sku_sn", function(){
			isSnRepeat = {};
			_this = this;
			if(type == 2 || type == 3){
				if($(_this).attr("data_sn") == $(_this).val().trim()){
					return;
				};
			}else if(type == 1){ // 新建状态
			};
			if(newStatusCheckSkuSn(_this) == 1){ // 有重复的
				return;
			};
			$ajax.ajaxPost('/commodity/sku/checkSkuSn.do', {"sku_sn": $(_this).val().trim()}, function(data) {
				if (data.success) {
					isSnRepeat = {};
				}else if(data.code == "40020"){
					isSnRepeat.msg = data.msg;
					isSnRepeat.dom = _this;
					layer.msg(data.msg);
					$(_this).val("");
				}
			});
		});
		// 处理批量选择
		 $(".user-container").on("click", "#checked", function () {
		 	var check = this.checked;
		 	if(check){
		 		$("[name = item]:checkbox").prop("checked", true);
		 		$(".btn_click").attr("disabled", false);

		 	} else{
		 		$("[name = item]:checkbox").prop("checked", false);
		 		$(".btn_click").attr("disabled", true);
		 		
		 	};
	    });
		$("#table").on("click", "input:checkbox", function(){
			if($("input[name='item']:checked").length !=0){
				$(".btn_click").attr("disabled", false);
			}else{
				$(".btn_click").attr("disabled", true);
			};
		});
		// 单个上架下架
		$("body").on("click",".on_sell", function(){ // 上架
			var id = $(this).attr("data_id");
			var arr = [];
			arr.push({"id": id});
			layer.confirm('确定要执行操作吗？', {
			  btn: ['确定','取消'] //按钮
			}, function(index){
				var id = 
				$ajax.ajaxPost('/commodity/sku/on_sale.do', { item_sku_dtos_str: JSON.stringify(arr)}, function(data){
					if (data.code == 10000) {
						layer.msg("该商品上架成功！");
						$("[name = item]:checkbox").prop("checked", false);
						getSkuData();
						reloadFun();
					}
				});
			});
		});
		$("body").on("click",".join_garbage", function(){ // 上架
			var id = $(this).attr("data_id");
			var arr = [];
			arr.push({"id": id});
			layer.confirm('确定要执行操作吗？', {
			  btn: ['确定','取消'] //按钮
			}, function(index){
				var id = 
				$ajax.ajaxPost('/commodity/sku/remove.do', { item_sku_dtos_str: JSON.stringify(arr)}, function(data){
					if (data.code == 10000) {
						layer.msg("操作成功！");
						getSkuData();
						reloadFun();
					}
				});
			});
		});
		$("body").on("click",".off_sell", function(){ // 下架
			var id = $(this).attr("data_id");
			var arr = [];
			arr.push({"id": id});
			layer.confirm('确定要执行操作吗？', {
			  btn: ['确定','取消'] //按钮
			}, function(index){
				$ajax.ajaxPost('/commodity/sku/sold_out.do', { item_sku_dtos_str: JSON.stringify(arr)}, function(data){
					if (data.code == 10000) {
						layer.msg("该商品下架成功！");
						$("[name = item]:checkbox").prop("checked", false);
						getSkuData();
						reloadFun();
					}
				});
			});
		});
		// 获取商品id
		function getGoodsId(){
			var items = $("input[name='item']:checked");
			var len = items.length;
			var data = {
				"arr": [],
				"isOnSell": 0
			} // 0默认的没有上架的商品 1就是有商品
			var arr = [];
			var item = "";
			for(var i =0; i< len; i++){
				item = items.eq(i).attr("data_id");
				if(items.eq(i).attr("data_status") == 1){
					data.isOnSell = 1;
				};
				data.arr.push({ id: item});
			};
			return data;
		};

		$("#grounding").on("click", function(){
			layer.confirm('确定要执行操作吗？', {
			  btn: ['确定','取消'] //按钮
			}, function(index){
				$ajax.ajaxPost('/commodity/sku/on_sale.do', { item_sku_dtos_str: JSON.stringify(getGoodsId().arr)}, function(data){
					if (data.code == 10000) {
						layer.msg("商品批量上架成功！");
						$("[name = item]:checkbox").prop("checked", false);
						getSkuData();
						reloadFun();
					}
				});
			});
		});
		$("#undercarriage").on("click", function(){
			layer.confirm('确定要执行操作吗？', {
			  btn: ['确定','取消'] //按钮
			}, function(index){
				$ajax.ajaxPost('/commodity/sku/sold_out.do', { item_sku_dtos_str: JSON.stringify(getGoodsId().arr)}, function(data){
					if (data.code == 10000) {
						layer.msg("商品批量下架成功！");
						$("[name = item]:checkbox").prop("checked", false);
						getSkuData();
						reloadFun();
					}
				});
			});
		});
		// // 检查本spu内的商品编码是否有重复  _this是失去焦点的
		function newStatusCheckSkuSn(_this){
			var allSkuSnDom = $(".sku_sn");
			var currentVal = $(_this).val().trim();
			for(var i=0; i<allSkuSnDom.length; i++){
				if(currentVal == allSkuSnDom.eq(i).val().trim()){
					if(i == $(".sku_sn").index(_this)){
						continue;
					}
					isSnRepeat.msg = "本商品内有商品编码重复！";
					layer.msg(isSnRepeat.msg);
					return 1;
				}
			}
		};
		// 编辑的时候添加自定义属性   利用添加一列的函数添加。
		function editAttr(){
			var thDom = $(".add_th");
			if(thDom.length == 0){

				if (isNewStatus == 0 && type !=3) {// 新建

				}else if(count == 0 && type !=3){ // 除新建状态都不能编辑  图片也不能换  需要在添加行列的时候做相应处理
					$("#table_body input, #table_body select").attr("disabled",true); 
					$("#table_body input[name=item]").attr("disabled",false);
					$("#table").off("click", ".add_img_dom");
				}else if(type == 3){
					$(".remove").css("display", "");
				};

				return;
			};
			for(var i=0; i< thDom.length; i++){
				var dataType = thDom.eq(i).attr("data_type");
				var id = thDom.eq(i).attr("data_id");
				var name = thDom.eq(i).text();
				if(dataType == 1){ // 数值类型
					addAttrCol(insertDataDom, id, false, name); 
				}else if(dataType == 2){ // 枚举类型
					$(".inser_td_dom").before(" <td class='add_td'><select class='form-control options custom_pro'></select></td>");
					var insertDataDom = $(".inser_td_dom").prev().find("select");
					addAttrCol(insertDataDom, id, true, name);
				};
			};
		};
		$("#table").on("click", ".add_img_dom", addImgFun);

		// 编辑的时候设置自定义属性的值。
		function setSelectData(editProData){
			var trDom = $("#table_body tr");
			var trDomLength = trDom.length;
			for(var i=0; i< trDomLength; i++){
				tdDom = trDom.eq(i).find(".add_td");
				for(var j=0; j<tdDom.length; j++){

					if(tdDom.eq(j).find("select").length){// 枚举值的时候显示的select     $(".selector").find("option[text='pxx']").attr("selected",true);
						var id = tdDom.eq(j).find("select option:last").attr("data_id");
						var optionDom = tdDom.eq(j).find("select option");
						for(var k=0;k< optionDom.length;k++){
							if(optionDom.eq(k).text() == editProData[i][id]){
								optionDom.eq(k).attr("selected",true);
							}
						}
					}else if(tdDom.eq(j).find("input").length){ // 数值区间的时候显示的input
						var id = tdDom.eq(j).find("input").attr("data_id");
						tdDom.eq(j).find("input").val(editProData[i][id]);
					}
				};
			};
			if (isNewStatus == 0 && type !=3) {// 新建

			}else if(count == 0 && type !=3){ // 除新建状态都不能编辑  图片也不能换  需要在添加行列的时候做相应处理
				$("#table_body input, #table_body select").attr("disabled",true); 
				$("#table").off("click", ".add_img_dom");
			}else if(type == 3){
				$(".remove").css("display", "");
			};
			count++;
		};
		function getUnitAttr(){
			$ajax.ajaxPost('/item/item_property/get_unit.do', {"id": 2}, function(data) {
				if (data.success) {
					$("#table_body .unitTd select").html(doT.template(self_tpl.goodsUnitList)(data.data));
					setTimeout(function(){
						$("#attr_list option[data_id=2]").remove();
					},50)
					if(type == 2 || type == 3){
						setUnitData();
					};
				};
			});
		};
		function setUnitData(){
			//  editAndCopyData 就是每个sku的信息，用来设置单位的属性值
			var unitDom = $("#table_body .unitTd"); 
			for(var i=0; i<unitDom.length; i++){
				var optionDon = unitDom.eq(i).find("option")
				for(var j=0; j<optionDon.length; j++){ // 取出每个option
					if(optionDon.eq(j).text() == editAndCopyData[i].unit){
						optionDon.eq(j).attr("selected",true);
					}

				}
			};
		};
		function addAttrCol(dom, id, flag, name){
			//$.post('/goodsGoodsList.do', {}, function(data) {
			$ajax.ajaxPost('/item/item_property/get_propertys.do', {"id": id}, function(data) {
				if (data.success) {
					if(flag){ // 枚举
						dom.html(doT.template(self_tpl.goodsAttrListTpl)({ "data":data.data,"id": id}));
					}else{// 数值类型
						$(".inser_td_dom").before("<td class='add_td'><input data_name=" + name +" maxlength='10' data_min=" + data.data[0].value_min + " data_max=" + data.data[0].value_max + " data_id=" + id +" placeholder="  + data.data[0].value_min + "~" + data.data[0].value_max + " class='form-control custom_pro'></td>");
					};
					if(isEdit){
						setTimeout(function(){
							setSelectData(editProData);
						}, 500);
					};
				};
			});
		};
		// 添加一列
		$("#add_attr").on("click", function(){
			var val = $("#attr_list").val();
			var id = $("#attr_list option:selected").attr("data_id");
			var dataType = $("#attr_list option:selected").attr("data_type");
			if(!id){
				layer.msg("请先选择自定义属性！");
				return;
			}
			var name = $("#attr_list option:selected").val();
			$("#attr_list option:selected").remove();
			var length = parseInt($(".specifications").attr("colspan")) + 1;
			$(".specifications").attr("colspan",length);
			$(".second_tr").append("<th class='add_th' data_id=" + id +" data_type=" + dataType + "><span class='custom_attr'>" + val + "</span><span class='dele_th'>X</span></th>");
			if(dataType == 1){ // 数值类型
				addAttrCol(insertDataDom, id, false, name); 
			}else if(dataType == 2){ // 枚举类型
				$(".inser_td_dom").before(" <td class='add_td'><select class='form-control options custom_pro'></select></td>");
				var insertDataDom = $(".inser_td_dom").prev().find("select");
				addAttrCol(insertDataDom, id, true, name);
			};
			
		});
		
		// 添加一行
		$("#add_row").on("click", function(){
			var trLength =  $("#table_body tr").length;
			if(trLength == 1 && $("#table_body tr").css("display") == "none"){
				$("#table_body tr:last").css("display", "");
				return;
			}
			var newObject = $("#table_body tr:last").clone(true);
			$("#table_body").append(newObject);
			clearLastTrData();
		});

		// 清楚表格中最后一行的数据
		function clearLastTrData(){
			var lastTr = $("#table_body tr:last");
			lastTr.find(".sku_img").removeAttr("src");
			lastTr.find(".sku_img").removeAttr("data_url");
			lastTr.find("input").val("");
			lastTr.find("option").attr("selected", false);
			lastTr.find(".remove").attr("data_statu", "0");
			lastTr.find(".remove").css("display", "").removeAttr("data_id");
			lastTr.find(".on_sell,.off_sell").remove();
			lastTr.find("input[name=item]").removeAttr("data_id");

			// 在编辑的时候添加一行需要在新加的一行上绑定上事件 清除不可输入控制
			lastTr.find("input").attr("disabled",false);
			lastTr.find("select").attr("disabled",false); 
			lastTr.find(".add_img_dom").on("click", addImgFun);
		};
		
		// 删除一列  需要网络请求 判断是否能删除
		$("#table").on("click", ".dele_th", function(){
			var removRthDom = $(this).parents("th");
			var content = removRthDom.find(".custom_attr").text();
			var id = removRthDom.attr("data_id");
			var dataType = removRthDom.attr("data_type");
			var thLength = parseInt($(".specifications").attr("colspan")) - 1;
			$(".specifications").attr("colspan",thLength);
			var index = $(".second_tr th").index(removRthDom) + 3;
			var length = $("table tr").length;
			removRthDom.remove();
			$("#attr_list").append("<option data_id=" + id +" data_type=" + dataType + ">" + content +"</option>");
			for(var i = 0; i<length; i++){
				$("#table tr").eq(i).find('td').eq(index).remove();
			};
		});

		// 删除一行  需要网络请求 判断是否能删除
		$("#table").on("click", ".remove", function(){
			var index = $("#table .remove").index(this);
			var _this = this;
			var sku_id = $(_this).attr("data_id");
			if(!sku_id){
				$("#table #table_body tr").eq(index).remove();
				layer.msg("操作成功！");
				return;
			};
			var statu = $(this).attr("data_statu");
			if(statu == 0){ // 0 新建 1 上架 2 下架
				var trLength = $("#table_body tr").length;
				if(trLength == 1){
					$("#table_body tr:last").css("display", "none");
					clearLastTrData();
					return;
				};
				layer.confirm('确定要进行此操作？', {
					btn: ['确定','取消'] //按钮
				}, function(){
					$ajax.ajaxPost('/commodity/sku/removeItemSku.do', {"sku_id": sku_id, "spu_id": spu_id}, function(data) {
						if (data.success) {
							$("#table #table_body tr").eq(index).remove();
							layer.msg("操作成功！");
						};
					});
					
				});
			}else{
				layer.msg("上架和下架的商品不能删除");
			}
			
		});

		// 添加图片
		function addImgFun(){
			var _this = this;
			imgUpload.init(function(value){
				var realValue = api_path_config.upload_path + value;
				$(_this).find(".sku_img").attr("src", realValue);
				$(_this).find(".sku_img").attr("data_url", value);
			},false);
		};
		// 保存
		var isOver = 1;
		$("#sku_save").on("click", function(){
			if(isSnRepeat.msg){
				if(isSnRepeat.dom){
					$(isSnRepeat.dom).val("");
				};
				layer.msg(isSnRepeat.msg);
				return;
			}
			isOver = 1;
			pram = {};	
			if(!spu_name){
				layer.msg("每个商品名不能为空！");
				return;
			};	
			var trLength = $("#table_body tr").length;
			if(trLength == 1 && $("#table_body tr").css("display") == "none"){
				layer.msg("至少添加一行商品！")
				return;
			}
			collectData();
			if(skuIsRepeat == 1){
				return;
			}
			if(isOver == 2){
				return;
			}
			var tmp = JSON.stringify(pram.item_sku_dtos_str);
			if(type ==1 || type== 3){ // 1 新建 3 复制
				$ajax.ajaxPost('/commodity/sku/add.do', {"spu_id": spu_id, "item_sku_dtos_str": tmp, "spu_name": spuName}, function(data) {
					if (data.success) {
						window.location.href = "goods-management.html";
					}else if(data.code == "40020"){
						layer.msg(data.msg);
					}
				});
			}else if(type == 2){ // 编辑
				$ajax.ajaxPost('/commodity/sku/modify.do', {"spu_id": spu_id, "item_sku_dtos_str": tmp, "spu_name": spuName}, function(data) {
					if (data.success) {
						window.location.href = "goods-management.html";
					}else if(data.code == "40020"){
						layer.msg(data.msg);
					}
				});
			};
		});
		
		var pram = {};
		var skuIsRepeat = 0;
		// 收集数据
		function collectData(){
			skuIsRepeat = 0;
			var lists= [];
			var trLength = $("#table_body tr").length;
			if(trLength == 1 && $("#table_body tr").css("display") == "none"){
				//layer.msg("至少添加一行商品！")
				isOver = 2;
				//return;
			}
			for(var i = 0; i<trLength; i++){
				var trDom = $("#table_body tr").eq(i);
				var skuPro = {};
				
				skuPro.sku_sn = trDom.find(".sku_sn").val().trim();
				if(!skuPro.sku_sn){
					layer.msg("商品编码不能为空");
					isOver = 2;
					return;
				};
				var gre = /^[0-9a-zA-Z]*$/g;
				if(!gre.test(skuPro.sku_sn)){
					layer.msg("商品编码只能输入数字和字母！");
					isOver = 2;
					return;
				};
				skuPro.image_uri =  trDom.find(".sku_img").attr("data_url");
				if(!skuPro.image_uri){
					layer.msg("请选择图片！");
					isOver = 2;
					return;
				};
				if(trDom.find(".remove").attr("data_id")){
					skuPro.id = trDom.find(".remove").attr("data_id");
				};
				skuPro.sku_market_price =trDom.find(".market_price").val().trim();
				if(!skuPro.sku_market_price){
					layer.msg("请输入市场价！");
					isOver = 2;
					return;
				};
				if(!checkNum(skuPro.sku_market_price)){
					layer.msg("价格必须为数字！");
					isOver = 2;
					return;
				};
				skuPro.sku_wechat_price = trDom.find(".wechat_price").val().trim();
				if(!skuPro.sku_wechat_price){
					layer.msg("请输入微信价！");
					isOver = 2;
					return;
				};
				if(!checkNum(skuPro.sku_wechat_price)){
					layer.msg("价格必须为数字！");
					isOver = 2;
					return;
				};
				skuPro.unit = trDom.find(".unit").val();
				if(skuPro.unit == "请选择属性"){
					layer.msg("请选择单位！");
					isOver = 2;
					return;
				};
				skuPro.deliver_type = trDom.find(".deliver_type").val();
				if(skuPro.deliver_type === "请选择属性"){
					layer.msg("请选择发货方！");
					isOver = 2;
					return;
				};
				if(trDom.find("input[name=item]").attr("data_id")){
					skuPro.id = trDom.find("input[name=item]").attr("data_id");
				};
				var customDom = trDom.find(".custom_pro");
				var customProLen = customDom.length;
				var prop_map  = {};
				for(var j=0;j< customProLen; j++){
					// 属性的id： 属性值的id
					if(customDom.eq(j).hasClass("options")){
						prop_map[customDom.eq(j).find('option:selected').attr("data_id")] = customDom.eq(j).val();
						if( !customDom.eq(j).find('option:selected').attr("data_id")){
							layer.msg("自定义属性不能为空！");
							isOver = 2;
							isOver = 2;
							return;
						};
					}else{
						prop_map[customDom.eq(j).attr("data_id")] = customDom.eq(j).val();
						if(!customDom.eq(j).val()){
							layer.msg("自定义属性不能为空！");
							isOver = 2;
							return;
						}else if(!checkNum(customDom.eq(j).val())){
							layer.msg("数值型自定义属性必须为数字！");
							isOver = 2;
							return;
						};
						var name = customDom.eq(j).attr("data_name");
						var data_min = parseInt(customDom.eq(j).attr("data_min"));
						var data_max = parseInt(customDom.eq(j).attr("data_max"));
						var value = parseInt(customDom.eq(j).val());
						if(value < data_min || value > data_max){
							layer.msg('表格中第 "' + i + '" 行的 "' + name + ' "自定义属性的值超出范围！');
							isOver = 2;
							return;
						}
					}
					//skuPro.prop_map = skuPro.prop_map + "," + customDom.eq(j).val();
				};
				skuPro.prop_map = prop_map;
				lists.push(skuPro);
				
			};

			if(checkAllSkuIsRepeat() == 1){ // 如果返回是1就表示有重复的sku属性。
				layer.msg("不允许所有属性（单位、发货方和自定义属性）都相同的商品存在！",{time: 5000});
				skuIsRepeat = 1;
			};
			pram.item_sku_dtos_str = lists;
			console.log(pram)
		};
		function checkAllSkuIsRepeat(){
			var trDom = $("#table_body tr");
			var skusArr = [];
			for(var i=0;i<trDom.length; i++){
				var selectDon = trDom.eq(i).find("select");
				var skuAttrString = "";
				for(var j=0; j<selectDon.length; j++){
					skuAttrString = skuAttrString + selectDon.eq(j).val();
				};
				skusArr.push(skuAttrString);

			};
			if(arrNoRepeat(skusArr) != skusArr.length){ // 有重复的
				return 1;
			}
		};
		// 数组去重
		function arrNoRepeat(arr) { // 返回数组的长度
			var result = []
			for(var i = 0; i < arr.length; i++) {
				if(result.indexOf(arr[i]) == -1) {
					result.push(arr[i])
				}
			}
			return result.length;
		}
		function checkNum (num){
			var re = /^\d+(?:\.\d{1,2})?$/;
			if(!re.test(num)){
				return false;
			}else{
				return true;
			}
		}
	});


/***/ })

/******/ });