var self_tpl = {
	'accountListTpl': '{{~ it:item:index }}\
					<tr>\
						<td>{{= item.real_name}}</td>\
						<td>{{= item.mobile}}</td>\
					    <td>{{= item.amount_str}}</td>\
					    <td>{{= item.agent_grade_name}}</td>\
					    {{? item.superior_member_id == 1}}\
					    	<td>{{= item.direct_superior}}</td>\
					    {{??}}\
					    	<td><a  href="../agent/agent-detail.html?id={{= item.superior_member_id}}" target="_blank">{{= item.direct_superior}}</a></td>\
					    {{?}}\
					    {{? item.top_member_id == 1}}\
					    	<td>{{= item.top_name}}</td>\
					    {{??}}\
					    	<td><a href="../agent/agent-detail.html?id={{= item.top_member_id}}" target="_blank">{{= item.top_name}}</a></td>\
					    {{?}}\
					    <td>{{= item.directly_count}}</td>\
					    <td>{{= item.team_count}}</td>\
					    <td>\
							{{? item.status == 0}}\
								正常\
							{{?? item.status == 1}}\
								取消\
							{{? }}\
						</td>\
						<td>\
							<a href="account-balance.html?user_id={{= item.member_id}}" target="_blank">&nbsp;余额流水</a>\
							<a class="balance-adjust" user_id="{{= item.member_id}}" user_name="{{= item.real_name}}" user_money="{{= item.amount_str}}">&nbsp;账户调整</a>\
						</td>\
					</tr>\
				{{~}}',
	'accountBalanceTpl': '{{~ it:item:index }}\
					<tr>\
						<td>{{= item.name}}</td>\
						<td>{{= item.agent_grade}}</td>\
					    <td>{{= item.amount_str}}</td>\
					    <td>{{= item.changed_str}}</td>\
					    <td>{{= item.busi_audit_type_str || ""}}</td>\
					    <td>{{= item.create_date}}</td>\
					    <td>\
					    	{{? item.biz_object_id}}\
					    		<a href="../order/order-detail.html?id={{= item.biz_object_id}}" target="_blank">{{= item.busi_desc || "-"}}</a>\
					    	{{?? }}\
					    		{{= item.busi_desc || "-"}}\
					    	{{?}}\
					    </td>\
					</tr>\
				{{~}}',
	'accountAdjustTpl':  '{{~ it.data:item:index }}\
					<tr>\
					<td>{{= index}}</td>\
						<td>{{= item.operator}}</td>\
						<td>{{= item.time}}</td>\
					    <td>{{= item.operation}}</td>\
					    <td>{{= item.remark}}</td>\
					</tr>\
				{{~}}',
	'accountDelegateBalanceTpl': '{{~ it:item:index }}\
					<tr>\
						<td>{{= item.name}}</td>\
						<td>{{= item.agent_grade}}</td>\
					    <td>{{= item.amount_str}}</td>\
					    <td>{{= item.changed_str}}</td>\
					    <td>{{= item.busi_audit_type_str || ""}}</td>\
					    <td>{{= item.create_date}}</td>\
					    <td>\
					    	{{? item.isNum == 1}}\
					    		<a href="../order/order-detail.html?id={{= item.busi_object_id}}" target="_blank">{{= item.busi_desc || "-"}}</a>\
					    	{{?? }}\
					    		{{= item.busi_desc || "-"}}\
					    	{{?}}\
					    </td>\
					</tr>\
				{{~}}',
	'accountRechargeTpl': '{{~ it:item:index }}\
					<tr data_id="{{= item.biz_id}}" data_member="{{= item.member_id}}" data_biz="{{= item.biz_status_name}}">\
						{{ var can_check = 0; if(item.biz_status_name == "上级拒绝" || item.biz_status_name == "总部拒绝" || item.biz_status_name == "审核通过"){ can_check = 1;};}}\
						<td><input type="checkbox" data_id="{{= item.user_id}}" class="item" {{? can_check == 1}} disabled="false" {{?? }} name="item" {{? }} /></td>\
						<td>{{= item.name}}</td>\
						<td>{{= item.real_name}}</td>\
						<td><img src="{{= item.portrait_uri}}" /></td>\
					    <td>{{= item.parent_name}}</td>\
					    <td>{{= item.account_amount_d}}</td>\
					    <td>{{= item.apply_date}}</td>\
					    <td>{{= item.topup_amount_d}}</td>\
					    <td>{{= item.biz_status_name}}</td>operation\
					    <td data_id="{{= item.biz_id}}">{{? item.biz_status_name == "待上级审核"}}\
								<a class="force_pass">强制通过&nbsp;</a>\
								<a class="force_refuse">强制拒绝&nbsp;</a>\
							{{?? item.biz_status_name == "待总部审核"}}\
								<a class="pass">通过&nbsp;</a>\
								<a class="refuse">拒绝&nbsp;</a>\
							{{? }}\
								<a href="account-recharge-detail.html?user_id={{= item.biz_id}}" class="detail" target="_blank">详情</a>\
						</td>\
					</tr>\
				{{~}}',
				'accountRechargeDetailTpl': '<tr>\
					    <td>{{= it.real_name}}</td>\
					    <td>{{= it.apply_date}}</td>\
					    <td>{{= it.simple_desc || "-"}}</td>\
					    <td>{{= it.biz_status_name}}</td>\
					</tr>',
				'accountRechargeDetailTpl1': '<tr>\
					    <td>{{= it.creators}}</td>\
					    <td>{{= it.create_date}}</td>\
					    <td>{{= it.audit_desc || "-"}}</td>\
					    <td>{{= it.status_str || "-"}}</td>\
					</tr>'
};
module.exports = self_tpl;
