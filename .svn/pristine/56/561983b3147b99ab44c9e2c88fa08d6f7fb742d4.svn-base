var tpl = '<option value="0">所有等级</option>\
		  {{~ it:item:index }}\
				<option value="{{= item.id}}">{{= item.name}}</option>\
		  {{~}}';
var tpl2 = '<option value="">所有等级</option>\
		  {{~ it:item:index }}\
				<option value="{{= item.id}}">{{= item.name}}</option>\
		  {{~}}';
var $ajax = require('./ajax.js');


function selectEvent() {
	$('#all-team').change(function(){
		if($(this).val() === '0') {
			$('#all-team-child').hide().html('');
			return;
		}
		$('#all-team-child').show();
		$ajax.post('/getTeamChild.do',null,function(data){
			$('#all-team-child').html(doT.template(tpl)(data.data))
		});
	});
}
function team() {
	selectEvent();
	$ajax.post('/getTeam.do',null,function(data){
		$('#all-team').html(doT.template(tpl)(data.data))
	});
}

function level() {
	$ajax.post('/agent/agent_grade/list.do',null,function(data){
		$('#all-level').html(doT.template(tpl)(data.data))
	});
}
function level2() {
	$ajax.post('/agent/agent_grade/list.do',null,function(data){
		$('#all-level').html(doT.template(tpl2)(data.data))
	});
}
exports.team = team;
exports.level = level;
exports.level2 = level2;