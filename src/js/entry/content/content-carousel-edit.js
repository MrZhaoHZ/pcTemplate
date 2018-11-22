$(function(){
	var $ajax = require('../../common/ajax.js');
	var imgUpload = require('../../common/img-upload.js');
	var httpURL = require('../../common/http-url.js');
	var parm = {
		nickName: "",
		name: "",
		phone: "",
		weChat: "",
		identity_num: "",
		level: ""
	};
	var data_id = httpURL.getQueryString('data_id');
	getData();
	function getData(){
		$ajax.ajaxPost('/content/carousel_picture.do', { id: data_id }, 
			function(data){
				var item = data.data;
				$("#title").val(item.name);
				$("#upImg").val(item.image_uri);
				$("#link").val(item.uri);
				$("#sort").val(item.sort);
		});
	};
	$("#cancel").on("click", function(){
		window.location.href = "content-carousel-management.html";
	});
	// 验证码只能输入0-6个数字
	$("#sort").keyup(function(){
		var num = $("#sort").val();
		if(!(/^\d{0,6}$/.test(num))){ 
			$("#sort").val("");
		};
	});
	$('.user-container').delegate('#upImg','focus',function(){
		imgUpload.init(imgUploadAfter);
	});
	function imgUploadAfter(value) {
		$('#upImg').val(value);
	};
	//收集数据
	var pram = {
		"id": "",
		"name": "",
		"image_uri": "",
		"uri": "",
		"sort": ""
	}
	$("#save").on("click", function(){
		pram.id = data_id;
		pram.name = $("#title").val().trim();
		if (!pram.name) {
			layer.msg("请输入名称！");
			return;
		};
		pram.image_uri = $("#upImg").val().trim();
		if (!pram.image_uri) {
			layer.msg("请选择图片！");
			return;
		};
		pram.uri= $("#link").val().trim();
//		if (!pram.uri) {
//			layer.msg("请输入链接！");
//			return;
//		};
		pram.sort= $("#sort").val().trim();
		var sort = pram.sort;
		if (sort <= 0) {
			layer.msg("排序只能是正整数！");
			return;
		};
		$ajax.ajaxPost('/content/save_carousel_picture.do', pram,
			function(data){
				if (data.success) {
					layer.msg("新建成功！");
					window.location.href = "content-carousel-management.html";
				}
		});
	})
});
