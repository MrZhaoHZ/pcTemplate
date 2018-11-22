$(function(){
	var self_tpl = require('../../module/tpl/user-management-tpl.js');
	var parm = {
		account: "",
		name: "",
		start_time: "",
		end_time: ""

	};
	$("#searcher").click(function(){
		getData(1);
	});
	$("#user-statu").change(function(){
		getData(1);
	});
	getData(1);
	function getData(pagenumber){
		parm.account = $("#user-account").val().trim();
		parm.name = $("#user-name").val().trim();
		parm.start_time = $("#user-start").val().trim();
		parm.end_time = $("#user-end").val().trim();
		$.get('/getManagementLog.do', {
			account: parm.account,
			name: parm.name,
			start_time: parm.start_time,
			end_time: parm.end_time
			}, 
			function(data){
				$('#table-body').html(doT.template(self_tpl.managementLogTpl)(data.data.data));
				$("#pager").pager({ pagenumber: pagenumber, pagecount: 18, buttonClickCallback: PageClick});
		});
	};
	function PageClick (pageclickednumber) {
		getData(pageclickednumber);
	};

});
