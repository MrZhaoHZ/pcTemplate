var self_tpl = require('../../module/tpl/agent-upgrade-tpl.js');
var $ajax = require('../../common/ajax.js');
var tmp_path_config = require('../../../../tmp_path_config.js');
$(function(){
	$("#batch").attr("disabled", true);
	$('#nav-select').delegate('.btn','click',function(){
		$(this).siblings('.btn').removeClass('selected');
		$(this).addClass('selected');
		pram.audit_status = $(this).attr("data_status");
		getData();
	});
	$('#right-bar-container').delegate('.select-all','click',function(){
		if(!$(this).prop("checked")) {
			$("[name = selectItem]:checkbox").prop("checked", false);
			$("#batch").attr("disabled", true);
		} else {
			$("[name = selectItem]:checkbox").prop("checked", true);
			$("#batch").attr("disabled", false);
		}
		// $("[name = selectItem]:checkbox").each(function () {
  //           $(this).prop("checked", !$(this).prop("checked"));
  //       });
	});
	// 处理多选框
	$("#table-container").on("click", "input:checkbox", function(){
		if($("input[name='selectItem']:checked").length !=0){
			$("#batch").attr("disabled", false);
		}else{
			$("#batch").attr("disabled", true);
		};
	});
	// 获取所有等级
	var tpl = '{{~ it:item:index }}\
				<option value="{{= item.id}}">{{= item.name}}</option>\
		  {{~}}';
	function cate() {
		$ajax.post('/agent/agent_grade/list.do',{},function(data){
			if (data.code == "10000") {
				$('#all_level').append(doT.template(tpl)(data.data));
			};
		});
	};
	cate();

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
    var pram = {
    	real_name: "",
    	cross_level: "",
    	agent_grade: "",
    	start_time: "",
    	end_time: "",
    	audit_status: "",

		current_page: 1,
		page_size: 10,
		pageCount: ""
	};
	
	$("#search").on("click", function(){
		pram.real_name = $("#name").val().trim();
		pram.cross_level = $("#cross_level option:checked").attr("value") ? $("#cross_level option:checked").attr("value") : '';
		pram.agent_grade = $("#all_level option:checked").attr("value") ? $("#all_level option:checked").attr("value") : '';
		pram.start_time = $("#start-time").val();
		pram.end_time = $("#end-time").val();
		getData();
	});
	// function getAgencyCheckList() {
		
	// 	$ajax.ajaxPost('/agent/agent_upgrade/get_list.do', pram, function(data) {
	// 		pram.pageCount =  Math.ceil(data.data.total_count / pram.page_size);
	// 		$("#pager").pager({ pagenumber: pram.current_page, pagecount: pram.pageCount, buttonClickCallback: PageClick});
	// 		$('#table-container').html(doT.template(self_tpl.agencyCheckTpl)(data.data));
			
	// 	})
	// }
	// function PageClick (pageclickednumber) {
	// 	listPram.current_page = pageclickednumber;
	// 	getData();
	// };
	// getAgencyCheckList();

	getData();
	function getData(){
		// pram.name = $("#user-nickName").val().trim();
		// pram.real_name = $("#user-name").val().trim();
		// pram.mobile = $("#user-phone").val().trim();
		// pram.wechat_id = $("#user-weChat").val().trim();
		// pram.authon_personalid = $("#user-id").val().trim();
		// pram.agent_grade = $("#all-level").val();
		loadingIndex = require('../../common/render-layer.js').open();
		$ajax.ajaxPost('/agent/agent_upgrade/get_list.do', pram, 
			function(data){
				if (data.success) {
					require('../../common/render-layer.js').close(loadingIndex);
					if(data.data.datas) {
						$('#nodata-tips').hide();
						pram.pageCount = Math.ceil(data.data.total_count / pram.page_size);
						$("#pager").pager({ pagenumber: pram.current_page, pagecount: pram.pageCount, buttonClickCallback: PageClick,totalCounts: data.data.total_count});
						$('#table-container').html(doT.template(self_tpl.agencyCheckTpl)(data.data));
						$("#pager").show();
					} else {
						$('#nodata-tips').show();
						$('#table-container').html('');
						$("#pager").hide();
					}
				};
				$("#batch").attr("disabled", "true");
		});
	};
	function PageClick (pageclickednumber) {
		pram.current_page = pageclickednumber;
		getData();
	};
	// 审核通过和拒绝
	// 批量审核通过
	var cotent = [];
	$("#batch").on("click", function(){
		var items = $("input[name='selectItem']:checked");
		var itemLen = items.length;
		for(var i =0; i< itemLen; i++){
			cotent.push($(items[i]).attr("data_id"));
		};
		$ajax.ajaxPost('/agent/agent_upgrade/batch_audit.do', {cotent: JSON.stringify(cotent)}, 
			function(data){
				if (data.success) {
					location.reload();
				};
				getData();
		});
	});
	
	var pramRefuse = {
		audit_status: 4,
		remark: "",
		application_no: ""
	};
	$("#table-container").on("click", ".force_refuse, .refuse", function(){
		pramRefuse.application_no = parseInt($(this).attr("data_id"));
		pramRefuse.audit_status = '4';
		$('#nopass-modal').modal('show');
	});
	$(".btn-primary:first-child").on("click", function(){
		pramRefuse.remark = $("textarea").val().trim();
		layer.confirm('确定要执行操作吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(){
		  $ajax.ajaxPost('/agent/agent_upgrade_audit/add_audit.do', pramRefuse, 
			function(data){
				if (data.success) {
					$('#nopass-modal').modal('hide');
					// layer.msg('拒绝成功！');
					location.reload();
				};
				getData();
			});
		});
	});
	// 通过
	// var pramRefuse = {
	// 	audit_status: '3',
	// 	application_no: ""
	// };
	$("#table-container").on("click", ".force_agree, .agree", function(){
		pramRefuse.application_no = parseInt($(this).attr("data_id"));
		pramRefuse.audit_status = '3';
		layer.confirm('确定要执行操作吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(){
		  $ajax.ajaxPost('/agent/agent_upgrade_audit/add_audit.do', pramRefuse, 
			function(data){
				if (data.success) {
					layer.close(layer.index);
					layer.msg('成功！');
					getData();
				}else{
					if(data.code == "30075" || data.code == "30077"){
						layer.msg( data.msg, {
						  time: 5000 //2秒关闭（如果不配置，默认是3秒）
						});
					}
				};
			});
		});
	});
	$('#right-bar-container').delegate('.pass-btn','click',function(){
		// layer.confirm('确定要执行操作吗？', {
		//   btn: ['确定','取消'] //按钮
		// }, function(){
		//   // layer.msg('的确很重要', {icon: 1});
		// }, function(){
		//   // layer.msg('的确很重要', {icon: 1});
		// });
	});
	$('#right-bar-container').delegate('.nopass-btn','click',function(){
		
	});
	$('#right-bar-container').delegate('.detail-btn','click',function(){
		$('#user-info-modal').modal('show');
	});


	$("#exports-btn").click(function(){
		var pramPage = pram;
		pramPage.is_all = $("#exports-select").val();
		// pramPage.current_page = pram.current_page;
		// pramPage.page_size = pram.page_size;
		// var link = tmp_path_config.api_path_1 + "/agent/agent_upgrade/export.do?is_all=" + pramPage.is_all +　"&current_page=" + pramPage.current_page + "&page_size=" + pramPage.page_size;
		var link = require('../../common/export.js').doExports(tmp_path_config.api_path_1, '/agent/agent_upgrade/export.do', pramPage);
		window.location.href = link;
	});
});