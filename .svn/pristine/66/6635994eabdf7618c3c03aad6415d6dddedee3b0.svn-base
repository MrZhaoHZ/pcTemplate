var self_tpl = require('../../module/tpl/employee-tpl.js');
var httpURL = require('../../common/http-url.js');
var $ajax = require('../../common/ajax.js');
$(function() {
	var empId = httpURL.getQueryString('id');
	if(empId) {
		$('.list-group').hide();
		$('.edit-group').show();
		$ajax.ajaxPost('/employee/get.do', {employee_id: empId}, function(data) {
			if(data.success){
				data.data.type = "edit";
				$('#edit-area').html(doT.template(self_tpl.empTpl)(data.data));
				initDepSelect(data.data.employee_department_d_t_os[0].department_id);
				initUserSelect(data.data.user_id);
			}
		})
	} else {
		$('.list-group').hide();
		$('.edit-group').show();
		var data = {type: "new"};
		$('#edit-area').html(doT.template(self_tpl.empTpl)(data));
		initDepSelect();
		initUserSelect();
	}

	function initDepSelect(depId){
		$ajax.post('/department/list.do', {}, function(data) {
			if(data.success){
				if(depId){
					data.data.depId = depId;
				}
				$('#depSelect').html(doT.template(self_tpl.depOptionTpl)(data.data));
			}
		});
	}

	function initUserSelect(userId){
		$ajax.post('/user/list.do', {}, function(data){
			if(data.success) {
				if(userId){
					data.data.userId = userId;
				}
				$('#userSelect').html(doT.template(self_tpl.userOptionTpl)(data.data));
			}
		});
	}

	$('#edit-area').delegate('#cancel-save-emp','click',function(){
		location.href = 'employee-list.html';
	});
	// mployee/add.do?gender=nv&name=nsme&user_id=21&department_Id=4&age=41&mobile=31312312
	$('#edit-area').delegate('#save-emp','click',function(){
		var param = {
			name: $('#name').val(),
			gender: $('input[name="empSex"]:checked').val(),
			department_Id: $('#depSelect option:checked').val(),
			user_id: $('#userSelect option:checked').val(),
			mobile: $('#mobile').val(),
			age: $('#age').val()
		}
		var reqStr = '/employee/add.do';
		if(empId){
			param.employee_id = empId;
			reqStr = '/employee/modify.do';
		}
		$ajax.post(reqStr, param, function(data) {
			if(data.success) {
				location.href = 'employee-list.html';
			} else {
				// layer.msg(data.msg);
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
