var self_tpl = {
    'activityGoodsList': '{{~ it.data:item:index1 }}\
                            <tr>\
								<td ><input class="sort" type="text" value={{= item.sort}}></td>\
                                <td>\
                                    <img src="{{= it.path + item.image_uri}}">\
                                </td>\
								<td>{{= item.goods_name}}</td>\
								<td><input type="text" class="price-check" value={{= item.price}}></td>\
								<td><input type="text" class="amount" value={{= item.price}}></td>\
								<td>{{= item.price}}</td>\
								<td><input type="text" class="amount" value={{= item.price}}></td>\
								<td>{{= item.price}}</td>\
								<td>{{= item.price}}</td>\
								<td>{{= item.price}}</td>\
								<td>\
									<a class="off" data_is_using="1" data-id="96">保存</a>&nbsp;&nbsp;\
									<a class="dele" data_is_using="1" data-id="96">删除</a>\
								</td>\
							</tr>\
                        {{~}}',
    'goodProdContent': '<option value="">全部商品</option>{{~ it.data:item}}\
	 	                <option value="{{= item.id}}">{{= item.spu_name}}</option>\
						{{~}}',
	'goodsRefereeSelect': '<option value="">全部商品</option>\
							{{~ it:item:index}}\
							<option value={{= item.id}}>{{= item.item_name}}</option>\
							{{~}}',
	'drawRefereeSelect': '<option value="" class="wei">全部奖品</option>\
							{{~ it:item:index}}\
							<option value={{= item.id}} data-type="1">{{= item.item_name}}</option>\
							{{~}}',
	'addActivityGoodsList': '{{~ it.data.data:item:index}}\
							<tr>\
								<td><input type="text" class="goods-sort sort" value={{= item.sort}}></td>\
								<td><img style="width:50px" src="{{= it.path + item.picture_url}}" alt=""></td>\
								<td>{{= item.item_name}}</td>\
								<td>{{= item.item_price_str}}</td>\
								<td><input class="goods-num amount" type="text" value={{= item.single_buy_num}}></td>\
								<td><input class="goods-inv amount" type="text" value={{= item.total_inv}}></td>\
								<td>{{= item.usable_inv || ""}}</td>\
								<td>{{= item.frozen_inv || 0}}</td>\
								<td>{{= item.withhold_inv || 0}}</td>\
								<td>{{= item.dudect_inv || 0}}</td>\
								<td>\
									<a class="off"  data-id={{= item.id}} data-version={{= item.version}}>保存</a>&nbsp;&nbsp;\
									<a class="dele"  data-id={{= item.id}}>删除</a>\
								</td>\
							</tr>\
						{{~}}',
	'addActivityDrawList': '{{~ it:item:index}}\
							<tr>\
								{{? item.award_type != 0}}\
								<td>红包</td>\
								{{?? item.award_type == 0}}\
								<td>商品</td>\
								{{?}}\
								{{? item.award_type == 0}}\
								<td>特等奖</td>\
								<td>{{= item.item_name}}</td>\
								{{?? item.award_type == 1}}\
								<td>一等奖</td>\
								<td>一等奖</td>\
								{{?? item.award_type == 2}}\
								<td>二等奖</td>\
								<td>二等奖</td>\
								{{?? item.award_type == 3}}\
								<td>三等奖</td>\
								<td>三等奖</td>\
								{{?? item.award_type == 4}}\
								<td>幸运奖</td>\
								<td>幸运奖</td>\
								{{?}}\
								{{? item.award_type != 4}}\
								<td>{{= item.award_money_str ||0}}</td>\
								<td>\
									<a class="dele"  data-id={{= item.id}}>删除</a>\
								</td>\
								{{?? item.award_type == 4}}\
								<td><input type="text" class="price-check draw-money" value={{= item.award_money_str ||0}}>\</td>\
								<td>\
									<a class="off"  data-id={{= item.id}}>保存</a>&nbsp;&nbsp;\
								</td>\
								{{?}}\
							</tr>\
                        {{~}}',
};
module.exports = self_tpl;