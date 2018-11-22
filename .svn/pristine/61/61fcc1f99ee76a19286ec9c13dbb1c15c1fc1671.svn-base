var self_tpl = {
	'agentCheckList': '<thead>\
						<tr>\
						  <th><input type="checkbox" class="select-all"></th>\
						  <th>顶级</th>\
						  <th>直属上级</th>\
						  <th>姓名</th>\
						  <th>申请级别</th>\
						  <th>授权金额</th>\
						  <th>付款截图</th>\
						  <th>身份证号</th>\
						  <th>本人证件</th>\
						  <th>状态</th>\
						  <th>操作</th>\
						  <th>重复类型</th>\
						  <th>重复人手机号</th>\
						</tr>\
					  </thead>\
					  <tbody>\
					  	{{~ it.datas:item:index }}\
						<tr data-id="{{= item.application_id}}">\
						  <td>{{? item.audit_status == 1 || item.audit_status == 0}}<input type="checkbox" name="selectItem">{{?}}</td>\
						  <td>{{? item.top_member_id != 1}}<a href="agent-detail.html?id={{= item.top_member_id}}" target="_blank">{{= item.top_name}}</a>{{??}}{{= item.top_name}}{{?}}</td>\
						  <td>{{? item.parent_member_id != 1}}<a href="agent-detail.html?id={{= item.parent_member_id}}" target="_blank">{{= item.parent_name}}</a>{{??}}{{= item.parent_name}}{{?}}</td>\
						  <td>{{= item.real_name}}</td>\
						  <td>{{= item.grade_name}}</td>\
						  <td>{{? item.payment_amount}}{{= item.payment_amount}}{{??}}-{{?}}</td>\
						  <td>{{? item.payment_voucher}}<a href="javascript:void(0);" target="_blank" class="see-img">点击查看</a><div class="see-img-layer" style="display: none;"><img src="{{? item.payment_voucher}}{{? item.payment_voucher.indexOf("http") != -1}}{{= item.payment_voucher}}{{??}}{{= it.upload_path_h5}}{{= item.payment_voucher}}{{?}}{{?}}" style="width:100%;"></div>{{??}}-{{?}}</td>\
						  <td>{{? item.authon_personal_id}}{{= item.authon_personal_id}}{{??}}-{{?}}</td>\
						  <td>{{? item.authon_personal_id}}<a href="javascript:void(0);" target="_blank" class="see-img">点击查看</a><div class="see-img-layer" style="display: none;"><img src="{{? item.picture_front}}{{? item.picture_front.indexOf("http") != -1}}{{= item.picture_front}}{{??}}{{= it.upload_path_h5}}{{= item.picture_front}}{{?}}{{?}}" style="width:100%;"></div>{{??}}-{{?}}</td>\
						  <td>\
						  {{? item.audit_status == 8 }}\
						  	待上级审核\
						  {{?}}\
						  {{? item.audit_status == 9 }}\
						  	待总部审核\
						  {{?}}\
						  {{? item.audit_status == 1 }}待总部审核{{?}}\
						  {{? item.audit_status == 2 }}上级拒绝{{?}}\
						  {{? item.audit_status == 3 }}总部通过{{?}}\
						  {{? item.audit_status == 4 }}总部拒绝{{?}}\
						  </td>\
						  <td>\
						  {{? item.audit_status == 9 }}\
							<a href="javascript:void(0)" class="pass-btn" data-status="3">通过</a>&nbsp;<a href="javascript:void(0)" class="nopass-btn" data-status="4">拒绝</a>&nbsp;\
						  {{?}}\
						  {{? item.audit_status == 8 }}\
							<a href="javascript:void(0)" class="pass-btn" data-status="3">强制通过</a>&nbsp;<a href="javascript:void(0)" class="nopass-btn" data-status="4">强制拒绝</a>&nbsp;\
						  {{?}}\
						  {{? item.audit_status == 1 }}\
							<a href="javascript:void(0)" class="pass-btn" data-status="3">通过</a>&nbsp;<a href="javascript:void(0)" class="nopass-btn" data-status="4">拒绝</a>&nbsp;\
						  {{?}}\
						  <a href="javascript:void(0);" class="detail-btn">详情</a>\
						  </td>\
						  <td>\
						  	{{? item.unusual_sign == 1 }}地址重复{{?}}\
						  	{{? item.unusual_sign == 2 }}微信号重复{{?}}\
						  	{{? item.unusual_sign == 3 }}地址和微信号重复{{?}}\
						  	{{? item.unusual_sign == 0 }}-{{?}}\
						  	</td>\
						  <td>{{= item.repeat_mobile || "-"}}</td>\
						</tr>\
						{{~}}\
					  </tbody>'
	,detailTpl: '<div>\
				  	<table class="table table-bordered">\
					  <tbody>\
						<tr>\
						  <td>姓名：{{= it.real_name}}</td>\
						  <td>微信号：{{= it.wechat_id}}</td>\
						</tr>\
						<tr>\
						  <td>手机号码：{{= it.mobile}}</td>\
						  <td>身份证号：{{? it.authon_personal_id}}{{= it.authon_personal_id}}{{??}}无身份信息{{?}}</td>\
						</tr>\
						<tr>\
						  <td>所属上级：{{= it.parent_name}}</td>\
						  <td>顶级：{{= it.top_name}}</td>\
						</tr>\
						<tr>\
						  <td>身份信息：<img src="{{? it.authon_personal_id}}{{= it.upload_path_h5}}{{= it.picture_front}}{{?}}" alt="无身份信息" style="display:block;width:200px;height:100px;" /></td>\
						  <td>打款截图：<img src="{{= it.upload_path_h5}}{{= it.payment_voucher}}" alt="无打款截图" style="display:block;width:200px;height:100px;"/></td>\
						</tr>\
						<tr>\
						  <td>申请级别：{{= it.grade_name}}</td>\
						  <td>打款金额：￥{{? it.payment_amount}}{{= it.payment_amount}}{{??}}无打款金额{{?}}</td>\
						</tr>\
						<tr>\
						  <td colspan="2">地址：{{= it.address}}</td>\
						</tr>\
					  </tbody>\
					</table>\
					<div class="check-process">\
						<span>审核流程</span>\
						<table class="table table-bordered">\
						  <thead>\
							<tr>\
							  <th>姓名</th>\
							  <th>处理时间</th>\
							  <th>备注</th>\
							  <th>状态</th>\
							</tr>\
						  </thead>\
						  <tbody>\
						    {{~ it.list:item:index }}\
							<tr>\
							  <td>{{= item.auditor_name}}</td>\
							  <td>{{= item.create_date}}</td>\
							  <td>\
							  {{? item.audit_status== 8 || item.audit_status== 9}}用户提交申请{{?}}\
							  {{? item.audit_status== 2}}{{? item.auditor_type !=1 }}上级{{??}}平台{{?}}拒绝：{{? item.remark}}{{= item.remark}}{{?}}{{?}}\
							  {{? item.audit_status== 1}}{{? item.auditor_type !=1 }}上级{{??}}平台代上级{{?}}审核通过{{?}}\
							  {{? item.audit_status== 4}}总部拒绝：{{? item.remark}}{{= item.remark}}{{?}}{{?}}\
							  {{? item.audit_status== 3}}审核通过{{?}}\
							  </td>\
							  <td>\
							  {{? item.audit_status== 8}}待上级审核{{?}}\
							  {{? item.audit_status== 9}}待平台审核{{?}}\
							  {{? item.audit_status== 2}}上级拒绝{{?}}\
							  {{? item.audit_status== 1}}待总部审核{{?}}\
							  {{? item.audit_status== 4}}总部拒绝{{?}}\
							  {{? item.audit_status== 3}}审核通过{{?}}\
							  </td>\
							</tr>\
							{{~}}\
						  </tbody>\
						</table>\
					</div>\
				</div>'
	,'optionTpl':  '<option value="0">所有等级</option>\
					{{~ it:item:index }}\
					<option value="{{= item.id}}">{{= item.name}}</option>\
				   {{~}}'
	,'accountListTpl': '{{~ it:item:index }}\
					<tr>\
						<td><a  href="../agent/agent-detail.html?id={{= item.member_id}}">{{= item.name}}</a></td>\
						<td>{{= item.type_name}}</td>\
						<td>{{= item.mobile}}</td>\
					    <td>{{= item.authon_personal_id}}</td>\
					    <td>{{= item.wechat_id}}</a></td>\
						<td>{{= item.address}}</td>\
						<td>{{= item.create_date}}</td>\
					    <td><a  href="../agent/agent-detail.html?id={{= item.other_member_id}}">{{= item.name}}</a></td>\
					</tr>\
				{{~}}',
				   
};
module.exports = self_tpl;
