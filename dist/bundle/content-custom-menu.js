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

	module.exports = __webpack_require__(68);


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

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

	$(function(){
		var self_tpl = __webpack_require__(63);
		var $ajax = __webpack_require__(3);
		// var tpl = '{{~ it.list:item:index }}\
		// 			<option value="{{= item.id}}">{{= item.name}}</option>\
		// 	  {{~}}';
		// function level() {
		// 	$ajax.post('/getLevel.do',null,function(data){
		// 		$('#options').html(doT.template(tpl)(data.data))
		// 	});
		// };
		//level();
		var tpl = '<option value=""></option>\
					{{~ it:item:index }}\
						<option value="{{= item.id}}">{{= item.name}}</option>\
				  	{{~}}';
		function cate() {
			$ajax.ajaxPost('/content/get_main_menu.do',{},function(data){
				if (data.code == "10000") {
					$('#options').html(doT.template(tpl)(data.data));
				};
			});
		};
		// cate();
		getData();
		function getData(pagenumber){
			$ajax.ajaxPost('/content/custom_menu_list.do', {  },
				function(data){
					$('#table-body').html(doT.template(self_tpl.contentCustomMenuTpl)(data.data));
					//$("#pager").pager({ pagenumber: pagenumber, pagecount: 18, buttonClickCallback: PageClick});
			});
		};
		function PageClick (pageclickednumber) {
			getData(pageclickednumber);
		};

		var pram = {
			name: "",
			sort: "",
			type: ""
		};
		var flag = 1;
		$("#searcher").on("click", function(){
			pram = {
				name: "",
				sort: "",
				type: ""
			};
			flag = 1;
			pram.id = "";
			$("#options").removeAttr("disabled", "disabled");
			$("#menu_link").val("");
			$("#menu_name").val("");
			$("#menu_key").val("");
			$("#menu_sort").val("");
			//$("input[name=optionsStatus]").attr("checked", false);
			$('input:radio:first').trigger("click");
			$("#options option").remove();
			$('#myModal').modal();
		});
		//只能输入0-6个数字
		$("#menu_sort").keyup(function(){
			var num = $("#menu_sort").val();
			if(!(/^\d{0,2}$/.test(num))){ 
				$("#menu_sort").val("");
			};
		});
		$("#table").on("click",".edit", function(){
			pram = {
				name: "",
				sort: "",
				type: ""
			};
			flag = 2;
			$("#menu_link").val("");
			$("#menu_name").val("");
			$("#menu_key").val("");
			$("#menu_sort").val("");
			$('#myModal').modal();
			$("#options option").remove();

			var parent_id = "";
			pram.id = $(this).parent().attr("data_id");
			var type = $(this).attr("data_type");
			parent_id = $(this).attr("data_parent_id");
			$("#options").attr("disabled", "disabled");
			if (type == "2" || type == "3") {
				cate();
				setTimeout(function(){
					if (parent_id) {
						$("#options option[value=" + parent_id + "]").attr("selected", true);
					};
				},500);
				
				
			};
			
			
			
				//$("input[name=optionsStatus]").attr("checked", false);
			var tmp_value = parseInt(type) -1;
			$("input[name=optionsStatus][value=" + tmp_value + "]").trigger("click");
			
			//var parent_id = $(this).parent().attr("data_id");

			
			var parent = $(this).parent().parent();
			$("#menu_name").val(parent.find(".text").text());
			$("#menu_key").val(parent.children(".key_world").text());
			$("#menu_link").val(parent.children(".link").text());
			$("#menu_sort").val(parent.children(".sort").text());
			
		});
		$("#up_data").on("click", function(){
		 	$ajax.ajaxPost('/content/menu/wxsync.do', {},
				function(data){
					if (data.success) {
						layer.msg("微信同步成功！");
					};
			});
		});
		$("#save").on("click", function(){
			
			pram.name = $("#menu_name").val().trim();
			if (!pram.name) {
				layer.msg("菜单名不能为空！");
				return;
			};
			
			tmp_type = parseInt($("input[name='optionsStatus']:checked").attr("value")) + 1;
			pram.type = String(tmp_type);
			if (pram.type == "2") {
				pram.keywords = $("#menu_key").val().trim();
				if (!pram.keywords) {
					layer.msg("关键字不能为空！");
					return;
				};
			}else if (pram.type =="3") {
				pram.uri = $("#menu_link").val().trim();
				if (!pram.uri) {
					layer.msg("链接不能为空！");
					return;
				};
			};
			if (pram.type == "2" || pram.type == "3") {
				pram.parent_id = $("#options option:checked").attr("value");
			};
			
			pram.sort = $("#menu_sort").val().trim();
			if (!pram.sort) {
				layer.msg("排序不能为空！");
				return;
			};
			if (flag == 1) {
				$ajax.ajaxPost('/content/save_custom_menu.do', pram,
					function(data){
						if (data.success) {
							$("#menu_link").val("");
							$("#menu_name").val("");
							$("#menu_key").val("");
							$("input[name=optionsStatus]").attr("checked", false);
							$('#myModal').modal("hide");
							$("#options option").remove();
							if (pram.id) {
								layer.msg("保存成功！");
							}else {
								layer.msg("新建成功！");
							}
							
							getData();
						};
				});
			} else{
				$ajax.ajaxPost('/content/menu/modify.do', pram,
					function(data){
						if (data.success) {
							$("#menu_link").val("");
							$("#menu_name").val("");
							$("#menu_key").val("");
							$("input[name=optionsStatus]").attr("checked", false);
							$('#myModal').modal("hide");
							$("#options option").remove();
							if (pram.id) {
								layer.msg("保存成功！");
							}else {
								layer.msg("编辑成功！");
							}
							
							getData();
						};
				});
			};
			
		});
		$("#table").on("click",".dele", function(){
			var id = $(this).parent().attr("data_id");
			layer.confirm('确定要删除该管理帐号吗？', {
			  btn: ['确定','取消'] //按钮
			}, function(index){
				$ajax.ajaxPost('/content/deleted_custom_menu.do', {id: id}, function(data) {
					layer.close(layer.index);
					layer.msg("删除成功！");
					getData();
				});
			});
		});

		$("#radio").on("click", "input", function(){
			
				var index = $("#radio input").index(this);
				$(".isHidden .div_hidden").css("display","none");
				$(".isHidden .type_input").eq(index).css("display", "block");
				if (flag == 1) {
					if ($(this).attr("value") =="1" || $(this).attr("value")== "2") {
						cate();
					}else{
						$("#options option").remove();
					}
				}
			
		});
	});


/***/ })

/******/ });