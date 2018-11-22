$(function(){
	var $ajax = require('../../common/ajax.js');
	var imgUpload = require('../../common/img-upload.js');
	var httpURL = require('../../common/http-url.js');
	var data_id = httpURL.getQueryString('data_id');
	var api_path_config = require('../../../../tmp_path_config.js');
	var content = "";
	$ajax.ajaxPost('/content/get_article.do', { id: data_id},function(data){
		if (data.success) {
			$("#title").val(data.data.title);
			$("#upImg").val(data.data.cover_picture);
			$("#info").val(data.data.brief);
			content = data.data.content;
		};
	});
	$('.user-container').delegate('#upImg','focus',function(){
		imgUpload.init(imgUploadAfter);
	});
	function imgUploadAfter(value) {
		$('#upImg').val(value);
	};
	
	// 富文本编辑器
	ue = UE.getEditor('container', {
	    autoHeightEnabled: false,
	    autoFloatEnabled: true,
	    initialFrameHeight: 100,
	    initialFrameWidth:500,
	    serverUrl: api_path_config.ueupload_path
	});
	ue.ready(function() {
		ue.setContent(content, false);
	});

	
	//ue.setContent("<p>sgfdg</p>")
	// $ajax.ajaxPost('/content/save_article.do', pram,function(data){
	// 	if (data.success) {
	// 		$("#title").val();
	// 		$("#upImg").val();
	// 		$("#info").val();
	// 		ue.setContent(String html)
	// 	};
	// });
	//收集数据
	var pram = {
		id: "",
		"title": "",
		"cover_picture": "",
		"brief": "",
		"content": ""
	}
	$("#save").on("click", function(){
		pram.id = data_id;
		pram.title = $("#title").val().trim();
		if (!pram.title) {
			layer.msg("标题不能为空");
			return;
		};
		pram.cover_picture = $("#upImg").val().trim();
		if (!pram.cover_picture) {
			layer.msg("封面图片不能为空");
			return;
		};
		pram.brief= $("#info").val().trim();
		if (!pram.brief) {
			layer.msg("文章简介不能为空");
			return;
		};
		pram.content = ue.getContent();
		if (!pram.content) {
			layer.msg("文章内容不能为空");
			return;
		};
		if (pram.content.length >2000) {
			layer.msg("文章内容不能超过2000个字符");
			return;
		};
		$ajax.ajaxPost('/content/save_article.do', pram,function(data){
			if (data.success) {
				window.location.href = "content-article-management.html";
			};
		});
	});
	$("#cancel").on("click", function(){
		window.location.href = "content-article-management.html";
	});
});
