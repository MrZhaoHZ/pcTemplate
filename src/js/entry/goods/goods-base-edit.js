$(function(){
	var imgUpload = require('../../common/img-upload.js');
	var $ajax = require('../../common/ajax.js');
	var httpUrl = require('../../common/http-url.js');
	var api_path_config = require('../../../../tmp_path_config.js');
	var localStorage = require('../../common/localStorageNoJson.js');
	var sku_id = httpUrl.getQueryString('sku_id');
	var isGarbage = httpUrl.getQueryString('isGarbage');
	var type = httpUrl.getQueryString('type');
	var tpl = '{{~ it:item:index }}\
				<option value="{{= item.id}}">{{= item.category_name}}</option>\
		  {{~}}';
	function cate() {
		$ajax.ajaxPost('/commodity/category/list.do',{},function(data){
			if (data.code == "10000") {
				$('#goods_cate').append(doT.template(tpl)(data.data.item_category_d_t_os));
				getData();
			};
		});
	};
	cate();
	function getData(){
		if(type == "0"){ // 编辑
			$ajax.ajaxPost('/commodity/spu/get_spu.do', { spu_id : sku_id},function(data){
				if (data.code == "10000") {
					setData(data.data);
				};
			});
		}else if(type == "1"){ // a复制
			$ajax.ajaxPost('/commodity/spu/copy.do', { spu_id : sku_id},function(data){
				if (data.code == "10000") {
					setData(data.data);
				};
			});
		};
		
	};
	var content = "";
	// 填充数据
	function setData(data){
		$("#goods_name").val(data.spu_name);
		$("#info").val(data.remarks);
		$("#goods_cate").val(data.category_id);
		new_obj = $('<div class="per_img ">'+
					'	<span class="icon">X</span>'+
					'</div>');
		var background = 'url(' + api_path_config.upload_path + data.image_uri +') 0 0 no-repeat'
		new_obj.css({
			'background': background,
			'background-size': 'contain'
		});
		new_obj.attr('data_img', data.image_uri);
    	$(".add_box").before($(new_obj));
    	if(data.item_status !=0 && type == "0"){
    		$("#goods_name, #info, #goods_cate").attr("disabled", true);
    		$(".per_img span").remove();
    		$("#add_img_div").off("click");
    	};
	};

	// 图片上传
	if ($(".per_img ").length == 0) {
		$("#add_img_div").on("click", function(){
			imgUpload.init(function(value){
				var realValue = api_path_config.upload_path  + value;
				new_obj = $('<div class="per_img ">'+
							'	<span class="icon">X</span>'+
							'</div>');
				var url = 'url(' + realValue + ') 0 0 no-repeat';
				new_obj.css({
					'background': url,
					'background-size': 'contain'
				});
				new_obj.attr('data_img', value);
				$(".per_img").remove();
	        	$(".add_box").before($(new_obj));


			},false);
		});
	}
	
	$(".user-container").on("click", ".per_img .icon", function(){
		$(this).parent().remove();
	});

	// 下一步
	$("#next").on("click", function(){
		collectData();
		if(!msg){
			var spu_name = $("#goods_name").val().trim();
			if(localStorage.getItem("spu_name")){
				localStorage.removeItem("spu_name");
				localStorage.setItem("spu_name", spu_name)
			}else{
				localStorage.setItem("spu_name", spu_name)
			};
			if(type == 0){ // 用type来区分编辑和复制
				$ajax.ajaxPost('/commodity/spu/modify.do', pram,function(data){
					if (data.code == "10000") {
						window.location.href="goods-sku.html?spu_id=" + sku_id + "&type=2"; // type == 2 编辑 
					};
				});
			}else if(type == 1){ // 复制
				$ajax.ajaxPost('/commodity/spu/add.do', pram,function(data){
					if (data.success) {
						window.location.href="goods-sku.html?spu_id=" + data.data.id + "&type=3&pre_spu_id=" + sku_id + "&isGarbage=" + isGarbage; // type ==3 复制 在sku里边就相当于新建
					};
				});
			}
		}else{
			layer.msg(msg);
		}
	});
	// 收集数据
	var msg = "";
	var pram = {};
	function collectData(){
		pram.spu_id = sku_id;
		msg = "";
		pram.spu_name = $("#goods_name").val().trim();
		if (!pram.spu_name) {
			msg = "请输入商品名称！";
			return;
		};
		pram.remarks = $("#info").val();
		pram.category_id = $("#goods_cate").val().trim();
		if (!pram.category_id) {
			msg = "请选择所属品类！";
			return;
		};
		var goods_pic = [];
		var arr = $(".per_img");
		for(var i=0; i < arr.length; i++){
			goods_pic.push(arr.eq(i).attr("data_img"));
		};
		//pram.image_uri = goods_pic;
		pram.image_uri = $(".per_img").attr("data_img");
		if (!pram.image_uri) {
			msg = "请选择商品图片！";
			return;
		};
		return pram;
	}
});
