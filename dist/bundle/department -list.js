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

	module.exports = __webpack_require__(81);


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

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

	var self_tpl = __webpack_require__(80);
	$(function() {
		var setting = {
			check: {
				enable: false
			},
			data: {
				simpleData: {
					enable: true
				}
			}
		};
		// var setting = {
		// 		view: {
		// 			addHoverDom: addHoverDom,
		// 			removeHoverDom: removeHoverDom,
		// 			selectedMulti: false
		// 		},
		// 		edit: {
		// 			enable: true,
		// 			editNameSelectAll: true
		// 			showRemoveBtn: showRemoveBtn,
		// 			showRenameBtn: showRenameBtn
		// 		},
		// 		data: {
		// 			simpleData: {
		// 				enable: true
		// 			}
		// 		}
		// 	};
		$.post('/getDepartment.do', {}, function(data) {
			$.fn.zTree.init($("#depTree"), setting, data.data.list);
		});


		$('#save-dep').click(function(){
			var param = {
				name: $('#dep-name').val(),
				description: $('#dep-description').val(),
			}
			$.post('/saveDepInfo.do', param, function(data) {
				if(data.isSuccess) {
					location.href = 'department.html';
				} else {
					layer.msg(data.msg);
				}
			});
		});
		$('#cancel-save-dep').click(function(){
			// $('.list-group').toggle();
			// $('.edit-group').toggle();
			location.href = 'department.html';
			// var treeObj = $.fn.zTree.getZTreeObj("role-choise");
			// treeObj.checkAllNodes(true);
		});
		$('#add-btn').click(function(){
			$('.list-group').toggle();
			$('.edit-group').toggle();
		});
	});


/***/ })

/******/ });