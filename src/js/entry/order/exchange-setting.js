var self_tpl = require('../../module/tpl/order-tpl.js');
var $ajax = require('../../common/ajax.js');
var tmp_path_config = require('../../../../tmp_path_config.js');
$(function(){
	$ajax.ajaxPost('/tradeConfig/get.do', {}, function(data) {
		if(data.success && data.data){
			$('#attr_value').val(data.data.attr_value);
		}
	});
	$('body').delegate('#save-btn','click',function(){
		$ajax.ajaxPost('/tradeConfig/save.do', {attr_value: $('#attr_value').val()}, function(data) {
			if(data.success){
				location.href = 'order-list.html';
			}
		});
	});
});
