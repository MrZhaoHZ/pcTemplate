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
		invalid: 1,
		current_page: 1,
		page_size: 1000,
		pageCount: ""
	};
	$("#searcher").click(function(){
		getData();
	});
	$("#user-statu").change(function(){
		getData();
	});
	getData();
	function getData(){
		pram.name = $("#goods_name").val();
		pram.deliver_type = $("#goods_sourse").val();
		pram.category_id = $("#goods_cate").val();
		pram.status = $("#goods_status").val();
		$ajax.ajaxPost('/commodity/spu/list.do', pram, 
			function(data){
				if (data.code == "10000") {
					if (data.code == "10000") {
						$('.getThead').html(doT.template(self_tpl.goodsGarbageTableHeadTpl)(data.data.grade_d_t_os));
					 	setTimeout(function(){
					 		$('#table-body').html(doT.template(self_tpl.goodsGarbageTpl)({data: data.data.item_spu_d_t_os, path: api_path_config.upload_path}));
					 	},100);
					 	$(".btn_click").attr("disabled", true);
					};
				};
		});
		$("#choose_all").attr("checked", false);
	};
	function PageClick (pageclickednumber) {
		pram.current_page = pageclickednumber
		getData();
	};

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
	
	// 获取商品id
	function getGoodsId(){
		var items = $("input[name='item']:checked");
		var len = items.length;
		var arr = [];
		var item = "";
		for(var i =0; i< len; i++){
			item = items.eq(i).attr("data_id");
			arr.push( { id: item});
		};
		console.log(arr);
		return arr;
	};

	// 上架 下架 加入回收站
	$("#garbage").on("click", function(){
		layer.confirm('确定要执行操作吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			$ajax.ajaxPost('/commodity/spu/recover.do', { item_sku_dtos_str: JSON.stringify(getGoodsId())}, function(data){
				if (data.code == 10000) {
					layer.msg("商品批量恢复到下架成功！");
					$("[name = item]:checkbox").prop("checked", false);
					getData();
				};
			});
		});
	});

});
