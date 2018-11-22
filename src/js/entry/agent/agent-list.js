var self_tpl = require('../../module/tpl/agent-management-tpl.js');
var $ajax = require('../../common/ajax.js');
var area = require('../../common/area.js');
var areaA = require('../../common/area-a.js');
var team_level = require('../../common/team-level.js');
var api_path_config = require('../../../../tmp_path_config.js');
$(function(){
	// team_level.team();
	team_level.level();
	area.init();
	areaA.inita();
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
        $('#start-time'),
        $('#end-time'),
        timepickerCfg
    );
	var filterCondition = {
		top_member_id: 1,
		all_direct_type: 1,
		page_size:20
		,current_page:1
	};
	function getAgencyList(pageIndex) {
		filterCondition.current_page = pageIndex;
		$ajax.post('/agent/agent_list/get_list.do',filterCondition,function(data){
			if(data.success){
				if(data.data.datas){
					$('#nodata-tips').hide();
					$('#agency-list').html(doT.template(self_tpl.agencyListTpl)(data.data));
					$("#pager").pager({ pagenumber: pageIndex, pagecount: Math.ceil(data.data.total_count / filterCondition.page_size), buttonClickCallback: getAgencyList,totalCounts: data.data.total_count});
					$("#pager").show();
				} else {
					$('#nodata-tips').show();
					$('#agency-list').html('');
					$("#pager").hide();
				}
			}
		});
	}
	// getAgencyList(1);

	$('#filter-btn').click(function(){
		filterCondition = {
			team: $('#all-team option:checked').val(),
			downLevel: $('#all-team-child option:checked').val(),
			type: $('#isAll option:checked').val(),
			// agent_grade: $('#all-level option:checked').val(),
			name: $('#nickname').val(),
			real_name: $('#name').val(),
			mobile: $('#phone').val(),
			wechat_id: $('#wechatID').val(),
			auth_number: $('#authoCode').val(),
			authon_personalid: $('#idnumber').val(),
			province_code: $('#area-province option:checked').val(),//收货地址
			city_code: $('#area-city option:checked').val(),
			area_code: $('#area-district option:checked').val(),
			id_province_code: $('#idarea-province option:checked').val(),//身份证地址
			id_city_code: $('#idarea-city option:checked').val(),
			id_area_code: $('#idarea-district option:checked').val(),
			start_time: $('#start-time').val(),
			end_time: $('#end-time').val(),
			agent_grade: $('#agent_grade option:checked').val(),
			top_member_id: $('.topLevelNameClass' + topNameSelectActive + ' :checked').val(),
			all_direct_type: $('.topLevelNameClass' + topNameSelectActive + ' :checked').attr('data-type'),
			page_size: 20,
			current_page: 1
		}
		// if($('.all-or-direct').length != 0) {
		// 	filterCondition.all_direct_type =  $('.all-or-direct :checked').attr('data-type');
		// } else {
		// 	filterCondition.all_direct_type =  $('.topLevelNameClass' + topNameSelectActive + ' :checked').attr('data-type')
		// }
		getAgencyList(1);
	});

	$("#exports-btn").click(function(){
		var pramPage = filterCondition;
		pramPage.is_all = $("#exports-select").val();
		// pramPage.current_page = filterCondition.current_page;
		// pramPage.page_size = filterCondition.page_size;
		// var link = api_path_config.api_path_1 + "/agent/agent_list/export.do?is_all=" + pramPage.is_all +　"&current_page=" + pramPage.current_page + "&page_size=" + pramPage.page_size;
		var link = require('../../common/export.js').doExports(api_path_config.api_path_1, '/agent/agent_list/export.do', pramPage);
		window.location.href = link;
	});

	(function (){
		$ajax.post('/agent/agent_grade/list.do',null,function(data){
			if(data.success) {
				$('#agent_grade').html(doT.template(self_tpl.optionTpl)(data.data));
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

	

	function initTopLevelNameSelect(member_id, topNameSelectActiveTemp) {
		$ajax.post('/agent/agent_list/get_child_list.do', {member_id: member_id}, function(data) {
			if(data.success && data.data.datas.length != 0){
				//$('#topLevelContainer').append('<div class="form-group"><select class="form-control selectcommon topLevelNameClass' + topNameSelectActive + '" data-selectIndex="' + topNameSelectActive + '"><optgroup label="大区"><option value="0">bagent001</option><option value="1">bagent002</option><option value="2">bagent003</option></optgroup></select></div>');
				data.data.topNameSelectActive = topNameSelectActiveTemp;
				data.data.parent_member_id = data.data.datas[0].parent_member_id;
				$('#topLevelContainer').append(doT.template(require('../../module/tpl/top-level-name-select.js').selectTpl)(data.data));
				select2Event($('.topLevelNameClass'+topNameSelectActiveTemp).select2());
			} else {
				// $('#topLevelContainer').append(doT.template(require('../../module/tpl/top-level-name-select.js').selectTypeTpl)(member_id));
				topNameSelectActive = $('.selectcommon').length;
			}
		})
	}

	initTopLevelNameSelect(1, 1);

	(function (){
		$ajax.post('/agent/agent_grade/list.do',null,function(data){
			if(data.success) {
				$('#agent_grade').html(doT.template(self_tpl.optionTpl)(data.data));
			}
		});
	})();
});