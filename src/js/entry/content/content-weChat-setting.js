$(function(){
	var self_tpl = require('../../module/tpl/goods-tpl.js');
	var $ajax = require('../../common/ajax.js');
	// getData(1);
	// function getData(pagenumber){
	// 	$ajax.post(' /wechat/save_wechat_conf.do', {  }, 
	// 		function(data){
	// 			$('#table-body').html(doT.template(self_tpl.goodsManagementTpl)(data.data));
	// 	});
	// };
	$ajax.ajaxPost('/content/get_wechat_conf.do', {},function(data){
		if (data.success && data.data) {
			$("#app_id").val(data.data.app_id);
			$("#secret").val(data.data.app_secret);
			$("#token").val(data.data.token);
			$("#domain").val(data.data.auth_uri);
			$("#link").val(data.data.interface_uri);
		};
	});

	var pram = {
		"app_id": "",
		"app_secret": "",
		"token": "",
		"auth_uri": "",
		"interface_uri": ""
	};
	var msg = "";
	$("#save").on("click", function(){
		pram.app_id = $("#app_id").val().trim();
		if (!pram.app_id) {
			layer.msg("app_id不能为空");
			return;
		};
		pram.app_secret = $("#secret").val().trim();
		if (!pram.app_secret) {
			layer.msg("app_secret不能为空");
			return;
		};
		pram.token = $("#token").val().trim();
		if (!pram.token) {
			layer.msg("token不能为空");
			return;
		};
		pram.auth_uri = $("#domain").val().trim();
		if (!pram.auth_uri) {
			layer.msg("微信授权回调域名不能为空");
			return;
		};
		pram.interface_uri = $("#link").val().trim();
		if (!pram.interface_uri) {
			layer.msg("接口地址不能为空");
			return;
		};
		$ajax.ajaxPost('/content/save_wechat_conf.do', pram,function(data){
			if (data.success) {
				window.location.href = "";
			};
		});
	});
	$("#cancel").on("click", function(){
		window.location.href = "";
	});
});
