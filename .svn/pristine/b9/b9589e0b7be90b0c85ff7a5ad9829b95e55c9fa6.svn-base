$(function(){
	var self_tpl = require('../../module/tpl/goods-tpl.js');
	var $ajax = require('../../common/ajax.js');
	var listPram = {
		current_page: 1,
		page_size: 10,
		pageCount: ""
	};
	getData();
	function getData(){
		$ajax.ajaxPost('/commodity/category/list.do', listPram,function(data){
			listPram.pageCount = Math.ceil(data.data.total_counts / listPram.page_size);
			if (data.code == "10000") {
				$("#pager").pager({ pagenumber: listPram.current_page, pagecount: listPram.pageCount, buttonClickCallback: PageClick});
				$('#table-body').html(doT.template(self_tpl.goodsCategoryTpl)(data.data.item_category_d_t_os));
			};
		});
	};
	function PageClick (pageclickednumber) {
		listPram.current_page = pageclickednumber;
		getData();
	};

	$("#table").on("click",".dele", function(){
		var id = $(this).attr("data-id");
		//询问框
		layer.confirm('确定要删除本条记录吗？', {
			btn: ['确定','取消'] //按钮
		}, function(){
				$ajax.ajaxPost('/commodity/category/remove.do', { id: id},function(data){
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
	
	// 添加编辑的参数
	var pram = {
		id: "",
		category_name: "",
		sort: "",
		type: ""  // 标记编辑和添加
	};
	$("#add").on("click", function(){
		pram = {
			id: "",
			name: "",
			sort: "",
			type: 0
		};
		$('#myModal').modal();
		$("#goods_sort").val("99");
	});
	$("#myModal").on("click", "#btn_save", function(){
		pram.category_name = $("#goods_name").val().trim();
		pram.id = $("#goods_name").attr("data_id");
		pram.sort = $("#goods_sort").val().trim();
		if (pram.sort == "0") {
			layer.msg("排序不能为0！");
			return;
		}
		if (!pram.category_name) {
			layer.msg("请输入品类名！");
			return;
		};
		if (!pram.sort) {
			layer.msg("请输入排序！");
			return;
		};
		if (pram.type == 1) {
			$ajax.ajaxPost('/commodity/category/modify.do', pram, function(data) {
				if (data.success) {
					$('#myModal').modal('hide');
					$("#goods_name").val("");
					$("#goods_sort").val("");
					getData();
				} else if(data.code =="30042"){
					layer.msg(data.msg);
				};
			});
		}else {
			$ajax.ajaxPost('/commodity/category/add.do', pram, function(data) {
				if (data.code == "10000") {
					$('#myModal').modal('hide');
					$("#goods_name").val("");
					$("#goods_sort").val("");
					getData();
				}else if(data.code =="30042"){
					layer.msg(data.msg);
				};
			});
		};
	});
	$("#goods_sort").keyup(function(){
		var value = $("#goods_sort").val().trim();
		var re = /^\d{1,2}$/;
		if(!re.test(value)){
			$("#goods_sort").val("");
		};
	});
	$("#table").on("click", ".edit", function(){
		pram.id = $(this).attr("data-id");
		pram.name = $(this).attr("name");
		pram.sort = $(this).attr("sort");
		pram.type = 1;
		$("#goods_name").val(pram.name);
		$("#goods_name").attr("data_id", pram.id);
		$("#goods_sort").val(pram.sort);
		$('#myModal').modal();
	});
	$("#table").on("click", ".dele", function(){
		var id = $(this).attr("data-id");
		$ajax.post('', id, function(data) {
			if (data.code == "10000") {
				getData();
			};
		});
	});
});
