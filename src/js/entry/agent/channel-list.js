var self_tpl = require('../../module/tpl/channel-tpl.js');
var $ajax = require('../../common/ajax.js');
$(function(){
	$ajax.ajaxPost('/agent_purpose/place_source_list.do', null, function(data) {
		$('#right-bar-container table').html(doT.template(self_tpl.channelListTpl)(data.data))
	});

	$('#right-bar-container').delegate('.validate-btn','click',function(){
		var id = $(this).closest('tr').data('id');
		layer.confirm('确定此操作吗？', {
			btn: ['确定','取消'] 
		}, function(){
			$ajax.post('/agent_purpose/enable_place_source.do',{id:id},function(data){
				if(data.success) {
					location.reload();
				}
			});
		}, function(){
			return;
		});
	});
	$('#right-bar-container').delegate('.invalidate-btn','click',function(){
		var id = $(this).closest('tr').data('id');
		layer.confirm('确定此操作吗？', {
			btn: ['确定','取消'] 
		}, function(){
			$ajax.post('/agent_purpose/failure_place_source.do',{id:id},function(data){
				if(data.success) {
					location.reload();
				}
			});
		}, function(){
			return;
		});
	});
});