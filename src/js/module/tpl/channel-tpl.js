var self_tpl = {
	'channelListTpl': '<thead>\
							<tr>\
							  <th>渠道编码</th>\
							  <th>渠道名称</th>\
							  <th>状态</th>\
							  <th>操作</th>\
							</tr>\
						</thead>\
						<tbody>\
							{{~ it:item:index }}\
							<tr data-id="{{= item.id}}">\
							  <td>{{= item.place_code}}</td>\
							  <td>{{= item.place_name}}</td>\
							  <td>{{? item.status == 1}}启用{{?? item.status == 2}}禁用{{?}}</td>\
							  <td>\
							  <a href="channel-setting.html?id={{= item.id}}">编辑</a>\
							  -\
							  {{? item.status == 1}}\
							  <a href="javascript:void(0);" class="invalidate-btn">禁用</a>\
							  {{?? item.status == 2}}\
							  <a href="javascript:void(0);" class="validate-btn">启用</a>\
							  {{?}}\
							  </td>\
							</tr>\
							{{~}}\
						</tbody>'
	,'channelSettingTpl':'<div class="btn-group nav-select" id="nav-select">\
						  <a type="button" class="btn btn-default selected" href="javascript:void(0)">推广渠道设置</a>\
						</div>\
						<br>\
						<br>\
						<div class="setting-container">\
							<div class="form-inline">\
							  <div class="form-group">\
								<p class="form-control-static">渠道编码：</p>\
							  </div>\
							  <div class="form-group">\
								<input type="text" class="form-control" id="place_code" value="{{= it.place_code}}">\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
								<p class="form-control-static">渠道名称：</p>\
							  </div>\
							  <div class="form-group">\
								<input type="text" class="form-control" id="place_name" value="{{= it.place_name}}">\
							  </div>\
							</div>\
						</div>\
						<div class="tool">\
							<button type="button" class="btn btn-success" id="save-btn">保存</button>\
							<a href="channel-list.html" class="btn btn-default">取消</a>\
						</div>'
};
module.exports = self_tpl;
