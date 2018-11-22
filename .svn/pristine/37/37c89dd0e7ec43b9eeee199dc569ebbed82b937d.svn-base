$(function() {
	var api_path_config = require('../../../../tmp_path_config.js');
	var $ajax = require('../../common/ajax.js');
	var self_tpl = require('../../module/tpl/rules-tpl.js');
	var dele_arr = [];
	var dele_length;
	var flag = 0;
	var param = {};
	getData();
	prodContent();
	function getData() {
		// 获取代理商等级
		$ajax.ajaxPost('/agent/agent_grade/list.do', {},
		// $.post('/agentGradeList.do', {},
		function(data) {
			       if(data.code == "10000") {
				dele_arr = [];
				$('.getThead').html(doT.template(self_tpl.goodsTableHeadTpl)(data.data));
				dele_length = data.data.length;
				for(var i = 0; i < dele_length; i++) {
					dele_arr.push("1");
				};
				getList();
			};
		});
	};
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
		$ajax.ajaxPost('/rule/get_item_priceList.do', param,
		// $.post('/goodsRulesPrice.do', {},
			function(data) {
				if(data.code == "10000") {
					$('#table-body').html(doT.template(self_tpl.goodsPriceTpl)({
						data: data.data,
						dele_length: dele_length,
						path: api_path_config.upload_path
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
		var add_item_price_rule = '/rule/add_item_price_rule.do';
		var modify_item_price_rule = '/rule/modify_item_price_rule.do';
		var items = [];
		var obj = {};
		var rulist = [];
		var sAlert = $(this).attr("s-aler");
		var bcInfor = '保存成功!';
		var xgInfor = '保存成功!';
		var flag = 0;
		var pram = {
				spu_id: "",
				limit_rule_list: rulist
			};
		for(var j=0;j<goodIdBox.length;j++){
			var tmpPram = $(goodIdBox[j]).find(".s-stock-true");
			pram.spu_id = $(_this).attr("spuid");
			for(var i = 0; i < tmpPram.length; i++) {
				var tmp = {
					price: "",
					agent_grade: "",
					sku_id: "",
					deliver_type: ""
				};

				tmp.price = $(tmpPram[i]).val() ;
				if(!tmp.price){
					flag = 1
				}
				tmp.agent_grade = $(".parent_id").eq(i).attr("parent_id") || "";
				tmp.deliver_type = $(tmpPram[i]).parents("tr").attr("deliver_type") || "";
				tmp.sku_id = $(tmpPram[i]).parents("tr").attr("sku_id") || "";
				rulist.push(tmp);
			};
		};
		
		if(flag == 1) {
			layer.msg("价格不能为空！");
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
			if(!is_add){
				ajaxPost(modify_item_price_rule,xgInfor,pram);
			}else{
				ajaxPost(add_item_price_rule,bcInfor,pram);
			}
		});
	});
	function ajaxPost(list,info,pram){
		$ajax.ajaxPost(list, {content: JSON.stringify(pram)}, function(data) {
			if(data.code == 10000) {
				layer.msg(info);
				layer.close();
				getData();
			}
		});
	};
	$("#table").on("keyup", ".s-stock-true", function() {
		var value = $(this).val().trim();
		var re = /^\d{1,6}(\.(\d{1,2})?)?$/;
		if(!re.test(value)) {
			$(this).val("");
		};
	});
});