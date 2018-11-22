/**
 *  初始化页面顶部模块信息和侧边栏信息
 *
**/
var self_tpl = require('../module/tpl/main-tpl.js');
var $ajax = require('../common/ajax.js');
var tmp_path_config = require('../../../tmp_path_config.js');
$(function(){
	//初始化顶部模块导航
	$ajax.get('/roleFunction/getMenu.do', {level: 1}, function(data) {
		if(data.success) {
			var activeNavId = $('input[name="nav-active"]').val();
			data.activeNavId = activeNavId;
			data.link_path = tmp_path_config.link_path;
			$('input[name="nav-active"]').before(doT.template(self_tpl.navTpl)(data));
			initAccountSetting();
			initMenu(activeNavId);
		}
	});
	//初始化用户信息栏
	function initAccountSetting() {
		// $.cookie('userName','admin');
		var userId = $.cookie('userId'),
			userName = $.cookie('userName');
		$('#account-setting').html(doT.template(self_tpl.accountSettingTpl)({userName:userName,link_path:tmp_path_config.link_path}));
		$('#account-setting').hover(function(){
			$(this).find('.dropdown').addClass('open');
		},function(){
			$(this).find('.dropdown').removeClass('open');
		});

		$('#logout').click(function(){
			$ajax.post('/logout.do', {}, function(data) {
				if(data.success) {
					$.cookie('userId', null, {path: '/'});
					$.cookie('userName', null, {path: '/'});
					location.href = '../login.html';
				}
			});
		});
	}
	//初始化侧边菜单
	function initMenu(activeNavId) {
		$ajax.get('/roleFunction/getMenu.do', {level: 2,value:activeNavId}, function(data) {
			if(data.success) {
				var activeMenuId = $('input[name="menu-active"]').val();
				if(activeMenuId == '0201') {
					activeMenuId = '0203';
				}
				data.activeMenuId = activeMenuId;
				data.link_path = tmp_path_config.link_path;
				$('#menu-container').html(doT.template(self_tpl.menuTpl)(data));
				initFooter();
			}
		});
	}

	function initFooter() {
		$('body').append(doT.template(self_tpl.footerTpl)());
	}
});