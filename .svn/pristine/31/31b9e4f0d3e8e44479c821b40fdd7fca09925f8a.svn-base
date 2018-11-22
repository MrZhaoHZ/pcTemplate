var self_tpl = require('../../module/tpl/role-management-tpl.js');
var $ajax = require('../../common/ajax.js');
var roleModule = require('../../common/role1.js');
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
