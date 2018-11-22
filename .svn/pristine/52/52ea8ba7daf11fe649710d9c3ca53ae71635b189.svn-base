var self_tpl = require('../../module/tpl/agent-management-tpl.js');
var httpURL = require('../../common/http-url.js');
var $ajax = require('../../common/ajax.js');
$(function(){
	var agencyId = httpURL.getQueryString('id');
	$ajax.ajaxPost('/agent/agent_list/get_agent_group.do', {member_id: agencyId}, function(data) {
		if(data.success){
			$('#team-info').html(doT.template(self_tpl.teamInfoTpl)(data.data));
			getUpLevelInfo(agencyId, 1);
		}
	});

	$('#team-info').delegate('#translation-btn','click',function(){
		$ajax.ajaxPost('/getGradeList.do', {}, function(data) {
			if(data.success) {
				$('#translation-modal .modal-body').html(doT.template(self_tpl.translationBody)(data.data))
				$('#translation-modal').modal('show');
			}
		});
	});
	$('#team-info').delegate('#refresh-btn','click',function(){
		// $ajax.ajaxPost('/getGradeList.do', {}, function(data) {
		// 	$('#translation-modal .modal-body').html(doT.template(self_tpl.translationBody)(data.data))
		// 	$('#translation-modal').modal('show');
		// });
		$('#team-info .level-info').html('');
		if($('.up-agency').hasClass('active')) {
			getUpLevelInfo(agencyId, 1);
		} else {
			getDownLevelInfo(agencyId, 1);
		}
	});
	$('#save-translation-btn').click(function(){
		var levelId = $('input[name="isMove"]:checked').val();
		$ajax.ajaxPost('/translation.do', {levelId:levelId,agencyId:agencyId}, function(data) {
			
		});
	});

	function getUpLevelInfo(agencyId,itemIndex) {
		$ajax.ajaxPost('/agent/agent_list/get_superior.do', {member_id: agencyId}, function(data) {
			if(data.success){
				data.data.itemIndex = itemIndex;
				$('#team-info .level-info').append(doT.template(self_tpl.teamUpInfoItemTpl)(data.data));
			}
		});
	}

	function getDownLevelInfo(agencyId,itemIndex) {
		$ajax.ajaxPost('/agent/agent_list/get_child_list.do', {member_id: agencyId}, function(data) {
			if(data.success){
				data.data.itemIndex = itemIndex;
				$('#team-info .level-info').append(doT.template(self_tpl.teamDownInfoItemTpl)(data.data));
			} else {
				if(data.code === '40001') {
					layer.msg(data.msg);
				}
			}
		});
	}
	$('#team-info').delegate('.see-item','click',function(){
		$('#team-info .see-item').removeClass('active');
		$(this).addClass('active');
		$('#team-info .level-info').html('');
		if($(this).hasClass('up-agency')) {
			getUpLevelInfo(agencyId, 1);
		} else {
			getDownLevelInfo(agencyId, 1);
		}
	});

	$('#team-info').delegate('.inner-item','click',function(){
		$(this).addClass('active');
		$(this).siblings('.inner-item').removeClass('active');
		//当前item index
		var currItemIndex = parseInt($(this).closest('.item').data('itemindex'));
		$('#team-info .level-info .item').each(function(){
			if(parseInt($(this).data('itemindex')) > currItemIndex){
				$(this).remove();
			}
		});
		if($(this).closest('.inner').hasClass('up-item')) {
			if($(this).data('id') != 1){
				getUpLevelInfo($(this).data('id'),currItemIndex+1);
			} else {
				layer.msg('该用户已无上级');
			}
		}
		if($(this).closest('.inner').hasClass('down-item')) {
			getDownLevelInfo($(this).data('id'),currItemIndex+1);
		}
	});
});