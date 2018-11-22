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
	
	// getData(1);
	// function getData(pagenumber){
		
	// 	$ajax.ajaxPost('/getGoodsManagement.do', {  }, 
	// 		function(data){
				
	// 	});getData();
	// };
	$("#cancel").on("click", function(){
		window.location.href = "content-carousel-management.html";
	});
	$("#sort").val("1");
	$("#table-body").on("click","#user-enable", function(){
		var id = $(this).attr("data-id");
		var enable = $(this).attr("data-status");
		var msg = (enable == 0) ? "确定要启用该管理帐号吗" :"确定要禁止该管理帐号吗?";
		//询问框
		layer.confirm('msg', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			$ajax.ajaxPost('', {}, function(data) {
				var pram = data.data;
				$("#").val(pram.title);
				$("#").val(pram.pic);
				$("#").val(pram.info);
				ue.getContent(pram.content);
			});
		});
	});
	// 图片上传
	// $('.user-container').delegate('#upImg','click',function(){
	// 	imgUpload.init(function(value){
			
	// 	},false);
	// });
	// function imgUploadAfter(value) {
	// 	$('#upImg').val(value);
	// };
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
		"name": "",
		"image_uri": "",
		"uri": "",
		"sort": ""
	}
	$("#save").on("click", function(){
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
