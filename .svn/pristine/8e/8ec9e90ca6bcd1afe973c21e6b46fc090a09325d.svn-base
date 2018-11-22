$(function() {
	var api_path_config = require('../../../../tmp_path_config.js');
	var $ajax = require('../../common/ajax.js');
	var self_tpl = require('../../module/tpl/rules-tpl.js');
	prodContent();
	var dele_arr = ["1", "1", "1"]; // 对应 5 个表格的块
	var dele_length;
	var flag = 0;
	function getData() {
		var item_spu_idj = $("#goods-select").val();
		var item_status = $("#types-select").val();
		// 获取列表
		$ajax.ajaxPost('/inventory/get.do', {
			item_spu_id: item_spu_idj,
			item_status: item_status
		},
			// $.post('/goodsStockSetting.do', {item_spu_id:item_spu_idj},
			function(data) {
				if(data.code == "10000") {
					$('#table-body').html(doT.template(self_tpl.goodsStockSettingTpl)({
						data: data.data,
						path: api_path_config.upload_path // 图片地址
					}));
				};
			});
	};
	//商品列表获取
	function prodContent() {
		$ajax.ajaxPost('/commodity/spu/list.do', {invalid:0},
		// $.post('/goodsProdContent.do', {},
			function(data) {
				if(data.code == "10000") {
					console.log(data.data)
					$('#goods-select').html(doT.template(self_tpl.goodProdContent)({
						data: data.data,
					}));
				};
				getData();
			});

	};
	//保存操作
	$("#table").on("click",".s-preservation",function(e){
		var target = $(e.target);
		var goodsId = target.parents("tr").attr("class");
		var goodIdBox = $('.' + goodsId);
		var inputValue = target.parents("tr").find('#valInput').val();
		// var item_sku_id1 = target.attr("sku_id");
		var spu_id1 = target.attr("spu_id");
		var items = [];
		var flag = 0;
		for(var i=0;i<goodIdBox.length;i++){
			var item = {
				total_inv:"",
				item_sku_id:"",
				item_spu_id:""
			};
			var valStock = $(goodIdBox[i]).find("#valInput").val();
			var item_sku_id1 = $(goodIdBox[i]).attr("sku_id");
			item.total_inv = valStock;
			item.item_sku_id = item_sku_id1;
			item.item_spu_id = spu_id1;
			items.push(item);
			// var deliver = $(goodIdBox[i]).find("#valInput").attr("deliver_type");
			// if(deliver == 1){
			// 	if(!item.total_inv){
			// 		flag = 1;
			// 	}
			// }else{
			// 	if(!item.total_inv || item.total_inv == 0){
			// 		flag = 1;
			// 	}
			// }
			if(!item.total_inv){
				flag = 1;
			}
			
		}
		if(flag == 1) {
			layer.msg("总库存不能为空！");
			return;
		};
		layer.confirm("确定保存吗？" , {
			btn: ["保存", '取消'] //按钮
		}, function() {
			$ajax.ajaxPost('/inventory/modify_total_inv.do', {content: JSON.stringify(items)},
		// $.post('/goodsProdContent.do', {},
			function(data) {
				if(data.code == "10000") {
					layer.msg("保存成功",{
					    time: 500
					  });
					getData();
				}else{
					layer.msg("保存失败",{
					    time: 1000
					  });
					getData();
				}
			});
		});
		
	});
	//刷新操作
	$("#table").on("click",".s-refresh",function(e){
		var target = $(e.target);
		var inputValue = target.siblings('input').val();
		$.post('/goodsProdContent.do', {},
			function(data) {
				if(data.code == "10000") {
					// target.siblings('input').val(data.list.goods_info)
					layer.msg("刷新成功",{
					    time: 500
					  });
				}else{
					layer.msg("刷新失败",{
					    time: 500
					  });
				}
			});
	});
	//切换商品刷新对应数据
	$("#goods-select").change(function() {
		getData(1);
	});
	$("#types-select").change(function () {
		getData(1);
	});
	// 数据检验
	$("#table").on("keyup", ".price", function() {
		// var deliver_type = $(this).attr("deliver_type");
		// if(deliver_type == 1){
		// 	var re = /^([1-9]\d*|[0]{1,1})$/;
		// }
		// else{
		// 	var re = /^[1-9][\d]*$/;
		// }
		var re = /^([1-9]\d*|[0]{1,1})$/;
		var value = $(this).val().trim();
		// var re = /^\d{1,6}(\.(\d{1,2})?)?$/;
		if(!re.test(value)) {
			$(this).val("");
		};
	});

	// 保存
	var pram = {
		sku_id: "",
		limit_rule_list: []
	};
	$("#table-body").on("click", ".save", function() {
		collectData(this);
		if(flag == 1) {
			layer.msg("限量不能为空！");
			return;
		};
		var is_add = $(this).attr("data_add");
		layer.confirm('确定保存吗？', {
			btn: ['确定', '取消'] //按钮
		}, function(index) {
			if(is_add == "true") { // 新建
				$ajax.ajaxPost('/rule/add_item_limit_rule.do', {content: JSON.stringify(pram)}, function(data) {
					if(data.code == 10000) {
						layer.msg("保存成功！");
						getData();
					}
				});
			}else if(is_add == "false"){ // 修改
				$ajax.ajaxPost('/rule/modify_item_limit_rule.do', {content: JSON.stringify(pram)}, function(data) {
					if(data.code == 10000) {
						layer.msg("保存成功！");
						getData();
					}
				});
			}

		});
	});
	function collectData(_this) {
		pram = {
			sku_id: "",
			limit_rule_list: []
		};
		flag = 0;
		var tmpPram = $(_this).parents("tr").find(".limited");
		pram.sku_id = $(_this).attr("data_id");
		var tmp = {
			order_min: "",
			day_max: "",
			week_max: "",
			month_max: "",
			remark: "",
			agent_grade: ""
		};
		tmp.order_min = tmpPram.eq(0).val();
		if(!tmp.order_min) {
			flag = 1;
		};
		tmp.day_max = tmpPram.eq(1).val();
		if(!tmp.day_max) {
			flag = 1;
		};
		tmp.week_max = tmpPram.eq(2).val();
		if(!tmp.week_max) {
			flag = 1;
		};
		tmp.month_max = tmpPram.eq(3).val();
		if(!tmp.month_max) {
			flag = 1;
		};
		tmp.remark = tmpPram.eq(4).val();
		tmp.agent_grade = $(_this).attr("data_grade_level");
		pram.limit_rule_list.push(tmp);
	}
});