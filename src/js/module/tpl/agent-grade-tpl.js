var self_tpl = {
	'gradeListTpl': '<thead>\
							<tr>\
							  <th>名称</th>\
							  <th>授权金额</th>\
							  <th>所属级别</th>\
							  <th>状态</th>\
							  <th>操作时间</th>\
							  <th>操作</th>\
							</tr>\
						</thead>\
						<tbody>\
							{{~ it:item:index }}\
							<tr>\
							  <td>{{= item.name}}</td>\
							  <td>{{= item.auth_amount_str}}</td>\
							  <td>{{? item.parent_grade_name}}{{= item.parent_grade_name}}{{??}}平台{{?}}</td>\
							  <td>\
							  {{? item.status == 0}}<span class="valid">启用</span>{{?}}\
							  {{? item.status == 1}}<span class="invalid">禁用</span>{{?}}\
							  </td>\
							  <td>{{= item.update_date}}</td>\
							  <td><a href="agent-grade-setting.html?id={{= item.id}}">修改</a></td>\
							</tr>\
							{{~}}\
						</tbody>'
	,'gradeSettingTpl':'<div class="tips">特别注意：添加等级请先从高级往低级添加。<span id="tips-close">×</span></div>\
						<div class="btn-group nav-select" id="nav-select">\
						  <a type="button" class="btn btn-default selected" href="javascript:void(0)">级别设置</a>\
						</div>\
						<br>\
						<br>\
						<div class="setting-container">\
							<div class="form-inline">\
							  <div class="form-group">\
								<p class="form-control-static">名称：</p>\
							  </div>\
							  <div class="form-group">\
								<input type="text" class="form-control" id="level_name" value="{{= it.name}}">\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
								<p class="form-control-static">授权金额：</p>\
							  </div>\
							  <div class="form-group">\
								<input type="text" class="form-control" id="auth_amount" value="{{= it.auth_amount_str}}">\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
								<p class="form-control-static">升级金额：</p>\
							  </div>\
							  <div class="form-group">\
								<input type="text" class="form-control" id="upgrade_amount" value="{{= it.upgrade_amount_str}}">\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
								<p class="form-control-static">可招募等级：</p>\
							  </div>\
							  <div class="form-group" id="allow_grade">\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
								<p class="form-control-static">可发货：</p>\
							  </div>\
							  <div class="form-group">\
								<label class="checkbox-inline">\
								  <input type="checkbox" id="allow_shipment" {{? it.allow_shipment == 0}}checked{{?}}> &nbsp;\
								</label>\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
								<p class="form-control-static">预警线：</p>\
							  </div>\
							  <div class="form-group">\
								<input type="text" class="form-control" id="warning_line" value="{{= it.warning_line}}">&nbsp;%&nbsp; <span>账户余额与所收货款的最低百分比</span>\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
								<p class="form-control-static">所属等级：</p>\
							  </div>\
							  <div class="form-group">\
								<select class="form-control" disabled id="parent_id">\
								  <option value="{{= it.parent_id}}">{{= it.parent_grade_name}}</option>\
								</select>\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
								<p class="form-control-static">需要上传身份证：</p>\
							  </div>\
							  <div class="form-group">\
								<label class="checkbox-inline">\
								  <input type="checkbox" id="need_idcard" {{? it.need_i_d_card == 0}}checked{{?}}> &nbsp;\
								</label>\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
								<p class="form-control-static">需要打款截图：</p>\
							  </div>\
							  <div class="form-group">\
								<label class="checkbox-inline">\
								  <input type="checkbox" id="payment_voucher" {{? it.payment_voucher == 0}}checked{{?}}> &nbsp;\
								</label>\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group" style="vertical-align: top;">\
								<p class="form-control-static">申请说明：</p>\
							  </div>\
							  <div class="form-group">\
								<script id="application_des" name="content" type="text/plain">\
								</script>\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group" style="vertical-align: top;">\
								<p class="form-control-static">升级说明：</p>\
							  </div>\
							  <div class="form-group">\
								<script id="upgrade_des" name="content" type="text/plain">\
								</script>\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
								<p class="form-control-static">价格表：</p>\
							  </div>\
							  <div class="form-group">\
								<input type="text" class="form-control" id="price-tab" value="{{= it.price_uri}}">&nbsp;<span>点击文本框选择图片 用于微信公众号菜单列表“查看价格”使用</span>\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
								<p class="form-control-static">自助升级：</p>\
							  </div>\
							  <div class="form-group">\
								<select class="form-control" id="allow_update">\
								  <option value="0" {{? it.allow_upgrade==0}}selected{{?}}>开启</option>\
								  <option value="1" {{? it.allow_upgrade==1}}selected{{?}}>关闭</option>\
								</select>\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
								<p class="form-control-static">状态：</p>\
							  </div>\
							  <div class="form-group">\
								<select class="form-control" id="status">\
								  <option value="0" {{? it.status==0}}selected{{?}}>启用</option>\
								  <option value="1" {{? it.status==1}}selected{{?}}>禁用</option>\
								</select>\
							  </div>\
							</div>\
						</div>\
						<div class="tool">\
							<button type="button" class="btn btn-success" id="save-btn">保存</button>\
							<a href="agent-grade-management.html" class="btn btn-default">取消</a>\
						</div>'
	,'allow_grade': '{{~ it:item:index }}\
					<label class="checkbox-inline">\
					  <input type="checkbox" value="{{= item.id}}" {{? item.selected&&item.selected == 1}}checked{{?}} class="item"> {{= item.name}}\
					</label>\
				   {{~}}'
	,'optionTpl': '<option value="{{= it.id}}" selected>{{= it.name}}</option>'
};
module.exports = self_tpl;
