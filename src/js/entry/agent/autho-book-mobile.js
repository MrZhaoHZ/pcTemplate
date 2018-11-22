// var self_tpl = require('../../module/tpl/agent-intention-tpl.js');
var $ajax = require('../../common/ajax.js');
var httpURL = require('../../common/http-url.js');
var localStorageTool = require('../../common/localStorage.js');
var eleTpl = 	'<img src="{{= it.back_picture }}" alt="" />\
				{{~ it.list:item:index }}\
					{{? it.eleType[item.type].type=="title"}}\
					<span style="position: absolute;left: {{= item.app_x }};top: {{= item.app_y }};font-family:{{= it.fontFamilyFlag[item.type_face].code }};font-size:{{= item.font_size }}px;color:{{= item.font_color }};font-weight:{{? item.is_bold==1}}bold{{?}}">{{= it.eleFlag[item.type].name }}</span>\
					{{?}}\
					{{? it.eleType[item.type].type=="img"}}\
					<img src="../../images/tuxiang.png" style="position: absolute;left: {{= item.app_x }};top: {{= item.app_y }};width: {{= item.width }}px;height: {{= item.height }}px;"></img>\
					{{?}}\
				{{~}}';
$(function(){
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
	var bookId = httpURL.getQueryString('id');
	if(bookId) {
		$ajax.post('/agent/certificate_template/get.do',{id:bookId},function(data){
			data.data.fontFamilyFlag = fontFamilyFlag;
			data.data.eleType = eleType;
			data.data.eleFlag = eleFlag;
			$('#book-container').html(doT.template(eleTpl)(data.data));
		});
	} else {
		var previewData = localStorageTool.getItem("authoBookPreview");
		// previewData.imgSrc = 'http://192.168.8.143:3000/images/bg.png';
		previewData.fontFamilyFlag = fontFamilyFlag;
		previewData.eleType = eleType;
		previewData.eleFlag = eleFlag;
		$('#book-container').html(doT.template(eleTpl)(previewData));
	}
});