var self_tpl = require('../../module/tpl/channel-tpl.js');
var $ajax = require('../../common/ajax.js');
// var imgUpload = require('../../common/img-upload.js');
var httpURL = require('../../common/http-url.js');
var api_path_config = require('../../../../tmp_path_config.js');
$(function(){
	var channelId = httpURL.getQueryString('id');
	var reqStr = null;
	if(!channelId) {
		reqStr = '/agent_purpose/add_place_source.do';
		$('#right-bar-container').show();
	} else {
		reqStr = '/agent_purpose/modify_place_source.do';
		$ajax.ajaxPost('/agent_purpose/get_place_source.do', {id: channelId}, function(data) {
			if(data.success) {
				$('#right-bar-container').html(doT.template(self_tpl.channelSettingTpl)(data.data));
				$('#right-bar-container').show();
			}
		});
	}
	
	var valiMsg = '';
	function validateForm() {
		if($('#place_code').val() === '') {
			valiMsg = '请输入渠道编码！';
			return;
		}
		if($('#place_name').val() === '') {
			valiMsg = '请输入渠道名称！';
			return;
		}
	}
	$('#right-bar-container').delegate('#save-btn','click',function(){
		valiMsg = '';
		validateForm()
		if(valiMsg) {
			layer.msg(valiMsg);
			return;
		}
		var param = {
			place_code: $('#place_code').val(),
			place_name: $('#place_name').val(),
		}
		if(channelId) {
			param.id = channelId;
		}
		$ajax.ajaxPost(reqStr, param, function(data) {
			if(data.success) {
				location.href = 'channel-list.html';
			} else {
				if(data.code === '40001'){
					layer.msg(data.msg);
				}
			}
		});
	});
});