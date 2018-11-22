var self_tpl = {
	'roleListTpl': '{{~ it:item:index }}\
						<tr class="operate">\
							<td>{{= item.role_name }}</td>\
							<td>{{= item.des }}</td>\
							<td>{{? item.user_count}}{{= item.user_count }}{{?}}</td>\
							<td data-id="{{= item.id }}" data-name="{{= item.role_name }}" data-des="{{= item.des }}"><a href="javascript:void(0);" class="edit-btn">编辑</a><a href="javascript:void(0);"  class="delete-btn">删除</a></td>\
						</tr>\
					{{~}}'
	,'roleOptionTpl': '{{~ it:item:index }}\
						<option value="{{= item.id }}">{{= item.role_name }}</option>\
					  {{~}}'
};
module.exports = self_tpl;