var self_tpl = {
	'agencyCheckTpl': '<thead>\
						<tr>\
						  <th><input type="checkbox" class="select-all" id="select-all"></th>\
						  <th>申请时间</th>\
						  <th>姓名</th>\
						  <th>等级</th>\
						  <th>是否跨级</th>\
						  <th>申请等级</th>\
						  <th>现直属</th>\
						  <th>升级后直属</th>\
						  <th>打款金额</th>\
						  <th>状态</th>\
						  <th>操作</th>\
						</tr>\
					  </thead>\
					  <tbody>\
					  {{~ it.datas:item:index}}\
						<tr data-id="">\
						  <td><input type="checkbox" name="selectItem" data_id="{{= item.id}}"></td>\
						  <td>{{= item.create_time || ""}}</td>\
						  <td>\
						  <a href="agent-detail.html?id={{= item.member_id}}" target="_blank">{{= item.real_name}}</a>\
						  </td>\
						  <td>{{= item.grade_name || ""}}</td>\
						  <td>\
							{{? item.cross_level == 0}}\
								是\
							{{?? item.cross_level == 1}}\
								否\
							{{?}}\
						  </td>\
						  <td>{{= item.new_agent_grade_name || ""}}</td>\
						  <td>\
						  {{? item.parent_member_id != 1}}<a href="agent-detail.html?id={{= item.parent_member_id}}" target="_blank">{{= item.parent_name}}</a>{{??}}{{= item.parent_name}}{{?}}\
						  </td>\
						  <td>\
						  {{? item.new_parent_member_id != 1}}<a href="agent-detail.html?id={{= item.new_parent_member_id}}" target="_blank">{{= item.new_parent_name}}</a>{{??}}{{= item.new_parent_name}}{{?}}\
						  </td>\
						  <td>{{? item.payment_amount}}{{= item.payment_amount}}{{??}}-{{?}}</td>\
						  <td>\
								{{? item.audit_status == 8}}\
									待原上级审核\
								{{?? item.audit_status == 1}}\
									待总部审核\
								{{?? item.audit_status == 2}}\
									新上级拒绝\
								{{?? item.audit_status == 3}}\
									审核通过\
								{{?? item.audit_status == 4}}\
									总部拒绝\
								{{?? item.audit_status == 5}}\
									{{? item.new_parent_member_id == 1}}\
										待平台审核\
									{{??}}\
										{{? item.new_parent_member_id == item.parent_member_id}}\
										待平台审核\
										{{??}}\
										待新上级审核\
										{{?}}\
									{{?}}\
								{{?? item.audit_status == 6}}\
									原上级拒绝\
								{{?? item.audit_status == 9}}\
									待总部审核\
								{{?}}\
						  </td>\
						  <td>\
								{{? item.audit_status == 1 || item.audit_status == 9}}\
								<a class="force_agree" data_id="{{= item.id}}">同意&nbsp;&nbsp;</a>\
								<a class="force_refuse" data_id="{{= item.id}}">拒绝&nbsp;&nbsp;</a>\
								{{?}}\
								{{? item.audit_status == 8}}\
								<a class="force_agree" data_id="{{= item.id}}">强制同意&nbsp;&nbsp;</a>\
								<a class="force_refuse" data_id="{{= item.id}}">强制拒绝&nbsp;&nbsp;</a>\
								{{?}}\
								{{? item.audit_status == 5}}\
									{{? item.new_parent_member_id == 1}}\
										<a class="force_agree" data_id="{{= item.id}}">同意&nbsp;&nbsp;</a>\
										<a class="force_refuse" data_id="{{= item.id}}">拒绝&nbsp;&nbsp;</a>\
									{{??}}\
										{{? item.new_parent_member_id == item.parent_member_id}}\
											<a class="force_agree" data_id="{{= item.id}}">同意&nbsp;&nbsp;</a>\
											<a class="force_refuse" data_id="{{= item.id}}">拒绝&nbsp;&nbsp;</a>\
										{{??}}\
											<a class="force_agree" data_id="{{= item.id}}">强制同意&nbsp;&nbsp;</a>\
											<a class="force_refuse" data_id="{{= item.id}}">强制拒绝&nbsp;&nbsp;</a>\
										{{?}}\
									{{?}}\
								{{?}}\
								<a class="detail" data_id="{{= item.id}}" href="agent-upgrade-detail.html?id={{= item.id}}" target="_blank">详情</a>\
						  </td>\
						</tr>\
						{{~}}\
					  </tbody>'
	,'detailTpl': '<div>\
						<span>目前等级：{{= it.member.grade_name}}</span><span style="margin: 0 20px;">申请级别：{{= it.member.new_agent_grade_name}}</span><span>升级金额：￥{{= it.member.payment_amount}}</span>\
						<div class="img-info">\
							<div class="item">身份信息\
								<img src="{{= it.upload_path_h5}}{{= it.member.picture_front}}" class="img_ifram" alt="">\
							</div>\
							<div class="item">打款截图\
								<img src="{{= it.upload_path_h5}}{{= it.member.payment_voucher}}" class="img_ifram" alt="">\
							</div>\
						</div>\
					</div>\
					<table class="table table-bordered">\
						<thead>\
							<tr>\
							  <th>申请人信息</th>\
							  <th>现直属上级信息</th>\
							  <th>升级后直属上级信息</th>\
							</tr>\
						</thead>\
						<tbody>\
							<tr>\
							  <td>姓名：{{= it.member.name}}</td>\
							  <td>姓名：{{= it.parent_member.name}}</td>\
							  <td>姓名：{{= it.new_parent_member.name}}</td>\
							</tr>\
							<tr>\
							  <td>手机号：{{= it.member.mobile}}</td>\
							  <td>手机号：{{? it.parent_member.agent_grade != 0}}{{= it.parent_member.mobile}}{{??}}-{{?}}</td>\
							  <td>手机号：{{? it.new_parent_member.agent_grade != 0}}{{= it.new_parent_member.mobile}}{{??}}-{{?}}</td>\
							</tr>\
							<tr>\
							  <td>微信号：{{= it.member.wechat_id}}</td>\
							  <td>微信号：{{? it.parent_member.agent_grade != 0}}{{= it.parent_member.wechat_id}}{{??}}-{{?}}</td>\
							  <td>微信号：{{? it.new_parent_member.agent_grade != 0}}{{= it.new_parent_member.wechat_id}}{{??}}-{{?}}</td>\
							</tr>\
							<tr>\
							  <td>级别：{{= it.member.grade_name}}</td>\
							  <td>级别：{{? it.parent_member.agent_grade != 0}}{{= it.parent_member.grade_name}}{{??}}-{{?}}</td>\
							  <td>级别：{{? it.new_parent_member.agent_grade != 0}}{{= it.new_parent_member.grade_name}}{{??}}-{{?}}</td>\
							</tr>\
							<tr>\
							  <td>地址：{{= it.member.address}}</td>\
							  <td>地址：{{? it.parent_member.agent_grade != 0}}{{= it.parent_member.address}}{{??}}-{{?}}</td>\
							  <td>地址：{{? it.new_parent_member.agent_grade != 0}}{{= it.new_parent_member.address}}{{??}}-{{?}}</td>\
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
						    {{~ it.audit_result:item:index }}\
							<tr>\
							  <td>{{= item.real_name}}</td>\
							  <td>{{= item.create_date}}</td>\
							  <td>\
								{{? item.remark}}\
									{{= item.remark}}\
								{{??}}\
									提交成功\
								{{?}}\
							  </td>\
							  <td>\
								{{? item.audit_status == 8}}\
									待原上级审核\
								{{?? item.audit_status == 9}}\
									待总部审核\
								{{?? item.audit_status == 1}}\
									待总部审核\
								{{?? item.audit_status == 2}}\
									新上级拒绝\
								{{?? item.audit_status == 3}}\
									审核通过\
								{{?? item.audit_status == 4}}\
									总部拒绝\
								{{?? item.audit_status == 5}}\
									{{? item.new_parent_member_id == item.original_parent_member_id}}\
									待平台审核\
									{{??}}\
									待新上级审核\
									{{?}}\
								{{?? item.audit_status == 6}}\
									原上级拒绝\
								{{?}}\
							  </td>\
							</tr>\
							{{~}}\
						  </tbody>\
						</table>\
					</div>'
};
module.exports = self_tpl;
