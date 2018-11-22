var self_tpl = require('../../module/tpl/employee-tpl.js');
var httpURL = require('../../common/http-url.js');
var $ajax = require('../../common/ajax.js');
$(function() {
	var type = httpURL.getQueryString('type');
	var empId = httpURL.getQueryString('id');
	if(type === 'edit') {
		$('.list-group').hide();
		$('.edit-group').show();
		$ajax.ajaxPost('/getEmpInfo.do', {id: empId}, function(data) {
			data.data.type = "edit";
			$('#edit-area').html(doT.template(self_tpl.empTpl)(data.data))
		})
	} else {
		// var setting = {
		// 	check: {
		// 		enable: false
		// 	},
		// 	data: {
		// 		simpleData: {
		// 			enable: true
		// 		}
		// 	}
		// };
		// $.post('/getDepartment.do', {}, function(data) {
		// 	$.fn.zTree.init($("#depTree"), setting, data.data.list);
		// });
		$('.edit-group').toggle();
		$.post('/getDepUserInfo.do', {}, function(data) {
			$('#edit-area').html(doT.template(self_tpl.empTpl)(data.data))
		});
	}



	$('#edit-area').delegate('#cancel-save-dep','click',function(){
		location.href = 'employee-list.html';
	});

	$('#edit-area').delegate('#save-dep','click',function(){
		var param = {
			id: $('#dep-id').val(),
			name: $('#dep-name').val(),
			sex: $('input[name="empSex"]:checked').val(),
			depId: $('#depSelect option:checked').val(),
			userId: $('#userSelect option:checked').val()
		}
		$.post('/saveDepInfo.do', param, function(data) {
			if(data.isSuccess) {
				location.href = 'employee-list.html';
			} else {
				layer.msg(data.msg);
			}
		});
	});

	// $('#add-btn').click(function(){
	// 	$('.list-group').toggle();
	// 	$('.edit-group').toggle();
	// 	$.post('/getDepUserInfo.do', {}, function(data) {
	// 		$('#edit-area').html(doT.template(self_tpl.empTpl)(data.data))
	// 	});
	// });
});
