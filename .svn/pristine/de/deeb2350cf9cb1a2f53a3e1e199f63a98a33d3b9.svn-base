$(function () {
    var self_tpl = require('../../module/tpl/activity-list-tpl.js');
    var $ajax = require('../../common/ajax.js');
    var tmp_path_config = require('../../../../tmp_path_config.js');
    //时间选择控件
    var timepickerCfg = {
        minInterval: (1000 * 60),
        showSecond: true,
        timeFormat: 'HH:mm:ss',
        start: {
           // maxDate: new Date()
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

    var param;
    $("#batch-check").on("click",function(){
        getList();
       getData(param);
    });
    getList()
    function getList() {
        var _activity_name = $("#order_name").val(),
            _reco_mobile = $("#referee_tel").val(),
            _mobile = $("#user_tel").val(),
            _consignee = $("#user_name").val(),
            _wechat_no = $("#user_wx").val(),
            _order_status = $("#status_act").find("option:selected").attr("data_order_status"),
            _gen_agent = $("#gen_agent_status").find("option:selected").attr("data_gen_agent"),
            _consignee = $("#name").val(),
            _start_time = $("#start_time").val(),
            _end_time = $("#end_time").val();
        param = {
            activity_name: _activity_name,
            mobile: _mobile,
            reco_mobile: _reco_mobile,
            start_time: _start_time,
            end_time: _end_time,
            consignee: _consignee,
            wechat_no: _wechat_no,
            consignee:_consignee,
            order_status:_order_status,
            gen_agent:_gen_agent,
            current_page: 1,
            page_size: 10,
            pageCount: ""
        };
    }
    function getData(param){
        $ajax.ajaxPost('/act/order/list.do', param, function(data) {
        // $.post('/getYlJson.do', param, function(data) {
            console.log(data)
            param.pageCount = Math.ceil(data.data.total_counts / param.page_size);
            if(data.success){
                if(data.data.total_counts == 0){
                    $("tbody").html("<tr><td colspan='9'><p style='text-align:center;'>没有相关订单！</p</td></tr>");
                    $("#pager").html("");
                }else{
                    $("tbody").html(doT.template(self_tpl.activityOrderListNew)(data.data.act_order_list));
                    $("#pager").pager({ pagenumber: param.current_page, pagecount: param.pageCount, buttonClickCallback: PageClick });
                }
            }
        });
    }
     function PageClick(pageclickednumber) {
        param.current_page = pageclickednumber;
        getData(param);
    };
    $(".container").on("click","#g_status",function(){
        $("#xiugai_status").modal('show');
        var _id = $(this).parents("tr").attr("data_id");
        $("#status-submit").attr("_id",_id);

    });
    // 修改状态提交
    $("body").on("click","#status-submit",function(){
        var _id = $("#status-submit").attr("_id");
        var _status = $("#selStatus").find("option:selected").attr("data_order_status");
        $ajax.ajaxPost('/act/order/invalid.do', {order_status:_status,order_id:_id}, function(data) {
            $("#xiugai_status").modal('hide');
            getData(param);
        });
    })
    //导出
    $("#exports-btn").click(function(){
        var _order_name = $("#order_name").val(),
            _referee_tel = $("#referee_tel").val(),
            _user_tel = $("#user_tel").val(),
            _name = $("#name").val(),
            _status_act = $("#status_act option:selected").attr("data_order_status"),
            _gen_agent_status = $("#gen_agent_status option:selected").attr("data_gen_agent"),
            _start_time = $("#start_time").val(),
            _end_time = $("#end_time").val();
         if (!_order_name && !_referee_tel && !_user_tel && !_name && !_status_act && !_gen_agent_status && !_start_time && !_end_time) {
            layer.msg("请选择至少一个查询条件导出", {
                time: 500
            });
            return;
         }
		var pramPage = param;
		// pramPage.is_all = $("#exports-select").val();
		// pramPage.current_page = filterCondition.current_page;
		// pramPage.page_size = filterCondition.page_size;
		// pramPage.status = $('#order_status option:checked').val();
		// var link = tmp_path_config.api_path_1 + "/delivery/export.do?is_all=" + pramPage.is_all +　"&status=" + pramPage.status + "&current_page=" + pramPage.current_page + "&page_size=" + pramPage.page_size;
		var link = require('../../common/export.js').doExports(tmp_path_config.api_path_1, '/act/order/export.do', pramPage);
		window.location.href = link;
    });
    
    //成为代理操作
    $(".container").on("click","#do_daili",function(){
        var _id = $(this).parents("tr").attr("data_id");
        layer.confirm("确定成为代理吗？" , {
			btn: ["确定", '取消'] //按钮
		}, function() {
            $ajax.ajaxPost('/act/order/addActAgent.do', {order_id:_id}, function(data) {
                    if(data.code == "10000") {
                        layer.msg("成为代理成功",{
                            time: 500
                        });
                        getData();
                    }else{
                        layer.msg("成为代理失败",{
                            time: 1000
                        });
                        getData();
                    }
                }
            );
		});
        // var  _id = $(this).parents("tr").attr("data_id");
        // $.post('/getStatusOrder.do', {id:_id}, function(data) {
        //    if(data.code == 10000){
        //     getData();
        //    }
        // });
    })
    // $('.container').delegate('.fahuo','click',function(){
    //      var orderId = $(this).closest('tr').attr('data_id');
    //     $('#order-delivery-modal').modal('show');
    //     $('#delivery-confirm').attr('data_id',orderId);
    //     getExpressInfo();
    // });
    function getExpressInfo() {
        $ajax.post('/express/get.do',{},function(data){
            if(data.success) {
                $('#express_code_select').html(doT.template(self_tpl.expressOptionTpl)(data));
            }
        });
    }
    $('body').delegate('#delivery-confirm','click',function(){
        var orderId = $(this).attr('data_id');
        $ajax.post('/act/order/ship.do',{order_id:orderId,remarks:$('#expess-remarks').val(),express_no: $('#express-no').val(),express_code:$('#express_code_select option:checked').val(),express:$('#express_code_select option:checked').html()},function(data){
            if(data.success) {
                getData(param);
                $('#order-delivery-modal').modal('hide');
                $('#expess-remarks').val('');
            }
        });
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
		server: tmp_path_config.api_path_1 + '/act/order/impActortUnShipOrder.do',
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
		//console.log("上传...");
		if (uploader) {
			loadingIndex = require('../../common/render-layer.js').open();
			uploader.upload();
		}
	});
});