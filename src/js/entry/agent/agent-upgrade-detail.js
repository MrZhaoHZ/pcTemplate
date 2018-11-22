var self_tpl = require('../../module/tpl/agent-upgrade-tpl.js');
var $ajax = require('../../common/ajax.js');
var api_path_config = require('../../../../tmp_path_config.js');
$(function(){
	var application_no = require('../../common/http-url.js').getQueryString('id');
	function getDetail() {
		$ajax.ajaxPost('/agent/agent_upgrade/get_update.do', {application_no: application_no}, function(data) {
			if(data.success && data.data){
				data.data.upload_path = api_path_config.upload_path;
				data.data.upload_path_h5 = api_path_config.upload_path_h5;
				$('#right-bar-container').append(doT.template(self_tpl.detailTpl)(data.data))
			}
		})
	}
	getDetail();
	$("#right-bar-container").on("click",".img_ifram", function(){
		var src = $(this).attr("src");
		$('#preview-layer').remove();
		$('body').append('<div id="preview-layer" style="display:none;"><img src="' + src + '" style="width:100%;"></div>');
		layer.open({
		  type: 1,
		  closeBtn: 1,
		  title: "信息",
		  area: '640px',
		  skin: 'layui-layer-nobg', //没有背景色
		  shadeClose: true,
		  content: $('#preview-layer')
		});
	})
});