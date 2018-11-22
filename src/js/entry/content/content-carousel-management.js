$(function(){
	var self_tpl = require('../../module/tpl/content-tpl.js');
	var $ajax = require('../../common/ajax.js');
	var api_path_config = require('../../../../tmp_path_config.js');
	var path = api_path_config.upload_path;
	var parm = {
		nickName: "",
		name: "",
		phone: "",
		weChat: "",
		identity_num: "",
		level: ""
	};
	$("#searcher").click(function(){
		if ($("#table-body tr").length<5) {
			window.location.href = "content-carousel-new.html";
		}else{
			layer.msg("轮播图最多添加5个！");
		};
	});
	getData();
	function getData(pagenumber){
		
		$ajax.ajaxPost('/content/carousel_picture_list.do', {  }, 
			function(data){
				if (data.data) {
					$('#table-body').html(doT.template(self_tpl.contentCarouselManagementTpl)({data: data.data, path: path}));
					//$("#pager").pager({ pagenumber: pagenumber, pagecount: 18, buttonClickCallback: PageClick});
				}else{
					$("#table-body tr").remove();
					$(".user-container").append("<p class='prompt'>暂无数据</p>");
				};
		});
	};
	function PageClick (pageclickednumber) {
		getData(pageclickednumber);
	};

	$("#table").on("click",".dele", function(){
		var id = $(this).parent().attr("data-id");
		layer.confirm('确定要删除此记录吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			$ajax.ajaxPost('/content/deleted_carousel_picture.do', {id: id}, function(data) {
				if (data.success) {
					layer.close(layer.index);
					layer.msg("删除成功！");
					getData();
				}
			});
		});
	});
});
