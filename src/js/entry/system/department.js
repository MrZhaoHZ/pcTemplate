var self_tpl = require('../../module/tpl/role-management-tpl.js');
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
