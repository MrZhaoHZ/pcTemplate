var self_tpl = {
	'empTpl':   '<div class="btn-group dep-heaer">\
					<button type="button" class="btn btn-default selected">{{? it.type=="edit"}}编辑员工{{??}}新建员工{{?}}</button>\
				</div>\
				<div class="dep-info">\
					<form class="form-horizontal" dep="form">\
					  <div class="form-group">\
						<label for="dep-name" class="col-sm-2 control-label">姓名：</label>\
						<div class="col-sm-4">\
						  <input type="email" class="form-control" id="name" placeholder="请填写姓名" value="{{? it.name}}{{= it.name}}{{?}}">\
						</div>\
					  </div>\
					  <div class="form-group">\
						<label for="dep-name" class="col-sm-2 control-label">性别：</label>\
						<div class="col-sm-4">\
							<label class="radio-inline">\
							  	<input type="radio" name="empSex" value="nan" {{? it.gender&&it.gender=="nan"}}checked{{?}}{{? !it.gender}}checked{{?}}> 男\
							</label>\
							<label class="radio-inline"> \
							  <input type="radio" name="empSex" value="nv" {{? it.gender&&it.gender=="nv"}}checked{{?}}> 女\
							</label>\
						</div>\
					  </div>\
					  <div class="form-group">\
						<label for="dep-name" class="col-sm-2 control-label">年龄：</label>\
						<div class="col-sm-4">\
						  <input type="email" class="form-control" id="age" placeholder="请填写年龄" value="{{? it.age}}{{= it.age}}{{?}}">\
						</div>\
					  </div>\
					  <div class="form-group">\
						<label for="dep-name" class="col-sm-2 control-label">手机号：</label>\
						<div class="col-sm-4">\
						  <input type="email" class="form-control" id="mobile" placeholder="请填写手机号" value="{{? it.mobile}}{{= it.mobile}}{{?}}">\
						</div>\
					  </div>\
					  <div class="form-group">\
						<label for="dep-name" class="col-sm-2 control-label">部门：</label>\
						<div class="col-sm-4">\
							<select class="form-control" id="depSelect">\
							  {{? it.empInfo&&it.depInfo}}\
							  	{{~ it.depInfo:item:index }}\
								  <option value="{{= item.id}}" {{? it.empInfo.depId==item.id}}selected{{?}}>{{= item.name}}</option>\
							  	{{~}}\
							  {{?}}\
							  {{? !it.empInfo&&it.depInfo}}\
							  	{{~ it.depInfo:item:index }}\
								  <option value="{{= item.id}}">{{= item.name}}</option>\
							  	{{~}}\
							  {{?}}\
							</select>\
						</div>\
					  </div>\
					  <div class="form-group">\
						<label for="dep-name" class="col-sm-2 control-label">用户：</label>\
						<div class="col-sm-4">\
							<select class="form-control" id="userSelect">\
							  {{? it.empInfo&&it.userInfo}}\
							  	{{~ it.userInfo:item:index }}\
								  <option value="{{= item.id}}" {{? it.empInfo.userId==item.id}}selected{{?}}>{{= item.name}}</option>\
							  	{{~}}\
							  {{?}}\
							  {{? !it.empInfo&&it.userInfo}}\
							  	{{~ it.userInfo:item:index }}\
								  <option value="{{= item.id}}">{{= item.name}}</option>\
							  	{{~}}\
							  {{?}}\
							</select>\
						</div>\
					  </div>\
					  <div class="form-group">\
					  	<label for="dep-name" class="col-sm-2 control-label"></label>\
					  	<div class="col-sm-4">\
					  		<button type="button" class="btn btn-default" id="save-emp" style="margin:0 5px;">保存</button>\
							<button type="button" class="btn btn-warning" id="delete-emp" style="margin:0 5px;display:none;">删除</button>\
							<button type="button" class="btn btn-success" id="cancel-save-emp">取消</button>\
					  	</div>\
					  </div>\
					</form>\
				</div>'
	,'depOptionTpl': '{{~ it:item:index }}\
					  <option value="{{= item.id}}" {{? it.depId==item.id}}selected{{?}}>{{= item.department_name}}</option>\
				  	 {{~}}'
	,'userOptionTpl': '{{~ it:item:index }}\
					  <option value="{{= item.id}}" {{? it.userId==item.id}}selected{{?}}>{{= item.login_name}}</option>\
				  	 {{~}}'
	,'empListTpl': '{{~ it:item:index }}\
					  <tr data-id="{{= item.id}}">\
					  <td style="display:none;"><input type="checkbox" name="selectItem"></td>\
					  <td>{{= item.name}}</td>\
					  <td>{{? item.gender=="nv"}}女{{?? item.gender=="nan"}}男{{?}}</td>\
					  <td>{{= item.age}}</td>\
					  <td>{{= item.mobile}}</td>\
					  <td>{{= item.employee_department_d_t_os[0].department_name}}</td>\
					  <td>{{= item.user_name}}</td>\
					  <td><a href="employee.html?id={{= item.id}}">编辑</a>&nbsp;<a href="javascript:void(0)" class="delete-btn">删除</a></td>\
					</tr>\
				  	 {{~}}'
};
module.exports = self_tpl;
