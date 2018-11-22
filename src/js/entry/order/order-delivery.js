var self_tpl = require('../../module/tpl/order-tpl.js');
var $ajax = require('../../common/ajax.js');
var tmp_path_config = require('../../../../tmp_path_config.js');
var team_level = require('../../common/team-level.js');
$(function(){
	//loading层
	// var loadingIndex = null;
	$('#order-list').delegate('.select-all','click',function(){
		if(!$(this).prop("checked")) {
			$("[name = selectItem]:checkbox").prop("checked", false);
		} else {
			$("[name = selectItem]:checkbox").prop("checked", true);
		}
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
		$('#start_time'),
		$('#end_time'),
		timepickerCfg
	);
	var filterCondition = {current_page: 1,page_size:20};
	function getOrderList(pageIndex) {
		loadingIndex = require('../../common/render-layer.js').open();
		filterCondition.current_page = pageIndex;
		$ajax.ajaxPost('/delivery/list.do', filterCondition, function(data) {
			if(data.success){
				require('../../common/render-layer.js').close(loadingIndex);
				if(data.data.order_delivery_list.length != 0) {
					$('#nodata-tips').hide();
					$('#order-list').html(doT.template(self_tpl.newDeliverTpl)(data.data));
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
	$('.right-bar').delegate('.cancel-btn','click',function(){
		var orderId = $(this).closest('tr').attr('data-id');
		// var deliverType = $(this).closest('tr').data('delivertype');
		$('#cancel-modal').modal('show');
		$('#cancel-submit').attr('data-id',orderId);
		$('#cancel-submit').attr('data-status',$(this).data('status'));
	});

	
	$('body').delegate('#cancel-submit','click',function(e){
		require('../../common/btn-trigger.js').btnCtrl(e, function(target){
			var orderId = target.attr('data-id');
			var orderStatus = target.attr('data-status');
			var reqId = '/order/coerce_cancel.do';
			$ajax.post(reqId,{order_id:orderId,remarks:$('#cancel-reason').val()},function(data){
				if(data.success) {
					getOrderList(1);
					$('#cancel-modal').modal('hide');
					$('#cancel-reason').val('');
				}
			});
		})
	});
	// $('.right-bar').delegate('.pass-btn','click',function(){
	// 	var orderId = $(this).closest('tr').data('id');
	// 	var deliverType = $(this).closest('tr').data('delivertype');
	// 	var orderStatus = $(this).data('status');
	// 	var reqId = null;
	// 	if(orderStatus === 7) {
	// 		reqId = '/order/cancelApproval.do';
	// 	} else {
	// 		reqId = '/order/appval.do';
	// 	}
	// 	layer.confirm('确定通过吗？', {
 //            btn: ['确定','取消'] 
 //        }, function(){
 //            $ajax.post(reqId,{order_id:orderId,deliver_type:deliverType},function(data){
	// 			if(data.success) {
	// 				getOrderList(1);
	// 				layer.closeAll();
	// 			}
	// 		});
 //        }, function(){
 //            return;
 //        });
	// });
	$('.right-bar').delegate('.delivery-btn','click',function(){
		$('#express-no').val('');
		$('#expess-remarks').val('');
		var orderId = $(this).closest('tr').data('id');
		$('#order-delivery-modal').modal('show');
		$('#delivery-confirm').attr('data-id',orderId);
		getExpressInfo();
	});
	$('.right-bar').delegate('.delivery-edit-btn','click',function(){
		var orderId = $(this).closest('tr').data('id');
		$('#order-delivery-modal').modal('show');
		$('#delivery-confirm').attr('data-id',orderId);
		$ajax.post('/delivery/get.do',{order_id:orderId},function(data){
			if(data.success) {
				$('#express-no').val(data.data.express_no);
				$('#expess-remarks').val(data.data.remarks);
				getExpressInfo(data.data.express_code);
			}
		});
	});
	function getExpressInfo(expressCode) {
		$ajax.post('/express/get.do',{},function(data){
			if(data.success) {
				if(expressCode) {
					data.express_code = expressCode;
				}
				$('#express_code_select').html(doT.template(self_tpl.expressOptionTpl)(data));
			}
		});
	}
	
	$('body').delegate('#delivery-confirm','click',function(){
		var orderId = $(this).attr('data-id');
		$ajax.post('/delivery/ship.do',{order_id:orderId,remarks:$('#expess-remarks').val(),express_no: $('#express-no').val(),express_code:$('#express_code_select option:checked').val(),express:$('#express_code_select option:checked').html()},function(data){
			if(data.success) {
				getOrderList(1);
				$('#order-delivery-modal').modal('hide');
				$('#expess-remarks').val('');
			}
		});
	});


	$('#filter-btn').click(function(){
		filterCondition = {
			order_sn: $('#order_sn').val(),
			mobile: $('#mobile').val(),
			start_time: $('#start_time').val(),
			end_time: $('#end_time').val(),
			member_name: $('#member_name').val(),
			status: $('#order_status option:checked').val(),
			deliver_type: $('#deliver_type option:checked').val(),
			express_code: $('#all-express-select option:checked').val(),
			agent_grade: $('#all-level option:checked').val(),
			sku_name: $('#sku_name').val(),
			express_no: $('#express_no').val(),
			current_page: 1,
			page_size: 20
		}
		getOrderList(1);
	});
	team_level.level2();
	$('#order-list').delegate('.delivery-btn','click',function(){
		$('#order-delivery-modal').modal('show');
	});
	$ajax.post('/express/get.do',{},function(data){
		if(data.success) {
			$('#all-express-select').html(doT.template(self_tpl.expressOptionTpl)(data));
		}
	});

	$("#exports-btn").click(function(){
		var pramPage = filterCondition;
		pramPage.is_all = $("#exports-select").val();
		// pramPage.current_page = filterCondition.current_page;
		// pramPage.page_size = filterCondition.page_size;
		// pramPage.status = $('#order_status option:checked').val();
		// var link = tmp_path_config.api_path_1 + "/delivery/export.do?is_all=" + pramPage.is_all +　"&status=" + pramPage.status + "&current_page=" + pramPage.current_page + "&page_size=" + pramPage.page_size;
		var link = require('../../common/export.js').doExports(tmp_path_config.api_path_1, '/delivery/export.do', pramPage);
		window.location.href = link;
	});

	var ratio = window.devicePixelRatio || 1,
		// 缩略图大小
		thumbnailWidth = 100 * ratio,
		thumbnailHeight = 100 * ratio,
		// Web Uploader实例
		uploader;
	uploader = WebUploader.create({
		// 自动上传。
		auto: false,
		// swf文件路径
		//swf: BASE_URL + '/js/Uploader.swf',
		// 文件接收服务端。
		// server: 'http://media.haiyn.com/upload.php',
		server: tmp_path_config.api_path_1 + '/delivery/importUnShipOrder.do',
		// formData: {
		//     user_id: 1,
		//     biz_code: 'hanshu'
		// },
		// 选择文件的按钮。可选。
		// 内部根据当前运行是创建，可能是input元素，也可能是flash.
		pick: {
			id: '#preview-btn',
			multiple: false
		},
		// 只允许选择文件，可选。
		accept: {
			title: 'Applications',
			//extensions: 'csv',
			// mimeTypes: 'image/*'
			mimeTypes: 'application/csv'
		}
	});
	$("#preview-btn").mouseenter(function() {
		if (uploader) {
			uploader.refresh();
		}
	});
	// 当有文件添加进来的时候
	uploader.on('fileQueued', function(file) {
		if(file.name.indexOf('.csv') != -1) {
			$('#selected-file').val(file.name);
		} else {
			layer.msg('只允许导入后缀名为csv的文件')
		}
		
		
		// var $img = $('#img-upload-modal .thumbnail-input');
		// // 创建缩略图
		// uploader.makeThumb(file, function(error, src) {
		// 	if (error) {
		// 		$img.replaceWith('<span>不能预览</span>');
		// 		return;
		// 	}
		// 	$img.val(src);
		// }, thumbnailWidth, thumbnailHeight);
	});
	// 文件上传过程中创建进度条实时显示。
	uploader.on('uploadProgress', function(file, percentage) {
		var $li = $('#' + file.id),
			$percent = $li.find('.progress span');

		// 避免重复创建
		if (!$percent.length) {
			$percent = $('<p class="progress"><span></span></p>')
				.appendTo($li)
				.find('span');
		}
		$percent.css('width', percentage * 100 + '%');
	});
	// 文件上传成功，给item添加成功class, 用样式标记上传成功。
	uploader.on('uploadSuccess', function(file, res) {
		require('../../common/render-layer.js').close(loadingIndex);
		$('#selected-file').val('');

		if(res.code === '40017') {
			layer.msg(res.msg);
		}
		
		if(res.code === '10000') {
			layer.msg(res.msg);
			getOrderList(1);
		}
		// location.reload();
		
	});
	// 文件上传失败，现实上传出错。
	uploader.on('uploadError', function(file) {
		var $li = $('#' + file.id),
			$error = $li.find('div.error');
		// 避免重复创建
		if (!$error.length) {
			$error = $('<div class="error"></div>').appendTo($li);
		}
		$error.text('上传失败');
	});
	// 完成上传完了，成功或者失败，先删除进度条。
	uploader.on('uploadComplete', function(file) {
		$('#' + file.id).find('.progress').remove();
	});
	$('#confirm-import').click(function() {
		if ($("#selected-file").val() == ""){
			layer.msg("请选择导入文件！");
		}
		//console.log("上传...");
		if (uploader) {
			loadingIndex = require('../../common/render-layer.js').open();
			uploader.upload();
		}
	});
});
