$(function(){
	var self_tpl = require('../../module/tpl/agent-check-tpl.js');
	var $ajax = require('../../common/ajax.js');
	var imgUpload = require('../../common/img-upload.js');
//	var team_level = require('../../common/team-level.js');
//	team_level.level();
	var listPram = {
		current_page: 1,
		page_size: 20,
		pageCount: ""
	};
//	$("#searcher").click(function(){
//		listPram.current_page = 1;
//		getData();
//	});

	getData();
	function getData(){
//		listPram.name = $("#user-nickName").val().trim();
//		listPram.real_name = $("#user-name").val().trim();
//		listPram.mobile = $("#user-phone").val().trim();
//		listPram.wechat_id = $("#user-weChat").val().trim();
//		listPram.authon_personalid = $("#user-id").val().trim();
//		listPram.agent_grade = $("#all-level").val();
		$ajax.ajaxPost('/memberSign/list.do ', listPram,
		//$.post('http://bsstest.hanshuweishang.com/leaf_manager_web/memberSign/list.do', listPram,
			function(data){
				if (data.datas) {
					$("#table-body tr, p.prompt").remove();
					$("#pager").css("display", "block");
					listPram.pageCount = Math.ceil(data.total_count / listPram.page_size);
					$("#pager").pager({ pagenumber: listPram.current_page, pagecount: listPram.pageCount, buttonClickCallback: PageClick,totalCounts: data.datas.total_count});
					$('#table-body').html(doT.template(self_tpl.accountListTpl)(data.datas));
				}else{
					$("#table-body tr, p.prompt").remove();
					$("#pager").css("display", "none");
					$('.user-container').append("<p class='prompt'>暂无数据</p>");
				}
		});
	};
	function PageClick (pageclickednumber) {
		listPram.current_page = pageclickednumber;
		getData();
	};
});
