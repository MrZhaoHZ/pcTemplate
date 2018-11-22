$(function(){
	var api_path_config = require('../../../../tmp_path_config.js');
	var $ajax = require('../../common/ajax.js');
	var self_tpl = require('../../module/tpl/account-list-tpl.js');
	var httpURL = require('../../common/http-url.js');
	var userId = httpURL.getQueryString('user_id');
	
	/**
	 *	功能：
	 *	
	 *
	*/
	var pram = {
		member_id: "",
		current_page: 1,
		page_size: 20,
		pageCount: ""
	};
	pram.member_id = userId;
	getData();
	function getData(){
		$ajax.ajaxPost('/account/member/detail.do', pram, 
			function(data){
				if (data.success) {
					pram.pageCount = Math.ceil(data.data.total_count / pram.page_size);
					$('#table-body').html(doT.template(self_tpl.accountBalanceTpl)(data.data.datas));
					$("#pager").pager({ pagenumber: pram.current_page, pagecount: pram.pageCount, buttonClickCallback: PageClick});
				};
		});
	};
	function PageClick (pageclickednumber) {
		pram.current_page = pageclickednumber;
		getData();
	};

	/**
	 *	功能：导出
	 *	
	 *
	*/
	$("#searcher").click(function(){
		var pramPage = {
			is_all: "",
			current_page: "",
			page_size: ""
		};
		pramPage.is_all = $("#page").val();
		pramPage.current_page = pram.current_page;
		pramPage.page_size = pram.page_size;
		var link = api_path_config.api_path_1 + '/account/member/export.do?member_id=' + userId + "&is_all=" + pramPage.is_all +　"&current_page=" + pramPage.current_page + "&page_size=" + pramPage.page_size;
		window.location.href = link;
//		$ajax.ajaxPost('/account/member/export.do', pramPage,
//			function(data){
//				if (data.success) {
//					layer.msg("导出成功！");
//				};
//		});
	});
});
