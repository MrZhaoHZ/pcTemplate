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

	module.exports = __webpack_require__(122);


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

/***/ 80:
/***/ (function(module, exports) {

	var self_tpl = {
		'roleListTpl': '{{~ it:item:index }}\
							<tr class="operate">\
								<td>{{= item.role_name }}</td>\
								<td>{{= item.des }}</td>\
								<td>{{? item.user_count}}{{= item.user_count }}{{?}}</td>\
								<td data-id="{{= item.id }}" data-name="{{= item.role_name }}" data-des="{{= item.des }}"><a href="javascript:void(0);" class="edit-btn">编辑</a><a href="javascript:void(0);"  class="delete-btn">删除</a></td>\
							</tr>\
						{{~}}'
		,'roleOptionTpl': '{{~ it:item:index }}\
							<option value="{{= item.id }}">{{= item.role_name }}</option>\
						  {{~}}'
	};
	module.exports = self_tpl;

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

	var self_tpl = __webpack_require__(80);
	var $ajax = __webpack_require__(3);
	var roleModule = __webpack_require__(123);
	$(function() {
		if(roleModule.isBusiAdmin()){
			$('#add-role-btn').show();
			$('#role-edit-tool').show();
		}
		function PageClick (pageclickednumber) {
			getRoleList(pageclickednumber);
		}

		var filterCondition = {page_size:'20',current_page:'1'}
		function getRoleList(pageIndex) {
			filterCondition.current_page = pageIndex;
			$ajax.post('/roleFunction/roleList.do', filterCondition, function(data) {
				$('#role-body').html(doT.template(self_tpl.roleListTpl)(data.data.datas));
				$("#pager").pager({ pagenumber: pageIndex, pagecount: Math.ceil(data.data.total_count / filterCondition.page_size), buttonClickCallback: PageClick});
			});
		};
		getRoleList(1);

		$('#role-body').delegate('.edit-btn','click',function(){
			$('.list-group').toggle();
			$('.edit-group').toggle();
			$('#role-id').val($(this).closest('td').data('id'));
			$('#role-name').val($(this).closest('td').data('name'));
			$('#role-description').val($(this).closest('td').data('des'));
			getRoleTree($(this).closest('td').data('id'));
		});
		$('#role-body').delegate('.delete-btn','click',function(){
			var curr = $(this);
			layer.confirm('确定删除吗？', {
				btn: ['确定','取消'] //按钮
			}, function(){
				$ajax.post('/roleFunction/removeRole.do', {id:curr.closest('td').data('id')}, function(data) {
					if(data.success){
						curr.closest('.operate').remove();
						layer.msg('已删除');
					} else {
						if(data.code === '40001') {
							layer.msg(data.msg);
						}
					}
				});
			}, function(){
				return;
			});
		});
		
		var setting = {
			check: {
				enable: true
			},
			data: {
				key: {
					checked: "is_check"
				},
				simpleData: {
					enable: true,
					idKey: "id",
					pIdKey: "parent_id",
					rootPId: "0"
				}
			}
		};

		function getRoleTree(roleID) {
			$ajax.post('/roleFunction/getFunction.do', {id:roleID}, function(data) {
				if(data.success){
					$.fn.zTree.init($("#role-choise"), setting, data.data);
				}
			});
		}

		$('#save-role').click(function(){
			var ids = [];
			var treeObj = $.fn.zTree.getZTreeObj("role-choise");
			var nodes = treeObj.getCheckedNodes(true);

			for (var i = 0; i < nodes.length; i++) {
				ids[i] = nodes[i].id;
			}
			// console.log(ids);
			var param = {
				//id: $('#role-id').val(),
				role_name: $('#role-name').val(),
				des: $('#role-description').val(),
				role_list: ids
			}
			if($('#role-id').val() != ''){
				param.id = $('#role-id').val();
			}
			$ajax.post('/roleFunction/saveRole.do', {content:JSON.stringify(param)}, function(data) {
				if(data.success) {
					// location.href = 'role-management.html';
					location.reload();
				} else {
					//layer.msg(data.msg);
				}
			});
		});
		$('#cancel-save-role').click(function(){
			// $('.list-group').toggle();
			// $('.edit-group').toggle();
			location.href = 'role-management.html';
			// var treeObj = $.fn.zTree.getZTreeObj("role-choise");
			// treeObj.checkAllNodes(true);
		});
		$('#add-role-btn').click(function(){
			$('.list-group').toggle();
			$('.edit-group').toggle();
			getRoleTree();
		});
	});


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

	var localStorage = __webpack_require__(13);
	//系统管理员
	function isSysAdmin() {
		var isSuperAdmin = false;
		var roleIdList = localStorage.getItem('roleIdList');
		// for(var i=0;i<roleIdList.length;i++){
		// 	if(roleIdList[i].role_id == '1') {
		// 		isSuperAdmin = true;
		// 		break;
		// 	}
		// }
		if (roleIdList.role_id == '1'){
			isSuperAdmin = true;
		}
		return isSuperAdmin;
	}

	//业务管理员
	function isBusiAdmin() {
		var isBusiAdmin = false;
		var roleIdList = localStorage.getItem('roleIdList');
		if (roleIdList.role_id == '2') {
			isBusiAdmin = true;
		}
		// for(var i=0;i<roleIdList.length;i++){
		// 	if(roleIdList[i].role_id == '2') {
		// 		isBusiAdmin = true;
		// 		break;
		// 	}
		// }
		return isBusiAdmin;
	}
	module.exports = {
		isSysAdmin: isSysAdmin,
		isBusiAdmin: isBusiAdmin
	};

/***/ })

/******/ });