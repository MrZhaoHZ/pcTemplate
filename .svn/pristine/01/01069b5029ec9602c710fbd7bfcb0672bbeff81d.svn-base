$(function(){
	var $ajax = require('../../common/ajax.js');
	var httpURL = require('../../common/http-url.js');
	var type = httpURL.getQueryString('type');
	var data_id = httpURL.getQueryString('data_id');
	var api_path_config = require('../../../../tmp_path_config.js');
	$ajax.ajaxPost('/express/getById.do', { id: data_id},function(data){
		if (data.success) {
			$("#name").attr("disabled", "disabled");
			$("#name").val(data.data.express_name);
			$("#tele").val(data.data.mobile);
			$("#sort").val(data.data.sort);
			$("#status option[value=" + data.data.status + "]").attr("selected", "selected");
		};
	});
	//收集数据  
	var pram = {
		"mobile": "",
		"sort": "",
		"status": ""
	};
	$("#tele").keyup(function(){
		var value = $("#tele").val();
		var re = /^\d+$/;
		if(!re.test(value)){
			$("#tele").val("");
		};
	});
	$("#sort").keyup(function(){
		var value = $("#sort").val();
		var re = /^\d{1,2}$/;
		if(!re.test(value)){
			$("#sort").val("");
		};
	});
	$("#save").on("click", function(){
//		if(type == "1"){ // 编辑的时候
//			pram.id = data_id;
//		} else if(type == 0){
//			pram.expressName = $("#name").val();
//			if (!pram.expressName) {
//				layer.msg("名字不能为空");
//				return;
//			};
//		}
		pram.id = data_id;
		pram.mobile = $("#tele").val().trim();
		if (!pram.mobile) {
			layer.msg("电话不能为空");
			return;
		};
		pram.sort= $("#sort").val().trim();
		if (!pram.sort) {
			layer.msg("排序不能为空");
			return;
		};
		pram.status = $("#status").val();
		$ajax.ajaxPost('/express/modify.do', pram,function(data){
			if (data.success) {
				window.location.href = "order-logistics-list.html";
			};
		});
	});
	$("#cancel").on("click", function(){
		window.location.href = "order-logistics-list.html";
	});
});
