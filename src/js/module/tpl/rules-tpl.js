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
