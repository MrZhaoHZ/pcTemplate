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

	module.exports = __webpack_require__(100);


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

/***/ 74:
/***/ (function(module, exports) {

	var self_tpl = {
		'goodsManagementTpl': '{{~ it.data:value1:index1 }}\
						<tr>\
								{{ var item =value1;}}\
							<td><input name="item" data_id={{= item.id}} data_status="{{= item.item_status}}" name="item" type="checkbox" value="" /></td>\
							<td class="goods_name">\
								<img src="{{= it.path + item.image_uri}}"/>\
								<p>{{= item.spu_name}}</p>\
							</td>\
						    <td>{{= item.category_name}}</td>\
						    <td>\
								{{? item.item_status == 0}}\
									<span>新建</span>\
								{{?? item.item_status == 1}}\
									<span>上架</span>\
								{{?? item.item_status == 2}}\
									<span>下架</span>\
								{{? }}\
							</td>\
						    <td>\
						    	<a href="goods-base-edit.html?sku_id={{= item.id}}&type=0">编辑</a>&nbsp;&nbsp;\
						    	{{? item.item_status == 0}}\
									<a data_id="{{= item.id}}" class="on_sell">上架</a>&nbsp;&nbsp;\
								{{?? item.item_status == 1}}\
									<a data_id="{{= item.id}}" class="off_sell">下架</a>&nbsp;&nbsp;\
								{{?? item.item_status == 2}}\
									<a data_id="{{= item.id}}" class="on_sell">上架</a>&nbsp;&nbsp;\
								{{? }}\
								{{? item.item_status == 0}}\
									<a data_id="{{= item.id}}" class="join_garbage">加入回收站</a>&nbsp;&nbsp;\
								{{?? item.item_status == 2}}\
									<a data_id="{{= item.id}}" class="join_garbage">加入回收站</a>&nbsp;&nbsp;\
								{{? }}\
						    	<a href="goods-base-edit.html?sku_id={{= item.id}}&type=1">复制</a>\
						    </td>\
						</tr>\
					{{~}}',
		'goodsGarbageTpl': '{{~ it.data:value1:index1 }}\
						<tr>\
								{{ var item =value1;}}\
							<td><input name="item" data_id={{= item.id}} name="item" type="checkbox" value="" /></td>\
							<td class="goods_name">\
								<img src="{{= it.path + item.image_uri}}"/>\
								<p>{{= item.spu_name}}</p>\
							</td>\
						    <td>{{= item.category_name}}</td>\
						    <td>\
								{{? item.item_status == 0}}\
									<span>新建</span>\
								{{?? item.item_status == 1}}\
									<span>上架</span>\
								{{?? item.item_status == 2}}\
									<span>下架</span>\
								{{? }}\
							</td>\
						    <td><a href="goods-base-edit.html?sku_id={{= item.id}}&type=0" style="display:none;">编辑</a>&nbsp;&nbsp;<a  href="goods-base-edit.html?sku_id={{= item.id}}&type=1&isGarbage=1">复制</a></td>\
						</tr>\
					{{~}}',
		'goodsTableHeadTpl': '<th><input name="choose" type="checkbox" id="checked" value="" /></th>\
						    <th>商品</th>\
							{{~ it:item:index }}\
								<th style="display:none;">{{= item.grade_name}}</th>\
							{{~}}\
						    <th>分类</th>\
						    <th>状态</th>\
						    <th>操作</th>',
		'goodsGarbageTableHeadTpl': '<th><input name="choose" type="checkbox" id="checked" value="" /></th>\
						    <th>商品</th>\
							{{~ it:item:index }}\
								<th style="display:none;">{{= item.grade_name}}</th>\
							{{~}}\
						    <th>分类</th>\
						    <th>状态</th>\
						    <th>操作</th>',
		'goodsCategoryTpl': '{{~ it:item:index }}\
								<tr>\
								    <td>{{= item.category_name}}</td>\
								    <td>{{= item.sort}}</td>\
								    <td><a data-id="{{= item.id}}" name="{{= item.category_name}}" sort="{{= item.sort}}" class="edit">编辑</a>&nbsp;&nbsp;<a class="dele" data-id="{{= item.id}}">删除</a></td>\
								</tr>\
							{{~}}',
		'goodsCustomAttrListTpl': '{{~ it:item:index }}\
								<tr>\
								    <td>{{= item.prop_name}}</td>\
								    <td>\
										{{? item.data_type == 1}}\
											整数\
										{{?? item.data_type == 2}}\
											浮点数\
										{{?? item.data_type == 3}}\
											单字符\
										{{?? item.data_type == 4}}\
											字符串\
										{{? }}\
								    </td>\
								    <td><a data_is_using="{{= item.flag}}" data-id="{{= item.id}}" class="edit">编辑</a>&nbsp;&nbsp;<a style="display:none;" class="dele" data_is_using="{{= item.flag}}" data-id="{{= item.id}}">删除</a></td>\
								</tr>\
							{{~}}',
		'goodsGroupListTpl': '{{~ it:item:index }}\
								<tr>\
								    <td>{{= item.group_name}}</td>\
								    <td>\
								    	{{? item.showing == "0"}}\
								    		否&nbsp;&nbsp;\
								    	{{?? item.showing == "1"}}\
								    		是&nbsp;&nbsp;\
								    	{{?}}\
								    </td>\
								    <td>{{= item.turn}}</td>\
								    <td>\
								    	<a class="edit" data_is_using="{{= item.showing}}" data-id="{{= item.id}}">编辑</a>\
								    	{{? item.showing == "0"}}\
								    		<a data_is_using="{{= item.showing}}" data-id="{{= item.id}}" class="on">展示</a>&nbsp;&nbsp;\
								    	{{?? item.showing == "1"}}\
								    		<a class="off" data_is_using="{{= item.showing}}" data-id="{{= item.id}}">撤下</a>\
								    	{{?}}\
								    	<a class="dele" data_is_using="{{= item.showing}}" data-id="{{= item.id}}">删除</a>\
								    </td>\
								</tr>\
							{{~}}'
		,'goodsPerGroupTpl': 	'<table class="table table-bordered tab-content-center">\
								  <thead>\
									<tr>\
									  <th>商品</th>\
									  <th>顺序</th>\
									  <th>操作</th>\
									</tr>\
								  </thead>\
								  <tbody>\
								  	{{~ it:item:index }}\
										<tr data-id="{{= item.spu_id}}">\
										  <td class="name">{{= item.spu_name}}</td>\
										  <td class="sorttd"><input value="{{= item.turn}}" data-id="{{= item.id}}" maxlength="3" class="form-control sort"/></td>\
										  <td>\
											<a data_id="{{= item.spu_id}}" class="remove">移除</a>\
										  </td>\
										</tr>\
									{{~}}\
								  </tbody>\
								</table>'
		,'goodsListTpl': '<option>请选择商品</option>\
							{{~ it:item:index }}\
								<option data_id="{{= item.id}}">{{= item.spu_name}}</option>\
							{{~}}'
		,'goodsAttrListTpl': '<option>请选属性</option>\
							{{~ it.data:item:index }}\
								<option data_id="{{= it.id}}">{{= item.enum_value}}</option>\
							{{~}}'
		,'goodsAttrTypeTpl': '<option value="1">整数</option>\
		        			<option value="2">浮点数</option>\
		        			<option value="4">字符串</option>'
		,'customAttrTpl': '<option>请选择属性</option>\
							{{~ it:item:index }}\
								<option data_id="{{= item.id}}" data_type="{{= item.range_type}}">{{= item.prop_name}}</option>\
							{{~}}'
		,'editCustomAttrTpl': '<select class="form-control options custom_pro">\
								<option>请选择属性</option>\
								{{~ it.data:item:index }}\
									<option data_id="{{= it.id}}">{{= item.enum_value}}</option>\
								{{~}}'
		,'goodsLists': '<option>请选择商品</option>\
								{{~ it:item:index }}\
									<option data_id="{{= it.id}}">{{= item.spu_name}}</option>\
								{{~}}'
		,'goodsUnitList': '<option>请选择属性</option>\
								{{~ it:item:index }}\
							  		<option>{{= item}}</option>\
								{{~}}'
		,"newTable": '<thead>\
					  	<tr>\
					  		<th rowspan="2"><input name="choose" type="checkbox"  id="checked" value="" /></th>\
						    <th rowspan="2">图片</th>\
						    <th rowspan="2" class="goods_code">商品编码</th>\
						    <th class="specifications" colspan="2">规格</th>\
						    <th rowspan="2" class="min_width">微信价</th>\
						    <th rowspan="2" class="min_width">市场价</th>\
						    <th rowspan="2">操作</th>\
						</tr>\
						<tr class="second_tr">\
						    <th>单位</th>\
						    <th class="inser_th_dom">发货方</th>\
						</tr>\
						<tbody id="table_body">\
							<tr style="display: none;">\
							  <td><input name="item" name="item" type="checkbox" value="" /></td>\
							  <td class="add_img_dom"><img class="sku_img" src="" alt="+"></span></td>\
							  <td><input  maxlength="30" class="form-control sku_sn"/></td>\
							  <td class="unitTd">\
							  	<select class="form-control options unit">\
							  	</select>\
							  </td>\
							  <td>\
							  	<select class="form-control options deliver_type">\
							  		<option>请选择属性</option>\
							  		<option data_id="1" value="1">上级发货</option>\
							  		<option data_id="2" value="2">厂家发货</option>\
							  	</select>\
							  </td>\
							  <td class="inser_td_dom"><input  maxlength="30" class="form-control wechat_price price_num"/></td>\
							  <td><input  maxlength="30" class="form-control market_price price_num"/></td>\
							  <td>\
								<a class="remove">移除</a>\
							  </td>\
							</tr>\
						</tbody>\
					  </thead>'
		,"copyAndEditTable": '<thead>\
					  	<tr>\
					  		<th rowspan="2"><input name="choose" type="checkbox" id="checked" value="" /></th>\
						    <th rowspan="2">图片</th>\
						    <th rowspan="2" class="goods_code">商品编码</th>\
						    <th class="specifications" colspan="{{= it.data.spu_property_v_o_list.length + 2}}">规格</th>\
						    <th rowspan="2" class="min_width">微信价</th>\
						    <th rowspan="2" class="min_width">市场价</th>\
						    <th rowspan="2">操作</th>\
						</tr>\
						<tr class="second_tr">\
						    <th>单位</th>\
						    <th class="inser_th_dom">发货方</th>\
						      {{~ it.data.spu_property_v_o_list:item:index }}\
						      	{{? it.isNew == 0}}\
									<th class="add_th" data_id="{{= item.property_id}}" data_type="{{= item.range_type}}"><span class="custom_attr">{{= item.property_name}}</span><span class="dele_th">X</span></th>\
							  	{{??}}\
									<th class="add_th" data_id="{{= item.property_id}}" data_type="{{= item.range_type}}"><span class="custom_attr">{{= item.property_name}}</span></th>\
							     {{?}}\
							  {{~}}\
						</tr>\
						<tbody id="table_body">\
							{{ for(var j=0; j< it.data.item_sku_d_t_o_list.length; j++) { }}\
								<tr>\
								<td><input name="item" name="item" data_id={{= it.data.item_sku_d_t_o_list[j].id}} data_status="{{= it.data.item_sku_d_t_o_list[j].sku_status}}" type="checkbox" value="" /></td>\
								  <td class="add_img_dom"><img class="sku_img" src="{{= it.data.path + it.data.item_sku_d_t_o_list[j].image_uri}}" data_url="{{= it.data.item_sku_d_t_o_list[j].image_uri}}" alt="+"></span></td>\
								  <td><input  maxlength="30" class="form-control sku_sn" data_sn="{{= it.data.item_sku_d_t_o_list[j].sku_sn}}" value="{{= it.data.item_sku_d_t_o_list[j].sku_sn}}"/></td>\
								  <td class="unitTd">\
								  	<select class="form-control options unit">\
								  	</select>\
								  </td>\
								  <td>\
								  	<select class="form-control options deliver_type">\
								  		<option>请选择属性</option>\
								  		{{? it.data.item_sku_d_t_o_list[j].deliver_type == 1}}\
								    		<option data_id="1" value="1"  selected = "selected">上级发货</option>\
								    	{{?? it.data.item_sku_d_t_o_list[j].deliver_type == 2}}\
								    		<option data_id="1" value="1">上级发货</option>\
								    	{{?}}\
								    	{{? it.data.item_sku_d_t_o_list[j].deliver_type == 1}}\
								    		<option data_id="2" value="2">厂家发货</option>\
								    	{{?? it.data.item_sku_d_t_o_list[j].deliver_type == 2}}\
								    		<option data_id="2" value="2" selected = "selected">厂家发货</option>\
								    	{{?}}\
								  	</select>\
								  </td>\
								  <td class="inser_td_dom"><input  maxlength="30" class="form-control wechat_price price_num" value="{{= it.data.item_sku_d_t_o_list[j].sku_wechat_price }}"/></td>\
								  <td><input  maxlength="30" class="form-control market_price price_num" value="{{= it.data.item_sku_d_t_o_list[j].sku_market_price }}"/></td>\
								  <td>\
								  	{{? it.isNew == 0}}\
										<a data_statu="{{= it.data.item_sku_d_t_o_list[j].sku_status}}" data_id="{{= it.data.item_sku_d_t_o_list[j].id}}" class="remove">移除</a>\
										<a data_id="{{= it.data.item_sku_d_t_o_list[j].id}}" class="on_sell" style="display:none">上架</a>&nbsp;&nbsp;\
								  	{{?? it.isNew == 1}}\
										{{? it.data.item_sku_d_t_o_list[j].sku_status == 0 }}\
											<a data_statu="{{= it.data.item_sku_d_t_o_list[j].sku_status}}" class="remove">移除</a>\
											<a data_id="{{= it.data.item_sku_d_t_o_list[j].id}}" class="on_sell">上架</a>&nbsp;&nbsp;\
										{{?? it.data.item_sku_d_t_o_list[j].sku_status == 1 }}\
											<a data_id="{{= it.data.item_sku_d_t_o_list[j].id}}" class="off_sell">下架</a>&nbsp;&nbsp;\
										{{?? it.data.item_sku_d_t_o_list[j].sku_status == 2}}\
											<a data_id="{{= it.data.item_sku_d_t_o_list[j].id}}" class="on_sell">上架</a>&nbsp;&nbsp;\
										{{? }}\
									{{?? it.isNew == 2}}\
										{{? it.data.item_sku_d_t_o_list[j].sku_status == 0 }}\
											<a data_statu="{{= it.data.item_sku_d_t_o_list[j].sku_status}}" class="remove">移除</a>\
										{{? }}\
								     {{?}}\
								  </td>\
								</tr>\
							 {{ } }}\
						</tbody>\
					  </thead>'
	};
	module.exports = self_tpl;


/***/ }),

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

	$(function(){
		var self_tpl = __webpack_require__(74);
		var $ajax = __webpack_require__(3);
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


/***/ })

/******/ });