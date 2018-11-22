var self_tpl = {
	'navTpl':   '<nav class="navbar navbar-default navbar-fixed-top" role="navigation">\
					<div class="container">\
						<div class="navbar-header">\
							<a class="navbar-brand" href="#">微商管理</a>\
						</div>\
						<div id="navbar" class="navbar-collapse">\
							<ul class="nav navbar-nav" id="nav-container">\
								{{~ it.data:item:index }}\
									<li {{? it.activeNavId==item.id}}class="active"{{?}}><a href="{{= it.link_path }}{{= item.url }}" data-id="{{= item.id }}">{{= item.name }}</a></li>\
								{{~}}\
							</ul>\
							<ul class="nav navbar-nav navbar-right" id="account-setting">\
							</ul>\
						</div>\
					</div>\
				</nav>'
	,'accountSettingTpl': '<li class="dropdown">\
					<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-user"></i> {{= it.userName}} <span class="caret"></span></a>\
					<ul class="dropdown-menu" role="menu">\
						<li><a href="{{= it.link_path}}main/modify-pwd.html">修改密码</a></li>\
						<li class="divider"></li>\
						<li id="logout"><a href="javascript:void(0)">退出</a></li>\
					</ul>\
				</li>'
	,'menuTpl': '<ul>\
					{{~ it.data:item:index }}\
						<li {{? it.activeMenuId==item.id}}class="active"{{?}}><a href="{{= it.link_path }}{{= item.url }}" data-id="{{= item.id }}">{{= item.name }}</a></li>\
					{{~}}\
				</ul>'
	,'footerTpl':   '<footer class="page-footer">\
						<div class="container">\
							Copyright © 2016 XXX微商 浙ICP备XXXXXXXX号\
						</div>\
					</footer>'
};
module.exports = self_tpl;

