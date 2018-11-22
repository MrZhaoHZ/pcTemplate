var self_tpl = {
	'contentArticleManagementTpl': '{{~ it.articleList:item:index }}\
					<tr>\
					    <td>{{= item.id}}</td>\
					    <td>{{= item.title}}</td>\
					    <td>{{= item.brief}}</td>\
					    <td>{{= item.create_date}}</td>\
					    <td>{{= item.update_date}}</td>\
					    <td>{{= item.content_browse || "0"}}</td>\
					    <td>{{= item.content_praise_num || "0"}}</td>\
					    <td data_id={{= item.content_id}}><a href="content-article-edit.html?data_id={{= item.id}}" class="edit">编辑</a>&nbsp;<a data_id={{= item.id}} class="dele">删除</a></td>\
					</tr>\
				{{~}}',
	'contentImgTextReplyTpl': '{{~ it:item:index }}\
					<tr>\
					    <td>{{= item.keywords}}</td>\
					    <td>{{= item.response}}</td>\
					    <td>\
							{{? item.type == 0}}\
								文字回复\
							{{?? item.type == 1}}\
								图文回复\
							{{?}}\
					    </td>\
					    <td>{{= item.create_date}}</td>\
					    <td data_id="{{= item.id}}"><a href="content-imgText-setting-edit.html?data_id={{= item.id}}" class="edit">编辑</a>&nbsp;<a data_id={{= item.id}} class="dele">删除</a></td>\
					</tr>\
				{{~}}',
	'contentCustomMenuTpl': '{{~ it:item:index }}\
					<tr>\
						{{? item.menu_level == 2}}\
							<td class="name"><p><span>&nbsp;&nbsp;&nbsp;&nbsp; |---</span><span class="text">{{= item.name}}</span></p></td>\
						{{?? item.menu_level == 1}}\
							<td class="name"><p><span class="text">{{= item.name}}</span></p></td>\
						{{?}}\
					    <td class="key_world">{{= item.keywords || ""}}</td>\
					    <td class="link">{{= item.uri || ""}}</td>\
					    <td class="sort">{{= item.sort}}</td>\
					    <td data_id="{{= item.id}}"><a class="edit" data_id={{= item.id}} data_type={{= item.type}} data_parent_id={{= item.parent_id || ""}}>编辑</a>&nbsp;<a class="dele">删除</a></td>\
					</tr>\
				{{~}}',
	'contentCarouselManagementTpl': '{{~ it.data:item:index }}\
					<tr>\
						<td>\
							<img src="{{= it.path}}{{= item.image_uri}}"/>\
							<p>{{= item.name}}</p>\
						</td>\
					    <td>{{= item.uri}}</td>\
					    <td>{{= item.sort}}</td>\
					    <td data-id="{{= item.id}}"><a href="content-carousel-edit.html?data_id={{= item.id}}">编辑</a>&nbsp;&nbsp;<a class="dele">删除</a></td>\
					</tr>\
				{{~}}',
	'contentImgTextSettingTpl': '{{~ it:item:index }}\
					<p class="article" data_info={{= item.brief}} data_title={{= item.title}} data_img={{= item.cover_picture}} data_id={{= item.id}}>{{= item.title}}</p>\
				{{~}}',
	'contentImgTextBlockTpl': '<div class="per_block">\
									<p>\
										<span class="left">标题：</span>\
										<input class="right form-control title" />\
										<button type="button" class="btn btn-success add_article">选择文章</button>\
									</p>\
									<p>\
										<span class="left">描述：</span>\
										<input maxlength="200" class="right form-control info" />\
									</p>\
									<p>\
										<span class="left">图片：</span>\
										<span class="add_img">+</span>\
									</p>\
									<p>\
										<span class="info left">网址：</span>\
										<input class="right form-control link" />\
									</p>\
									<p>\
										<button type="button" class="btn btn-success dele">删除</button>\
									</p>\
								</div>'
};
module.exports = self_tpl;