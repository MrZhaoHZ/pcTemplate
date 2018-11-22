var self_tpl = {
	'listTpl': '<thead>\
					<tr>\
					  <th>姓名</th>\
					  <th>手机</th>\
					  <th>微信号</th>\
					  <th>意向等级</th>\
					  <th>渠道</th>\
					  <th>状态</th>\
					  <th>时间</th>\
					  <th>操作</th>\
					</tr>\
			  	</thead>\
			  	<tbody>\
			  	    {{~ it:item:index }}\
					<tr data-id="{{= item.id}}">\
					  <td>{{= item.real_name}}</td>\
					  <td>{{= item.mobile}}</td>\
					  <td>{{= item.wechat_id}}</td>\
					  <td>{{? item.grade_name}}{{= item.grade_name}}{{??}}-{{?}}</td>\
					  <td>{{? item.place_name}}{{= item.place_name}}{{??}}微信{{?}}</td>\
					  <td>\
					  {{? item.status == 0}}\
					  待联系\
					  {{?? item.status == 1}}\
					  联系\
					  {{?? item.status == 2}}\
					  未联系\
					  {{?? item.status == 3}}\
					  合作\
					  {{?? item.status == 4}}\
					  未合作\
					  {{?}}\
					  </td>\
					  <td>{{= item.update_date}}</td>\
					  <td>\
					  {{? item.status == 0}}\
					  <a href="javascript:void(0);" class="contacted-btn">联系</a>\
					  <a href="javascript:void(0);" class="un-contacted-btn">未联系</a>\
					  {{?}}\
					  {{? item.status == 1}}\
					  <a href="javascript:void(0);" class="busi-btn">合作</a>\
					  <a href="javascript:void(0);" class="un-busi-btn">未合作</a>\
					  {{?}}\
					  {{? item.status == 2 || item.status == 3 || item.status == 4}}\
					  -\
					  {{?}}\
					  </td>\
					</tr>\
					{{~}}\
			  	</tbody>'
	,'optionTpl':  '<option value="0">全部</option>\
					{{~ it:item:index }}\
					<option value="{{= item.id}}">{{= item.name}}</option>\
				   {{~}}'
};
module.exports = self_tpl;
