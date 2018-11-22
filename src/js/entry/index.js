$(function(){
	var $ajax = require('../common/ajax.js');
	//待审核充值
	$ajax.post('/account/homePage/topupCounts.do', {}, function(data){
		if (data.success) {
			$('#tongji2').html(data.data ? data.data : '0');
		}
	});
	$ajax.post('/order/countsOrder.do', {}, function(data){
		if (data.success) {
			$('#tongji4').html(data.data.not_audited_count);
			$('#tongji5').html(data.data.not_ship_count);
		}
	});

	$ajax.post('/agent/agent_upgrade/get_count.do', {}, function(data){
		if (data.success) {
			$('#tongji1').html(data.data.registerCount);
			$('#tongji3').html(data.data.updateCount);
		}
	});
});
