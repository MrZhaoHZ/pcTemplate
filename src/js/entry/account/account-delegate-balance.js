$(function(){
	var self_tpl = require('../../module/tpl/account-list-tpl.js');
	var $ajax = require('../../common/ajax.js');
	var api_path_config = require('../../../../tmp_path_config.js');
	/**
	 *	功能：获取代理余额流水
	 *	
	 *
	*/
	var pram = {
		name: "",
		mobile: "",
		biz_audit_type: "",
		current_page: 1,
		page_size: 20
	};
	var pageCount = "";
	$("#searcher").click(function(){
		pram.current_page = 1;
		getData();
	});
	$("#user-statu").change(function(){
		getData();
	});
	// getData();
	function getData(){
		pram.name = $("#user-nickName").val().trim();
		pram.mobile = $("#user-phone").val().trim();
		pram.biz_audit_type = $("#user-scene").val();
		$ajax.post('/account/all/detail.do', pram, 
			function(data){
				if (data.success) {
					pageCount = Math.ceil(data.data.total_count / pram.page_size);
					if (data.data.total_count == 0) {
						$("#table-body tr, p.prompt").remove();
						$("#pager").css("display", "none");
						$('.user-container').append("<p class='prompt'>暂无数据</p>");
					}else {
						$("#pager").css("display", "block");
						$("#pager").pager({ pagenumber: pram.current_page, pagecount: pageCount, buttonClickCallback: PageClick,totalCounts: data.data.total_count});
						var reg = new RegExp("^[0-9]*$");
    					var items = data.data.datas;
      					for(var i=0;i<items.length;i++){
      						var item = items[i].busi_desc;
      						var bool = reg.test(item);
      						if(bool){
      							if(item.length == 20){
      								items[i].isNum = 1
      							}else{
      								items[i].isNum = 0
      							}
      						}else{
      							items[i].isNum = 0
      						}
      					}
						$('#table-body').html(doT.template(self_tpl.accountDelegateBalanceTpl)(items));
						$(".prompt").remove();
					};
				};
		});
	};
	function PageClick (pageclickednumber) {
		pram.current_page = pageclickednumber;
		getData();
	};

	$("#table-body").on("click","#user-enable", function(){
		var id = $(this).attr("data-id");
		var enable = $(this).attr("data-status");
		var msg = (enable == 0) ? "确定要启用该管理帐号吗" :"确定要禁止该管理帐号吗?";
		//询问框
		layer.confirm('msg', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			$ajax.post('', pram, function(data) {
			
			});
		});
	});
	/**
	 *	功能：导出
	 *	
	 *
	*/
	$("#export").on("click", function(){
		var pramPage = pram;
		pramPage.is_all = $("#selection").val();
		// pramPage.current_page = pram.current_page;
		// pramPage.page_size = pram.page_size;
		// var link = api_path_config.api_path_1 + '/account/all/export.do?' + "is_all=" + pramPage.is_all +　"&current_page=" + pramPage.current_page + "&page_size=" + pramPage.page_size;
		var link = require('../../common/export.js').doExports(api_path_config.api_path_1, '/account/all/export.do', pramPage);
		window.location.href = link;
//		$ajax.ajaxPost('/account/all/export.do', pramPage, 
//			function(data){
//				if (data.success) {
//					layer.msg("导出成功！");
//				};
//		});
	});

});
