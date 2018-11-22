var self_tpl = {
    'orderListName': '{{~ it.data:item:index1 }}\
                            <tr>\
                                <td><img style="width:40px" src="{{= it.path + item.image_uri}}" alt="">\</td>\
						        <td>{{= item.item_name}}</td>\
						        <td>{{= item.sales_count}}</td>\
                                <td>{{= item.total_amount}}</td>\
                            </tr>\
                        {{~}}',
    'activityStockList': '{{~ it.data.data:item:index}}\
							<tr>\
								<td>{{= item.sort}}</td>\
								<td><img style="width:50px" src="{{= it.path + item.picture_url}}" alt=""></td>\
								<td>{{= item.item_name}}</td>\
								<td>{{= item.item_price}}</td>\
								<td>{{= item.total_inv}}</td>\
								<td>{{= item.usable_inv || ""}}</td>\
							</tr>\
						{{~}}',
	'drainageListName': '<div class= "form-inline" style="margin:10px 0">\
								<div class="form-group">准代理总数:\
								 <a class="proxyNumber" data-id="" data-agemt="0">{{= it.data[0].totalIntentAgent}}</a>\
								<div class="form-group" style="margin-left:15px">正式代理总数：\
								 <a class="proxyNumber"data-id="" data-agemt="1">{{= it.data[0].totalFormalAgent}}</a>\
								</div>\
                        	</div >\
							<table class="table table-striped table-bordered table-hover user-table" id="">\
								<thead>\
									<tr>\
										<th>推荐人</th>\
										<th>准代理数</th>\
										<th>正式代理数</th>\
									</tr>\
								</thead>\
								<tbody id="drainage_table">\
								{{~ it.data[1].datas:item:index}}\
									<tr>\
										<td>{{= item.recommend_name}}</td>\
										<td><a class="proxyNumber" data-name={{= item.recommend_name}} data-agemt="0" data-referee={{= item.referee_id}} >{{= item.intent_count}}</a>\</td>\
										<td><a class="proxyNumber" data-name={{= item.recommend_name}} data-agemt="1" data-referee={{= item.referee_id}}>{{= item.formal_count}}</a>\</td>\
									</tr>\
								{{~}}\
								</tbody>\
							</table>',
	'drawListName': '<div class="form-inline">\
						<div class= "form-group" >发放资格总数 :  \
                            <a style = "color:blueviolet">{{= it.data[0].luckCount}}</a>\
                        </div>\
						<br>\
						<div class="form-group">&nbsp;&nbsp;&nbsp;已抽奖次数 :\
                            <a style="color:darkmagenta">{{= it.data[0].lotteryCount}}</a>\
						</div>\
						<br>\
						<div class="form-group">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   抽中次数 : \
                            <a class="draw-paces" data-id="">{{= it.data[0].winCount}}</a>\
						</div>\
                    	</div>\
						<table class="table table-striped table-bordered table-hover user-table" style="margin-top:20px" id="">\
							<thead>\
								<tr>\
									<th>奖品类型</th>\
									<th>奖品</th>\
									<th>价值</th>\
									<th>已出奖数</th>\
									<th>总奖数</th>\
								</tr>\
							</thead>\
							<tbody id="draw_table">\
								{{~ it.data[1]:item:index}}\
								<tr>\
								{{? item.lottery_type == 0}}\
									<td>红包</td>\
								{{?? item.lottery_type ==1 }}\
									<td>商品</td>\
								{{?}}\
									<td>{{= item.item_name}}</td>\
									<td>{{= item.lottery_amount}}</td>\
									<td><a class="draw-paces" data-id={{= item.award_conf_id}}>{{= item.award_num}}</a></td>\
									<td>{{= item.win_count}}</td>\
								</tr>\
								{{~}}\
							</tbody>\
						</table>',
	'drainageRewardList': '{{~ it.datas:item:index}}\
							<tr>\
								<td>{{= item.real_name}}</td>\
								<td>{{= item.mobile}}</td>\
								<td>{{= item.wechat_no}}</td>\
								<td>{{= item.award_amount || ""}}</td>\
								<td>{{= item.create_date}}</td>\
							</tr>\
						{{~}}',
	'drainageSubListName': '{{~ it.datas:item:index}}\
							<tr>\
								<td>{{= item.para_agent_name}}</td>\
								<td>{{= item.mobile}}</td>\
								<td>{{= item.wechat_no}}</td>\
								<td>{{= item.become_agent_str || ""}}</td>\
								<td>{{= item.recommend_name}}</td>\
							</tr>\
						{{~}}',
	'drawPageListName': '{{~ it.datas:item:index}}\
							<tr>\
								<td>{{= item.member_name}}</td>\
								<td>{{= item.mobile}}</td>\
								<td>{{= item.wechat_no}}</td>\
								{{? item.lottery_type == 0}}\
									<td>红包</td>\
								{{?? item.lottery_type ==1 }}\
									<td>商品</td>\
								{{?}}\
								<td>{{= item.item_name}}</td>\
								<td>{{= item.lottery_amount}}</td>\
								<td>{{= item.create_date}}</td>\
							</tr>\
						{{~}}',
};
module.exports = self_tpl;