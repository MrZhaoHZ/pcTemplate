var self_tpl = require('../../module/tpl/order-tpl.js');
var httpURL = require('../../common/http-url.js');
var $ajax = require('../../common/ajax.js');
var tmp_path_config = require('../../../../tmp_path_config.js');
$(function() {
	var orderId = httpURL.getQueryString('id');
	$ajax.post('/order/details.do', {order_id: orderId}, function(data) {
		if(data.success){
			data.data.upload_path = tmp_path_config.upload_path;
			data.data.orderDetailsVO.sku_specs = data.data.orderDetailsVO.sku_specs.replace(/null,/g, "");
			data.data.orderDetailsVO.sku_specs = data.data.orderDetailsVO.sku_specs.replace(/,null/g, "");
			$('.order-info-container').html(doT.template(self_tpl.orderDetailTpl)(data.data))
		}
	});
});
