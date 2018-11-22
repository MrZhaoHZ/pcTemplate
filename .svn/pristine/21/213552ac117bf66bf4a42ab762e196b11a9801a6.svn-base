$(function(){
	var self_tpl = require('../../module/tpl/goods-tpl.js');
	var $ajax = require('../../common/ajax.js');
	var httpUrl = require('../../common/http-url.js');
	var sku_id = httpUrl.getQueryString('sku_id');
	//var userId = httpURL.getQueryString('user_id');
	var tableHead ='<thead>\
						<th></th>\
						{{~ it:item:index }}\
					    	<th>{{= item.name}}</th>\
					    {{~}}\
					</thead>\
					<tbody id="table-body">\
						<tr id="price">\
					    	<td>价格</td>\
					    	{{~ it:item:index }}\
					    		<td><input type="text" data_index="{{= index + 1}}" class="form-control user-input price" /></td>\
					    	{{~}}\
					    </tr>\
					    <tr id="start_num">\
					    	<td>起订量</td>\
					    	{{~ it:item:index }}\
					    		<td><input type="text" placeholder="1" class="form-control user-input num" /></td>\
					   		{{~}}\
					    </tr>\
					 	<tr id="day_num">\
					    	<td>每天限量</td>\
					    	{{~ it:item:index }}\
					    		<td><input type="text" class="form-control user-input num" /></td>\
					    	{{~}}\
						</tr>\
						<tr id="week_num">\
					    	<td>每周限量</td>\
					    	{{~ it:item:index }}\
					    		<td><input type="text" class="form-control user-input num" /></td>\
					    	{{~}}\
					    </tr>\
					    <tr id="month_num">\
					    	<td>每月限量</td>\
					    	{{~ it:item:index }}\
					    		<td><input type="text" class="form-control user-input num" /></td>\
					    	{{~}}\
					    </tr>\
					    <tr id="order_info">\
					    	<td>下单说明</td>\
					    	{{~ it:item:index }}\
					    		<td><textarea class="form-control" maxlength="100" placeholder="最多输入100个字符"></textarea></td>\
					    	{{~}}\
					    </tr>\
					</tbody>';



	// var tpl = '{{~ it.list:item:index }}\
	// 			<option value="{{= item.id}}">{{= item.name}}</option>\
	// 	  {{~}}';
	// function level() {
	// 	$ajax.post('/getLevel.do',null,function(data){
	// 		$('#postage-tpl').html(doT.template(tpl)(data.data))
	// 	});
	// };
	// var parm = {
	// 	nickName: "",
	// 	name: "",
	// 	phone: "",
	// 	weChat: "",
	// 	identity_num: "",
	// 	level: ""
	// };
	
	// $("#user-level").change(function(){
	// 	$(".postage").css("display", "none");
	// 	var index = $(this).val();
	// 	if(index == 1){
	// 		$("#fixed-postage").css("display", "inline-block");
	// 	} else if(index == 2){
	// 		$("#postage-tpl").css("display", "inline-block");
	// 		level();
	// 	}
	// });
	getTableHeadData();
	function getTableHeadData(){
		$ajax.ajaxPost('/agent/agent_grade/list.do', { sku_id: sku_id}, function(data){
			if (data.code == 10000) {
				$('#table').append(doT.template(tableHead)(data.data));
				getData()
			}
		});
	};
	function getData(){
		$ajax.ajaxPost('/rule/item_rule.do', { sku_id: sku_id}, function(data){
			if (data.code == 10000) {
				var num = $("#table thead th").length;
				for(var j =1; j< num; j++){
					var tmp = data.data[j-1];
					$("#price td").eq(j).find("input").val(tmp.price);
					$("#start_num td").eq(j).find("input").val(tmp.order_min);
					$("#day_num td").eq(j).find("input").val(tmp.day_max);
					$("#week_num td").eq(j).find("input").val(tmp.week_max);
					$("#month_num td").eq(j).find("input").val(tmp.month_max);
					$("#order_info td").eq(j).find("textarea").val(tmp.remark);
				};
			};
		});
	}

	// 数据校验
	$("#table").on("keyup", ".price", function(){
		var value = $(this).val().trim();
		var re = /^\d{1,6}(\.(\d{1,2})?)?$/;
		if(!re.test(value)){
			$(this).val("");
		};
	});
	$("#table").on("keyup", ".num", function(){
		var value = $(this).val().trim();
		var re = /^\d{1,7}$/;
		if(!re.test(value)){
			$(this).val("");
		};
	});
	$("#previous").on("click", function(){
		window.location.href = "goods-base-edit.html?sku_id=" + sku_id;
	});
	// $("#table .num").keyup(function(){
	// 	var value = $(this).val().trim();
	// 	var re = /^\d{1,7}$/;
	// 	if(!re.test(value)){
	// 		$(this).val("");
	// 	};
	// });
	
	// var pram = {
	// 	"fixed_postage": "",
	// 	"postage_tpl": ""
	// };
	var flag = 0;
	var pram = [];
	$("#next").on("click", function(){
		checkData();
		if (flag == 0) {
			return;
		}
		pram = [];
		// 收集数据
		var data = {
			sku_id: "",
			price: "",
			order_min: "",
			day_max: "",
			week_max: "",
			month_max: "",
			remark: "",
			agent_grade: ""
		};
		var num = $("#table thead th").length;
		for(var j =1; j< num; j++){
			data = {
				sku_id: "",
				price: "",
				order_min: "",
				day_max: "",
				week_max: "",
				month_max: "",
				remark: "",
				agent_grade: ""
			};
			data.sku_id = sku_id,
			data.price = $("#price td").eq(j).find("input").val().trim();
			data.order_min = $("#start_num td").eq(j).find("input").val().trim();
			data.day_max = $("#day_num td").eq(j).find("input").val().trim();
			data.week_max = $("#week_num td").eq(j).find("input").val().trim();
			data.month_max = $("#month_num td").eq(j).find("input").val().trim();
			data.remark = $("#order_info td").eq(j).find("textarea").val();
			data.agent_grade = $("#price td").eq(j).find("input").attr("data_index");
			pram.push(data);
		};
		// pram.fixed_postage = $("#fixed-postage").val();
		// pram.postage_tpl = $("#postage-tpl").val();
		$ajax.ajaxPost('/rule/save_item_rule.do', { content: JSON.stringify(pram)} ,function(data){
				if (data.code = "10000") {
					layer.msg('保存成功!');
					window.location.href = "goods-management.html";
				};
			});
	});
	// 检测数据为空
	function checkData(){
		flag = 0;
		// 判断是否为空 价格
		var price = $(".price");
		var len = price.length;
		for(var i =0; i< len; i++){
			if(!$(price[i]).val().trim()){
				layer.msg('请补全价格！');
				return;
			};
		};
		// 起订量
		var start_num = $("#start_num .num");
		var start_num_len = start_num.length;
		for(var i =0; i< start_num_len; i++){
			if(!$(start_num[i]).val().trim()){
				layer.msg('请补全起订量！');
				return;
			};
		};
		// 每天限量
		var day_num = $("#day_num .num");
		var day_num_len = day_num.length;
		for(var i =0; i< day_num_len; i++){
			if(!$(day_num[i]).val().trim()){
				layer.msg('请补全每天限量！');
				return;
			};
		};
		// 每周限量
		var week_num = $("#week_num .num");
		var week_num_len = week_num.length;
		for(var i =0; i< week_num_len; i++){
			if(!$(week_num[i]).val().trim()){
				layer.msg('请补全每周限量！');
				return;
			};
		};
		// 每月限量
		var month_num = $("#month_num .num");
		var month_num_len = month_num.length;
		for(var i =0; i< month_num_len; i++){
			if(!$(month_num[i]).val().trim()){
				layer.msg('请补全每月限量！');
				return;
			};
		};
		flag = 1;
	};
});
