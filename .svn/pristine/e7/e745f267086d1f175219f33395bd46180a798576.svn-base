var $ajax = require('../../common/ajax.js');
// var httpURL = require('../../common/http-url.js');
var roleModule = require('../../common/role1.js');
var self_tpl = require('../../module/tpl/user-management-tpl.js');
$(function() {
	// $.cookie("userRole","1");
	// console.log('isSysAdmin:' + roleModule.isSysAdmin());
	if(roleModule.isSysAdmin()){
		$('#create-user').show();
	}
	var parm = {
		login_name: "",
		// name: "",
		status: ""
	};
	getData(1);

	function getData(pagenumber) {
		parm.login_name = $("#user-account").val().trim();
		// parm.name = $("#user-name").val().trim();
		parm.status = $("#user-statu").val();
		$ajax.post('/user/list.do', {
			login_name: parm.login_name,
			// name: parm.name,
			status: parm.status
		},
		function(data) {
			if(data.success) {
				data.isSysAdmin = roleModule.isSysAdmin();
				data.isBusiAdmin = roleModule.isBusiAdmin();
				$('#table-body').html(doT.template(self_tpl.managementListTpl)(data));
			}
		});
	};

	function PageClick(pageclickednumber) {
		getData(pageclickednumber);
	};

	$("#searcher").click(function() {
		getData(1);
	});
	$("#user-statu").change(function() {
		getData(1);
	});
	$("#table-body").on("click", ".user-enable", function() {
		var id = $(this).attr("data-id");
		var enable = $(this).attr("data-status");
		var msg = (enable == 0) ? "确定要启用该帐号吗" : "确定要禁用该帐号吗?";
		var reqStr = (enable == 0) ? "/user/enabled.do" : "/user/disable.do";
		var layerMsg = (enable == 0) ? "启用帐号成功" : "禁用帐号成功";

		//询问框
		layer.confirm(msg, {
			btn: ['确定', '取消'] //按钮
		}, function(index) {
			$ajax.post(reqStr, {user_id: id},function(data) {
				if(data.success) {
					layer.msg(layerMsg);
					getData(1);
				}
			});
		});
	});
	// 重置密码
	$("#table-body").on("click", ".reset_pwd", function() {
		var id = $(this).attr("data-id");
		layer.confirm('确定要重置本账号密码吗？', {
			btn: ['确定', '取消'] //按钮
		}, function(index) {
			$ajax.post('/user/resetPW.do', {user_id: id}, function(data) {
				layer.msg("密码重置成功！");
			});
		});
	});
	// $("#table-body").on("click", "#user-dele", function() {
	// 	var id = $(this).attr("data-id");
	// 	var enable = $(this).attr("data-status");
	// 	//询问框
	// 	layer.confirm('确定要删除该管理帐号吗？', {
	// 		btn: ['确定', '取消'] //按钮
	// 	}, function(index) {
	// 		$.post('', {}, function(data) {

	// 		});
	// 	});
	// });

});