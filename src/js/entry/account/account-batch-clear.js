var self_tpl = require('../../module/tpl/agent-management-tpl.js');
var $ajax = require('../../common/ajax.js');
var area = require('../../common/area.js');
var team_level = require('../../common/team-level.js');
var api_path_config = require('../../../../tmp_path_config.js');
$(function(){
	// team_level.team();
	team_level.level();
	area.init();
	var filterCondition = "";
	$('#filter-btn').click(function(){
		if(topNameSelectActive != 1){
			var tmpTopNameSelectActive = topNameSelectActive - 1;
		}else{
			tmpTopNameSelectActive = topNameSelectActive;
		}
		filterCondition = {
			agentGrade: $('#agent_grade option:checked').val(),
			top_member_id: $('.topLevelNameClass' + tmpTopNameSelectActive + ' :checked').val(),
			agentRangeType: $('.topLevelNameClass' + topNameSelectActive + ' :checked').attr('data-type')
		}
		if(filterCondition.agentRangeType != 1 & filterCondition.agentRangeType != 2){
			filterCondition.top_member_id = filterCondition.agentRangeType;
			filterCondition.agentRangeType = 1;
		}
		// if($('.all-or-direct').length != 0) {
		// 	filterCondition.all_direct_type =  $('.all-or-direct :checked').attr('data-type');
		// } else {
		// 	filterCondition.all_direct_type =  $('.topLevelNameClass' + topNameSelectActive + ' :checked').attr('data-type')
		// }
//		$ajax.get('/account/account/batch_set0.do',filterCondition,function(data){
//			if(data.success) {
//				layer.msg("操作成功！")
//			}
//		});
		var url = api_path_config.api_path_1 + "/account/account/batch_set0.do?agentGrade=" + filterCondition.agentGrade + "&top_member_id=" + filterCondition.top_member_id + "&agentRangeType=" + filterCondition.agentRangeType; 
		window.location.href = url;
	});
	(function (){
		$ajax.post('/agent/agent_grade/list.do',null,function(data){
			if(data.success) {
				$('#agent_grade').html(doT.template(self_tpl.optionNoAllAgentTpl)(data.data));
			}
		});
	})();


	var topNameSelectActive = 1;
	function select2Event(target){
		target.on("select2:select", function (e) {
			// topNameSelectActive++;
			// console.log(e);
			//e.params.data.id
			//e.params.data.element.parentNode.className
			var nowIndex = parseInt($(e.params.data.element.parentNode).attr('data-selectindex'));
			var tempSelectCommonLength = $('.selectcommon').length;
			for(var i=nowIndex+1; i<=tempSelectCommonLength; i++){
				$('.topLevelNameClass' + i).closest('.form-group').remove();
			}
			if(e.params.data.element.className.indexOf("selectdirect") != -1 || e.params.data.element.className.indexOf("selectall") != -1){
				// $('.all-or-direct').remove();
				topNameSelectActive = $('.selectcommon').length;
				return;
			}
			topNameSelectActive = $('.selectcommon').length + 1;
			//$('#topLevelContainer').append('<div class="form-group"><select class="form-control selectcommon topLevelNameClass' + topNameSelectActive + '" data-selectIndex="' + topNameSelectActive + '"><optgroup label="大区"><option value="0">bagent001</option><option value="1">bagent002</option><option value="2">bagent003</option></optgroup></select></div>');
			//select2Event($('.topLevelNameClass'+topNameSelectActive).select2());
			initTopLevelNameSelect(e.params.data.element.value, topNameSelectActive);
			//get selected option
			//id: e.params.data.element.value
			//value: e.params.data.element.text
			//$('.topLevelNameClass3 :checked').val()
		});
	}

	//初始化顶级代理商下拉表
	// var $eventSelect  = $('.topLevelNameClass' + topNameSelectActive).select2();
	// select2Event($eventSelect);

	
	// 展示所选等级下面的等级
	function initTopLevelNameSelect(member_id, topNameSelectActiveTemp) {
		$ajax.post('/agent/agent_list/get_child_list.do', {member_id: member_id}, function(data) {
			if(data.success && data.data.datas.length != 0){
				//$('#topLevelContainer').append('<div class="form-group"><select class="form-control selectcommon topLevelNameClass' + topNameSelectActive + '" data-selectIndex="' + topNameSelectActive + '"><optgroup label="大区"><option value="0">bagent001</option><option value="1">bagent002</option><option value="2">bagent003</option></optgroup></select></div>');
				data.data.topNameSelectActive = topNameSelectActiveTemp;
				data.data.parent_member_id = data.data.datas[0].parent_member_id;
				$('#topLevelContainer').append(doT.template(require('../../module/tpl/top-level-name-select.js').selectChildTpl)(data.data));
				select2Event($('.topLevelNameClass'+topNameSelectActiveTemp).select2());
			} else {
				// $('#topLevelContainer').append(doT.template(require('../../module/tpl/top-level-name-select.js').selectTypeTpl)(member_id));
				topNameSelectActive = $('.selectcommon').length;
			}
		})
	}

	initTopLevelNameSelect(1, 1);
	// 展示所有等级
	(function (){
		$ajax.post('/agent/agent_grade/list.do',null,function(data){
			if(data.success) {
				$('#agent_grade').html(doT.template(self_tpl.optionNoAllAgentTpl)(data.data));
			}
		});
	})();
	$("#exports-btn").click(function(){
		var pramPage = filterCondition;
		var link = require('../../common/export.js').doExports(api_path_config.api_path_1, '/agent/agent_list/export.do', pramPage);
		window.location.href = link;
	});
	$(".topLevelContainer").on("change", ".topLevelNameClass1", function(){
		$("#filter-btn").attr("disabled", false);
		
	} )
	
});