var self_tpl = {
	'agencyListTpl': '<thead>\
						<tr>\
						  <th>姓名</th>\
						  <th>手机号</th>\
						  <th>货款</th>\
						  <th>级别</th>\
						  <th>直属上级</th>\
						  <th>顶级</th>\
						  <th>直属人数</th>\
						  <th>团队人数</th>\
						  <th>状态</th>\
						  <th>操作</th>\
						</tr>\
					  </thead>\
					  <tbody>\
					  	{{~ it.datas:item:index }}\
							<tr>\
							  <td>{{= item.real_name}}</td>\
							  <td>{{= item.mobile}}</td>\
							  <td>{{= item.amount_str}}</td>\
							  <td>{{= item.agent_grade_name}}</td>\
							  <td>\
							  {{? item.superior_member_id != 1}}<a href="agent-detail.html?id={{= item.superior_member_id}}" target="_blank">{{= item.direct_superior}}</a>{{??}}{{= item.direct_superior}}{{?}}\
							  </td>\
							  <td>\
							  {{? item.top_member_id != 1}}<a href="agent-detail.html?id={{= item.top_member_id}}" target="_blank">{{= item.top_name}}</a>{{??}}{{= item.top_name}}{{?}}\
							  </td>\
							  <td>{{= item.directly_count}}</td>\
							  <td>{{= item.team_count}}</td>\
							  <td>\
							  {{? item.audit_status==0}}\
							  启用\
							  {{?? item.audit_status==1}}\
							  停用\
							  {{?}}\
							  </td>\
							  <td><a href="agent-detail.html?id={{= item.member_id}}" target="_blank">详情</a>&nbsp;<a href="agent-team.html?id={{= item.member_id}}" target="_blank">团队</a>&nbsp;<a href="agent-operate-log.html?member_id={{= item.member_id}}" target="_blank">操作日志</a></td>\
							</tr>\
						{{~}}\
					  </tbody>'
	,'operateLogListTpl': '<thead>\
						<tr>\
						  <th>编号</th>\
						  <th>操作人</th>\
						  <th>时间</th>\
						  <th>日志</th>\
						</tr>\
					  </thead>\
					  <tbody>\
					  	{{~ it.userLogVOList:item:index }}\
							<tr>\
							  <td>{{= index+1}}</td>\
							  <td>{{? item.operator}}{{= item.operator}}{{??}}-{{?}}</td>\
							  <td>{{= item.create_date}}</td>\
							  <td>{{= item.obj_type_name}}:{{= item.op_action_name}}</td>\
							</tr>\
						{{~}}\
					  </tbody>'
	,'agencyLogListTpl': '<thead>\
						<tr>\
						  <th>编号</th>\
						  <th>操作人</th>\
						  <th>时间</th>\
						  <th>日志</th>\
						</tr>\
					  </thead>\
					  <tbody>\
					  	{{~ it.userLogVOList:item:index }}\
							<tr>\
							  <td>{{= index+1}}</td>\
							  <td>{{? item.operator}}{{= item.operator}}{{??}}-{{?}}</td>\
							  <td>{{= item.create_date}}</td>\
							  <td>{{= item.op_action_name}}</td>\
							</tr>\
						{{~}}\
					  </tbody>'
	,'agencyDetailTpl':'<p>\
							<span>姓名：{{= it.real_name}}</span>\
							<span>手机号码：{{= it.mobile}}</span>\
							<span>身份证信息：{{? it.authon_personal_id}}{{= it.authon_personal_id}}（<a href="javascript:void(0);" target="_blank" class="picture_front_layer">点击查看图片</a>）{{??}}无{{?}}</span>\
							<div id="picture_front_layer" style="display: none;">\
							<img src="{{? it.picture_front}}{{? it.picture_front.indexOf("http") != -1}}{{= it.picture_front}}\
							{{??}}\
							{{= it.uploadpath}}\
							{{= it.picture_front}}{{?}}{{?}}" style="width:100%;"></div>\
						</p>\
						<p>\
							<span>微信号：{{= it.wechat_id || ""}}</span>\
							<span>地址：{{= it.address}}</span>\
						</p>\
						<p>\
							<span>等级：{{= it.grade_name}}</span>\
							<span>直属人数：{{= it.directly_count}}</span>\
							<span>团队人数：{{= it.team_count}}</span>\
							<span>余额：{{= it.amount}}</span>\
							<span style="display:none;">库存：{{= it.store}}</span>\
						</p>\
						<p>\
							<span>授权书（<a href="javascript:void(0);" class="see-autho-book">点击查看授权书</a>）</span>\
							<span>打款凭证：{{? it.payment_voucher}}（<a href="javascript:void(0);" target="_blank" class="layer-img">点击查看</a>）{{??}}无{{?}}</span>\
							<div id="payment_voucher_layer" style="display: none;"><img src="{{? it.payment_voucher}}{{? it.payment_voucher.indexOf("http") != -1}}{{= it.payment_voucher}}{{??}}{{= it.upload_path_h5}}{{= it.payment_voucher}}{{?}}{{?}}" style="width:100%;"></div>\
							<span>状态：\
							{{? it.auth_status==0}}\
							正常\
							{{?? it.auth_status==1}}\
							取消授权\
							{{?}}\
							</span></br>\
							<span>加入时间：{{= it.join_time}}</span></br>\
							<span>修改记录：{{= it.update_log}}</span></br>\
							<span>身份证地址信息：{{= it.id_address}}</span>\
						</p>\
						<div class="btn-group">\
							<button type="button" class="btn btn-success limit-setting" style="display:none;">限量设置</button>\
							<button type="button" class="btn btn-success {{? it.agent_grade == 1}}notsupport{{?}}" id="upGradeBtn"style="{{? it.agent_grade == 1}}background:gray;{{?}}">升级</button>\
							<button type="button" class="btn btn-success" id="downGradeBtn">降级</button>\
							<button type="button" class="btn btn-success" id="translation-btn">平移</button>\
							<button type="button" class="btn btn-success info-edit">修改信息</button>\
							<button type="button" class="btn btn-success" id="cancel-autho" data-status="{{= it.auth_status}}">\
							{{? it.auth_status==0}}\
							取消授权\
							{{?? it.auth_status==1}}\
							开通授权\
							{{?}}\
							</button>\
						</div>'
	,'teamInfoTpl':'直接下级：<span class="numspan">{{= it.directly_count}}</span>\
					下级总人数：<span class="numspan">{{= it.team_count}}</span>\
					<button type="button" class="btn btn-success" id="translation-btn" style="display:none;margin-left:15px;">平移</button>\
					<div class="team-select">\
						<span class="up-agency see-item active">看上级</span><span class="down-agency see-item">看下级</span>\
						&nbsp;&nbsp;<span id="refresh-btn" class="refresh">刷新</span>\
						<div class="level-info">\
						</div>\
					</div>'
	,'teamUpInfoItemTpl': '<div class="item" data-itemindex="{{= it.itemIndex}}">\
							<span>直接推荐人<b>1</b>人</span>\
							<div class="inner up-item">\
								<p data-id="{{= it.member_id}}" class="inner-item active">{{= it.real_name}}({{= it.id}})--{{= it.grade_name}}</p>\
							</div>\
						</div>'
	,'teamDownInfoItemTpl': '<div class="item" data-itemindex="{{= it.itemIndex}}">\
							<span>直接下级<b>{{= it.total_count}}</b>人</span>\
							<div class="inner down-item">\
								{{~ it.datas:item:index }}\
								<p data-id="{{= item.member_id}}" class="inner-item {{? index==0}}active{{?}}">{{= item.real_name}}({{= item.id}})--{{= item.grade_name}}</p>\
								{{~}}\
							</div>\
						</div>'
	,'editAgentInfoTpl': '<tbody>\
							<tr>\
							  <td>\
							  	姓名：<input type="text" value="{{= it.real_name}}" id="realName">\
							  </td>\
							  <td>\
								手机号：<input type="text" value="{{= it.mobile}}" id="mobile">\
							  </td>\
							</tr>\
							<tr>\
							  <td>\
							  	等级：\
							  	<select name="" id="agent_grade" disabled></select>\
							  </td>\
							  <td>\
								身份证：<input type="text" value="{{? it.authon_personal_id}}{{= it.authon_personal_id}}{{??}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--{{?}}" disabled>\
							  </td>\
							</tr>\
							<tr>\
							  <td>\
							  	昵称：<input type="text" value="{{= it.name}}" disabled id="nickName">\
							  </td>\
							  <td>\
								微信号：<input type="text" value="{{= it.wechat_id}}" id="wechatId">\
							  </td>\
							</tr>\
							<tr>\
							  <td>\
							  	省份：\
							  	<select class="form-control area-province" id="province">\
								</select>\
							  </td>\
							  <td>\
								&nbsp;&nbsp;&nbsp;&nbsp;市：\
								<select class="form-control area-city" id="city">\
								</select>\
							  </td>\
							</tr>\
							<tr>\
							  <td>\
							  	&nbsp;&nbsp;&nbsp;&nbsp;区：\
							  	<select class="form-control area-district" id="district">\
								</select>\
							  </td>\
							  <td>\
								地址：<input type="text" value="{{= it.member_address_d_t_o.address}}" maxlength="100" id="address">\
							  </td>\
							</tr>\
							<tr>\
							  <td>\
							  	邮编：<input type="text" value="{{? it.member_address_d_t_o.zip}}{{= it.member_address_d_t_o.zip}}{{?}}" id="zip">\
							  </td>\
							  <td>\
								备注：<input type="text" value="{{? it.remark}}{{= it.remark}}{{?}}" maxlength="100" id="remark">\
							  </td>\
							</tr>\
							<tr>\
							  <td>\
							  	省份：\
							  	<select class="form-control id-area-province" id="idarea-province">\
								</select>\
							  </td>\
							  <td>\
								&nbsp;&nbsp;&nbsp;&nbsp;市：\
								<select class="form-control id-area-city" id="idarea-city">\
								</select>\
							  </td>\
							</tr>\
							<tr>\
								<td>\
										&nbsp;&nbsp;&nbsp;&nbsp;区：\
										<select class="form-control id-area-district" id="idarea-district">\
									</select>\
								</td>\
								<td> <img class="img-box" style="width:70px;" src={{= it.uploadpath + it.picture_front}} alt="身份证"> <button type = "button"class = "btn btn-success"id = "modifyId" style="margin-left:20px;"> 修改身份证图片 </button></td > < /tr>\
						  </tbody>'
	,'selectOptionTpl': '{{~ it.list:item:index }}\
							<option value="{{= item.id}}" {{? it.code==item.code}}selected{{?}}>{{= item.name}}</option>\
					  {{~}}'
	,'limitSetting': '<p>\
						是否开启：\
						<label class="radio-inline">\
						  <input type="radio" name="isOpen" value="1" {{? it.status==1}}checked{{?}}> 是\
						</label>\
						<label class="radio-inline">\
						  <input type="radio" name="isOpen" value="2" {{? it.status==2 || !it.status}}checked{{?}}> 否\
						</label>\
						</p>\
						<p>\
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型：\
						<label class="radio-inline">\
						  <input type="radio" name="limit-type" value="2" {{? !it.type}}checked{{?}}{{? it.type==2}}checked{{?}}> 团队\
						</label>\
						<label class="radio-inline">\
						  <input type="radio" name="limit-type" value="1" {{? it.type==1}}checked{{?}}> 个人\
						</label>\
						</p>\
						<div>\
							<table class="table table-bordered tab-content-center">\
							  <thead>\
								<tr>\
								  <th>隐藏商品</th>\
								  <th>商品编号</th>\
								  <th>商品标题</th>\
								  <th>发货方</th>\
								  <th>商品图片</th>\
								  <th>每日限量</th>\
								  <th>每周限量</th>\
								  <th>每月限量</th>\
								</tr>\
							  </thead>\
							  <tbody id="limit-settimg-tbody">\
							  	{{~ it.agent_rule_list:item:index }}\
								<tr data-id="{{= item.sku_id}}">\
								  <td>\
								  	<label class="radio-inline">\
									  <input type="radio" name="isHidden{{= item.sku_id}}" value="1"{{? item.allowed_buy==1}}checked{{?}}> 是\
									</label>\
									<label class="radio-inline">\
									  <input type="radio" name="isHidden{{= item.sku_id}}" value="2" {{? !item.allowed_buy}}checked{{?}}{{? item.allowed_buy==2}}checked{{?}}> 否\
									</label>\
								  </td>\
								  <td>{{= item.sku_id}}</td>\
								  <td>{{= item.item_name}}</td>\
								  <td>{{? item.delivery_type === 1}}上级发货{{?}}{{? item.delivery_type === 2}}总部发货{{?}}</td>\
								  <td><img src="{{= it.upload_path}}{{= item.image_uri}}"></td>\
								  <td><input type="text" class="limit-num" value="{{? item.day_max}}{{= item.day_max}}{{?}}"></td>\
								  <td><input type="text" class="limit-num" value="{{? item.week_max}}{{= item.week_max}}{{?}}"></td>\
								  <td><input type="text" class="limit-num" value="{{? item.month_max}}{{= item.month_max}}{{?}}"></td>\
								</tr>\
								{{~}}\
							  </tbody>\
							</table>\
						</div>'
	,'translationBody': '<div>\
							<table class="table table-bordered tab-content-center">\
							  <thead>\
								<tr>\
								  <th>选择</th>\
								  <th>姓名</th>\
								  <th>等级</th>\
								  <th>手机</th>\
								</tr>\
							  </thead>\
							  <tbody>\
							  	<tr>\
							  		<td colspan="4">\
								  		<div class="form-inline" style="text-align: left;">\
										  <div class="form-group">\
										    <input type="text" class="form-control movename" placeholder="姓名">\
										  </div>\
										  <div class="form-group">\
										    <input type="email" class="form-control movephone" placeholder="手机">\
										  </div>\
										  <button class="btn btn-default movebtn">查询</button>\
										</div>\
									</td>\
							  	</tr>\
							  	{{~ it.datas:item:index }}\
								<tr>\
								  <td>\
								  	<input type="radio" name="isMove" value="{{= item.member_id}}">\
								  </td>\
								  <td>{{= item.real_name}}</td>\
								  <td>{{= item.agent_grade_name}}</td>\
								  <td>{{= item.mobile}}</td>\
								</tr>\
								{{~}}\
							  </tbody>\
							</table>\
						</div>'
	,'optionNoAllAgentTpl':  '{{~ it:item:index }}\
				<option value="{{= item.id}}">{{= item.name}}</option>\
			   {{~}}'
	,'optionTpl':  '<option value="0">所有等级</option>\
				{{~ it:item:index }}\
				<option value="{{= item.id}}">{{= item.name}}</option>\
			   {{~}}'
};
module.exports = self_tpl;
