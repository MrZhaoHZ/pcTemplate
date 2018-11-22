$(function(){
	var $ajax = require('../../common/ajax.js');
	var imgUpload = require('../../common/img-upload.js');
	var httpURL = require('../../common/http-url.js');
	var api_path_config = require('../../../../tmp_path_config.js');
	var parm = {
		nickName: "",
		name: "",
		phone: "",
		weChat: "",
		identity_num: "",
		level: ""
	};
	
	// getData(1);
	// function getData(pagenumber){
		
	// 	$ajax.post('/getGoodsManagement.do', {  }, 
	// 		function(data){
				
	// 	});
	// };

	// 图片上传
	//$("#upImg").attr("disabled", "true");
	// $('.user-container').delegate('#upImg','click',function(){
	// 	imgUpload.init(function(value){
			
	// 	},true);
	// });
	// function imgUploadAfter(value) {
	// 	$('#upImg').val(value.data.url);
	// }

	$('.user-container').delegate('#upImg','focus',function(){
		imgUpload.init(imgUploadAfter);
	});
	function imgUploadAfter(value) {
		$('#upImg').val(value);
	};
	var agentId = httpURL.getQueryString('id');
	var ue;
	if(!agentId) {
		$('#right-bar-container').show();
		ue = UE.getEditor('container', {
		    autoHeightEnabled: false,
		    autoFloatEnabled: true,
		    initialFrameHeight: 100,
		    initialFrameWidth:500,
		    serverUrl: api_path_config.ueupload_path
		});
	} else {
		$ajax.ajaxPost('/getAgencyDetail.do', {id: agentId}, function(data) {
			$('#right-bar-container').html(doT.template(self_tpl.gradeSettingTpl)(data.data));
			ue = UE.getEditor('container', {
			    autoHeightEnabled: false,
			    autoFloatEnabled: true,
			    initialFrameHeight: 100,
			    initialFrameWidth:500,
			    serverUrl: api_path_config.ueupload_path
			});
			ue.ready(function() {
				ue.setContent('<P class="">aaa</P>', false);
			});

			$('#right-bar-container').show();
		});
	};

	//收集数据
	var pram = {
		"title": "",
		"cover_picture": "",
		"brief": "",
		"content": ""
	}
	$("#save").on("click", function(){
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
