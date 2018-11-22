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

	module.exports = __webpack_require__(29);


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

/***/ 28:
/***/ (function(module, exports) {

	var self_tpl = {
	    'activityGoodsList': '{{~ it.data:item:index1 }}\
	                            <tr>\
									<td ><input class="sort" type="text" value={{= item.sort}}></td>\
	                                <td>\
	                                    <img src="{{= it.path + item.image_uri}}">\
	                                </td>\
									<td>{{= item.goods_name}}</td>\
									<td><input type="text" class="price-check" value={{= item.price}}></td>\
									<td><input type="text" class="amount" value={{= item.price}}></td>\
									<td>{{= item.price}}</td>\
									<td><input type="text" class="amount" value={{= item.price}}></td>\
									<td>{{= item.price}}</td>\
									<td>{{= item.price}}</td>\
									<td>{{= item.price}}</td>\
									<td>\
										<a class="off" data_is_using="1" data-id="96">保存</a>&nbsp;&nbsp;\
										<a class="dele" data_is_using="1" data-id="96">删除</a>\
									</td>\
								</tr>\
	                        {{~}}',
	    'goodProdContent': '<option value="">全部商品</option>{{~ it.data:item}}\
		 	                <option value="{{= item.id}}">{{= item.spu_name}}</option>\
							{{~}}',
		'goodsRefereeSelect': '<option value="">全部商品</option>\
								{{~ it:item:index}}\
								<option value={{= item.id}}>{{= item.item_name}}</option>\
								{{~}}',
		'drawRefereeSelect': '<option value="" class="wei">全部奖品</option>\
								{{~ it:item:index}}\
								<option value={{= item.id}} data-type="1">{{= item.item_name}}</option>\
								{{~}}',
		'addActivityGoodsList': '{{~ it.data.data:item:index}}\
								<tr>\
									<td><input type="text" class="goods-sort sort" value={{= item.sort}}></td>\
									<td><img style="width:50px" src="{{= it.path + item.picture_url}}" alt=""></td>\
									<td>{{= item.item_name}}</td>\
									<td>{{= item.item_price_str}}</td>\
									<td><input class="goods-num amount" type="text" value={{= item.single_buy_num}}></td>\
									<td><input class="goods-inv amount" type="text" value={{= item.total_inv}}></td>\
									<td>{{= item.usable_inv || ""}}</td>\
									<td>{{= item.frozen_inv || 0}}</td>\
									<td>{{= item.withhold_inv || 0}}</td>\
									<td>{{= item.dudect_inv || 0}}</td>\
									<td>\
										<a class="off"  data-id={{= item.id}} data-version={{= item.version}}>保存</a>&nbsp;&nbsp;\
										<a class="dele"  data-id={{= item.id}}>删除</a>\
									</td>\
								</tr>\
							{{~}}',
		'addActivityDrawList': '{{~ it:item:index}}\
								<tr>\
									{{? item.award_type != 0}}\
									<td>红包</td>\
									{{?? item.award_type == 0}}\
									<td>商品</td>\
									{{?}}\
									{{? item.award_type == 0}}\
									<td>特等奖</td>\
									<td>{{= item.item_name}}</td>\
									{{?? item.award_type == 1}}\
									<td>一等奖</td>\
									<td>一等奖</td>\
									{{?? item.award_type == 2}}\
									<td>二等奖</td>\
									<td>二等奖</td>\
									{{?? item.award_type == 3}}\
									<td>三等奖</td>\
									<td>三等奖</td>\
									{{?? item.award_type == 4}}\
									<td>幸运奖</td>\
									<td>幸运奖</td>\
									{{?}}\
									{{? item.award_type != 4}}\
									<td>{{= item.award_money_str ||0}}</td>\
									<td>\
										<a class="dele"  data-id={{= item.id}}>删除</a>\
									</td>\
									{{?? item.award_type == 4}}\
									<td><input type="text" class="price-check draw-money" value={{= item.award_money_str ||0}}>\</td>\
									<td>\
										<a class="off"  data-id={{= item.id}}>保存</a>&nbsp;&nbsp;\
									</td>\
									{{?}}\
								</tr>\
	                        {{~}}',
	};
	module.exports = self_tpl;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * @Author: Jing 
	 * @Date: 2018-01-23 11:55:38 
	 * @Last Modified by: Jing
	 * @Last Modified time: 2018-04-10 17:25:44
	 */
	$(function () {
	    var self_tpl = __webpack_require__(28);
	    var $ajax = __webpack_require__(3);
	    var api_path_config = __webpack_require__(4);
	    var imgUpload = __webpack_require__(16);
	    var httpURL = __webpack_require__(6);
	    var activity_id = "";
	    var len = "";
	    var drainageState, drawState = "";
	    //选项卡样式
	    // $('#nav-select').delegate('.btn', 'click', function () {
	    //     $(this).siblings('.btn').removeClass('selected');
	    //     $(this).addClass('selected');
	    // });

	    //时间选项
	    var timepickerCfg = {
	        minInterval: (1000 * 60),
	        showSecond: true,
	        timeFormat: 'HH:mm:ss',
	        start: {
	            //开始时间
	            minDate: new Date()
	        },
	        end: {
	            //结束时间
	            //new Date()
	        }
	    };
	    $.timepicker.datetimeRange(
	        $('#exhibitionStart_time'),
	        $('#exhibitionEnd_time'),
	        timepickerCfg
	    );
	    // $.timepicker.datetimeRange(
	    //     $('#orderStart_time'),
	    //     $('#orderEnd_time'),
	    //     timepickerCfg
	    // );

	  
	    //点击下一步事件
	    var pram={};
	    $("body").on("click", "#next", function () {
	        //获取表数据与校验
	        pram.act_name = $("#activity_name").val().trim();
	        if (!pram.act_name) {
	            layer.msg("活动名不能为空！");
	            return;
	        }
	        pram.start_date = $("#exhibitionStart_time").val().trim();
	        if (!pram.start_date) {
	            layer.msg("活动时间不能为空！");
	            return;
	        };
	        pram.end_date = $("#exhibitionEnd_time").val().trim();
	        if (!pram.end_date) {
	            layer.msg("活动时间不能为空！");
	            return;
	        };
	        // pram.show_start_date = $("#orderStart_time").val().trim();
	        // if (!pram.show_start_date) {
	        //     layer.msg("订单时间不能为空！");
	        //     return;
	        // };
	        // pram.show_end_date = $("#orderEnd_time").val().trim();
	        // if (!pram.show_end_date) {
	        //     layer.msg("订单时间不能为空！");
	        //     return;
	        // };
	        pram.us_lottery = $("[name = open-draw]").is(":checked") == true ? 1 : 0;
	        pram.us_reward = $("[name = open-drainage]").is(":checked") == true ? 1 : 0;
	        drainageState = pram.us_reward;
	        drawState = pram.us_lottery;
	        //提交数据，跳转页面
	        $ajax.ajaxPost('/activity/save_activity.do', pram, function (data) {
	            if (data.success) {
	                $("#activity_name ,#exhibitionStart_time , #exhibitionEnd_time").val("");
	                $(".page").tab("show");
	                $("#information").removeClass("active");
	                $("#page").addClass("active");
	                $("#ullist li:lt(3) a").attr("data-toggle", "tab");
	                activity_id = data.data.id;
	            } else {
	                layer.msg(data.msg);
	            }
	        });
	        if (drawState == 0) {
	            $("#click_draw").on("click", function () {
	                layer.msg("抽奖状态未启用", {
	                    time: 2000
	                })
	            })
	        } else if (drawState == 1) {
	            $("#ullist li:eq(3) a").attr("data-toggle", "tab");
	        }
	        if (drainageState == 0) {
	            $(".drainage").on("click", function () {
	                layer.msg("引流状态未启用", {
	                    time: 2000
	                })
	            })
	        } else if (drainageState == 1) {
	            $("#ullist li:eq(4) a").attr("data-toggle", "tab");
	        }
	    });
	    // 交易图片上传
	    // if ($("#goods_img_box .per_img ").length == 0) {
	    //     $("#add_img_goods").on("click", function () {
	    //         imgUpload.init(function (value) {
	    //             var realValue = api_path_config.upload_path + value;
	    //             new_obj = $('<div class="per_img">' +
	    //                 '	<span class="icon" style="line-height: 20px;">X</span>' +
	    //                 '</div>');
	    //             var url = 'url(' + realValue + ') 0 0 no-repeat';
	    //             new_obj.css({
	    //                 'background': url,
	    //                 'background-size': 'contain'
	    //             });
	    //             new_obj.attr('data_img', value);
	    //             $("#goods_img_box .per_img").remove();
	    //             $("#add_img_goods").before($(new_obj));

	    //         }, false);
	    //     });
	    // }

	    // $(".user-container").on("click", "#goods_img_box .per_img .icon", function () {
	    //     $(this).parent().remove();
	    // });

	    // // 抽奖图片上传
	    // if ($("#draw_box .per_img ").length == 0) {
	    //     $("#add_img_draw").on("click", function () {
	    //         imgUpload.init(function (value) {
	    //             var realValue = api_path_config.upload_path + value;
	    //             new_obj = $('<div class="per_img">' +
	    //                 '	<span class="icon" style="line-height: 20px;">X</span>' +
	    //                 '</div>');
	    //             var url = 'url(' + realValue + ') 0 0 no-repeat';
	    //             new_obj.css({
	    //                 'background': url,
	    //                 'background-size': 'contain'
	    //             });
	    //             new_obj.attr('data_img', value);
	    //             $("#draw_box .per_img").remove();
	    //             $("#add_img_draw").before($(new_obj));
	    //         }, false);
	    //     });
	    // }

	    // $(".user-container").on("click", "#draw_box .per_img .icon", function () {
	    //     $(this).parent().remove();
	    // });


	    //二维码图片上传
	    if ($("#qrcode_box .per_img ").length == 0) {
	        $("#qrcode").on("click", function () {
	            imgUpload.init(function (value) {
	                var realValue = api_path_config.upload_path + value;
	                new_obj = $('<div class="per_img">' +
	                    '	<span class="icon" style="line-height: 20px;">X</span>' +
	                    '</div>');
	                var url = 'url(' + realValue + ') 0 0 no-repeat';
	                new_obj.css({
	                    'background': url,
	                    'background-size': 'contain'
	                });
	                new_obj.attr('data_img', value);
	                $("#qrcode_box .per_img").remove();
	                $("#qrcode").before($(new_obj));

	            }, false);
	        });
	    }

	    $(".user-container").on("click", "#qrcode_box .per_img .icon", function () {
	        $(this).parent().remove();
	    });
	    //页面设置保存事件
	    var page_pram = {};
	    $("body").on("click", "#save", function () {
	        page_pram.activity_id = activity_id;
	        // page_pram.acti_explain = $("#activity_info").val().trim();
	        // if (!page_pram.acti_explain) {
	        //     layer.msg("请输入活动说明！");
	        //     return;
	        // };
	        // page_pram.award_explan = $("#draw_info").val().trim();
	        // if (!page_pram.award_explan) {
	        //     layer.msg("请输入抽奖说明！");
	        //     return;
	        // }
	        // var goods_pic = [];
	        // var arr = $(".per_img");
	        // for (var i = 0; i < arr.length; i++) {
	        //     goods_pic.push(arr.eq(i).attr("data_img"));
	        // };
	        // //pram.trade_entr_pic = goods_pic;
	        // page_pram.trade_entr_pic = $("#goods_img_box .per_img").attr("data_img");
	        // if (!page_pram.trade_entr_pic) {
	        //     layer.msg("请选择交易入口图片！");
	        //     return;
	        // };
	        // page_pram.award_entr_pic = $("#draw_box .per_img").attr("data_img");
	        // if (!page_pram.award_entr_pic) {
	        //     layer.msg("请选择抽奖入口图片！");
	        //     return;
	        // };
	        page_pram.qrcode_bk_pic = $("#qrcode_box .per_img").attr("data_img");
	        if (!page_pram.qrcode_bk_pic) {
	            layer.msg("请选择二维码背景图片！");
	            return;
	        };
	        $ajax.ajaxPost('/activity/save_activity_page.do', page_pram, function (data) {
	            if (data.success) {
	                // $("#activity_info , #draw_info").val("");
	                // $(".draw_img , .per_img").attr("data_img", "");
	                $(".goods").tab("show");
	                $("#page").removeClass("active");
	                $("#goods").addClass("active");
	            } else {
	                layer.msg(data.msg);
	            }
	        });

	    });


	    //活动商品
	    //商品列表获取
	    prodContent();

	    function prodContent() {
	        $ajax.ajaxPost('/active_item/get_item_no_invalid.do', {},
	            function (data) {
	                if (data.code == "10000") {
	                    $("#referee_select").html(doT.template(self_tpl.goodsRefereeSelect)(data.data));
	                } else {
	                    layer.msg(data.msg)
	                }
	            });
	    };
	    //商品列表渲染
	    function getGoodsData() {
	        // 获取列表
	        $ajax.ajaxPost('/activity/get_activity_item_by_act_id.do', {
	                activity_id: activity_id
	            },
	            function (data) {
	                if (data.code == "10000") {
	                    $('#tableBody').html(doT.template(self_tpl.addActivityGoodsList)({ data: data, path: api_path_config.upload_path}));
	                    $("body").off('click', '#click_goods');
	                }else if(data.data.length == 0){
	                    $("#tableBody").html("<tr><td colspan='11'><p style='text-align:center;'>暂无数据！</p</td></tr>")
	                }else {
	                    layer.msg(data.msg);
	                };
	            });
	    }

	    //点击添加按钮跳出添加商品弹出框
	    $(".user-container").on("click", "#addGoods", function () {
	        $('#addGoodsPopup').modal('toggle');
	    });
	    //根据选中商品进行添加添加事件
	    var addGoodsPram = {};
	    $("#addGoodsPopup").on("click", "#addChoiceGoods", function () {
	        addGoodsPram.activity_id = activity_id;
	        addGoodsPram.item_id = $("#referee_select").find("option:selected").attr("value");
	        addGoodsPram.sort = $("#goods_sort").val().trim();
	        // addGoodsPram.item_price = $("#goods_price").val().trim();
	        addGoodsPram.single_buy_num = $("#goods_limit").val().trim();
	        addGoodsPram.total_inv = $("#goods_sure").val().trim();
	        if (!addGoodsPram.item_id) {
	            layer.msg("请选择商品！");
	            return;
	        } else if (!addGoodsPram.sort) {
	            layer.msg("请输入商品排序！")
	            return;
	        } 
	        // else if (!addGoodsPram.item_price) {
	        //     layer.msg("请输入商品价格！")
	        //     return;
	        // } 
	        else if (!addGoodsPram.single_buy_num) {
	            layer.msg("请输入商品限购量！")
	            return;
	        } else if (!addGoodsPram.total_inv) {
	            layer.msg("请输入商品总库存！")
	            return;
	        }
	        $ajax.ajaxPost('/activity/save_activity_item.do', addGoodsPram, function (data) {
	            if (data.success) {
	                $("#referee_select option:selected").remove();
	                $("#goods_sort , #goods_price , #goods_limit , #goods_sure ").val("");
	                $('#addGoodsPopup').modal('toggle');
	                getGoodsData();
	            } else {
	                layer.msg(data.msg);
	            }
	        });
	    });

	    //活动商品保存事件
	    var goodsPreservation = {};
	    $("#tableBody").on("click", ".off", function () {
	        var _this = $(this);
	        var _id = _this.attr("data-id");
	        goodsPreservation.id = _id;
	        goodsPreservation.activity_id = activity_id;
	        goodsPreservation.sort = _this.parents("tr").find(".goods-sort").val();
	        // goodsPreservation.item_price = _this.parents("tr").find(".goods-price").val();
	        goodsPreservation.single_buy_num = _this.parents("tr").find(".goods-num").val();
	        goodsPreservation.total_inv = _this.parents("tr").find(".goods-inv").val();
	        goodsPreservation.version = _this.attr("data-version");
	        if (!goodsPreservation.sort) {
	            layer.msg("请输入商品排序！");
	            return;
	        }
	         else if (!goodsPreservation.single_buy_num) {
	            layer.msg("请输入商品限购量！");
	            return;
	        } else if (!goodsPreservation.total_inv) {
	            layer.msg("请输入商品总库存！");
	            return;
	        };
	        $ajax.ajaxPost('/activity/update_activity_item.do', goodsPreservation, function (data) {
	            if (data.success) {
	                getGoodsData();
	                layer.msg("保存成功");
	            } else {
	                layer.msg(data.msg);
	            }
	        });
	    });

	    //删除事件
	    $("#tableBody").on("click", ".dele", function () {
	        var _id = $(this).attr("data-id");
	        id = {
	            id: _id
	        };
	        $ajax.ajaxPost('/activity/remove_activity_item.do', id, function (data) {
	            if (data.success) {
	                getGoodsData();
	                layer.msg("删除成功");
	            }
	        });
	    });

	    //按需加载抽奖页面数据
	    $("body").on("click", "#click_draw", function () {
	        getDrawData();
	        drawList();
	    });
	    //商品列表获取
	    function drawList() {
	        $ajax.ajaxPost('/active_item/get_item_list.do', {},
	            function (data) {
	                if (data.code == "10000") {
	                    $("#refereeSelect").html(doT.template(self_tpl.drawRefereeSelect)(data.data));
	                }
	            });
	    };
	    //商品列表渲染
	    function getDrawData() {
	        // 获取列表
	        $ajax.ajaxPost('/activity/get_activity_award_conf_by_act_id.do', {
	                activity_id: activity_id
	            },
	            function (data) {
	                if (data.code == "10000") {
	                    len = data.data.length;
	                    $('#table-body').html(doT.template(self_tpl.addActivityDrawList)(data.data));
	                    $("body").off('click', '#click_draw');
	                }else if(data.data.length == 0){
	                    $("#table-body").html("<tr><td colspan='6'><p style='text-align:center;'>暂无数据！</p</td></tr>")
	                } else {
	                    layer.msg(data.msg)
	                }
	            });
	    }
	    //点击添加抽奖商品按钮跳出弹出框
	    //点击添加抽奖商品按钮跳出弹出框

	    $(".user-container").on("click", "#addDrawGoods", function () {
	        $('#addDrawPopup').modal('toggle');
	    });
	    //修改默认金额
	    var datapram = {
	        activity_id: activity_id,
	    };
	    var changeDataType = "";
	    //根据选中商品进行添加添加事件
	    $("#grade").change(function () {
	        changeDataType = $("#grade").find("option:selected").attr("value");
	        if (changeDataType == 0) {
	            $("#drawBody #choiceGoods").css("display", "block");
	            $("#drawBody #awardMoney").css("display", "none");
	        } else if (changeDataType == null) {
	            $("#drawBody #choiceGoods").css("display", "block");
	            $("#drawBody #awardMoney").css("display", "block");
	        }
	        else {
	            $("#drawBody #choiceGoods").css("display", "none");
	            $("#drawBody #awardMoney").css("display", "block");
	        }
	    });
	    var addDrawPram = {};
	    $("#addDrawPopup").on("click", "#addDrawSave", function () {
	        addDrawPram.award_type = $("#grade").find("option:selected").attr("value");
	        addDrawPram.activity_id = activity_id;
	        if (!addDrawPram.award_type) {
	            layer.msg("请选择奖品级别！");
	            return;
	        }
	        if (changeDataType == 0) {
	            addDrawPram.item_id = $("#refereeSelect").find("option:selected").attr("value");
	            if (!addDrawPram.item_id) {
	                layer.msg("请选择商品！");
	                return;
	            }
	        } else if (changeDataType != 0 || changeDataType != null) {
	            addDrawPram.award_money = $("#prize_value").val();
	            if (!addDrawPram.award_money) {
	                layer.msg("请选择商品！");
	                return;
	            }
	        }
	        if (len <= 4) {
	            $ajax.ajaxPost('/activity/save_activity_award_conf.do', addDrawPram, function (data) {
	                if (data.success) {
	                    $("#grade .jing").attr("selected", "selected");
	                    $("#refereeSelect .wei").attr("selected", "selected");
	                    $("#prize_value").val("");
	                    $('#addDrawPopup').modal('toggle');
	                    addDrawPram = {};
	                    getDrawData();
	                } else {
	                    if (layer.msg == "") {
	                        layer.msg("添加失败");
	                    } else {
	                        layer.msg(data.msg);
	                    }
	                }
	            });
	        } else {
	            layer.msg("最多可添加五个奖项！");
	        }

	    });
	    //抽奖保存事件
	    //出奖序号
	    // $("#goodsTable").on("click", ".draw-serial-number", function () {
	    //     var __this = $(this);
	    //     $('#addDrawSerialNumber').modal('toggle');
	    //     $("#drawSerialNumberText").val($(__this).val());
	    //     __this.attr("id", "Identification");
	    // });
	    // $("#addDrawSerialNumber").on("click", "#drawSerialNumberSave", function (__this) {
	    //     $("#Identification").val($("#drawSerialNumberText").val());
	    //     $("#Identification").attr("id", "");
	    //     $('#addDrawSerialNumber').modal('toggle');
	    // });
	    var drawPreservation = {};
	    $("#goodsTable").on("click", ".off", function () {
	        var _this = $(this);
	        var _id = _this.attr("data-id");
	        drawPreservation.id = _id;
	        drawPreservation.activity_id = activity_id;
	        drawPreservation.award_money = _this.parents("tr").find(".draw-money").val();
	        var dataType = _this.parents("tr").find(".draw-money").attr("data-type");
	        // drawPreservation.default_money = $("#default_amount").val().trim();
	        if (!drawPreservation.award_money) {
	            layer.msg("请输入金额！");
	            return;
	        } 
	        $ajax.ajaxPost('/activity/update_activity_award_conf.do', drawPreservation, function (data) {
	            if (data.success) {
	                getDrawData();
	                layer.msg("保存成功");
	            } else {
	                if (layer.msg == "") {
	                    layer.msg("添加失败");
	                } else {
	                    layer.msg(data.msg);
	                }
	            }
	        });
	    });

	    $("#goodsTable").on("click", ".dele", function () {
	        var _id = $(this).attr("data-id");
	        id = {
	            id: _id
	        };
	        $ajax.ajaxPost('/activity/remove_activity_award_conf.do', id, function (data) {
	            if (data.success) {
	                getDrawData();
	                layer.msg("删除成功");
	            }
	        });
	    });
	    //引流页面逻辑
	    var agentPram = {};
	    $("body").on("click", "#drainageSave", function () {
	        agentPram.id = activity_id;
	        agentPram.award_money = $("#drainage-money").val().trim();
	        agentPram.num = $("#drainage-num").val().trim();
	        if (!agentPram.award_money) {
	            layer.msg("请输入单位数量");
	            return;
	        } else if (!agentPram.award_money) {
	            layer.msg("请输入红包金额！");
	            return;
	        }
	        $ajax.ajaxPost('/activity/update_activity_draiaward.do', agentPram, function (data) {
	            if (data.success) {
	                layer.msg("保存成功");
	                $("#drainage-num , #drainage-money").val("");
	                window.location.href = "activity-list.html";
	            } else {
	                if (layer.msg == "") {
	                    layer.msg("保存失败");
	                } else {
	                    layer.msg(data.msg);
	                }
	            }
	        });
	    });
	    //input框内容校验
	    //排序
	    $("body").on("keyup", ".sort", function () {
	        var value = $(this).val().trim();
	        var re = /^\d{1,2}$/;
	        if (!re.test(value)) {
	            layer.msg("排序为一到两位数字");
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
	    $("body").on("keyup", ".price-check", function () {
	        var value = $(this).val().trim();
	        var re = /^\d{1,6}(\.(\d{1,2})?)?$/;
	        if (!re.test(value)) {
	            layer.msg("价格为数字，且小数点后为两位");
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

	    //出奖序号
	    $("body").on("keyup", ".comma", function () {
	        var value = $(this).val().trim();
	        var re = /^[\d,]+$/;
	        if (!re.test(value)) {
	            layer.msg("出奖序号由数字组成且以英文逗号分隔");
	        }
	    });

	    //比例
	    $("body").on("keyup", ".proportion", function () {
	        var value = $(this).val().trim();
	        var re = /^\d{0,2}(\.(\d{1,2})?)?$/;
	        if (!re.test(value)) {
	            layer.msg("概率为小于100的数字，且小数点后为两位");
	            $(this).val("");
	        }
	    });
	});

/***/ })

/******/ });