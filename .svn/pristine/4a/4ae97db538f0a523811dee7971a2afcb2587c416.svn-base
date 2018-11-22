var $ajax = require('../../common/ajax.js');
var httpURL = require('../../common/http-url.js');
var self_tpl = require('../../module/tpl/user-management-tpl.js');
var roleModule = require('../../common/role1.js');
$(function(){
	var userId = httpURL.getQueryString('id');
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
				idKey: "id"
			}
		}
	};
	if(userId) {
		$('#user-edit-title').html('用户编辑');
		var reqStr = '';
		if(roleModule.isSysAdmin()){
			reqStr = '/user/get.do';
		}
		if(roleModule.isBusiAdmin()){
			reqStr = '/user/grantRole/query.do';
		}
		$ajax.post(reqStr, {user_id: userId}, function(data) {
			if(data.success){
				// var roleList = data.data.datas;
				// var roleTree = [];
				// for(var i=0;i<roleList.length;i++){
				// 	roleTree.push({
				// 		id: roleList[i].id,
				// 		name: roleList[i].role_name
				// 	});
				// }
				// $.fn.zTree.init($("#role-choise"), setting, roleTree);
				// $('#user-info').html(doT.template(self_tpl.userEditTpl)(data.data));
				data.data.isSysAdmin = roleModule.isSysAdmin();
				data.data.isBusiAdmin = roleModule.isBusiAdmin();
				$('.user-container').html(doT.template(self_tpl.userEditTpl)(data.data));
				if(roleModule.isBusiAdmin()) {
					if(data.data.role_d_t_os){
						var roleList = data.data.role_d_t_os;
						var selectedRole = [];
						for(var i=0;i<roleList.length;i++){
							selectedRole.push(roleList[i].id);
						}
						getRoleTree(selectedRole.join(','));
					} else {
						getRoleTree();
					}
				}
			}
		});
	} else {
		$('#user-edit-title').html('用户新建');
		if(roleModule.isBusiAdmin()) {
			$('#role-tree-form').show();
			getRoleTree();
		}
	}
	
	//保存
	function postData(){
		var reqStr = null;
		if(userId) { //编辑
			var param = {
				//name: "",
				//pwd: "",
				//con_pwd: "",
				//real_name: "",
				//role: "",
				//status: ""
			};
			param.user_id = userId;
			param.login_name = $("#user-name").val().trim();
			param.user_type = $('input[name="user-type"]:checked').val();
			//param.password = hex_md5($("#user-pwd").val().trim());
			//param.status = $('input[name="inlineRadioOptions"]:checked').val();
			var reqStr = '';
			if(roleModule.isSysAdmin()) {
				reqStr = '/user/modify.do';
			}
			if(roleModule.isBusiAdmin()) {
				reqStr = '/user/grantRole/add.do';
			}
		} else {
			var param = {
			};
			param.login_name = $("#user-name").val().trim();
			param.user_type = $('input[name="user-type"]:checked').val();
			//param.password = hex_md5($("#user-pwd").val().trim());
			//param.status = $('input[name="inlineRadioOptions"]:checked').val();
			var reqStr = '';
			if(roleModule.isSysAdmin()) {
				reqStr = '/user/add.do';
			}
			if(roleModule.isBusiAdmin()) {
				reqStr = '/user/modify.do';
			}
		}
		if(roleModule.isBusiAdmin()) {
			var ids = [];
			var treeObj = $.fn.zTree.getZTreeObj("role-choise");
			var nodes = treeObj.getCheckedNodes(true);
			for (var i = 0; i < nodes.length; i++) {
				ids[i] = nodes[i].id;
			}
			if(ids.length != 0) {
				param.role_ids = ids.join(',');
			}
		}
		$ajax.post(reqStr, param, function(data){
			if(data.success){
				location.href = 'user-management-list.html';
			} else {
				if(data.code == '30063'){
					layer.msg(data.msg);
				}
			}
		});
	};
	$("#save").click(function(){

		if($("#user-name").val().trim() === ''){
			layer.msg('用户名不能为空');
			return;
		}
		// if($("#user-pwd").val().trim() === ''){
		// 	layer.msg('密码不能为空');
		// 	return;
		// }
		// if(!userId && $("#user-conf-pwd").val().trim() === ''){
		// 	layer.msg('确认密码不能为空');
		// 	return;
		// }
		// if(!userId && $("#user-conf-pwd").val().trim() != $("#user-pwd").val().trim()){
		// 	layer.msg('两次输入的密码不一致');
		// 	return;
		// }
		postData();
	});


	function getRoleTree(selectedRole) {
		$ajax.post('/roleFunction/roleList.do', {page_size:'10000',current_page:'1'}, function(data) {
			if(data.success){
				if(!selectedRole) {
					var roleList = data.data.datas;
					var roleTree = [];
					for(var i=0;i<roleList.length;i++){
						roleTree.push({
							id: roleList[i].id,
							name: roleList[i].role_name
						});
					}
					$.fn.zTree.init($("#role-choise"), setting, roleTree);
				} else {
					//编辑
					var roleList = data.data.datas;
					var roleTree = [];
					for(var i=0;i<roleList.length;i++){
						var isSelected = selectedRole.indexOf(roleList[i].id);
						roleTree.push({
							id: roleList[i].id,
							name: roleList[i].role_name,
							open: isSelected != -1 ? true : false,
							is_check: isSelected != -1 ? true : false,
						});
					}
					$.fn.zTree.init($("#role-choise"), setting, roleTree);
				}
			}
		});
	};
});