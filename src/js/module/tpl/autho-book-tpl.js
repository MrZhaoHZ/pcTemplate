var self_tpl = {
	'listTpl': '<thead>\
					<tr>\
					  <th>编号</th>\
					  <th>名称</th>\
					  <th>操作</th>\
					</tr>\
			  	</thead>\
			  	<tbody>\
			  	    {{~ it.datas:item:index }}\
					<tr data-id="{{= item.id}}">\
					  <td>{{= item.id}}</td>\
					  <td>{{= item.name}}</td>\
					  <td><a href="autho-book-setting.html?id={{= item.id}}">编辑</a>&nbsp;<a href="javascript:void(0)" class="preview-btn">预览</a></td>\
					</tr>\
					{{~}}\
			  	</tbody>'
	,'bookDetail': '<div class="btn-group nav-select" id="nav-select">\
					  <a type="button" class="btn btn-default selected" href="javascript:void(0)">授权书设置</a>\
					</div>\
					<br>\
					<br>\
					<div class="form-inline">\
					  <div class="form-group">\
						<p class="form-control-static">名称：</p>\
					  </div>\
					  <div class="form-group">\
						<input type="text" class="form-control" id="bookName" value="{{= it.name}}">&nbsp;&nbsp; <span class="tab-tip">以TAB标签形式前台展示</span>\
					  </div>\
					</div>\
					<div class="book-container" id="book-container">\
						<div class="book-img" id="bookImg" bookimg="{{= it.back_picture}}" style="background: url({{= it.back_picture}}) 0 0 no-repeat;background-size: contain;"></div>\
						<div class="draggable img Hd" id="ele2" data-id="2"><img src="../../images/tuxiang.png" alt=""></div>\
						<div class="draggable title Hd" id="ele3" data-id="3">授权编号</div>\
						<div class="draggable title Hd" id="ele4" data-id="4">姓名</div>\
						<div class="draggable title Hd" id="ele5" data-id="5">微信号</div>\
						<div class="draggable title Hd" id="ele6" data-id="6">微信昵称</div>\
						<div class="draggable title Hd" id="ele7" data-id="7">代理级别</div>\
						<div class="draggable title Hd" id="ele7" data-id="10">代理级别</div>\
						<div class="draggable title Hd" id="ele8" data-id="8">授权开始时间</div>\
						<div class="draggable title Hd" id="ele9" data-id="9">授权结束时间</div>\
					</div>\
					<div class="tools">\
						<button type="button" class="btn btn-success" id="bg-btn">背景图片</button>\
						<button type="button" class="btn btn-success" id="save-btn">保存</button>\
						<button type="button" class="btn btn-success" id="preview-btn">预览</button>\
						<a href="autho-book-list.html" class="btn btn-success">取消</a>\
					</div>'
	,'eleAbosute': 	'{{~ it.list:item:index }}\
						{{? it.eleType[item.type].type=="img"}}\
							{{? item.type== "2"}}\
							<div class="draggable img" id="ele2" data-id="2" style="position: absolute;left: {{= item.x }}px;top: {{= item.y }}px;"><img src="../../images/tuxiang.png" alt=""></div>\
							{{?}}\
						{{?}}\
						{{? it.eleType[item.type].type=="title"}}\
							<div class="draggable title" id="ele{{= item.type}}" data-id="{{= item.type}}" style="position: absolute;left: {{= item.x }}px;top: {{= item.y }}px;">{{= it.eleFlag[item.type].name }}</div>\
						{{?}}\
					{{~}}'
};
module.exports = self_tpl;
