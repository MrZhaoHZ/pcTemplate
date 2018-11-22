$(function(){
	var api_path_config = require('../../../../tmp_path_config.js');
	var imgUpload = require('../../common/img-upload.js');
	var $ajax = require('../../common/ajax.js');
	var httpUrl = require('../../common/http-url.js');
	var localStorage = require('../../common/localStorageNoJson.js');
	var sku_id = httpUrl.getQueryString('sku_id');
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
	$("#goods_sort").val("99");
	// 图片上传
	if ($(".per_img ").length == 0) {
		$("#add_img_div").on("click", function(){
			imgUpload.init(function(value){
				var realValue = api_path_config.upload_path + value;
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
			$ajax.ajaxPost('/commodity/spu/add.do', pram,function(data){
				if (data.success) {
					if(localStorage.getItem("spu_name")){
						localStorage.removeItem("spu_name");
						localStorage.setItem("spu_name", data.data.spu_name)
					}else{
						localStorage.setItem("spu_name", data.data.spu_name)
					}
					window.location.href="goods-sku.html?spu_id=" + data.data.id + "&type=1"; // type == 1
				};
			});
		}else{
			layer.msg(msg);
		}
	});
	// 收集数据
	var msg = "";
	var pram = {};
	function collectData(){
		pram = {};
		msg = "";
		pram.spu_name = $("#goods_name").val().trim();
		if (!pram.spu_name) {
			msg = "请输入商品名称！";
			return;
		};
		pram.remarks = $("#info").val();
		pram.category_id = $("#goods_cate").find("option:selected").attr("value");
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
