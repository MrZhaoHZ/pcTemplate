var self_tpl = require('../../module/tpl/agent-check-tpl.js');
var $ajax = require('../../common/ajax.js');
var area = require('../../common/area.js');
var tmp_path_config = require('../../../../tmp_path_config.js');
$(function(){
	area.init();
	$('#nav-select').delegate('.btn','click',function(){
		$(this).siblings('.btn').removeClass('selected');
		$(this).addClass('selected');
		filterCondition.audit_status = $(this).data('id');
		getAgencyCheckList(1);
	});
	$('#right-bar-container').delegate('.select-all','click',function(){
		if(!$(this).prop("checked")) {
			$("[name = selectItem]:checkbox").prop("checked", false);
		} else {
			$("[name = selectItem]:checkbox").prop("checked", true);
		}
		// $("[name = selectItem]:checkbox").each(function () {
  //           $(this).prop("checked", !$(this).prop("checked"));
  //       });
	});
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
   	var filterCondition = {page_size:20};
	function getAgencyCheckList(pageIndex) {
		filterCondition.current_page = pageIndex;
		loadingIndex = require('../../common/render-layer.js').open();
		// console.log('lodingIndex 2:' + loadingIndex);
		$ajax.ajaxPost('/agent/agent_register/get_list.do', filterCondition, function(data) {
			if(data.success){
				require('../../common/render-layer.js').close(loadingIndex);
				if(data.data.datas){
					$('#nodata-tips').hide();
					data.data.upload_path = tmp_path_config.upload_path;
					data.data.upload_path_h5 = tmp_path_config.upload_path_h5;
					$('#table-container').html(doT.template(self_tpl.agentCheckList)(data.data));
					$("#pager").pager({ pagenumber: pageIndex, pagecount:  Math.ceil(data.data.total_count / filterCondition.page_size), buttonClickCallback: getAgencyCheckList,totalCounts: data.data.total_count});
					$('#tool-area').show();
				} else {
					$('#nodata-tips').show();
					$('#table-container').html('');
					$('#tool-area').hide();
				}
			}
		})
	}
	//getAgencyCheckList(1);

	$('#right-bar-container').delegate('.pass-btn','click',function(){
		var id = $(this).closest('tr').data('id');
		var status = $(this).data('status');
		layer.confirm('确定通过吗？', {
            btn: ['确定','取消'] 
        }, function(){
        	loadingIndex = require('../../common/render-layer.js').open();
        	// console.log('lodingIndex 1:' + loadingIndex);
            $ajax.post('/agent/agent_register/modify_audit.do',{application_id:id,audit_status:status},function(data){
				if(data.success) {
					//setTimeout(function(){
						require('../../common/render-layer.js').close(loadingIndex);
						layer.closeAll();
						getAgencyCheckList(1);
					//},3000);
					
				}else{
					if(data.code == "30075"){
						layer.msg( data.msg, {
						  time: 5000 //2秒关闭（如果不配置，默认是3秒）
						});
					}
				};
			});
        }, function(){
            return;
        });
	});
	$('#right-bar-container').delegate('.nopass-btn','click',function(){
		$('#nopass-modal').modal('show');
		$('#nopass-submit').attr('data-status',$(this).data('status'));
		$('#nopass-submit').attr('data-id',$(this).closest('tr').data('id'));
	});
	$('#right-bar-container').delegate('.detail-btn','click',function(){
		var id = $(this).closest('tr').data('id');
		$ajax.post('/agent/agent_register/get_register.do',{application_id:id},function(data){
			if(data.success) {
				data.data.upload_path = tmp_path_config.upload_path;
				data.data.upload_path_h5 = tmp_path_config.upload_path_h5;
				$('#user-info-modal .modal-body').html(doT.template(self_tpl.detailTpl)(data.data));
				$('#user-info-modal').modal('show');
			}
		});
	});
	$('body').delegate('#nopass-submit','click',function(e){
		require('../../common/btn-trigger.js').btnCtrl(e, function(target){
			if($('#nopass-reason').val() === ''){
				layer.msg('请填写拒绝理由');
				$('#nopass-reason').focus();
				return;
			}
			$ajax.post('/agent/agent_register/modify_audit.do',{application_id:target.attr('data-id'),audit_status:target.data('status'),remark:$('#nopass-reason').val()},function(data){
				if(data.success) {
					getAgencyCheckList(1);
					$('#nopass-modal').modal('hide');
					$('#nopass-reason').val('');
				}
			});
		})
	});
	//批量审核
	$('#batch-check').click(function(){
		layer.confirm('确定批量通过吗？', {
            btn: ['确定','取消'] 
        }, function(){
            var selectedAgent = $('#table-container tbody input:checked');
			if(selectedAgent.length < 1) {
				layer.msg('请选择代理');
				return;
			}
			var agentList = [];
			selectedAgent.each(function(){
				agentList.push($(this).closest('tr').data('id'));
			});
			$ajax.post('/agent/agent_register/batch_audit.do', {content:agentList.join('#')}, function(data) {
				if(data.success) {
					location.reload();
				}
			})
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
			start_time: $('#start-time').val(),
			end_time: $('#end-time').val(),
			audit_status: $('#status option:checked').val(),
			province_code: $('#area-province option:checked').val(),
			city_code: $('#area-city option:checked').val(),
			area_code: $('#area-district option:checked').val(),
			unusual_sign: $('#issue-delegate option:checked').val(),
			page_size: 20
		}
		getAgencyCheckList(1);
	});
	(function (){
		$ajax.post('/agent/agent_grade/list.do',null,function(data){
			if(data.success) {
				$('#agent_grade').html(doT.template(self_tpl.optionTpl)(data.data));
			}
		});
	})();
	

	$('#right-bar-container').delegate('.see-img','click',function(){
		var target = $(this).siblings('.see-img-layer')
		layer.open({
		  type: 1,
		  closeBtn: 1,
		  title: "信息",
		  area: '516px',
		  skin: 'layui-layer-nobg', //没有背景色
		  shadeClose: true,
		  content: target
		});
	});

	$("#exports-btn").click(function(){
		var pramPage = filterCondition;
		pramPage.is_all = $("#exports-select").val();
		// pramPage.current_page = filterCondition.current_page;
		// pramPage.page_size = filterCondition.page_size;
		// var link = tmp_path_config.api_path_1 + "/agent/agent_register/export.do?is_all=" + pramPage.is_all +　"&current_page=" + pramPage.current_page + "&page_size=" + pramPage.page_size;
		var link = require('../../common/export.js').doExports(tmp_path_config.api_path_1, '/agent/agent_register/export.do', pramPage);
		window.location.href = link;
	});
});