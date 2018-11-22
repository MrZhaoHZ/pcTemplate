$(function(){
	var self_tpl = require('../../module/tpl/content-tpl.js');
	var $ajax = require('../../common/ajax.js');
	var pram = {
		current_page: 1,
		page_size: 20,
		pageCount: ""
	};
	$("#searcher").click(function(){
		getData(1);
	});
	$("#searcher").on("click", function(){
		window.location.href = "content-imgText-setting-new.html";
	})
	$("#user-statu").change(function(){
		getData();
	});
	getData();
	function getData(){
		$ajax.ajaxPost('/content/reply_list.do', pram, 
			function(data){
				if (data.success) {
					pram.pageCount = Math.ceil(data.data.totalCounts / pram.page_size);
					$('#table-body').html(doT.template(self_tpl.contentImgTextReplyTpl)(data.data.replyDTOList));
					$("#pager").pager({ pagenumber: pram.current_page, pagecount: pram.pageCount, buttonClickCallback: PageClick, totalCounts:data.data.totalCounts});
				};
		});
	};
	function PageClick (pageclickednumber) {
		pram.current_page = pageclickednumber;
		getData();
	};

	
	$("#table").on("click",".dele", function(){
		var id = $(this).parent().attr("data_id");
		layer.confirm('确定要删除此记录吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			$ajax.ajaxPost('/content/deleted_reply.do', {id: id},
			function(data){
				if (data.success) {
					layer.msg("删除成功！");
				};
		});
		});
	});

});
