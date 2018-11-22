$(function(){
	var $ajax = require('../../common/ajax.js');
	var self_tpl = require('../../module/tpl/account-list-tpl.js');
	/**
	 *	功能：处理tab按钮
	 *	
	 *
	*/
	$(".user-container .btn-tab:first-child").css("border-bottom", "none");
	$(".user-container .btn-tab").on("click", function(){
		pram.status = $(this).attr("data-val");
		pram.pageCount = "";
		pram.current_page = 1;
		getData();
		$("#table-body tr").remove();
		$(".user-container .btn-tab").css("border-bottom", "1px solid #ccc");
		$(this).css("border-bottom", "none");
	});
	/**
	 *	功能：查询
	 *
	 *
	*/
	$("#search").on("click", function(){
		var phone = $("#mobile").val();
		if(phone){
			if(!(/^1\d{10}$/.test(phone))){ 
	 			$("#mobile").val("");
	 			layer.msg("手机号输入不合法！");
	 			return;
	 		};
		};
		pram.current_page = 1;
		pram.start_date = $("#start-time").val();
		pram.end_date = $("#end-time").val();;
		pram.mobile = $("#mobile").val().trim();
		pram.name = $("#name").val().trim();
		getData();
	});
	/**
	 *	功能：日期选择
	 *
	 *
	*/
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
	/**
	 *	功能：获取充值列表
	 *
	 *
	*/
	var pram = {
		status: "",
		start_date: "",
		end_date: "",
		mobile: "",
		name: "",
		current_page: 1,
		page_size: 20,
		pageCount: ""
	};
	//getData();
	function getData(){
		loadingIndex = require('../../common/render-layer.js').open();
		$ajax.post('/account/topup/get.do', pram, function(data) {
			if (data.code == "10000") {
				require('../../common/render-layer.js').close(loadingIndex);
				$('#table-body').html(doT.template(self_tpl.accountRechargeTpl)(data.data.member_account_d_t_o_list));
				pram.pageCount = Math.ceil(data.data.total_counts / pram.page_size);
				$("#pager").pager({ pagenumber: pram.current_page, pagecount: pram.pageCount, buttonClickCallback: PageClick,totalCounts: data.data.total_counts});
				$("#batch_recharge").attr("disabled", true);
				$("#checked").prop("checked", false);
			};
		});
	};
	function PageClick (pageclickednumber) {
		pram.current_page = pageclickednumber;
		getData();
	};

	/**
	 *	功能：拒绝审核
	 *		强制通过和通过一样接口  强制拒绝和拒绝一样接口参数
	 *
	*/
	// 拒绝弹窗
	$("#table-body").on("click",".refuse", function(){
		var id = $(this).parent().attr("data_id");
		getPramCheckBox(this);
		//询问框
		//页面层-自定义
		layer.open({
			title: "拒绝理由",
			shadeClose: false,
			content: '<div class="open_div">'+
						'	<textarea placeholder="请输入拒绝理由" class="form-control" id="reason"></textarea>'+
						'</div>',
			scrollbar: false,
			yes: function(index, layero){
				var reason = $("#reason").val();
				if(reason.length){
					pramSingle.substitued = "0";
					refusePost();
				};
			}
		});
	});
	// 强制拒绝弹窗
	$("#table-body").on("click",".force_refuse", function(){
		var id = $(this).parent().attr("data_id");
		getPramCheckBox(this);
		//询问框
		//页面层-自定义
		layer.open({
			title: "拒绝理由",
			shadeClose: false,
			content: '<div class="open_div">'+
						'	<textarea placeholder="请输入拒绝理由" class="form-control" id="reason"></textarea>'+
						'</div>',
			scrollbar: false,
			yes: function(index, layero){
				var reason = $("#reason").val();
				if(reason.length){
					pramSingle.substitued = "1";
					refusePost();
				};
			}
		});
	});
	// 拒绝请求
	function refusePost(){
		//var tmp = JSON.stringify(pramCheck);
		pramSingle.biz_desc = $("#reason").val();
		$ajax.ajaxPost('/account/topup/reject.do', pramSingle, function(data){
			if (data.code == 10000) {
				layer.close();
				layer.msg("操作成功！");
				$("[name = item]:checkbox").prop("checked", false);
				getData();
			};
		});
	};
	// 通过弹窗
	$("#table-body").on("click",".pass", function(){
		var id = $(this).parent().attr("data_id");
		getPramPassClick(this);
		//询问框
		layer.confirm('该记录处于 待总部审核 确定要执行操作吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			pramArr[0].substitued = "0";
			passPost();
		});
	});
	// 强制通过弹窗
	$("#table-body").on("click",".force_pass", function(){
		var id = $(this).parent().attr("data_id");
		getPramPassClick(this);
		//询问框
		layer.confirm('该记录处于 待上级审核 确定要执行操作吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			if (pramArr.length == 1) {
				pramArr[0].substitued = "1";
			};
			passPost();
		});
	});
	// 通过请求
	function passPost(){
		layer.closeAll();
		var tmp = JSON.stringify(pramArr);
		var index = layer.load(1, {
			shadeClose: false,
		  shade: [0.1,'#fff'] //0.1透明度的白色背景
		});
		$ajax.ajaxPost('/account/topup/review.do', { topup_list_str: tmp}, function(data){
			layer.closeAll();
			if (data.code == 10000) {
				layer.close();
				layer.msg("操作成功！");
				$("[name = item]:checkbox").prop("checked", false);
				getData();
			}else{
				if(data.code == "30075" || data.code =="30077"){
					layer.msg( data.msg, {
					  time: 5000 //2秒关闭（如果不配置，默认是3秒）
					});
				}
			};
		});
	};
	/**
	 *	功能：批量处理
	 *	
	 *
	*/
	 $("#checked").bind("click", function () {
	 	var check = this.checked;
	 	if(check){
	 		$("[name = item]:checkbox").prop("checked", true);
	 		$("#batch_recharge").attr("disabled", false);
	 	} else{
	 		$("[name = item]:checkbox").prop("checked", false);
	 		$("#batch_recharge").attr("disabled", true);
	 	};
      });
	$("#table").on("click", "input:checkbox", function(){
		if($("input[name='item']:checked").length !=0){
			$("#batch_recharge").attr("disabled", false);
		}else{
			$("#batch_recharge").attr("disabled", true);
		};
	});
	var pramArr = [];
	var pramCheck = {
		substitued: "0",
		topup_id: "",
		member_id: ""
	};
	var pramSingle = {
		substitued: "",
		topup_id: "",
		member_id: "",
		biz_desc: ""
	};
	// 获取所有选中的框对应的信息（批量审核）
	function getPramArrCheckBox(){
		pramArr = [];
		var items = $("input[name='item']:checked");
		var len = items.length;
		for(var i =0; i< len; i++){
			pramCheck = {
				substitued: "0",
				topup_id: "",
				member_id: ""
			};
			var parent = $(items[i]).parent().parent();
			pramCheck.topup_id = parent.attr("data_id");
			pramCheck.member_id = parent.attr("data_member");
			//pram.audit_member_id = parent.attr("data_id");
			//pramCheck.audit_member_id = "23";
			pramArr.push(pramCheck);
		};
	};
	// 获取所有选中的框对应的信息（单个通过审核）
	function getPramPassClick(_this){
		pramArr = [];
		var parent = $(_this).parent().parent();

		pramCheck.topup_id = parent.attr("data_id");
		pramCheck.member_id = parent.attr("data_member");
		//pram.audit_member_id = parent.attr("data_id");
		//pramCheck.audit_member_id = "23";
		pramArr.push(pramCheck);
	};
	// 获取单个选中框对应的信息（拒绝）
	function getPramCheckBox(_this){
		var parent = $(_this).parent().parent();
		pramSingle.topup_id = parent.attr("data_id");
		pramSingle.member_id = parent.attr("data_member");
		//pramSingle.audit_member_id = parent.attr("data_id");
		//pramSingle.audit_member_id = "23"
	};
	// 批量审核
	$("#batch_recharge").on("click", function(){
		getPramArrCheckBox();
		var tmp = JSON.stringify(pramArr);
		$ajax.ajaxPost('/account/topup/review.do', { topup_list_str: tmp}, function(data){
			if (data.code == 10000) {
				layer.msg("操作成功！");
				$("[name = item]:checkbox").prop("checked", false);
				getData();
			};
		});
	});

});
