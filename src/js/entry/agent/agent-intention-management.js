var self_tpl = require('../../module/tpl/agent-intention-tpl.js');
var $ajax = require('../../common/ajax.js');
var tmp_path_config = require('../../../../tmp_path_config.js');
$(function(){

	var filterCondition = {
		current_page: '1',
		page_size: '20'
	};
	function getAgencyList(pageIndex) {
		filterCondition.current_page = pageIndex;
		$ajax.post('/agent_purpose/get_list.do',filterCondition,function(data){
			if(data.success){
				if(data.data && data.data[0] !=null){
					$('#nodata-tips').hide();
					$('#table-container').html(doT.template(self_tpl.listTpl)(data.data.datas));
					$("#pager").pager({ pagenumber: pageIndex, pagecount: Math.ceil(data.data.total_count / filterCondition.page_size), buttonClickCallback: getAgencyList,totalCounts: data.data.total_count});
					$("#pager").show();
				} else {
					$('#nodata-tips').show();
					$('#table-container').html('');
					$("#pager").hide();
				}
			}
		});
	}
	initLevelOption();
	//初始化等级列表下拉框
	function initLevelOption() {
		$ajax.post('/agent/agent_grade/list.do',null,function(data){
			if(data.success) {
				$('#agent_grade').html(doT.template(self_tpl.optionTpl)(data.data));
			}
		});
	}
	var timepickerCfg = {
		minInterval: (1000 * 60),
		showSecond: true,
		timeFormat: 'HH:mm:ss',
		start: {
			maxDate: new Date()
		},
		end: {
			//new Date()
		}
	};
	$.timepicker.datetimeRange(
		$('#start_time'),
		$('#end_time'),
		timepickerCfg
	);
	getAgencyList(1);
	$('#nav-select').delegate('.btn','click',function(){
		$(this).siblings('.btn').removeClass('selected');
		$(this).addClass('selected');
		filterCondition.status = $(this).data('id');
		getAgencyList(1);
	});
	$('#table-container').delegate('.cancel-btn','click',function(){
		var id = $(this).closest('tr').data('id');
		layer.confirm('确定取消吗？', {
			btn: ['确定','取消'] //按钮
		}, function(){
			$ajax.post('/agent_purpose/cancelled.do',{id:id},function(data){
				if(data.success) {
					getAgencyList(1);
					layer.closeAll();
				}
			});
		}, function(){
			return;
		});
	});
	$('#table-container').delegate('.audit-btn','click',function(){
		var id = $(this).closest('tr').data('id');
		layer.confirm('确定取消吗？', {
			btn: ['确定','取消'] //按钮
		}, function(){
			$ajax.post('/agent_purpose/audit.do',{id:id},function(data){
				if(data.success) {
					getAgencyList(1);
					layer.closeAll();
				}
			});
		}, function(){
			return;
		});
	});
	$('#table-container').delegate('.contacted-btn','click',function(){
		var id = $(this).closest('tr').data('id');
		layer.confirm('确定此操作吗？', {
			btn: ['确定','取消'] //按钮
		}, function(){
			$ajax.post('/agent_purpose/contacted.do',{id:id},function(data){
				if(data.success) {
					getAgencyList(1);
					layer.closeAll();
				}
			});
		}, function(){
			return;
		});
	});
	$('#table-container').delegate('.un-contacted-btn','click',function(){
		var id = $(this).closest('tr').data('id');
		layer.confirm('确定此操作吗？', {
			btn: ['确定','取消'] //按钮
		}, function(){
			$ajax.post('/agent_purpose/lose_contact.do',{id:id},function(data){
				if(data.success) {
					getAgencyList(1);
					layer.closeAll();
				}
			});
		}, function(){
			return;
		});
	});
	$('#table-container').delegate('.busi-btn','click',function(){
		var id = $(this).closest('tr').data('id');
		layer.confirm('确定此操作吗？', {
			btn: ['确定','取消'] //按钮
		}, function(){
			$ajax.post('/agent_purpose/audit.do',{id:id},function(data){
				if(data.success) {
					getAgencyList(1);
					layer.closeAll();
				}
			});
		}, function(){
			return;
		});
	});
	$('#table-container').delegate('.un-busi-btn','click',function(){
		var id = $(this).closest('tr').data('id');
		layer.confirm('确定此操作吗？', {
			btn: ['确定','取消'] //按钮
		}, function(){
			$ajax.post('/agent_purpose/cancelled.do',{id:id},function(data){
				if(data.success) {
					getAgencyList(1);
					layer.closeAll();
				}
			});
		}, function(){
			return;
		});
	});
	$('#filter-btn').click(function(){
		filterCondition = {
			real_name: $('#real_name').val(),
			mobile: $('#mobile').val(),
			wechat_id: $('#wechat_id').val(),
			agent_grade: $('#agent_grade option:checked').val(),
			start_time: $('#start_time').val(),
			end_time: $('#end_time').val(),
			status: $('#status option:selected').val(),
			page_size: '20'
		}
		getAgencyList(1);
	});

	$("#exports-btn").click(function(){
		var pramPage = filterCondition;
		pramPage.is_all = $("#exports-select").val();
		// pramPage.current_page = filterCondition.current_page;
		// pramPage.page_size = filterCondition.page_size;
		// var link = tmp_path_config.api_path_1 + "/agent_purpose/export.do?is_all=" + pramPage.is_all +　"&current_page=" + pramPage.current_page + "&page_size=" + pramPage.page_size;
		var link = require('../../common/export.js').doExports(tmp_path_config.api_path_1, '/agent_purpose/export.do', pramPage);
		window.location.href = link;
	});
});