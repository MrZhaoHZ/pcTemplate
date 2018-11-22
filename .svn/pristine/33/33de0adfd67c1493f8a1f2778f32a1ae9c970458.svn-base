/*
 
 *  DELIVER_TYPE("sx001","发货类型"),

        UNIT("sx002","单位"),

        COLOR("sx003","颜色"),

        SIZE("sx004","尺寸"),

        BRAND("sx005","品牌"),

        STYLE("sx006","风格"),

        MATERIAL("sx007","材质"),

        VOLUME("sx008","容量"),

        PLACE("sx009","产地"),

        SERIES("sx010","系列");

 * 
 * */
$(function(){
	var api_path_config = require('../../../../tmp_path_config.js');
	var self_tpl = require('../../module/tpl/goods-tpl.js');
	var $ajax = require('../../common/ajax.js');
	var httpUrl = require('../../common/http-url.js');
	var imgUpload = require('../../common/img-upload.js');
	var localStorage =  require('../../common/localStorageNoJson.js');
	var spuName = localStorage.getItem("spu_name");
		$("#spu_name").text(spuName);
	var spu_id = httpUrl.getQueryString('spu_id');
	var type = httpUrl.getQueryString('type'); // type == 1新建  ==2编辑  3：复制
	var pre_spu_id = httpUrl.getQueryString('pre_spu_id');
	var isGarbage = httpUrl.getQueryString('isGarbage');
	var isEdit = false;
	var editProData = [];
	var costomArr = [];
	if(type == 2){ // 2 编辑 
		isEdit = true;
		getSkuData();
	} else if(type == 1){ // 1 新建
		$("#table").html(doT.template(self_tpl.newTable)());
		getUnitAttr(); // 添加单位属性值
	}else if(type == 3){ // 3：复制
		isEdit = true;
		getSkuData();
	};
	var count = 0; // 只有count == 0 并且是新建的时候才不可点击
	var isNewStatus = "" // ;
	var editAndCopyData = null; // 存储数据，用来给单位属性设置默认值
	function getSkuData(){
		var url = "/commodity/sku/list.do";
		if(type == 3 && isGarbage == 1){
			url = "/commodity/sku/copy.do";
		};
		var spuId = spu_id;
		if(type == 3){
			spuId = pre_spu_id
		}
		$ajax.ajaxPost(url, {"spu_id": spuId }, function(data) {
			if (data.success) {
				data.data.path = api_path_config.upload_path;
				if(!data.data.item_sku_d_t_o_list){
					layer.msg("本商品没有对应的sku！");
					$("#table").html(doT.template(self_tpl.newTable)());
					getUnitAttr(); // 添加单位属性值
					return;
				};
				getUnitAttr(); // 添加单位属性值
				if(data.data.item_sku_d_t_o_list.length == 0){ // 编辑新建的时候没有数据的展示
					$("#table").html(doT.template(self_tpl.newTable)());
					return;
				}
				// 编辑的时候有数据展示
				editAndCopyData = data.data.item_sku_d_t_o_list;
				isNewStatus = data.data.item_sku_d_t_o_list[0].item_status; // 0-新建 1-上架2-下架
				$('#table').html(doT.template(self_tpl.copyAndEditTable)({ "data":data.data, "isNew": isNewStatus}));
				 if(type == 3){
					$(".sku_sn").val("");
				};
				if(isEdit){// 编辑的时候
					deltCostomAttr(data.data.spu_property_v_o_list);
					if (data.data.spu_property_v_o_list.length >0) { // 有自定义属性的时候
						for(var i=0; i<data.data.item_sku_d_t_o_list.length; i++){ // 吧自定义属添加到一个数组里边
							editProData.push(data.data.item_sku_d_t_o_list[i].prop_map);
						};
					};
					
				};
				$(".btn_click").attr("disabled", true);
			};
		});
	};
	// 编辑页面  吧自定义属性列表里已经在本商品中添加的自定义属性
	function deltCostomAttr(data){
		for(var i=0; i< data.length; i++){
			$("#attr_list option[data_id=" + data[i].property_id +"]").remove();
		};
		$("#attr_list option[data_id=2]").remove(); // 删除id== 2 的属性（单位） 
	}
	// 获取自定义属性列表
	getAttrList();
	function reloadFun(){
		window.location.reload();
	};
	function getAttrList(){
		//$.post('/goodsGoodsList.do', {}, function(data) {
		var proData = ""
		$ajax.ajaxPost('/item/item_property/get_list.do', {}, function(data) {
			if (data.success) {
				$('#attr_list').html(doT.template(self_tpl.customAttrTpl)(data.data));
				setTimeout(function(){
					editAttr();
				},500);
			}
		});
	};

	// 获取属性列表
//	function getAttrList(dom){
//		$.post('/goodsGoodsList.do', {}, function(data) {
//		//$ajax.ajaxPost('/item/item_property/save.do', pram, function(data) {
//			if (data.success) {
//				dom.html(doT.template(self_tpl.goodsAttrListTpl)(data.data.list));
//			}
//		});
//	};
//	
	var isSnRepeat = {};
	$("body").on("blur", ".sku_sn", function(){
		isSnRepeat = {};
		_this = this;
		if(type == 2 || type == 3){
			if($(_this).attr("data_sn") == $(_this).val().trim()){
				return;
			};
		}else if(type == 1){ // 新建状态
		};
		if(newStatusCheckSkuSn(_this) == 1){ // 有重复的
			return;
		};
		$ajax.ajaxPost('/commodity/sku/checkSkuSn.do', {"sku_sn": $(_this).val().trim()}, function(data) {
			if (data.success) {
				isSnRepeat = {};
			}else if(data.code == "40020"){
				isSnRepeat.msg = data.msg;
				isSnRepeat.dom = _this;
				layer.msg(data.msg);
				$(_this).val("");
			}
		});
	});
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
	// 单个上架下架
	$("body").on("click",".on_sell", function(){ // 上架
		var id = $(this).attr("data_id");
		var arr = [];
		arr.push({"id": id});
		layer.confirm('确定要执行操作吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			var id = 
			$ajax.ajaxPost('/commodity/sku/on_sale.do', { item_sku_dtos_str: JSON.stringify(arr)}, function(data){
				if (data.code == 10000) {
					layer.msg("该商品上架成功！");
					$("[name = item]:checkbox").prop("checked", false);
					getSkuData();
					reloadFun();
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
			$ajax.ajaxPost('/commodity/sku/remove.do', { item_sku_dtos_str: JSON.stringify(arr)}, function(data){
				if (data.code == 10000) {
					layer.msg("操作成功！");
					getSkuData();
					reloadFun();
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
			$ajax.ajaxPost('/commodity/sku/sold_out.do', { item_sku_dtos_str: JSON.stringify(arr)}, function(data){
				if (data.code == 10000) {
					layer.msg("该商品下架成功！");
					$("[name = item]:checkbox").prop("checked", false);
					getSkuData();
					reloadFun();
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

	$("#grounding").on("click", function(){
		layer.confirm('确定要执行操作吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			$ajax.ajaxPost('/commodity/sku/on_sale.do', { item_sku_dtos_str: JSON.stringify(getGoodsId().arr)}, function(data){
				if (data.code == 10000) {
					layer.msg("商品批量上架成功！");
					$("[name = item]:checkbox").prop("checked", false);
					getSkuData();
					reloadFun();
				}
			});
		});
	});
	$("#undercarriage").on("click", function(){
		layer.confirm('确定要执行操作吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			$ajax.ajaxPost('/commodity/sku/sold_out.do', { item_sku_dtos_str: JSON.stringify(getGoodsId().arr)}, function(data){
				if (data.code == 10000) {
					layer.msg("商品批量下架成功！");
					$("[name = item]:checkbox").prop("checked", false);
					getSkuData();
					reloadFun();
				}
			});
		});
	});
	// // 检查本spu内的商品编码是否有重复  _this是失去焦点的
	function newStatusCheckSkuSn(_this){
		var allSkuSnDom = $(".sku_sn");
		var currentVal = $(_this).val().trim();
		for(var i=0; i<allSkuSnDom.length; i++){
			if(currentVal == allSkuSnDom.eq(i).val().trim()){
				if(i == $(".sku_sn").index(_this)){
					continue;
				}
				isSnRepeat.msg = "本商品内有商品编码重复！";
				layer.msg(isSnRepeat.msg);
				return 1;
			}
		}
	};
	// 编辑的时候添加自定义属性   利用添加一列的函数添加。
	function editAttr(){
		var thDom = $(".add_th");
		if(thDom.length == 0){

			if (isNewStatus == 0 && type !=3) {// 新建

			}else if(count == 0 && type !=3){ // 除新建状态都不能编辑  图片也不能换  需要在添加行列的时候做相应处理
				$("#table_body input, #table_body select").attr("disabled",true); 
				$("#table_body input[name=item]").attr("disabled",false);
				$("#table").off("click", ".add_img_dom");
			}else if(type == 3){
				$(".remove").css("display", "");
			};

			return;
		};
		for(var i=0; i< thDom.length; i++){
			var dataType = thDom.eq(i).attr("data_type");
			var id = thDom.eq(i).attr("data_id");
			var name = thDom.eq(i).text();
			if(dataType == 1){ // 数值类型
				addAttrCol(insertDataDom, id, false, name); 
			}else if(dataType == 2){ // 枚举类型
				$(".inser_td_dom").before(" <td class='add_td'><select class='form-control options custom_pro'></select></td>");
				var insertDataDom = $(".inser_td_dom").prev().find("select");
				addAttrCol(insertDataDom, id, true, name);
			};
		};
	};
	$("#table").on("click", ".add_img_dom", addImgFun);

	// 编辑的时候设置自定义属性的值。
	function setSelectData(editProData){
		var trDom = $("#table_body tr");
		var trDomLength = trDom.length;
		for(var i=0; i< trDomLength; i++){
			tdDom = trDom.eq(i).find(".add_td");
			for(var j=0; j<tdDom.length; j++){

				if(tdDom.eq(j).find("select").length){// 枚举值的时候显示的select     $(".selector").find("option[text='pxx']").attr("selected",true);
					var id = tdDom.eq(j).find("select option:last").attr("data_id");
					var optionDom = tdDom.eq(j).find("select option");
					for(var k=0;k< optionDom.length;k++){
						if(optionDom.eq(k).text() == editProData[i][id]){
							optionDom.eq(k).attr("selected",true);
						}
					}
				}else if(tdDom.eq(j).find("input").length){ // 数值区间的时候显示的input
					var id = tdDom.eq(j).find("input").attr("data_id");
					tdDom.eq(j).find("input").val(editProData[i][id]);
				}
			};
		};
		if (isNewStatus == 0 && type !=3) {// 新建

		}else if(count == 0 && type !=3){ // 除新建状态都不能编辑  图片也不能换  需要在添加行列的时候做相应处理
			$("#table_body input, #table_body select").attr("disabled",true); 
			$("#table").off("click", ".add_img_dom");
		}else if(type == 3){
			$(".remove").css("display", "");
		};
		count++;
	};
	function getUnitAttr(){
		$ajax.ajaxPost('/item/item_property/get_unit.do', {"id": 2}, function(data) {
			if (data.success) {
				$("#table_body .unitTd select").html(doT.template(self_tpl.goodsUnitList)(data.data));
				setTimeout(function(){
					$("#attr_list option[data_id=2]").remove();
				},50)
				if(type == 2 || type == 3){
					setUnitData();
				};
			};
		});
	};
	function setUnitData(){
		//  editAndCopyData 就是每个sku的信息，用来设置单位的属性值
		var unitDom = $("#table_body .unitTd"); 
		for(var i=0; i<unitDom.length; i++){
			var optionDon = unitDom.eq(i).find("option")
			for(var j=0; j<optionDon.length; j++){ // 取出每个option
				if(optionDon.eq(j).text() == editAndCopyData[i].unit){
					optionDon.eq(j).attr("selected",true);
				}

			}
		};
	};
	function addAttrCol(dom, id, flag, name){
		//$.post('/goodsGoodsList.do', {}, function(data) {
		$ajax.ajaxPost('/item/item_property/get_propertys.do', {"id": id}, function(data) {
			if (data.success) {
				if(flag){ // 枚举
					dom.html(doT.template(self_tpl.goodsAttrListTpl)({ "data":data.data,"id": id}));
				}else{// 数值类型
					$(".inser_td_dom").before("<td class='add_td'><input data_name=" + name +" maxlength='10' data_min=" + data.data[0].value_min + " data_max=" + data.data[0].value_max + " data_id=" + id +" placeholder="  + data.data[0].value_min + "~" + data.data[0].value_max + " class='form-control custom_pro'></td>");
				};
				if(isEdit){
					setTimeout(function(){
						setSelectData(editProData);
					}, 500);
				};
			};
		});
	};
	// 添加一列
	$("#add_attr").on("click", function(){
		var val = $("#attr_list").val();
		var id = $("#attr_list option:selected").attr("data_id");
		var dataType = $("#attr_list option:selected").attr("data_type");
		if(!id){
			layer.msg("请先选择自定义属性！");
			return;
		}
		var name = $("#attr_list option:selected").val();
		$("#attr_list option:selected").remove();
		var length = parseInt($(".specifications").attr("colspan")) + 1;
		$(".specifications").attr("colspan",length);
		$(".second_tr").append("<th class='add_th' data_id=" + id +" data_type=" + dataType + "><span class='custom_attr'>" + val + "</span><span class='dele_th'>X</span></th>");
		if(dataType == 1){ // 数值类型
			addAttrCol(insertDataDom, id, false, name); 
		}else if(dataType == 2){ // 枚举类型
			$(".inser_td_dom").before(" <td class='add_td'><select class='form-control options custom_pro'></select></td>");
			var insertDataDom = $(".inser_td_dom").prev().find("select");
			addAttrCol(insertDataDom, id, true, name);
		};
		
	});
	
	// 添加一行
	$("#add_row").on("click", function(){
		var trLength =  $("#table_body tr").length;
		if(trLength == 1 && $("#table_body tr").css("display") == "none"){
			$("#table_body tr:last").css("display", "");
			return;
		}
		var newObject = $("#table_body tr:last").clone(true);
		$("#table_body").append(newObject);
		clearLastTrData();
	});

	// 清楚表格中最后一行的数据
	function clearLastTrData(){
		var lastTr = $("#table_body tr:last");
		lastTr.find(".sku_img").removeAttr("src");
		lastTr.find(".sku_img").removeAttr("data_url");
		lastTr.find("input").val("");
		lastTr.find("option").attr("selected", false);
		lastTr.find(".remove").attr("data_statu", "0");
		lastTr.find(".remove").css("display", "").removeAttr("data_id");
		lastTr.find(".on_sell,.off_sell").remove();
		lastTr.find("input[name=item]").removeAttr("data_id");

		// 在编辑的时候添加一行需要在新加的一行上绑定上事件 清除不可输入控制
		lastTr.find("input").attr("disabled",false);
		lastTr.find("select").attr("disabled",false); 
		lastTr.find(".add_img_dom").on("click", addImgFun);
	};
	
	// 删除一列  需要网络请求 判断是否能删除
	$("#table").on("click", ".dele_th", function(){
		var removRthDom = $(this).parents("th");
		var content = removRthDom.find(".custom_attr").text();
		var id = removRthDom.attr("data_id");
		var dataType = removRthDom.attr("data_type");
		var thLength = parseInt($(".specifications").attr("colspan")) - 1;
		$(".specifications").attr("colspan",thLength);
		var index = $(".second_tr th").index(removRthDom) + 3;
		var length = $("table tr").length;
		removRthDom.remove();
		$("#attr_list").append("<option data_id=" + id +" data_type=" + dataType + ">" + content +"</option>");
		for(var i = 0; i<length; i++){
			$("#table tr").eq(i).find('td').eq(index).remove();
		};
	});

	// 删除一行  需要网络请求 判断是否能删除
	$("#table").on("click", ".remove", function(){
		var index = $("#table .remove").index(this);
		var _this = this;
		var sku_id = $(_this).attr("data_id");
		if(!sku_id){
			$("#table #table_body tr").eq(index).remove();
			layer.msg("操作成功！");
			return;
		};
		var statu = $(this).attr("data_statu");
		if(statu == 0){ // 0 新建 1 上架 2 下架
			var trLength = $("#table_body tr").length;
			if(trLength == 1){
				$("#table_body tr:last").css("display", "none");
				clearLastTrData();
				return;
			};
			layer.confirm('确定要进行此操作？', {
				btn: ['确定','取消'] //按钮
			}, function(){
				$ajax.ajaxPost('/commodity/sku/removeItemSku.do', {"sku_id": sku_id, "spu_id": spu_id}, function(data) {
					if (data.success) {
						$("#table #table_body tr").eq(index).remove();
						layer.msg("操作成功！");
					};
				});
				
			});
		}else{
			layer.msg("上架和下架的商品不能删除");
		}
		
	});

	// 添加图片
	function addImgFun(){
		var _this = this;
		imgUpload.init(function(value){
			var realValue = api_path_config.upload_path + value;
			$(_this).find(".sku_img").attr("src", realValue);
			$(_this).find(".sku_img").attr("data_url", value);
		},false);
	};
	// 保存
	var isOver = 1;
	$("#sku_save").on("click", function(){
		if(isSnRepeat.msg){
			if(isSnRepeat.dom){
				$(isSnRepeat.dom).val("");
			};
			layer.msg(isSnRepeat.msg);
			return;
		}
		isOver = 1;
		pram = {};	
		if(!spu_name){
			layer.msg("每个商品名不能为空！");
			return;
		};	
		var trLength = $("#table_body tr").length;
		if(trLength == 1 && $("#table_body tr").css("display") == "none"){
			layer.msg("至少添加一行商品！")
			return;
		}
		collectData();
		if(skuIsRepeat == 1){
			return;
		}
		if(isOver == 2){
			return;
		}
		var tmp = JSON.stringify(pram.item_sku_dtos_str);
		if(type ==1 || type== 3){ // 1 新建 3 复制
			$ajax.ajaxPost('/commodity/sku/add.do', {"spu_id": spu_id, "item_sku_dtos_str": tmp, "spu_name": spuName}, function(data) {
				if (data.success) {
					window.location.href = "goods-management.html";
				}else if(data.code == "40020"){
					layer.msg(data.msg);
				}
			});
		}else if(type == 2){ // 编辑
			$ajax.ajaxPost('/commodity/sku/modify.do', {"spu_id": spu_id, "item_sku_dtos_str": tmp, "spu_name": spuName}, function(data) {
				if (data.success) {
					window.location.href = "goods-management.html";
				}else if(data.code == "40020"){
					layer.msg(data.msg);
				}
			});
		};
	});
	
	var pram = {};
	var skuIsRepeat = 0;
	// 收集数据
	function collectData(){
		skuIsRepeat = 0;
		var lists= [];
		var trLength = $("#table_body tr").length;
		if(trLength == 1 && $("#table_body tr").css("display") == "none"){
			//layer.msg("至少添加一行商品！")
			isOver = 2;
			//return;
		}
		for(var i = 0; i<trLength; i++){
			var trDom = $("#table_body tr").eq(i);
			var skuPro = {};
			
			skuPro.sku_sn = trDom.find(".sku_sn").val().trim();
			if(!skuPro.sku_sn){
				layer.msg("商品编码不能为空");
				isOver = 2;
				return;
			};
			var gre = /^[0-9a-zA-Z]*$/g;
			if(!gre.test(skuPro.sku_sn)){
				layer.msg("商品编码只能输入数字和字母！");
				isOver = 2;
				return;
			};
			skuPro.image_uri =  trDom.find(".sku_img").attr("data_url");
			if(!skuPro.image_uri){
				layer.msg("请选择图片！");
				isOver = 2;
				return;
			};
			if(trDom.find(".remove").attr("data_id")){
				skuPro.id = trDom.find(".remove").attr("data_id");
			};
			skuPro.sku_market_price =trDom.find(".market_price").val().trim();
			if(!skuPro.sku_market_price){
				layer.msg("请输入市场价！");
				isOver = 2;
				return;
			};
			if(!checkNum(skuPro.sku_market_price)){
				layer.msg("价格必须为数字！");
				isOver = 2;
				return;
			};
			skuPro.sku_wechat_price = trDom.find(".wechat_price").val().trim();
			if(!skuPro.sku_wechat_price){
				layer.msg("请输入微信价！");
				isOver = 2;
				return;
			};
			if(!checkNum(skuPro.sku_wechat_price)){
				layer.msg("价格必须为数字！");
				isOver = 2;
				return;
			};
			skuPro.unit = trDom.find(".unit").val();
			if(skuPro.unit == "请选择属性"){
				layer.msg("请选择单位！");
				isOver = 2;
				return;
			};
			skuPro.deliver_type = trDom.find(".deliver_type").val();
			if(skuPro.deliver_type === "请选择属性"){
				layer.msg("请选择发货方！");
				isOver = 2;
				return;
			};
			if(trDom.find("input[name=item]").attr("data_id")){
				skuPro.id = trDom.find("input[name=item]").attr("data_id");
			};
			var customDom = trDom.find(".custom_pro");
			var customProLen = customDom.length;
			var prop_map  = {};
			for(var j=0;j< customProLen; j++){
				// 属性的id： 属性值的id
				if(customDom.eq(j).hasClass("options")){
					prop_map[customDom.eq(j).find('option:selected').attr("data_id")] = customDom.eq(j).val();
					if( !customDom.eq(j).find('option:selected').attr("data_id")){
						layer.msg("自定义属性不能为空！");
						isOver = 2;
						isOver = 2;
						return;
					};
				}else{
					prop_map[customDom.eq(j).attr("data_id")] = customDom.eq(j).val();
					if(!customDom.eq(j).val()){
						layer.msg("自定义属性不能为空！");
						isOver = 2;
						return;
					}else if(!checkNum(customDom.eq(j).val())){
						layer.msg("数值型自定义属性必须为数字！");
						isOver = 2;
						return;
					};
					var name = customDom.eq(j).attr("data_name");
					var data_min = parseInt(customDom.eq(j).attr("data_min"));
					var data_max = parseInt(customDom.eq(j).attr("data_max"));
					var value = parseInt(customDom.eq(j).val());
					if(value < data_min || value > data_max){
						layer.msg('表格中第 "' + i + '" 行的 "' + name + ' "自定义属性的值超出范围！');
						isOver = 2;
						return;
					}
				}
				//skuPro.prop_map = skuPro.prop_map + "," + customDom.eq(j).val();
			};
			skuPro.prop_map = prop_map;
			lists.push(skuPro);
			
		};

		if(checkAllSkuIsRepeat() == 1){ // 如果返回是1就表示有重复的sku属性。
			layer.msg("不允许所有属性（单位、发货方和自定义属性）都相同的商品存在！",{time: 5000});
			skuIsRepeat = 1;
		};
		pram.item_sku_dtos_str = lists;
		console.log(pram)
	};
	function checkAllSkuIsRepeat(){
		var trDom = $("#table_body tr");
		var skusArr = [];
		for(var i=0;i<trDom.length; i++){
			var selectDon = trDom.eq(i).find("select");
			var skuAttrString = "";
			for(var j=0; j<selectDon.length; j++){
				skuAttrString = skuAttrString + selectDon.eq(j).val();
			};
			skusArr.push(skuAttrString);

		};
		if(arrNoRepeat(skusArr) != skusArr.length){ // 有重复的
			return 1;
		}
	};
	// 数组去重
	function arrNoRepeat(arr) { // 返回数组的长度
		var result = []
		for(var i = 0; i < arr.length; i++) {
			if(result.indexOf(arr[i]) == -1) {
				result.push(arr[i])
			}
		}
		return result.length;
	}
	function checkNum (num){
		var re = /^\d+(?:\.\d{1,2})?$/;
		if(!re.test(num)){
			return false;
		}else{
			return true;
		}
	}
});
