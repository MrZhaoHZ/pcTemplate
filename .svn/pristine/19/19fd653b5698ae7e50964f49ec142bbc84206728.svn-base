$(function(){
	var self_tpl = require('../../module/tpl/content-tpl.js');
	var $ajax = require('../../common/ajax.js');
	var pram = {
		current_page: "1",
		page_size: "10",
		pageCount: ""
	};
	// $("#searcher").click(function(){
	// 	getData(1);
	// });
	// $("#user-statu").change(function(){
	// 	getData(1);
	// });
	// //getData(1);
	// function getData(pagenumber){
		
	// 	$ajax.post('/wechat/article_list.do', {  }, 
	// 		function(data){
	// 			$('#table-body').html(doT.template(self_tpl.contentArticleManagementTpl)(data.data));
	// 			$("#pager").pager({ pagenumber: pagenumber, pagecount: 18, buttonClickCallback: PageClick});
	// 	});
	// };
	// function PageClick (pageclickednumber) {
	// 	getData(pageclickednumber);
	// };
	$("#searcher").on("click", function(){
		window.location.href = "content-article-new.html";
	})
	getData();
	function getData(){
		$ajax.ajaxPost('/content/article_list.do', pram,function(data){
			pram.pageCount = Math.ceil(data.data.totalCount / pram.page_size);
			if (data.success) {
				$('#table-body').html(doT.template(self_tpl.contentArticleManagementTpl)(data.data));
				$("#pager").pager({ pagenumber: pram.current_page, pagecount: pram.pageCount, buttonClickCallback: PageClick, totalCounts:data.data.totalCount});
			};
		});
	};
	function PageClick (pageclickednumber) {
		pram.current_page = pageclickednumber;
		getData();
	};
	$("#table").on("click",".dele", function(){
		var id = $(this).attr("data_id");
		//询问框
		layer.confirm('确定要删除此文章吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			$ajax.ajaxPost('/content/deleted_article.do', { id: id},function(data){
				if (data.success) {
					getData();
					layer.msg("删除成功！");

				};
			});
		});
	});
});
