$(function(){
	var api_path_config = require('../../../../tmp_path_config.js');
	var $ajax = require('../../common/ajax.js');
	var tpl = '{{~ it:item:index }}\
				<option value="{{= item.id}}">{{= item.category_name}}</option>\
		  {{~}}';
	function cate() {
		$ajax.ajaxPost('/commodity/category/list.do',{},function(data){
			if (data.code == "10000") {
				$('#goods_cate').append(doT.template(tpl)(data.data.item_category_d_t_os));
			};
		});
	};
	cate();
	var $ajax = require('../../common/ajax.js');
	var self_tpl = require('../../module/tpl/goods-tpl.js');
	var pram = {
		name: "",
		deliver_type: "",
		category_id: "",
		status: "",
		invalid: 0,
		current_page: 1,
		page_size: 1000,
		pageCount: ""
	};
	$("#searcher").click(function(){
		getData(); // 单个商品的筛选
	});
	getData();
	function getData(){
		pram.name = $("#goods_name").val();
		pram.category_id = $("#goods_cate option:selected").attr("value");
		pram.status = $("#goods_status option:selected").attr("value");
		$ajax.ajaxPost("/commodity/spu/list.do", pram,
			function(data){
				$("#table-body").html("");
				// pram.pageCount = Math.ceil(data.data.total_counts / pram.page_size);
				//  $("#pager").pager({ pagenumber: pram.current_page, pagecount: pram.pageCount, buttonClickCallback: PageClick});
				if (data.code == "10000") {
					// 隐藏等级的表头
					if(!data.data){
						layer.msg("没有搜索到对应的商品！");
						return;
					}
					$('.getThead').html(doT.template(self_tpl.goodsTableHeadTpl)(data.data.grade_d_t_os));
				 	setTimeout(function(){
				 		$('#table-body').html(doT.template(self_tpl.goodsManagementTpl)({data: data.data.item_spu_d_t_os, path: api_path_config.upload_path}));
				 	},100);
				 	$(".btn_click").attr("disabled", true);
				};
		});
		$("#checked").attr("checked", false);
	};
	// function PageClick (pageclickednumber) {
	// 	pram.current_page = pageclickednumber
	// 	getData();
	// };

	// 处理批量选择
	 $(".user-container").on("click", "#checked", function () {
	 	var check = this.checked;
	 	if(check){
	 		$("[name = item]:checkbox").prop("checked", true);
	 		$(".btn_click").attr("disabled", false);

	 	} else{
	 		$("[name = item]:checkbox").prop("checked", false);
	 		$(".btn_click").attr("disabled", true);
	 		
	 	};
    });
	$("#table").on("click", "input:checkbox", function(){
		if($("input[name='item']:checked").length !=0){
			$(".btn_click").attr("disabled", false);
		}else{
			$(".btn_click").attr("disabled", true);
		};
	});
//	$("#table").on("click", ".copy", function(){
//		var sku_id = $(this).attr("data_id");
//		$ajax.ajaxPost('/commodity/sku/copy.do', { sku_id: sku_id},function(data){
//			if (data.success) {
//				layer.msg("复制成功!");
//				getData();
//			};
//		});
//	});
	
	// 单个上架下架
	$("body").on("click",".on_sell", function(){ // 上架
		var id = $(this).attr("data_id");
		var arr = [];
		arr.push({"id": id});
		layer.confirm('确定要执行操作吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			var id = 
			$ajax.ajaxPost('/commodity/spu/on_sale.do', { item_spu_dtos_str: JSON.stringify(arr)}, function(data){
				if (data.code == 10000) {
					layer.msg("该商品上架成功！");
					$("[name = item]:checkbox").prop("checked", false);
					getData();
				}
			});
		});
	});
	$("body").on("click",".join_garbage", function(){ // 上架
		var id = $(this).attr("data_id");
		var arr = [];
		arr.push({"id": id});
		layer.confirm('确定要执行操作吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			var id = 
			$ajax.ajaxPost('/commodity/spu/remove.do', { item_spu_dtos_str: JSON.stringify(arr)}, function(data){
				if (data.code == 10000) {
					layer.msg("操作成功！");
					getData();
				}
			});
		});
	});
	$("body").on("click",".off_sell", function(){ // 下架
		var id = $(this).attr("data_id");
		var arr = [];
		arr.push({"id": id});
		layer.confirm('确定要执行操作吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			$ajax.ajaxPost('/commodity/spu/sold_out.do', { item_spu_dtos_str: JSON.stringify(arr)}, function(data){
				if (data.code == 10000) {
					layer.msg("该商品下架成功！");
					$("[name = item]:checkbox").prop("checked", false);
					getData();
				}
			});
		});
	});
	// 获取商品id
	function getGoodsId(){
		var items = $("input[name='item']:checked");
		var len = items.length;
		var data = {
			"arr": [],
			"isOnSell": 0
		} // 0默认的没有上架的商品 1就是有商品
		var arr = [];
		var item = "";
		for(var i =0; i< len; i++){
			item = items.eq(i).attr("data_id");
			if(items.eq(i).attr("data_status") == 1){
				data.isOnSell = 1;
			};
			data.arr.push({ id: item});
		};
		return data;
	};

	// 上架 下架 加入回收站
	$("#garbage").on("click", function(){
		var data = getGoodsId();
		if(data.isOnSell == 1){
			layer.msg("上架商品不能加入回收站！");
			return;
		};
		layer.confirm('确定要执行操作吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			$ajax.ajaxPost('/commodity/spu/remove.do', { item_spu_dtos_str: JSON.stringify(data.arr)}, function(data){
				if (data.code == 10000) {
					layer.msg("商品批量加入回收站成功！");
					$("[name = item]:checkbox").prop("checked", false);
					getData();
				}
			});
		});
	});
	
	$("#grounding").on("click", function(){
		layer.confirm('确定要执行操作吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			$ajax.ajaxPost('/commodity/spu/on_sale.do', { item_spu_dtos_str: JSON.stringify(getGoodsId().arr)}, function(data){
				if (data.code == 10000) {
					layer.msg("商品批量上架成功！");
					$("[name = item]:checkbox").prop("checked", false);
					getData();
				}
			});
		});
	});
	$("#undercarriage").on("click", function(){
		layer.confirm('确定要执行操作吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			$ajax.ajaxPost('/commodity/spu/sold_out.do', { item_spu_dtos_str: JSON.stringify(getGoodsId().arr)}, function(data){
				if (data.code == 10000) {
					layer.msg("商品批量下架成功！");
					$("[name = item]:checkbox").prop("checked", false);
					getData();
				}
			});
		});
	});
});
