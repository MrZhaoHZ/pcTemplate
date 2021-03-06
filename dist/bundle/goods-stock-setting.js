/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(108);


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

	var api_path_config = __webpack_require__(4);
	function redirectURL() {
		location.href = 'http://' + api_path_config.bssdomain + '/leaf_manager_web/static/html/login.html';
	}
	function ajaxPost(url,param,callback) {
		$.post(api_path_config.api_path_1 + url,param,function(data){
			// if(data.isLogin) {
				// if(typeof data != 'object') {
				// 	callback(JSON.parse(data));
				// } else {
				// 	callback(data);
				// }
			// } else {
				// redirectURL();
			// }
			loginJudge(data, callback);
		});
	}

	function ajaxGet(url,param,callback) {
		$.get(api_path_config.api_path_1 + url,param,function(data){
			// if(data.isLogin) {
				// if(typeof data != 'object') {
				// 	callback(JSON.parse(data));
				// } else {
				// 	callback(data);
				// }
			// } else {
				
			// }
			loginJudge(data, callback);
		});
	}


	function ajaxPost4Autho(url,param,callback) {
		$.post(api_path_config.api_path_2 + url,param,function(data){
			// if(data.isLogin) {
				// if(typeof data != 'object') {
				// 	callback(JSON.parse(data));
				// } else {
				// 	callback(data);
				// }
			// } else {
				// redirectURL();
			// }
			loginJudge(data, callback);
		});
	}
	function ajaxGet4Autho(url,param,callback) {
		$.get(api_path_config.api_path_2 + url,param,function(data){
			// if(data.isLogin) {
				// if(typeof data != 'object') {
				// 	callback(JSON.parse(data));
				// } else {
				// 	callback(data);
				// }
			// } else {
				// redirectURL();
			// }
			loginJudge(data, callback);
		});
	}
	//登录跨域ajax跳转
	function ajaxGet4AuthoCR(url,param,callback) {
		$.ajax({
	        type: "get",
	        data: param,
	        url: api_path_config.api_path_2 + url,
	        xhrFields:{
		      withCredentials: true
		    },
	        success: function(data) {
	   //      	if(typeof data != 'object') {
				// 	callback(JSON.parse(data));
				// } else {
				// 	callback(data);
				// }
				loginJudge(data, callback);
	        }
	    });
	}
	function getValicode(url) {
		return api_path_config.api_path_2 + url;
	}

	//登录拦截 权限拦截
	function loginJudge(data, callback) {
		if(typeof data != 'object') {
			var data = JSON.parse(data);
			if(data.code === '40002') {
				redirectURL();
			} else if(data.code === '40003') {
				layer.msg(data.msg);
			} else {
				callback(data);
			}
		} else {
			if(data.code === '40002') {
				redirectURL();
			} else if(data.code === '40003') {
				layer.msg(data.msg);
			} else {
				callback(data);
			}
		}
	}
	exports.ajaxPost = ajaxPost;
	exports.ajaxGet = ajaxGet;
	exports.post = ajaxPost;
	exports.get = ajaxGet;
	exports.ajaxPost4Autho = ajaxPost4Autho;
	exports.ajaxGet4Autho = ajaxGet4Autho;
	exports.getValicode = getValicode;
	exports.ajaxGet4AuthoCR = ajaxGet4AuthoCR;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	module.exports = {
		"api_path_1": "https://bsstest1.yyzws.com/leaf_manager_web",
		"api_path_2": "https://ssotest1.yyzws.com/leaf_sso_web",
		"link_path": "https://bsstest1.yyzws.com/leaf_manager_web/static/html/",
		"static_path": "https://statictest.yyzws.com/",
		"upload_path": "https://yiyezi.yyzws.com/in/",
		"upload_path_aly": "https://yiyezi.yyzws.com/in/",
		"upload_path_h5": "https://yiyezi.yyzws.com/ex/",
		"ueupload_path": "https://bsstest1.yyzws.com/leaf_manager_web/file/ueupload.do",
		"webupload_path": "https://bsstest1.yyzws.com/leaf_manager_web/file/upload.do",
		"wxdomain": "wxtest1.yyzws.com",
		"bssdomain": "bsstest1.yyzws.com",
		"appid": "wxe2ad70729e334402"
	}

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

	var self_tpl = {
		'goodsTableHeadTpl': '<th>商品</th>\
							  <th>图片</th>\
							  <th>商品编码</th>\
							  <th>状态</th>\
							 <th>发货方</th>\
							 <th>单位</th>\
							 <th>规格</th>\
							{{~ it:item:index }}\
								<th class="parent_id" parent_id="{{= item.id}}">{{= item.name}}</th>\
							{{~}}\
							<th>操作</th>',
		'goodsPriceTpl': '{{~ it.data:value1 }}\
		{{? value1.item_price_rule_v_o_list}}\
		 {{ for(var j=0, len=value1.item_price_rule_v_o_list.length; j<len; j++) { }}\
		 	<tr class="' +'goods' + '{{= value1.spu_id}}" sku_id="{{= value1.item_price_rule_v_o_list[j].sku_id}}" deliver_type="{{= value1.item_price_rule_v_o_list[j].deliver_type}}">\
			 		{{? j == 0}}\
			 			<td rowspan="{{= len}}">{{= value1.spu_name}}</td>\
			 		{{?}}\
					<td>\
						<img src="{{= it.path + value1.item_price_rule_v_o_list[j].image_uri}}">\
					</td>\
			 		<td>\
			 			{{= value1.item_price_rule_v_o_list[j].sku_sn}}\
					 </td>\
					 <td>\
						{{? value1.item_price_rule_v_o_list[j].sku_status == 0 }}\
							新建\
						{{?? value1.item_price_rule_v_o_list[j].sku_status == 1 }}\
							上架\
						{{?? value1.item_price_rule_v_o_list[j].sku_status == 2 }}\
							下架\
						{{?}}\
			 		</td>\
			 		<td>\
						{{? value1.item_price_rule_v_o_list[j].deliver_type == 2 }}\
							总部发货\
						{{?? value1.item_price_rule_v_o_list[j].deliver_type == 1 }}\
							上级发货\
						{{?}}\
			 		</td>\
			 		<td>{{= value1.item_price_rule_v_o_list[j].unit}}</td>\
			 		<td>\
			 			{{= value1.item_price_rule_v_o_list[j].specs || ""}}\
			 		</td>\
			 		{{? value1.item_price_rule_v_o_list[j].is_add == false}}\
			 			{{ for(var k=0, len2=value1.item_price_rule_v_o_list[j].price_rule_v_o_s.length; k<len2; k++) { }}\
							<td><input type="text" spu_id="{{= value1.item_price_rule_v_o_list[j].spu_id}}" delivery_type="{{= value1.item_price_rule_v_o_list[j].delivery_type}}" agent_grade="{{= value1.item_price_rule_v_o_list[j].price_rule_v_o_s[k].agent_grade}}" value="{{= value1.item_price_rule_v_o_list[j].price_rule_v_o_s[k].price}}" class="form-control limited price s-stock-true"/></td>\
						{{ } }}\
					{{??}}\
						{{ for(var s=0, len1=it.dele_length; s<len1; s++) { }}\
							<td><input type="text" value="" class="form-control limited price s-stock-true"/></td>\
						{{ } }}\
					{{?}}\
					{{? j == 0}}\
						{{? value1.item_price_rule_v_o_list[j].is_add == false}}\
		 					<td style="color: #428bca;" spuid="{{= value1.spu_id}}" rowspan="{{= len}}" id="s-preservation" is_add="{{= value1.item_price_rule_v_o_list[j].is_add}}" s-aler="0">保存</td>\
		 				{{??}}\
		 					<td style="color: #428bca;" spuid="{{= value1.spu_id}}" rowspan="{{= len}}" id="s-preservation" is_add="{{= value1.item_price_rule_v_o_list[j].is_add}}" s-aler="1">保存</td>\
		 				{{?}}\
		 			{{?}}\
				</tr>\
			 {{ } }}\
		{{??}}\
		{{?}}\
		{{~}}',
		'goodsLimitedTpl': '{{~ it.data:value1:index1 }}\
						<tr>\
							<td>\
								<img src="{{= it.path + value1.image_uri}}">\
								<p>{{= value1.item_name}}</p>\
							</td>\
							<td>\
								{{? value1.delivery_type == 2 }}\
									总部发货\
								{{?? value1.delivery_type == 1 }}\
									上级发货\
								{{?}}\
							</td>\
							<td>{{= value1.agent_grade_name}}</td>\
							{{? value1.is_exists == false}}\
								<td><input type="text"  value="{{= it.start_num}}" class="form-control limited price"/></td>\
								{{~ it.length:subValue:subIndex}}\
									<td><input type="text"  value="{{= it.limited_num}}" class="form-control limited price"/></td>\
								{{~}}\
							{{??}}\
								<td><input type="text" value="{{= value1.order_min || ""}}" class="form-control limited price"/></td>\
								<td><input type="text" value="{{= value1.day_max || ""}}" class="form-control limited price"/></td>\
								<td><input type="text" value="{{= value1.week_max || ""}}" class="form-control limited price"/></td>\
								<td><input type="text" value="{{= value1.month_max || ""}}" class="form-control limited price"/></td>\
							{{?}}\
							<td><input type="text" value="{{= value1.remark || ""}}" class="form-control limited"></td>\
							<td><span style="color: #428bca;" data_grade_level={{= value1.agent_grade}} data_add={{= value1.is_add}} data_id={{= value1.sku_id}} class="save">保存</span></td>\
						</tr>\
					{{~}}',
		'goodsRulesProd': '<option value="">全部商品</option>{{~ it.data:item }}\
		 	<option value="{{= item.id}}">{{= item.spu_name}}</option>\
		{{~}}',
		'LimitSettingList':'{{~ it.data:value1 }}\
		{{? value1.item_limit_rule_v_o_list}}\
		 {{ for(var j=0, len=value1.item_limit_rule_v_o_list.length; j<len; j++) { }}\
		 	<tr class="' +'goods' + '{{= value1.agent_grade}}{{= value1.spu_id}}" sku_id="{{= value1.item_limit_rule_v_o_list[j].sku_id}}" deliver_type="{{= value1.item_limit_rule_v_o_list[j].deliver_type}}">\
			 		{{? j == 0}}\
			 			<td rowspan="{{= len}}">{{= value1.spu_name}}</td>\
			 			<td rowspan="{{= len}}">\
				 			{{= value1.agent_grade_name}}\
				 		</td>\
			 		{{?}}\
					<td>\
						<img src="{{= it.path + value1.item_limit_rule_v_o_list[j].image_uri}}">\
					</td>\
			 		<td>\
			 			{{= value1.item_limit_rule_v_o_list[j].sku_sn}}\
					 </td>\
					 <td>\
						{{? value1.item_limit_rule_v_o_list[j].sku_status == 0 }}\
							新建\
						{{?? value1.item_limit_rule_v_o_list[j].sku_status == 1 }}\
							上架\
						{{?? value1.item_limit_rule_v_o_list[j].sku_status == 2 }}\
							下架\
						{{?}}\
			 		</td>\
			 		<td>\
						{{? value1.item_limit_rule_v_o_list[j].deliver_type == 2 }}\
							总部发货\
						{{?? value1.item_limit_rule_v_o_list[j].deliver_type == 1 }}\
							上级发货\
						{{?}}\
			 		</td>\
			 		<td>{{= value1.item_limit_rule_v_o_list[j].unit}}</td>\
			 		<td>{{= value1.item_limit_rule_v_o_list[j].specs || ""}}</td>\
					{{? value1.item_limit_rule_v_o_list[j].is_exists == false}}\
				 		<td><input type="text" value="{{= it.start_num}}" class="form-control limited price s-stock-true s-stock-trues limitedOrdermin"/></td>\
				 		<td><input type="text" value="{{= it.limited_num}}" class="form-control limited price s-stock-true s-stock-trues limitedDaymax"/></td>\
				 		<td><input type="text" value="{{= it.limited_num}}" class="form-control limited price s-stock-true s-stock-trues limitedWeekmax"/></td>\
						<td><input type="text" value="{{= it.limited_num}}" class="form-control limited price s-stock-true s-stock-trues limitedMonthmax"/></td>\
						<td><input type="text" value="{{= value1.item_limit_rule_v_o_list[j].remark || ""}}" class="form-control limited price s-stock-true limitedRemark"/></td>\
					{{??}}\
						<td><input type="text" value="{{= value1.item_limit_rule_v_o_list[j].order_min}}" class="form-control limited price s-stock-true s-stock-trues limitedOrdermin"/></td>\
				 		<td><input type="text" value="{{= value1.item_limit_rule_v_o_list[j].day_max}}" class="form-control limited price s-stock-true s-stock-trues limitedDaymax"/></td>\
				 		<td><input type="text" value="{{= value1.item_limit_rule_v_o_list[j].week_max}}" class="form-control limited price s-stock-true s-stock-trues limitedWeekmax"/></td>\
						<td><input type="text" value="{{= value1.item_limit_rule_v_o_list[j].month_max}}" class="form-control limited price s-stock-true s-stock-trues limitedMonthmax"/></td>\
						<td><input type="text" value="{{= value1.item_limit_rule_v_o_list[j].remark || ""}}" class="form-control limited price s-stock-true limitedRemark"/></td>\
					{{?}}\
					{{? j == 0}}\
						{{? value1.item_limit_rule_v_o_list[j].is_add == false}}\
		 					<td style="color: #428bca;" spuid="{{= value1.spu_id}}" agent_grade="{{= value1.agent_grade}}" rowspan="{{= len}}" id="s-preservation" is_add="{{= value1.item_limit_rule_v_o_list[j].is_add}}" s-aler="0">保存</td>\
		 				{{??}}\
		 					<td style="color: #428bca;" spuid="{{= value1.spu_id}}" agent_grade="{{= value1.agent_grade}}" rowspan="{{= len}}" id="s-preservation" is_add="{{= value1.item_limit_rule_v_o_list[j].is_add}}" s-aler="1">保存</td>\
		 				{{?}}\
		 			{{?}}\
				</tr>\
			 {{ } }}\
		{{??}}\
		{{?}}\
		{{~}}',
		'goodsStockSettingTpl': '{{~ it.data:value1 }}\
		{{? value1.item_sku_inventory_v_o_list}}\
		 {{ for(var j=0, len=value1.item_sku_inventory_v_o_list.length; j<len; j++) { }}\
		 		<tr class="' +'stock' + '{{= value1.spu_id}}" sku_id="{{= value1.item_sku_inventory_v_o_list[j].sku_id || ""}}">\
			 		{{? j == 0}}\
			 			<td rowspan="{{= len}}">{{= value1.spu_name}}</td>\
			 		{{?}}\
					<td>\
						<img src="{{= it.path +value1.item_sku_inventory_v_o_list[j].image_uri}}">\
					</td>\
					<td>{{= value1.item_sku_inventory_v_o_list[j].sku_sn}}</td>\
					<td>\
						{{? value1.item_sku_inventory_v_o_list[j].sku_status == 0 }}\
							新建\
						{{?? value1.item_sku_inventory_v_o_list[j].sku_status == 1 }}\
							上架\
						{{?? value1.item_sku_inventory_v_o_list[j].sku_status == 2 }}\
							下架\
						{{?}}\
			 		</td>\
					<td>\
						{{? value1.item_sku_inventory_v_o_list[j].deliver_type == 2 }}\
							总部发货\
						{{?? value1.item_sku_inventory_v_o_list[j].deliver_type == 1 }}\
							上级发货\
						{{?}}\
			 		</td>\
					<td>{{= value1.item_sku_inventory_v_o_list[j].unit}}</td>\
					<td>{{= value1.item_sku_inventory_v_o_list[j].specs || ""}}</td>\
					<td><input id="valInput" deliver_type="{{= value1.item_sku_inventory_v_o_list[j].deliver_type}}" type="text" value="{{= value1.item_sku_inventory_v_o_list[j].total_inv || "0"}}" class="form-control limited price s-stock-true"/></td>\
					<td>{{= value1.item_sku_inventory_v_o_list[j].usuble_inv || "0"}}</td>\
					<td>{{= value1.item_sku_inventory_v_o_list[j].withhold_inv || "0"}}</td>\
					<td>{{= value1.item_sku_inventory_v_o_list[j].frozen_inv || "0"}}</td>\
					{{? j == 0}}\
						<td rowspan="{{= len}}"><a class="s-preservation" spu_id="{{= value1.spu_id || ""}}" sku_id="{{= value1.item_sku_inventory_v_o_list[j].sku_id || ""}}"> 保存 </a></td>\
					{{?}}\
				</tr>\
			 {{ } }}\
			 {{??}}\
		{{?}}\
			 <tr class="s-line-height"></tr>\
		{{~}}',
		'goodProdContent': '<option value="">全部商品</option>{{~ it.data.item_spu_d_t_os:item}}\
		 	<option value="{{= item.id}}">{{= item.spu_name}}</option>\
		{{~}}',
	};
	module.exports = self_tpl;


/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

	$(function() {
		var api_path_config = __webpack_require__(4);
		var $ajax = __webpack_require__(3);
		var self_tpl = __webpack_require__(103);
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

/***/ })

/******/ });