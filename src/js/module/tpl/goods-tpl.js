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
