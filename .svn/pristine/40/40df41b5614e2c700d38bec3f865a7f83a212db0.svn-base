var $ajax = require('../../common/ajax.js');
var httpURL = require('../../common/http-url.js');
$(function() {
	var departId = httpURL.getQueryString('id');
	var setting = {
		// check: {
		// 	enable: true
		// },
		data: {
			// key: {
			// 	checked: "is_check"
			// },
			simpleData: {
				enable: true,
				idKey: "id",
				pIdKey: "parent_id"//,
				// rootPId: "0"
			}
		}
	};
	$ajax.post('/department/get.do', {depart_id: departId}, function(data) {
		if(data.success){
			$('#dep-name').val(data.data.department_name);
		}
	});


	$('#save-dep').click(function(){
		var param = {
			depart_id: departId,
			department_name: $('#dep-name').val()
		}
		$ajax.post('/department/modify.do', param, function(data) {
			if(data.success) {
				location.href = 'department-list.html';
			} else {
				layer.msg(data.msg);
			}
		});
	});
});
