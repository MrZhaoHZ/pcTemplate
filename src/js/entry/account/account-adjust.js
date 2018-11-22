$(function(){
	var self_tpl = require('../../module/tpl/account-list-tpl.js');
	var $ajax = require('../../common/ajax.js');
	getData(1);
	function getData(pagenumber){
		$ajax.post('/getAccountAdjust.do', {   }, 
			function(data){
				if (data.code == "10000") {
					$('#table-body').html(doT.template(self_tpl.accountAdjustTpl)(data.data));
					$("#pager").pager({ pagenumber: pagenumber, pagecount: 18, buttonClickCallback: PageClick});
				};
		});
	};
	function PageClick (pageclickednumber) {
		getData(pageclickednumber);
	};

});
