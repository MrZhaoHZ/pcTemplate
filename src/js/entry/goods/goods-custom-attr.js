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
		//$.post('/goodsCustomSttr.do', listPram,function(data){
		$ajax.post('/item/item_property/get_list.do', {},function(data){

			if (data.code == "10000") {

				$('#table-body').html(doT.template(self_tpl.goodsCustomAttrListTpl)(data.data));
			};
		});
	};
	// 添加编辑的参数
	var pram = {};
	var flag = true; // 判断是编辑还是新建 true是新建
	$("#add_attr").on("click", function(){
		$("#value_type").removeAttr("disabled");
		id = "";
		$('#myModal').modal();
		$("#attr_name").val("");
		$("#attr_info").val("");
		$("#enumeration_string").val("");
		$("#data_min").val("");
		$("#data_max").val("");
		pram = {};
		if(flag){
			delete pram.id;
		};
		flag = true;
		$('#value_type').html(doT.template(self_tpl.goodsAttrTypeTpl)(""));
		$("#value_type option[value=4]").attr("selected", true);
		$("#value_range option").attr("selected", false);
		var selectDom = $("#value_type option").eq(3);
		//$("#value_type").val("");
		
		selectChange(selectDom);
	});
	$("#myModal").on("change", "#value_range", function(){
		selectChange(this);
	});
	function selectChange(_this){
		var data_attr = $(_this).val();
		$(".value_type").css("display","none");
		if(data_attr == 2){
			//$("#value_range").val("枚举类型");
			$(".value_type:first").css("display","block");
			
		}else if(data_attr == 1){
			//$("#value_range").val("数值类型");
			$(".value_type:last").css("display","block");
		}
	}
	function checkNum (num){
		if(!(/^\d{0,10}$/.test(num))){ 
	 		return false;
	 	}else {
	 		return true;
	 	}
	};
	function checkFloatNum (num){
		var re = /^\d{1,6}(\.(\d{1,2})?)?$/;
		if(!re.test(num)){
			return false;
		}else{
			return true;
		}
	}
	$("#myModal").on("click", "#btn_save", function(){
		pram.prop_name = $("#attr_name").val().trim();
		pram.descri = $("#attr_info").val().trim();
		pram.data_type = $("#value_type").val();
		pram.range_type = $("#value_range").val();
		if (!pram.prop_name) {
			layer.msg("请输入自定义属性名称！");
			return;
		};
		if (pram.range_type == 0) {
			layer.msg("请选择范围！");
			return;
		};
		if(pram.range_type == 2){
			pram.enum_value =  $("#enumeration_string").val();
			if (!pram.enum_value) {
				layer.msg("枚举值不能为空！");
				return;
			};
			if(pram.value_max){
				delete pram.value_max;
				delete pram.value_min;
			};
		}else if(pram.range_type == 1){
			if(pram.enum_value){
				delete pram.enum_value;
			};
			pram.value_max = $("#data_max").val().trim();
			pram.value_min = $("#data_min").val().trim();
			if(!pram.value_min || !pram.value_max){
				layer.msg("请输入数值区间！");
				return;
			};
		};
		if (!pram.descri) {
			layer.msg("请输入品简介！");
			return;
		};
		if (flag) { // 新建
			if(pram.id){
				delete pram.id;
			}
			$ajax.ajaxPost('/item/item_property/save.do', pram, function(data) {
				if (data.success) {
					$('#myModal').modal('hide');
					$("#goods_name").val("");
					$("#goods_sort").val("");
					getData();
				} else if(data.code =="30079" || data.code == "30079" || data.code == "30091" || data.code == "30092" || data.code == "30087" || data.code == "30088" || data.code == "30094" || data.code =="30094"){
					layer.msg(data.msg);
				};
			});
		}else { // 编辑
			pram.id = id;
			$ajax.ajaxPost('/item/item_property/modify.do ', pram, function(data) {
				if (data.code == "10000") {
					$('#myModal').modal('hide');
					$("#goods_name").val("");
					$("#goods_sort").val("");
					getData();
				}else if(data.code =="30042" || data.code == "30089" || data.code == "30085" || data.code =="30086" || data.code =="30089" || data.code =="30091" || data.code =="30092" || data.code == "30088" || data.code == "30094"){
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
	var id = "";
	$("#table").on("click", ".edit", function(){
		$('#myModal').modal();
		flag = false;
		id = $(this).attr("data-id");
		var isUsing = $(this).attr("data_is_using");
		if(isUsing == 1){// 如果此属性正在被使用，不能编辑名称！
			$("#attr_name").attr("disabled", "disabled");
		}else if(isUsing == 2){
			$("#attr_name").attr("disabled", "");
		};
		var editId = $(this).attr("data-id");
		$("#value_type").attr("disabled", true);
		$('#value_type').html(doT.template(self_tpl.goodsAttrTypeTpl)(""));
		$ajax.post('/item/item_property/get.do', {"id": editId},function(data){
		//$ajax.post('', id, function(data) {
			if (data.success == true) {
				$("#attr_name").val(data.data.prop_name);
				$("#attr_info").val(data.data.descri);
				$("#value_type option").attr("selected",false);
				$("#value_type option[value=" + data.data.data_type + "]").attr("selected", true);
				$("#value_range option[value=" + data.data.range_type + "]").attr("selected", true);
				var selectDom = $("#value_type option").eq(data.data.data_type -1);
				selectChange(selectDom);
				var tmpType = data.data.range_type;
				$(".value_type").css("display","none");
				if(tmpType == 2){
					$(".value_type:first").css("display","block");
					$("#data_max").val("");
					$("#data_min").val("");
					$("#enumeration_string").val(data.data.enum_value);
				}else if(tmpType == 1){
					$(".value_type:last").css("display","block");
					$("#data_max").val(data.data.value_max);
					$("#data_min").val(data.data.value_min);
					$("#enumeration_string").val("");
				}
				
			};
		});
	});
	$("#table").on("click", ".dele", function(){
		var isUsing = $(this).attr("data_is_using");
		if(isUsing == 1){// 判断此属性是否被使用
			layer.msg("此属性被商品使用，不能删除！");
			return;
		}
		var id = $(this).attr("data-id");
		layer.confirm('确定要删除本条记录吗？', {
			btn: ['确定','取消'] //按钮
		}, function(){
			$ajax.post('/item/item_property/remove.do', {"id": id}, function(data) {
				if (data.success) {
					layer.msg("操作成功！")
					getData();
				}else if(data.code == "30090"){
					layer.msg(data.msg);
				};
			});
		});
		
	});
});
