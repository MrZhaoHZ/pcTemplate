var self_tpl = require('../../module/tpl/agent-management-tpl.js');
var $ajax = require('../../common/ajax.js');
$(function(){
	var filterCondition = {page_size:20,current_page:1};
	function getAgencyList(pageIndex) {
		filterCondition.current_page = pageIndex;
		$ajax.post('/user/allLog/get.do',filterCondition,function(data){
			$('#agency-list').html(doT.template(self_tpl.operateLogListTpl)(data.data));
			$("#pager").pager({ pagenumber: pageIndex, pagecount: Math.ceil(data.data.total_counts / filterCondition.page_size), buttonClickCallback: getAgencyList});
		});
	}
	getAgencyList(1);
});