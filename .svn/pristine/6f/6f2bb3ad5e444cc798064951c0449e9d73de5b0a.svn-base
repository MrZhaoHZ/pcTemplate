var $ajax = require('../../common/ajax.js');
$(function() {
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
	$ajax.post('/department/list.do', {}, function(data) {
		if(data.success){
			var depList = data.data;
			var depTree = [];
			depTree.push({
				id: 0,
				name: "一叶子",
				open: true
			});
			for(var i=0;i<depList.length;i++){
				depTree.push({
					id: depList[i].id,
					name: depList[i].department_name,
					parent_id: depList[i].parent_id,
					url: 'department-detail.html?id=' + depList[i].id,
					target: '_self',
					open: true
				});
			}
			$.fn.zTree.init($("#depTree"), setting, depTree);
		}
	});


	$('#save-dep').click(function(){
		var param = {
			department_name: $('#dep-name').val(),
			//description: $('#dep-description').val(),
			parent_id: '0',
			level: '0'
		}
		$ajax.post('/department/add.do', param, function(data) {
			if(data.success) {
				location.href = 'department-list.html';
			} else {
				layer.msg(data.msg);
			}
		});
	});
	$('#cancel-save-dep').click(function(){
		$ajax.post('/roleFunction/roleList.do', filterCondition, function(data) {
			if(data.success){
				location.href = 'department-list.html';
			}
		});
		// $('.list-group').toggle();
		// $('.edit-group').toggle();
		// location.href = 'department-list.html';
		// var treeObj = $.fn.zTree.getZTreeObj("role-choise");
		// treeObj.checkAllNodes(true);
	});
	$('#add-btn').click(function(){
		$('.list-group').toggle();
		$('.edit-group').toggle();
	});
});
