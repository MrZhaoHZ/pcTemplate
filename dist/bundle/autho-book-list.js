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

	module.exports = __webpack_require__(54);


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

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

	var self_tpl = __webpack_require__(55);
	var $ajax = __webpack_require__(3);
	$(function(){
		var filterCondition = {page_size:20,current_page:1};
		function getAuthoBook(pageIndex) {
			filterCondition.current_page = pageIndex;
			$ajax.post('/agent/certificate_template/list.do',filterCondition,function(data){
				$('#right-bar-container table').html(doT.template(self_tpl.listTpl)(data.data));
				$("#pager").pager({ pagenumber: pageIndex, pagecount: Math.ceil(data.data.total_count / filterCondition.page_size), buttonClickCallback: getAuthoBook});
			});
		}
		getAuthoBook(1);
		$('#right-bar-container').delegate('.preview-btn','click',function(){
			var bookId = $(this).closest('tr').data('id');
			// layer.open({
			//   type: 2,
			//   title: '预览',
			//   shadeClose: true,
			//   shade: 0.8,
			//   area: ['414px', '736px'],
			//   content: 'autho-book-mobile.html?id=' + bookId//iframe的url
			// }); 
			$ajax.post('/agent/certificate_template/preview.do',{id: bookId},function(data){
				if(data.success) {
					$('#preview-layer').remove();
					$('body').append('<div id="preview-layer" style="display:none;"><img src="' + __webpack_require__(4).upload_path + data.data + '" style="width:100%;"></div>');
					setTimeout(function () {
						layer.open({
						  type: 1,
						  title: false,
						  closeBtn: 1,
						  area: '640px',
						  skin: 'layui-layer-nobg', //没有背景色
						  shadeClose: true,
						  content: $('#preview-layer')
						});
					},2000);
				}
			});
		});
	});

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


/***/ })

/******/ });