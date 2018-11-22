// var self_tpl = require('../../module/tpl/agent-management-tpl.js');
var $ajax = require('../../common/ajax.js');
var api_path_config = require('../../../../tmp_path_config.js');
$(function(){
	var developTpl = '{{~ it:item:index }}\
						{{? item.status == 0}}\
						<span data-levelid="{{= item.id}}">生成{{= item.name}}二维码</span>\
						{{?}}\
					  {{~}}';
	$ajax.post('/agent/agent_grade/list.do',null,function(data){
		if(data.success){
			$('#qrcode-btn').html(doT.template(developTpl)(data.data));
		}
	});
	function uuid() {
		var s = [];
		var hexDigits = "0123456789abcdef";
		for (var i = 0; i < 36; i++) {
			s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
		}
		s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
		s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
		s[8] = s[13] = s[18] = s[23] = "-";
	 
		var uuid = s.join("");
		return uuid;
	}
	$('#qrcode-btn').delegate('span','click',function(){
		var qrcodeText = null;
		qrcodeText = 'http://open.weixin.qq.com/connect/oauth2/authorize?appid=' + api_path_config.appid + '&redirect_uri=http%3A%2F%2F' + api_path_config.wxdomain + '%2Fwechat_web%2Fwechat%2FwxAutho.do%3Fredirect_url%3Dhttp%253A%252F%252F' + api_path_config.wxdomain + '%252Fhtml%252Fdele-register.html%26up_id%3Dnull%26level_id%3D' + $(this).data('levelid') + '%26random_id%3D' + uuid() + '&response_type=code&scope=snsapi_userinfo';
		$('#qrcode-area').html('').qrcode({
			width:200,
			height:200,
			text: qrcodeText
		});
	});
});