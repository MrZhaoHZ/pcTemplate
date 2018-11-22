$(function() {
	var api_path_config = require('../../../../tmp_path_config.js');
	var $ajax = require('../../common/ajax.js');
	var self_tpl = require('../../module/tpl/rules-tpl.js');
	var dele_arr = [];
	var dele_length;
	var flag = 0;
	var param = {};
	getList();
	prodContent();
	//商品列表获取
	function prodContent() {
		$ajax.ajaxPost('/commodity/spu/list.do', {invalid:0},
			// $.post('/goodsProdContent.do', {status:1},
			function(data) {
				if(data.code == "10000") {
					$('#goods-select').html(doT.template(self_tpl.goodsRulesProd)({
						data: data.data.item_spu_d_t_os
					}));
				};
			}
		);
	};
	//获取列表
	function getList(){
		$ajax.ajaxPost('/rule/get_item_limitList.do', param,
		// $.post('/getItemLimitList.do', {},
			function(data) {
				if(data.code == "10000") {
					console.log(dele_length)
					console.log(api_path_config.upload_path)
					$('#table-body').html(doT.template(self_tpl.LimitSettingList)({
						data: data.data,
						path: api_path_config.upload_path,
						start_num: 1,
						limited_num: 999999
					}));
				};
			}
		);
	};
	// 商品筛选
	function changeGoods(){
		var id = $("#goods-select option:selected").attr("value") || "";
		var item_status = $("#types-select option:selected").attr("value") || "";
		param.spu_id = id;
		param.item_status = item_status;
		getList();
	};
	$("#goods-select").on("change", function () {
		changeGoods();
	});
	$("#types-select").on("change", function () {
		changeGoods();
	});
	//保存操作
	$("#table").on("click","#s-preservation",function(){
		var _this = $(this);
		var goodsId = $(this).parent().attr("class");
		var goodIdBox = $('.' + goodsId);
		var is_add = $(this).attr("is_add");
		var add_item_price_rule = '/rule/add_item_limit_rule.do';
		var modify_item_price_rule = '/rule/modify_item_limit_rule.do';
		var items = [];
		var obj = {};
		var rulist = [];
		var sAlert = $(this).attr("s-aler");
		var bcInfor = '保存成功!';
		var xgInfor = '保存成功!';
		var	flag = 0;
		var status01 = 0;
		var status02 = 0;
		var status03 = 0;

		
		var pram = {
				spu_id: "",
				agent_grade: "",
				limit_rule_list: rulist
			};
		for(var j=0;j<goodIdBox.length;j++){
			order_minj = $(goodIdBox[j]).find(".limitedOrdermin").val();
			day_maxj = $(goodIdBox[j]).find(".limitedDaymax").val();
			week_maxj = $(goodIdBox[j]).find(".limitedWeekmax").val();
			month_maxj = $(goodIdBox[j]).find(".limitedMonthmax").val();
			remarkj = $(goodIdBox[j]).find(".limitedRemark").val();
			sku_idj = $(goodIdBox[j]).attr("sku_id");
			deliver_typej = $(goodIdBox[j]).attr("deliver_type");
			var tmp = {
					order_min: order_minj,
					day_max: day_maxj,
					week_max: week_maxj,
					month_max: month_maxj,
					remark: remarkj,
					sku_id: sku_idj,
					deliver_type: deliver_typej
				};
			pram.spu_id = $(_this).attr("spuid");
			pram.agent_grade = $(_this).attr("agent_grade");
			priceValue = $(goodIdBox[j]).find(".s-stock-trues");
			for(var k=0;k<priceValue.length;k++){
				if(!$(priceValue[k]).val()){
					flag = 1
				}
			}
			if(parseInt(tmp.day_max) > parseInt(tmp.week_max)){
				status01 = 1
			}
			if(parseInt(tmp.week_max) > parseInt(tmp.month_max)){
				status02 = 1
			}
			if(parseInt(tmp.day_max) > parseInt(tmp.month_max)){
				status03 = 1
			}
			rulist.push(tmp);
			// flag = 0;
			// var tmpPram = $(goodIdBox[j]).find(".s-stock-true");
			// pram.spu_id = $(_this).attr("spuid");
			// for(var i = 0; i < tmpPram.length; i++) {
			// 	var tmp = {
			// 		price: "",
			// 		agent_grade: "",
			// 		sku_id: "",
			// 		deliver_type: ""
			// 	};

			// 	tmp.price = $(tmpPram[i]).val() ;
			// 	if(!tmp.price){
			// 		flag = 1
			// 	}
			// 	tmp.agent_grade = $(".parent_id").eq(i).attr("parent_id") || "";
			// 	tmp.deliver_type = $(tmpPram[i]).parents("tr").attr("deliver_type") || "";
			// 	tmp.sku_id = $(tmpPram[i]).parents("tr").attr("sku_id") || "";
				// rulist.push(tmp);
			// };
		};
		
		if(status01 == 1) {
			layer.msg("周限量必须大于日限量");
			return;
		};
		if(status02 == 1) {
			layer.msg("月限量必须大于周限量");
			return;
		};
		if(status03 == 1) {
			layer.msg("月限量必须大于日限量");
			return;
		};
		if(flag == 1) {
			layer.msg("不能为空！");
			return;
		};
		if(sAlert == 0){
			bcxg = '保存';
			trueBx = '确定保存吗？'
		}else{
			bcxg = '保存';
			trueBx = '确定保存吗？'
		}
		layer.confirm(trueBx , {
			btn: [bcxg, '取消'] //按钮
		}, function() {
			if(is_add){
				ajaxPost(add_item_price_rule,bcInfor,pram);
			}else{
				ajaxPost(modify_item_price_rule,xgInfor,pram);
			}
		});
	});
	function ajaxPost(list,info,pram){
		$ajax.ajaxPost(list, {content: JSON.stringify(pram)}, function(data) {
			if(data.code == 10000) {
				layer.msg(info);
				layer.close();
				getList();
			}
		});
	};
	$("#table").on("keyup", ".s-stock-trues", function() {
		var value = $(this).val().trim();
		// var re = /^\d{1,6}(\.(\d{1,2})?)?$/;
		var re =  /^\+?[0-9][0-9]*$/;
		if(!re.test(value)) {
			$(this).val("");
		};
	});
});