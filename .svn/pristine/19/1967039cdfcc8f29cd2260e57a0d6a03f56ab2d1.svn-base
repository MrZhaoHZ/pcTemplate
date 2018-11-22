var self_tpl = {
	'agencyListTpl': '<thead>\
						<tr>\
						  <th>姓名</th>\
						  <th>手机号</th>\
						  <th style="display:none;">货款</th>\
						  <th>级别</th>\
						  <th style="display:none;">直属上级</th>\
						  <th style="display:none;">顶级</th>\
						  <th style="display:none;">直属人数</th>\
						  <th style="display:none;">团队人数</th>\
						  <th style="display:none;">状态</th>\
						  <th>操作</th>\
						</tr>\
					  </thead>\
					  <tbody>\
					  	{{~ it.datas:item:index }}\
							<tr>\
							  <td>{{= item.real_name}}</td>\
							  <td>{{= item.mobile}}</td>\
							  <td style="display:none;">{{= item.amount_str}}</td>\
							  <td>{{= item.agent_grade_name}}</td>\
							  <td style="display:none;">\
							  {{? item.superior_member_id != 1}}<a href="agent-detail.html?id={{= item.superior_member_id}}" target="_blank">{{= item.direct_superior}}</a>{{??}}{{= item.direct_superior}}{{?}}\
							  </td>\
							  <td style="display:none;">\
							  {{? item.top_member_id != 1}}<a href="agent-detail.html?id={{= item.top_member_id}}" target="_blank">{{= item.top_name}}</a>{{??}}{{= item.top_name}}{{?}}\
							  </td>\
							  <td style="display:none;">{{= item.directly_count}}</td>\
							  <td style="display:none;">{{= item.team_count}}</td>\
							  <td style="display:none;">\
							  {{? item.audit_status==0}}\
							  启用\
							  {{?? item.audit_status==1}}\
							  停用\
							  {{?}}\
							  </td>\
							  <td>\
							  {{? it.operate_type == "edit"}}\
							  <a href="javascript:void(0);" data_grade="{{= item.agent_grade}}" class="limit-setting-edit" data-memberid={{= item.member_id}}>\
							  		编辑规则\
							  </a>\
							  {{?? it.operate_type == "new"}}\
							  <a href="javascript:void(0);" class="limit-setting" data-memberid={{= item.member_id}}>\
							  		新建规则\
							  </a>\
							  {{?}}\
							  </td>\
							</tr>\
						{{~}}\
					  </tbody>'
	,'limitSetting': 	'<p>\
							是否开启：\
							<label class="radio-inline">\
							  <input type="radio" class="radio_is_open" name="isOpen" value="1" {{? it.data.status==1}}checked{{?}}> 是\
							</label>\
							<label class="radio-inline">\
							  <input type="radio" class="radio_is_open" name="isOpen" value="2" {{? it.data.status==2 || !it.data.status}}checked{{?}}> 否\
							</label>\
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型：\
							<label class="radio-inline">\
							  <input type="radio" name="limit-type" value="2" {{? !it.data.type}}checked{{?}}{{? it.data.type==2}}checked{{?}}> 团队\
							</label>\
							<label class="radio-inline">\
							  <input type="radio" name="limit-type" value="1" {{? it.data.type==1}}checked{{?}}> 个人\
							</label>\
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
							<button type="button" class="btn btn-primary" id="save_status">保存</button>\
						</p>\
						<div>\
							<table class="table table-bordered tab-content-center">\
							  <thead>\
								<tr>\
								  <th style="display:none;">隐藏商品</th>\
								  <th>商品</th>\
								  <th>图片</th>\
								  <th>商品编码</th>\
								  <th>单位</th>\
								  <th>规格</th>\
								  <th>每日限量</th>\
								  <th>每周限量</th>\
								  <th>每月限量</th>\
								  <th>操作</th>\
								</tr>\
							  </thead>\
							  <tbody id="limit-settimg-tbody">\
							  	{{ for(var j=0; j< it.data.length; j++) { }}\
								  	{{? it.data[j].limit_rule_list}}\
									  	 {{ for(var i=0; i< it.data[j].limit_rule_list.length; i++) { }}\
											<tr data-id="{{= it.data[j].spu_id}}">\
											  {{? i == 0}}\
											    <td class="spu_name" rowspan="{{= it.data[j].limit_rule_list.length}}">{{= it.data[j].item_name}}</td>\
											  {{?}}\
											  <td data_id="{{= it.data[j].limit_rule_list[i].sku_id}}" class="goods_img"><img src="{{= it.upload_path + it.data[j].limit_rule_list[i].image_uri}}" /></td>\
											  <td>{{= it.data[j].limit_rule_list[i].sku_sn}}</td>\
											  <td>{{= it.data[j].limit_rule_list[i].unit}}</td>\
											  <td>{{= it.data[j].limit_rule_list[i].specs || ""}}</td>\
											  <td><input type="text" class="limit-num" value="{{? it.data[j].limit_rule_list[i].day_max}}{{= it.data[j].limit_rule_list[i].day_max}}{{??}}9999{{?}}"></td>\
											  <td><input type="text" class="limit-num" value="{{? it.data[j].limit_rule_list[i].week_max}}{{= it.data[j].limit_rule_list[i].week_max}}{{??}}9999{{?}}"></td>\
											  <td><input type="text" class="limit-num" value="{{? it.data[j].limit_rule_list[i].month_max}}{{= it.data[j].limit_rule_list[i].month_max}}{{??}}9999{{?}}"></td>\
											  {{? i ==0}}\
											    <td rowspan="{{= it.data[j].limit_rule_list.length}}"><span class="save_per" style="cursor: pointer;">保存</span></td>\
											  {{?}}\
											</tr>\
										{{ } }}\
									{{?}}\
								{{ } }}\
							  </tbody>\
							</table>\
						</div>'
	,'limitSettingEdit': 	'<p>\
							开启限量规则：\
							<label class="radio-inline">\
							  <input class="radio_is_open" type="radio" name="isOpen" value="1" {{? it.data.status==1}}checked{{?}}> 是\
							</label>\
							<label class="radio-inline">\
							  <input class="radio_is_open" type="radio" name="isOpen" value="2" {{? it.data.status==2 || !it.data.status}}checked{{?}}> 否\
							</label>\
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型：\
							<label class="radio-inline">\
							  <input type="radio" name="limit-type" value="2" {{? !it.data.type}}checked{{?}}{{? it.data.type==2}}checked{{?}}> 团队\
							</label>\
							<label class="radio-inline">\
							  <input type="radio" name="limit-type" value="1" {{? it.data.type==1}}checked{{?}}> 个人\
							</label>\
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
							<button type="button" class="btn btn-primary" data_id="{{= it.data.id}}" id="save_status">保存</button>\
							&nbsp;&nbsp; \
							<button type="button" class="btn btn-primary" data_id="{{= it.data.id}}" id="save_status1">选择保存</button>\
							&nbsp;&nbsp; \
							<button type="button" class="btn btn-primary" data_grade="{{= it.data.agent_grade}}" data_id="{{= it.data.id}}" id="super_open" style="margin-left:105px;position: relative;bottom: 69px;right: 415px;">一键恢复</button>\
							&nbsp;&nbsp; \
							<button type="button" class="btn btn-primary" data_id="{{= it.data.id}}" id="super_esc" style="position: relative;bottom: 103px;left: 336px;">一键清零</button>\
						</p>\
						<div>\
							<table class="table table-bordered tab-content-center" data_id="{{= it.data.id}}">\
							  <thead>\
								<tr>\
									<th style="display:none;">隐藏商品</th>\
									<th><input type="checkbox" class="select-all"></th>\
								  <th>商品</th>\
								  <th>图片</th>\
								  <th>商品编码</th>\
								  <th>单位</th>\
								  <th>规格</th>\
								  <th>每日限量</th>\
								  <th>每周限量</th>\
								  <th>每月限量</th>\
								  <th>操作</th>\
								</tr>\
							  </thead>\
							  <tbody id="limit-settimg-tbody" data_id="{{= it.data.id}}">\
							  	{{ for(var j=0; j< it.data.agent_rule_list.length; j++) { }}\
								  	{{? it.data.agent_rule_list[j].limit_rule_list}}\
									  	 {{ for(var i=0; i< it.data.agent_rule_list[j].limit_rule_list.length; i++) { }}\
											<tr data-id="{{= it.data.agent_rule_list[j].spu_id}}" data-skuid="{{= it.data.agent_rule_list[j].limit_rule_list[i].sku_id}}">\
												<td><input type="checkbox" name="selectItem"></td>\
											  {{? i== 0}}\
											    <td rowspan="{{= it.data.agent_rule_list[j].limit_rule_list.length}}" class="spu_name">{{= it.data.agent_rule_list[j].item_name}}</td>\
											  {{?}}\
											  <td data_id="{{= it.data.agent_rule_list[j].limit_rule_list[i].sku_id}}" class="goods_img"><img src="{{= it.upload_path + it.data.agent_rule_list[j].limit_rule_list[i].image_uri}}" /></td>\
											  <td>{{= it.data.agent_rule_list[j].limit_rule_list[i].sku_sn}}</td>\
											  <td>{{= it.data.agent_rule_list[j].limit_rule_list[i].unit}}</td>\
											  <td>{{= it.data.agent_rule_list[j].limit_rule_list[i].specs || ""}}</td>\
											  <td><input type="text" class="limit-num" value="{{? it.data.agent_rule_list[j].limit_rule_list[i].day_max}}{{= it.data.agent_rule_list[j].limit_rule_list[i].day_max}}{{??}}9999{{?}}"></td>\
											  <td><input type="text" class="limit-num" value="{{? it.data.agent_rule_list[j].limit_rule_list[i].week_max}}{{= it.data.agent_rule_list[j].limit_rule_list[i].week_max}}{{??}}9999{{?}}"></td>\
											  <td><input type="text" class="limit-num" value="{{? it.data.agent_rule_list[j].limit_rule_list[i].month_max}}{{= it.data.agent_rule_list[j].limit_rule_list[i].month_max}}{{??}}9999{{?}}"></td>\
											  {{? i == 0}}\
											  	<td rowspan="{{= it.data.agent_rule_list[j].limit_rule_list.length}}"><span class="save_per" style="cursor: pointer;">保存</span></td>\
											  {{?}}\
											</tr>\
										{{ } }}\
									{{?}}\
								{{ } }}\
							  </tbody>\
							</table>\
						</div>'
	,'goodsLists': '<option>请选择商品</option>\
							{{~ it:item:index }}\
								<option data_id="{{= item.id}}">{{= item.spu_name}}</option>\
							{{~}}'
};
module.exports = self_tpl;
