$(function(){
	var self_tpl = require('../../module/tpl/order-tpl.js');
	var $ajax = require('../../common/ajax.js');
	var api_path_config = require('../../../../tmp_path_config.js');
	var path = api_path_config.upload_path;
	var pram = {
		id: "",
		status: ""
	};
	getData();
	function getData(pagenumber){
		$ajax.ajaxPost('/express/get.do', {  }, 
			function(data){
				if (data.data) {
					$('#table-body').html(doT.template(self_tpl.orderLogisticsList)(data.data));
					//$("#pager").pager({ pagenumber: pagenumber, pagecount: 18, buttonClickCallback: PageClick});
				}else{
					$("#table-body tr").remove();
					$(".user-container").append("<p class='prompt'>暂无数据</p>");
				};
		});
	};
	$("#searcher").on("click", function(){
		window.location.href = "order-logistics-setting.html?type=0"
	});
	$("#table").on("click",".disable", function(){
		pram.id = $(this).parent().attr("data_id");
		pram.status = 2;
		layer.confirm('确定要执行此操作吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			$ajax.ajaxPost('/express/modify.do', pram, function(data) {
				if (data.success) {
					layer.close(layer.index);
					layer.msg("操作成功！");
					getData();
				}
			});
		});
	});
	$("#table").on("click",".enable", function(){
		pram.id = $(this).parent().attr("data_id");
		pram.status = 1;
		layer.confirm('确定要执行此操作吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			$ajax.ajaxPost('/express/modify.do', pram, function(data) {
				if (data.success) {
					layer.close(layer.index);
					layer.msg("操作成功！");
					getData();
				}
			});
		});
	});
});
