$(function(){
	var self_tpl = require('../../module/tpl/content-tpl.js');
	var $ajax = require('../../common/ajax.js');
	var imgUpload = require('../../common/img-upload.js');
	var httpURL = require('../../common/http-url.js');
	var api_path_config = require('../../../../tmp_path_config.js');
	var data_id = httpURL.getQueryString('data_id');
	var articleTmp = ""; // 点击添加按钮是所在的per_block
	var pramArticle = {
		current_page: "1",
		page_size: "10",
		pageCount: ""
	};
	var realValue = api_path_config.upload_path;
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
	var articlePrefix = "";
	if(api_path_config.api_path_1.indexOf('bsstest') != -1) {
		prefix= "http://wxtest.hanshuweishang.com/html/article.html?id=";
	} else {
		prefix= "http://wx.hanshuweishang.com/html/article.html?id=";
	};
	$("#myModal").on("click", ".modal-body .article", function(){
		articleTmp.attr("data_id", $(this).attr("data_id"));
		articleTmp.find(".title").val($(this).attr("data_title"));
		articleTmp.find(".info").val($(this).attr("data_info"));
		articleTmp.find(".add_img").css("background-image", "url(" + realValue + $(this).attr("data_img") + ")");
		articleTmp.find(".add_img").attr("data_img", $(this).attr("data_img"));
		articleTmp.find(".link").val( prefix + $(this).attr("data_id"));
		$('#myModal').modal('hide');
	});

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
		var val = $(".radio-input:checked").attr("value");
		//console.log(val)
		$(".text, .block, .add_block").css("display", "none");
		if (val == 0) {
			$(".text").css("display", "inline-block");
		}else{
			$(".block, .add_block").css("display", "inline-block");
		};
	});
	$(".text, .block, add_block").css("display", "none");
	getInfo();
	function getInfo(){
		$ajax.post('/content/get_reply.do', { id: data_id}, 
			function(data){
				var pram = data.data;
				$("#key_world").val(pram.keywords);
				$(".radio-input[value=" +pram.type + "]").attr("checked", "checked");
				$(".radio-input[value=" +pram.type + "]").trigger("click");
				$("input:radio:checked").attr("value", pram.status);
				// if (pram.status == 1) {
				// 	$(".text").css("display", "inline-block");
				// 	$(".radio-input:first").attr("checked",true);
				// }else{
				// 	$(".block, .add_block").css("display", "inline-block");
				// 	$(".radio-input:last").attr("checked",true);
				// };
				if (pram.type == 0) {
					$("#text_reply").val(pram.response || "");
				}else if (pram.type == 1) {
					var domFrist = $(".block .per_block").eq(0);
					var tmpData = data.data.reply_desc_d_t_o_s[0];
					domFrist.find('.title').val(tmpData.title);
					domFrist.find('.info').val(tmpData.brief);
					domFrist.find('.link').val(tmpData.uri);
					domFrist.find('.add_img').css('background-image', "url(" + realValue + tmpData.cover_picture + ")");
					domFrist.find('.add_img').attr("data_img",tmpData.cover_picture);

					var len = pram.reply_desc_d_t_o_s.length;
					for(var i=1; i< len; i++){
						$('.block').append(doT.template(self_tpl.contentImgTextBlockTpl)());
						var currentDon = $(".block .per_block").eq(i);
						var currentData = pram.reply_desc_d_t_o_s[i];
						currentDon.find('.title').val(currentData.title);
						currentDon.find('.info').val(currentData.brief);
						currentDon.find('.link').val(currentData.uri);
						currentDon.find('.add_img').css('background-image', "url(" + realValue + currentData.cover_picture + ")");
						currentDon.find('.add_img').attr("data_img",tmpData.cover_picture);
					};
				};
			});
	};
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
	
	$("#add_block").on("click", function(){
		if($(".block .per_block").length<5){
			$('.block').append(doT.template(self_tpl.contentImgTextBlockTpl)());
		};
	});
	$(".block").on("click", ".dele", function(){
		$(this).parents(".per_block").slideUp("slow", function() {//slide up
	      	$(this).parents(".per_block").remove();//then remove from the DOM
	    });
		//$(this).parents(".per_block").remove();
	});

	var pram = {
		id: "",
		keywords: "",
		type: "",
		response: "",
		reply_desc_d_t_o_s: []
	};
	$("#save").on("click", function(){
		pram.id = data_id;
		pram.keywords = $("#key_world").val().trim();
		if (!pram.keywords) {
			layer.msg("请输入关键字！");
			return;
		}
		pram.type = $("input:radio:checked").attr("value");
		if (pram.type == 0) {
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
		console.log(str)
		$ajax.post('/content/save_reply.do', { content: JSON.stringify(pram)}, 
			function(data){
				if (data.success) {
					window.location.href = "content-imgText-reply.html";
				};
		});
	});
	$("#cancel").on("click", function(){
		window.location.href = "content-imgText-reply.html";
	});
});