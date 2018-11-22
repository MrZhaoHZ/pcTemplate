var self_tpl = require('../../module/tpl/agent-management-tpl.js');
var $ajax = require('../../common/ajax.js');
$(function(){
	var memberId = require('../../common/http-url.js').getQueryString('member_id');
	var filterCondition = {page_size:20,current_page:1,obj_type:'1',member_id:memberId};
	function getAgencyList(pageIndex) {
		filterCondition.current_page = pageIndex;
		$ajax.post('/user/log/get.do',filterCondition,function(data){
			$('#agency-list').html(doT.template(self_tpl.agencyLogListTpl)(data.data));
			$("#pager").pager({ pagenumber: pageIndex, pagecount: Math.ceil(data.data.total_counts / filterCondition.page_size), buttonClickCallback: getAgencyList});
		});
	}
	getAgencyList(1);
});