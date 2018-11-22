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

	module.exports = __webpack_require__(66);


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

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

	$(function(){
		var self_tpl = __webpack_require__(63);
		var $ajax = __webpack_require__(3);
		var api_path_config = __webpack_require__(4);
		var path = api_path_config.upload_path;
		var parm = {
			nickName: "",
			name: "",
			phone: "",
			weChat: "",
			identity_num: "",
			level: ""
		};
		$("#searcher").click(function(){
			if ($("#table-body tr").length<5) {
				window.location.href = "content-carousel-new.html";
			}else{
				layer.msg("轮播图最多添加5个！");
			};
		});
		getData();
		function getData(pagenumber){
			
			$ajax.ajaxPost('/content/carousel_picture_list.do', {  }, 
				function(data){
					if (data.data) {
						$('#table-body').html(doT.template(self_tpl.contentCarouselManagementTpl)({data: data.data, path: path}));
						//$("#pager").pager({ pagenumber: pagenumber, pagecount: 18, buttonClickCallback: PageClick});
					}else{
						$("#table-body tr").remove();
						$(".user-container").append("<p class='prompt'>暂无数据</p>");
					};
			});
		};
		function PageClick (pageclickednumber) {
			getData(pageclickednumber);
		};

		$("#table").on("click",".dele", function(){
			var id = $(this).parent().attr("data-id");
			layer.confirm('确定要删除此记录吗？', {
			  btn: ['确定','取消'] //按钮
			}, function(index){
				$ajax.ajaxPost('/content/deleted_carousel_picture.do', {id: id}, function(data) {
					if (data.success) {
						layer.close(layer.index);
						layer.msg("删除成功！");
						getData();
					}
				});
			});
		});
	});


/***/ })

/******/ });