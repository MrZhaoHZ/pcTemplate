$(function(){
	var self_tpl = require('../../module/tpl/goods-tpl.js');
	var $ajax = require('../../common/ajax.js');
	var listPram = {
		current_page: 1,
		page_size: 10,
		pageCount: ""
	};
	var pram = {};
	getData();
	function getData(){
		//$.post('/item/group_spu/list.do', {},function(data){
		$ajax.post('/item/group/list.do', {},function(data){
			if (data.code == "10000") {

				$('#table-body').html(doT.template(self_tpl.goodsGroupListTpl)(data.data));
			};
		});
	};
	
	$("#table").on("click",".dele", function(){
		var id = $(this).attr("data-id");
		//询问框
		layer.confirm('确定要删除本条记录吗？', {
			btn: ['确定','取消'] //按钮
		}, function(){
				$ajax.ajaxPost('/item/item_property/remove.do', { id: id},function(data){
					if (data.success) {
						getData();
						layer.msg("删除成功");
					}else if(data.code == "30041"){
						layer.msg(data.msg);
					};
					// layer.close(layer.index)
			});
		});
	});
	var flag = true; // 判断是编辑还是新建 true是新建
	$("#add").on("click", function(){
		$("#group_name").removeAttr("group_id");
		$("#group_name, #group_info, #group_sort").val("");
		flag = true;
		id = "";
		if(flag){
			delete pram.id;
		};
		$("#attr_name").attr("disabled", false);
		$("#value_type option").attr("selected",false);
		$('#myModal').modal();
		getGoodsList();
		$('#skuTable').html(doT.template(self_tpl.goodsPerGroupTpl)(""));
	});
	function getGoodsList(){
		//$.post('/goodsGoodsList.do', pram, function(data) {
		$ajax.ajaxPost('/commodity/spu/list.do', {"invalid": 0, "status": 1}, function(data) {
			if (data.success) {
				$('#goods_list').html(doT.template(self_tpl.goodsListTpl)(data.data.item_spu_d_t_os));
			}
		});
	};
	
	function checkNum (num){
		if(!(/^\d{0,6}$/.test(num))){ 
	 		return true;
	 	}else {
	 		return false;
	 	}
	}
	$("#myModal").on("click", "#btn_save", function(){
		pram = {};
		pram.group_name = $("#group_name").val().trim();
		pram.descri = $("#group_info").val().trim();
		pram.turn = $("#group_sort").val().trim();
		if (!pram.group_name) {
			layer.msg("请输入分组名称！");
			return;
		};
		if (!pram.descri) {
			layer.msg("请输入分组简介！");
			return;
		};
		if (!pram.turn) {
			layer.msg("请输入分组排序！");
			return;
		};
		pram.turn = parseInt(pram.turn);
		if(checkNum(pram.turn)){
			layer.msg("商品分组排序只能输入数字！");
			return;
		}
		// 收集表格中的数据
		var trLenth = $("#skuTable thead tr").length;
		if(trLenth == 0){
			layer.msg("请添加商品！");
			return;
		}
		var list = [];
		var length = $("#myModal .sort").length;
		for(var i = 1; i<= length; i++){
			var perSpu = {};
			perSpu.spu_id = $("#myModal .remove").eq(i-1).attr("data_id");
			perSpu.turn = $("#myModal .sort").eq(i-1).val().trim();
			perSpu.spu_name = $("#myModal .name").eq(i-1).text();
			if(!perSpu.turn){
				layer.msg("请输入商品的排序！")
				return;
			}
			if(checkNum(perSpu.turn)){
				layer.msg("商品排序只能输入数字！")
				return;
			}
			perSpu.turn = parseInt(perSpu.turn);
			list.push(perSpu);
		};
		pram.group_spu_d_t_o_s = list;
		if (flag) { // 新建
		var tmp = JSON.stringify(pram);
			$ajax.ajaxPost('/item/group/save.do', { "content": tmp}, function(data) {
				if (data.success) {
					$('#myModal').modal('hide');
					$("#goods_name").val("");
					$("#goods_sort").val("");
					getData();
				} else if(data.code =="30042"){
					layer.msg(data.msg,{offset: '150px'});
				}else if(data.code=="30096"){
					layer.msg(data.msg,{offset: '150px'});
				};
			});
		}else { // 编辑
			pram.group_id = $("#group_name").attr("group_id");;
			var tmp = JSON.stringify(pram);
			$ajax.ajaxPost('/item/group/modify.do', { "content": tmp}, function(data) {
				if (data.code == "10000") {
					$('#myModal').modal('hide');
					$("#goods_name").val("");
					$("#goods_sort").val("");
					getData();
				}
				else if(data.code=="30096"){
					layer.msg(data.msg,{offset: '150px'});
				}
				else if(data.code =="30042"){
					layer.msg(data.msg,{offset: '150px'});
				};
			});
		};
	});
	$("#table").on("click", ".edit", function(){
		getGoodsList();
		$("#group_name, #group_info, #group_sort").val("");
		flag = false;
		$('#skuTable').html(doT.template(self_tpl.goodsPerGroupTpl)(""));
		var isUsing = $(this).attr("data_is_using");
		var id = $(this).attr("data-id");
		$ajax.post('/item/group/get.do', { "id":  id},function(data){
		//$ajax.post('', id, function(data) {
			if (data.success == true) {
				// 编辑设置值
				$('#skuTable').html(doT.template(self_tpl.goodsPerGroupTpl)(data.data.group_spu_d_t_o_list));
				$("#group_name").val(data.data.group_name);
				$("#group_name").attr("group_id", data.data.id);
				$("#group_info").val(data.data.descri);
				$("#group_sort").val(data.data.turn);
				setTimeout(function(){
					deltCostomAttr(data.data.group_spu_d_t_o_list);
				}, 500);
			};
		});
		$('#myModal').modal();
	});

	// 编辑的时候删除已经存在的商品
	function deltCostomAttr(data){
		for(var i=0; i< data.length; i++){
			$("#goods_list option[data_id=" + data[i].spu_id +"]").remove();
		}
	};
	$("#table").on("click", ".on", function(){
		var id = $(this).attr("data-id");
		layer.confirm('确定要进行此操作？', {
				btn: ['确定','取消'] //按钮
			}, function(){
				$ajax.post('/item/group/on_sale.do', {"id": id}, function(data) {
					if (data.success) {
						layer.msg("操作成功！")
						getData();
					}else if(data.code == "30090"){
						layer.msg(data.msg);
					};
				});
			});
	});
	$("#table").on("click", ".off", function(){
		var id = $(this).attr("data-id");
		layer.confirm('确定要进行此操作？', {
				btn: ['确定','取消'] //按钮
			}, function(){
				$ajax.post('/item/group/off_sale.do', {"id": id}, function(data) {
					if (data.success) {
						layer.msg("操作成功！")
						getData();
					}else if(data.code == "30090"){
						layer.msg(data.msg);
					};
				});
			});
	});
	$("#table").on("click", ".dele", function(){
		var id = $(this).attr("data-id");
		layer.confirm('确定要进行此操作？', {
				btn: ['确定','取消'] //按钮
			}, function(){
				$ajax.post('/item/group/remove.do', {"id": id}, function(data) {
					if (data.success) {
						layer.msg("操作成功！")
						getData();
					}else if(data.code == "30090"){
						layer.msg(data.msg);
					};
				});
			});
	});
	$("#skuTable").on("click", ".remove", function(){
		var _this = this;
		var removRthDom = $(this).parents("tr");
		var content = removRthDom.find(".name").text();
		var id = removRthDom.attr("data-id");
		$("#goods_list").append("<option data_id=" + id +" data_type=" + ">" + content +"</option>");
		$(_this).parents('tr').remove();
		
	});
	var id = "";
	$("#myModal").on("click", "#addSpuGoods", function(){
		id = "";
		var id = $("#goods_list").find("option:selected").attr("data_id");
		if(!id){
			layer.msg("请选择商品！");
			return;
		};
		var value = $("#goods_list").val();
		$("#myModal tbody").append('<tr data-id=' + id + '><td class="name">' + value + '</td><td class="sorttd"><input data-id=' + id + '  maxlength="10" class="form-control options sort"/></td><td><a data_id=' + id +' class="remove">移除</a></td></tr>');
		$("#goods_list option:selected").remove();
	});
});
