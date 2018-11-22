$(function(){
	var self_tpl = require('../../module/tpl/account-list-tpl.js');
	var $ajax = require('../../common/ajax.js');
	var imgUpload = require('../../common/img-upload.js');
	var team_level = require('../../common/team-level.js');
	team_level.level();
	var listPram = {
		real_name: "",
		name: "",
		mobile: "",
		wechat_id: "",
		authon_personalid: "",
		agent_grade: "",
		current_page: 1,
		page_size: 20,
		pageCount: ""
	};
	$("#searcher").click(function(){
		listPram.current_page = 1;
		getData();
	});

	// getData();
	function getData(){
		listPram.name = $("#user-nickName").val().trim();
		listPram.real_name = $("#user-name").val().trim();
		listPram.mobile = $("#user-phone").val().trim();
		listPram.wechat_id = $("#user-weChat").val().trim();
		listPram.authon_personalid = $("#user-id").val().trim();
		listPram.agent_grade = $("#all-level").val();
		$ajax.ajaxPost('/agent/agent_list/get_list.do', listPram, 
			function(data){
				if (data.success) {
					if (data.data.total_count) {
						$("#table-body tr, p.prompt").remove();
						$("#pager").css("display", "block");
						listPram.pageCount = Math.ceil(data.data.total_count / listPram.page_size);
						$("#pager").pager({ pagenumber: listPram.current_page, pagecount: listPram.pageCount, buttonClickCallback: PageClick,totalCounts: data.data.total_count});
						$('#table-body').html(doT.template(self_tpl.accountListTpl)(data.data.datas));
					}else{
						$("#table-body tr, p.prompt").remove();
						$("#pager").css("display", "none");
						$('.user-container').append("<p class='prompt'>暂无数据</p>");
					}
					
				};
		});
	};
	function PageClick (pageclickednumber) {
		listPram.current_page = pageclickednumber;
		getData();
	};

	$("#table-body").on("click","#user-enable", function(){
		var id = $(this).attr("data-id");
		var enable = $(this).attr("data-status");
		var msg = (enable == 0) ? "确定要启用该管理帐号吗" :"确定要禁止该管理帐号吗?";
		//询问框
		layer.confirm('msg', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			$ajax.post('', {}, function(data) {
				
			});
		});
	});
	
	/**
	 *	功能：余额调整
	 *	
	 *
	*/

	var pram = {
		member_id : "",
		amount: "",
		adjust_type: "",
		biz_desc: ""
	};

	// 触发弹框 获取展示信息
	$(".user-container").on("click", ".balance-adjust", function(){
		$("#adjust_money").val("");
		$("#reason").val("");
		$("#left_money").text("");
		$('#myModal').modal();
		pram.member_id  = $(this).attr("user_id");
		$("#adjustUserName").text($(this).attr("user_name"));
		$("#adjustCurrentBalance").text($(this).attr("user_money"));
	});

	// 调整金额校验
	$("#adjust_money").keyup(function(){
		var value = $("#adjust_money").val();
		var re = /^\d{1,100}(\.(\d{1,2})?)?$/;
		if(!re.test(value)){
			$("#adjust_money").val("");
		};
		var max = parseFloat($("#adjustCurrentBalance").text());
		current = parseFloat(value);
		var status = $("#status").val();
		if(current > max && status == 17){
			$("#adjust_money").val("");
		};
	});
	$("#adjust_money").blur(function(){
		var numPre = parseFloat($("#adjustCurrentBalance").text());
		var num = parseFloat($("#adjust_money").val());
		if(!num){
			return;
		}
		var statu = $("#status").val();
		if(statu == "16"){
			$("#left_money").text(numPre + num);
		}else if(statu == "17"){
			$("#left_money").text(numPre - num);
		};
		
	});
	// 调整类型改变
	$("#status").change(function(){
	  	$("#adjust_money").val("");
	});
	// $("#table-body").on("click","#user-dele", function(){
	// 	var id = $(this).attr("data-id");
	// 	var enable = $(this).attr("data-status");
	// 	//询问框
	// 	layer.confirm('确定要删除该管理帐号吗？', {
	// 	  btn: ['确定','取消'] //按钮
	// 	}, function(index){
	// 		$ajax.post('', {}, function(data) {
				
	// 		});
	// 	});
	// });

	// 关闭弹框 发送输入信息
	$("#close").on("click", function(){
		if($("#reason").val().length > 0){
			pram.adjust_type = $("#status").val();
			pram.amount = $("#adjust_money").val();
			if (pram.amount == 0) {
				layer.msg("不能为空！");
			};
			pram.biz_desc = $("#reason").val();
			$ajax.ajaxPost('/account/adjust/change.do', pram, 
				function(data){
					if (data.success) {
						$('#myModal').modal('hide');
						layer.msg("账户调整成功！");
						getData();
					};
			});
			$("#adjust_money").val("");
			$("#reason").val("");
		}else{
			layer.msg("调整理由不能为空！");
		};
	});

});
