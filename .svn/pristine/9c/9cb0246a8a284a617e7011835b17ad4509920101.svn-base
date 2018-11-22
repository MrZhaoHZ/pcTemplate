$(function(){
	var self_tpl = require('../../module/tpl/content-tpl.js');
	var $ajax = require('../../common/ajax.js');
	var imgUpload = require('../../common/img-upload.js');
	var api_path_config = require('../../../../tmp_path_config.js');
	
	/*
	*
	* 获取文章数据 （分页）
	*/
	var pramArticle = {
		current_page: "1",
		page_size: "10",
		pageCount: ""
	};
	var articleTmp = ""; // 点击添加按钮是所在的per_block
	// 添加文章
	$(".block").on("click", ".add_article", function(){
		articleTmp = $(this).parents(".per_block");
		$('#myModal').modal();
		getData();
		function getData(pagenumber){
			$ajax.ajaxPost('/content/article_list.do', pramArticle,function(data){
				pramArticle.pageCount = Math.ceil(data.data.totalCount / pramArticle.page_size);
				$('#home_content').html(doT.template(self_tpl.contentImgTextSettingTpl)(data.data.articleList));
				$("#pager").pager({ pagenumber: pramArticle.current_page, pagecount: pramArticle.pageCount, buttonClickCallback: PageClick});
			});
		};
		function PageClick (pageclickednumber) {
			pramArticle.current_page = pageclickednumber;
			getData();
		};
	});
	// 控制加一块按钮的显示
	// $('input:radio[name="radio-input"]').change( function(){
	// 	var value = $('input:radio[name="radio-input"] checked').attr("value");
	// 	if (value == "0") {
	// 		$("#add_block").css("display", "none");
	// 	}else if(value == "1"){
	// 		$("#add_block").css("display", "block");
	// 	};
	// });
	var articlePrefix = "";
	if(api_path_config.api_path_1.indexOf('bsstest') != -1) {
		prefix= "http://wxtest.hanshuweishang.com/html/article.html?id=";
	} else {
		prefix= "http://wx.hanshuweishang.com/html/article.html?id=";
	};
	var realValue = api_path_config.static_path + "upload/";
	$("#myModal").on("click", ".modal-body .article", function(){
		articleTmp.attr("data_id", $(this).attr("data_id"));
		articleTmp.find(".title").val($(this).attr("data_title"));
		articleTmp.find(".info").val($(this).attr("data_info"));
		articleTmp.find(".add_img").css("background-image", "url(" + realValue + $(this).attr("data_img") + ")");
		articleTmp.find(".add_img").attr("data_img", $(this).attr("data_img"));

		articleTmp.find(".link").val( prefix + $(this).attr("data_id"));
		$('#myModal').modal('hide');
	});
	//控制弹框的确定按钮的显示
	$("#myModal").on("click", ".modal-body .modal_title", function(){
		if ($(".tab-pane:first").hasClass("active")) {
			$(".confirm").css("display", "inline-block");
		}else{
			$(".confirm").css("display", "none");
		}
	});
	// 网络文章选择
	$(".confirm").on("click", function(){

		
		articleTmp.find(".title").val($(".net_link").val().trim());
		articleTmp.find(".info").val($(".net_info").val().trim());
		
		articleTmp.find(".link").val($(".net_link").val().trim());
		$('#myModal').modal('hide')
	});
	$(".radio-input").on("click", function(){
		var val = $(".radio-input:checked").val();
		//console.log(val)
		$(".text, .block").css("display", "none");
		if (val == 0) {
			$(".text").css("display", "inline-block");
			$("#add_block").css("display", "none");
		}else{
			$("#add_block").css("display", "inline-block");
			$(".block, .add_block").css("display", "inline-block");
		}
	});
	// 图片上传
	var imgTmp = "";
	$('.block').delegate('.add_img','click',function(){
		imgTmp = this;
		imgUpload.init(imgUploadAfter);
	});
	function imgUploadAfter(value) {
		$(imgTmp).css("background-image", "url(" + api_path_config.upload_path + value + ")");
		$(imgTmp).attr("data_img", value);
		//$(imgTmp).parents(".per_block").find(".link").val(value);
		$('#myModal').modal("hide");
	};
	// var click_img = "";
	// $('.block').delegate('.add_img','click',function(){
	// 	click_img = this;
	// 	imgUpload.init(function(value){
			
	// 		$(click_img).css({
	// 			'background': 'url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488532883942&di=f0aa0fabef5793b1c0573d2631422fcd&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F39%2F85%2F74C58PICgy4_1024.jpg") 0 0 no-repeat',
	// 			'background-size': 'contain'
	// 		});
	// 		$(click_img).attr('data_img','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488532883942&di=f0aa0fabef5793b1c0573d2631422fcd&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F39%2F85%2F74C58PICgy4_1024.jpg');
	// 	},false);
	// });
	
	$("#add_block").on("click", function(){
		if($(".block .per_block").length<5){
			$('.block').append(doT.template(self_tpl.contentImgTextBlockTpl)());
		};
	});
	$(".block").on("click", ".dele", function(){
		$(this).parents(".per_block").slideUp("slow", function() {//slide up
	      	//then remove from the DOM
	      	$(this).remove();
	    });

		//$(this).parents(".per_block").remove();
	});

	// 收集数据
	var pram = {
		keywords: "",
		type: "",
		response: "",
		reply_desc_d_t_o_s: []
	};
	$("#save").on("click", function(){
		pram.keywords = $("#key_world").val().trim();
		if (!pram.keywords) {
			layer.msg("请输入关键字！");
			return;
		};
		pram.type = $("input:radio:checked").attr("value");
		if (pram.type == 0) {
			if (!$("#text_reply").val()) {
				layer.msg("请输入回复内容！");
				return;
			};
			pram.response = $("#text_reply").val().trim();
		}else if (pram.type == 1) {
			var len = $(".block .per_block").length;
			for(var i=0; i< len; i++){
				var per_block= {
					title: "",
					brief: "",
					cover_picture: "",
					uri: ""
				};
				var dom = $(".block .per_block").eq(i);
				if (!dom.find('.title').val()) {
					layer.msg("标题不能为空！");
					return;
				};
				per_block.title = dom.find('.title').val().trim();
				if (!dom.find('input.info').val()) {
					layer.msg("描述不能为空！");
					return;
				};
				per_block.brief = dom.find('input.info').val().trim();
				if (!dom.find('.add_img').attr("data_img")) {
					layer.msg("图片不能为空！");
					return;
				};
				per_block.cover_picture = dom.find('.add_img').attr("data_img");
				if (!dom.find('.link').val()) {
					layer.msg("网址不能为空！");
					return;
				};
				per_block.uri = dom.find('.link').val().trim();
				per_block.id = dom.attr("data_id");
				pram.reply_desc_d_t_o_s.push(per_block);
			};
		};
		var str = JSON.stringify(pram);
		//console.log(str)
		$ajax.post('/content/save_reply.do', { content: JSON.stringify(pram)}, 
			function(data){
				if (data.success) {
					window.location.href = "content-imgText-reply.html";
				};
		});
	})
});