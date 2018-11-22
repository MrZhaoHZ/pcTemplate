var $ajax = require('../../common/ajax.js');
var httpURL = require('../../common/http-url.js');
$(function() {
	var eleTpl =    '<img src="{{= it.back_picture }}" alt="" />\
					{{~ it.list:item:index }}\
						{{? it.eleType[item.type].type=="title"}}\
						<span style="position: absolute;left: {{= item.app_x }};top: {{= item.app_y }};font-family:{{= it.fontFamilyFlag[item.type_face].code }};font-size:{{= item.font_size }}px;color:{{= item.font_color }};font-weight:{{? item.is_bold==1}}bold{{?}}">\
							{{? item.type==3}}{{= it.userInfo.authorization_no}}{{?}}\
							{{? item.type==4}}{{= it.userInfo.real_name}}{{?}}\
							{{? item.type==5}}{{= it.userInfo.wechat_id}}{{?}}\
							{{? item.type==6}}{{= it.userInfo.name}}{{?}}\
							{{? item.type==7 || item.type==10}}{{= it.userInfo.grade_name}}{{?}}\
							{{? item.type==8}}{{= it.userInfo.start_time.substr(0,10)}}{{?}}\
						</span>\
						{{?}}\
						{{? it.eleType[item.type].type=="img"}}\
						<img src="{{? item.type==1}}{{= it.imge}}{{?}}{{? item.type==2}}{{= it.userInfo.pic}}{{?}}" style="position: absolute;left: {{= item.app_x }};top: {{= item.app_y }};width: {{= item.width }}px;height: {{= item.height }}px;"></img>\
						{{?}}\
					{{~}}';
	var bookTabTpl = '{{~ it:item:index }}\
						<span class="{{? index==0}}active{{?}}" data-tab="{{= item.id}}">{{= item.name}}</span>\
					  {{~}}';
	
	var eleFlag = {
		'1': {
			'type': 'img',
			'name': '二维码'
		},
		'2': {
			'type': 'img',
			'name': '图像'
		},
		'3': {
			'type': 'title',
			'name': '授权编号'
		},
		'4': {
			'type': 'title',
			'name': '姓名'
		},
		'5': {
			'type': 'title',
			'name': '微信号'
		},
		'6': {
			'type': 'title',
			'name': '微信昵称'
		},
		'7': {
			'type': 'title',
			'name': '代理级别'
		},
		'10': {
			'type': 'title',
			'name': '代理级别'
		},
		'8': {
			'type': 'title',
			'name': '授权开始时间'
		},
		'9': {
			'type': 'title',
			'name': '授权结束时间'
		}
	}
	var eleType = {
		'1': {
			'type': 'img',
		},
		'2': {
			'type': 'img',
		},
		'3': {
			'type': 'title',
		},
		'4': {
			'type': 'title',
		},
		'5': {
			'type': 'title',
		},
		'6': {
			'type': 'title',
		},
		'7': {
			'type': 'title',
		},
		'10': {
			'type': 'title',
		},
		'8': {
			'type': 'title',
		},
		'9': {
			'type': 'title',
		}
	};
	var fontFamilyFlag = {
		'1': {
			'name': '黑体',
			'code': 'SimHei'
		},
		'2': {
			'name': '黑体加粗',
			'code': 'SimHei'
		},
		'3': {
			'name': '微软雅黑',
			'code': 'Microsoft YaHei'
		},
		'4': {
			'name': '微软雅黑加粗',
			'code': 'Microsoft YaHei'
		}
	};
	var agentId = httpURL.getQueryString('agentid');
	var bookId = httpURL.getQueryString('bookid');
	var userInfo = {};
	function getAgentIndo(){
		$ajax.post('/agent/agent_list/get_cert.do',{member_id: agentId}, function(data){
			if (data.success) {
				var memberInfo = data.data.member;
				var agentInfo = data.data.agent;
				userInfo.erweima = null;
				userInfo.pic = memberInfo.portrait_uri;
				userInfo.authorization_no = agentInfo.authorization_no;
				userInfo.real_name = memberInfo.real_name;
				userInfo.wechat_id = memberInfo.wechat_id;
				userInfo.name = memberInfo.name;
				userInfo.grade_name = agentInfo.grade_name;
				userInfo.start_time = agentInfo.start_time;
				getBookDetail(bookId);
			};
		});
	}
	function getBookDetail(id) {
		$ajax.post('/agent/certificate_template/get.do',{id: id}, function(data){
			if (data.success) {
				var bookInfo = data.data;
				bookInfo.fontFamilyFlag = fontFamilyFlag;
				bookInfo.eleType = eleType;
				bookInfo.eleFlag = eleFlag;
				bookInfo.userInfo = userInfo;
				$('#book-container').html(doT.template(eleTpl)(bookInfo));
			};
		});
	}
	getAgentIndo(1);
	$('#nav').on('click','span',function(){
		if(!$(this).hasClass('active')) {
			$('#book-container').html('');
			getBookDetail($(this).data('tab'));
		}
		$(this).addClass('active').siblings('span').removeClass('active');
	});
});

