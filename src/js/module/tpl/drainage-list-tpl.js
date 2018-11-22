var self_tpl = {
    'luckListTpl': '{{~ it.datas:item:index }}\
					<tr>\
                        <td>{{= item.member_name}}</td>\
                        <td>{{= item.mobile}}</td>\
                        <td>{{= item.order_sn}}</td>\
                        <td>{{= item.act_name}}</td>\
                        <td>{{= item.amount_str}}</td>\
                        <td>{{= item.deliver_str}}</td>\
                        <td>{{= item.remarks}}</td>\
                        <td>\
                            <a class="operation" data-sn={{= item.order_sn}}  data-id={{= item.open_id}} data-act={{= item.act_id}} >发红包</a>\
                        </td>\
                    </tr>\
                {{~}}',
    'drainageListTpl': '{{~ it.data.act_order_list:item:index }}\
					<tr>\
                        <td>{{= item.member_name}}</td>\
                        <td>{{= item.mobile}}</td>\
                        <td>\
                            {{? item.agent_grade == 1}}\
								合伙人\
							{{?? item.agent_grade == 2}}\
                                总代理\
                            {{?? item.agent_grade == 3}}\
                                市级代理\
                            {{?? item.agent_grade == 4}}\
                                品牌督导\
                            {{?? item.agent_grade == 5}}\
								美丽顾问\
							{{?}}\
                        </td>\
                        <td>{{= item.activity_name}}</td>\
                        <td><a class="eject" data-id={{= item.member_id}} data-act="{{= item.activity_name}}" data-type="1">{{= item.drai_team_count}}</a></td>\
                        <td><a class="eject" data-id={{= item.member_id}} data-act="{{= item.activity_name}}" data-type="0">{{= item.drai_count}}</a></td>\
                        <td>￥{{= item.drai_award}}</td>\
                        <td>￥{{= item.awarded || 0}}</td>\
                    </tr>\
                {{~}}',
    'orderListTpl': '{{~ it.data.act_order_list:item:index }}\
					<tr>\
                        <td>{{= item.consignee}}</td>\
                        <td>{{= item.mobile}}</td>\
                        <td>{{= item.activity_name}}</td>\
                        <td>\
                            {{? item.gen_agent == 1}}\
								是\
							{{?? item.gen_agent == 2}}\
                                否\
							{{?}}\
                        </td>\
                        <td>{{= item.member_name}}</td>\
                        <td>{{= item.reco_mobile}}</td>\
                        <td>{{= item.deliver_str}}</td>\
                        <td>{{= item.remarks}}</td>\
                        <td>{{= item.pay_date || ""}}</td>\
                        <td><a class="operation" data-id={{= item.open_id}} data-sn={{= item.order_sn}} data-act={{= item.activity_id}}>发红包</a></td>\
                    </tr>\
				{{~}}',
};
module.exports = self_tpl;