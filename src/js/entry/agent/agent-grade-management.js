var self_tpl = require('../../module/tpl/agent-grade-tpl.js');
var $ajax = require('../../common/ajax.js');
$(function(){
	$ajax.ajaxPost('/agent/agent_grade/list.do', null, function(data) {
		$('#right-bar-container table').html(doT.template(self_tpl.gradeListTpl)(data.data))
	});
	$('#right-bar-container').delegate('#tips-close','click',function(){
		$(this).closest('.tips').remove();
	});
});