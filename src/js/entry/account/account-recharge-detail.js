$(function(){
	var self_tpl = require('../../module/tpl/account-list-tpl.js');
	var $ajax = require('../../common/ajax.js');
	var httpURL = require('../../common/http-url.js');
	var userId = httpURL.getQueryString('user_id');
	/**
	 *	功能：获取充值审核详情
	 *	
	 *
	*/

	//var bizId = httpURL.getQueryString("bizId");
	//var bizId = 23;
	getData();
	function getData(){
		$ajax.ajaxPost('/account/topup/detail.do', {biz_id: userId}, function(data) {
			if (data.success) {
				var item = data.data.member_account_d_t_o_list[0];
				$("#detail_name").text(item.real_name);
				$("#detail_nick_name").text(item.name);
				$("#detail_phone").text(item.mobile);
				$("#detail_balance").text(item.account_amount_d);
				$("#detail_superior").text(item.parent_name);
				$("#detail_money").text(item.topup_amount_d);
				if(data.data.date){
					$("#detail_status").text(data.data.date.status_str);
				}else{
					$("#detail_status").text(item.biz_status_name);
				}
				console.log(doT.template(self_tpl.accountRechargeDetailTpl)(data.data.member_account_d_t_o_list[0]));
				$('#table-body').append(doT.template(self_tpl.accountRechargeDetailTpl)(data.data.member_account_d_t_o_list[0]));
				$('#table-body').append(doT.template(self_tpl.accountRechargeDetailTpl1)(data.data.date));
			};
		});
	};
});
