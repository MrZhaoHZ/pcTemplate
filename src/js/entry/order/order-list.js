var self_tpl = require('../../module/tpl/order-tpl.js');
var $ajax = require('../../common/ajax.js');
var tmp_path_config = require('../../../../tmp_path_config.js');
$(function(){
	$('.nav-select').delegate('.btn','click',function(){
		$(this).siblings('.btn').removeClass('selected');
		$(this).addClass('selected');
		filterCondition.status = $(this).data('id');
		getOrderList(1);
	});
	$('#order-list').delegate('.select-all','click',function(){
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
	var timepickerCfg1 = {
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
	$.timepicker.datetimeRange(
		$('#h_start_time'),
		$('#h_end_time'),
		timepickerCfg1
	);
	var filterCondition = {
		top_member_id: 1,
		all_direct_type: 1,
		current_page: 1
		,page_size:20
	};
	function getOrderList(pageIndex) {
		filterCondition.current_page = pageIndex;
		loadingIndex = require('../../common/render-layer.js').open();
		$ajax.ajaxPost('/order/list.do', filterCondition, function(data) {
			if(data.success){
				require('../../common/render-layer.js').close(loadingIndex);
				if(data.data.order_list.length != 0) {
					$('#nodata-tips').hide();
					$('#order-list').html(doT.template(self_tpl.newOrderListTpl1)(data.data));
					$("#pager").pager({ pagenumber: pageIndex, pagecount:  Math.ceil(data.data.total_counts / filterCondition.page_size), buttonClickCallback: getOrderList, totalCounts:data.data.total_counts});
					$("#pager").show();
				} else {
					$('#order-list').html('');
					$("#pager").hide();
					$('#nodata-tips').show();
				}
			}
		});
	}
	// getOrderList(1);

	$('.right-bar').delegate('.pass-btn','click',function(){
		var orderId = $(this).closest('tr').data('id');
		var deliverType = $(this).closest('tr').data('delivertype');
		var orderStatus = $(this).data('status');
		var reqId = null;
		if(orderStatus == '7') {
			reqId = '/order/cancelApproval.do';
		} else {
			reqId = '/order/appval.do';
		}
		layer.confirm('确定通过吗？', {
			btn: ['确定','取消'] 
		}, function(){
			$ajax.post(reqId,{order_id:orderId,deliver_type:deliverType},function(data){
				if(data.success) {
					getOrderList(1);
					layer.closeAll();
				} else {
					layer.msg(data.msg)
				}
			});
		}, function(){
			return;
		});
	});
	$('.right-bar').delegate('.nopass-btn','click',function(){
		var orderId = $(this).closest('tr').data('id');
		var deliverType = $(this).closest('tr').data('delivertype');
		$('#nopass-modal').modal('show');
		$('#nopass-submit').attr('data-delivertype',deliverType);
		$('#nopass-submit').attr('data-id',orderId);
		$('#nopass-submit').attr('data-status',$(this).data('status'));
	});

	
	$('body').delegate('#nopass-submit','click',function(e){
		require('../../common/btn-trigger.js').btnCtrl(e, function(target){
			var orderId = target.attr('data-id');
			var deliverType = target.attr('data-delivertype');
			var orderStatus = target.attr('data-status');
			var reqId = null;
			if(orderStatus == '7') {
				reqId = '/order/cancelReject.do';
			} else {
				reqId = '/order/reject.do';
			}
			$ajax.post(reqId,{order_id:orderId,deliver_type:deliverType,remarks:$('#nopass-reason').val()},function(data){
				if(data.success) {
					getOrderList(1);
					$('#nopass-modal').modal('hide');
					$('#nopass-reason').val('');
				} else {
					layer.msg('系统异常')
				}
			});
		})
	});

	// $('.right-bar').delegate('.cancel-btn','click',function(){
	// 	var orderId = $(this).closest('tr').data('id');
	// 	// var deliverType = $(this).closest('tr').data('delivertype');
	// 	$('#cancel-modal').modal('show');
	// 	$('#cancel-submit').attr('data-id',orderId);
	// 	$('#cancel-submit').attr('data-status',$(this).data('status'));
	// });

	
	// $('body').delegate('#cancel-submit','click',function(e){
	// 	require('../../common/btn-trigger.js').btnCtrl(e, function(target){
	// 		var orderId = target.attr('data-id');
	// 		var orderStatus = target.attr('data-status');
	// 		var reqId = '/order/coerce_cancel.do';
	// 		$ajax.post(reqId,{order_id:orderId,remarks:$('#cancel-reason').val()},function(data){
	// 			if(data.success) {
	// 				getOrderList(1);
	// 				$('#cancel-modal').modal('hide');
	// 				$('#cancel-reason').val('');
	// 			}
	// 		});
	// 	})
	// });
	//批量审核
	$('#batch-check').click(function(){
		var selectedOrder = $('#order-list tbody input:checked');
		if(selectedOrder.length < 1) {
			layer.msg('请选择订单');
			return;
		}
		layer.confirm('确定批量通过吗？', {
			btn: ['确定','取消'] 
		}, function(){
			var order_audit_list = [];
			var order_cancel_audit_list = [];
			selectedOrder.each(function(){
				var status = $(this).closest('tr').data('status');
				var deliverType = $(this).closest('tr').data('delivertype');
				var orderId = $(this).closest('tr').data('id');
				if(status != '7') {
					order_audit_list.push({
						order_id: orderId,
						deliver_type: deliverType
					});
				} else {
					order_cancel_audit_list.push({
						order_id: orderId,
						deliver_type: deliverType
					});
				}
			});
			$ajax.post('/order/batchAudit.do', {batchs: JSON.stringify({order_audit_list:order_audit_list,order_cancel_audit_list:order_cancel_audit_list})}, function(data) {
				if(data.success){
					getOrderList(1);
					//location.reload();
				} else {
					layer.msg('系统异常')
				}
			})
		}, function(){
			return;
		});
	});

	$('#filter-btn').click(function(){
		var status_list = $('#selectpicker').val();
			if (status_list == null){
				status_list = [-1]
			}
		filterCondition = {
			order_sn: $('#order_sn').val(),
			mobile: $('#mobile').val(),
			start_time: $('#start_time').val(),
			end_time: $('#end_time').val(),
			verify_start_time: $('#h_start_time').val(),
			verify_end_time: $('#h_end_time').val(),
			member_name: $('#member_name').val(),
			shipper: $('#shipper').val(),
			direct_superior_name: $('#up_auditor_name').val(),
			sku_name: $('#sku_name').val(),
			status: $('#order-status option:checked').val(),
			status_list: status_list,
			// city: $('#area-city option:checked').val(),
			// area: $('#area-district option:checked').val(),
			// member_id	long	N	所选级别的会员id
			top_member_id: $('.topLevelNameClass' + topNameSelectActive + ' :checked').val(),
			all_direct_type: $('.topLevelNameClass' + topNameSelectActive + ' :checked').attr('data-type'),
			deliver_type: $('#deliver_type option:checked').val(),
			current_page: 1,
			page_size: 20
		}
		// if($('.all-or-direct').length != 0) {
		// 	filterCondition.all_direct_type =  $('.all-or-direct :checked').attr('data-type');
		// } else {
		// 	filterCondition.all_direct_type =  $('.topLevelNameClass' + topNameSelectActive + ' :checked').attr('data-type')
		// }
		getOrderList(1);
	});
	// (function (){
	// 	$ajax.post('/agent/agent_grade/list.do',null,function(data){
	// 		if(data.success) {
	// 			$('#agent_grade').html(doT.template(self_tpl.optionTpl)(data.data));
	// 		}
	// 	});
	// })();
	

	$("#exports-btn").click(function(){
		var pramPage = filterCondition;
		pramPage.is_all = $("#exports-select").val();
		// pramPage.current_page = filterCondition.current_page;
		// pramPage.page_size = filterCondition.page_size;
		//var link = tmp_path_config.api_path_1 + "/order/list/export.do?is_all=" + pramPage.is_all +　"&current_page=" + pramPage.current_page + "&page_size=" + pramPage.page_size;
		var link = require('../../common/export.js').doExports(tmp_path_config.api_path_1, '/order/list/export.do', pramPage);
		window.location.href = link;
	});


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
	
});