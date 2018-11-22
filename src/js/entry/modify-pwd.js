$(function(){
	var $ajax = require('../common/ajax.js');

	// getData();
	// function getData(){
	// 	$.post('/getGoodsEdit.do', {  }, 
	// 		function(data){
	// 			setData(data.data.data);
	// 	});
	// };
	var pram = {
		old_pwd: "",
		new_pwd: "",
		sure_pwd: ""
	};
	var msg = "";
	// 数据收集和校验
	function getData(){
		var msg = "";
		if(!$("#old_pwd").val()){
			msg = "请输入旧密码";
			return;
		} else if($("#old_pwd").val().length < 6){
			msg = "旧密码长度不能小于6个字符";
			return;
		};
		var old_pwd = $("#old_pwd").val().trim();
		if(!$("#new_pwd").val()){
			msg = "请输入新密码";
			return;
		} else if($("#new_pwd").val().length < 6){
			msg = "新码长度不能小于6个字符";
			return;
		};
		var  new_pwd = $("#new_pwd").val().trim();
		if(!$("#pre_new_pwd").val()){
			msg = "请输入确认密码";
			return;
		} else if($("#pre_new_pwd").val().length < 6){
			msg = "确认密码长度不能小于6个字符";
			return;
		};
		var pre_new_pwd = $("#pre_new_pwd").val().trim();
		if(pre_new_pwd != new_pwd){
			msg = "两次输入的新密码不一致！";
			return;
		};
		pram.old_pwd = hex_md5(old_pwd);
		pram.new_pwd = hex_md5(new_pwd);
		pram.sure_pwd = hex_md5(pre_new_pwd);
	};
	$("#save").on("click", function(){
		getData()
		if(msg){
			layer.msg(msg);
			return;
		}
		$ajax.post('/user/modify_pwd.do', pram, 
			function(data){
				if (data.success) {
					layer.msg("密码修改成功！");
				}
		});
	});
});
