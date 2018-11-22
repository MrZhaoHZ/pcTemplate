var self_tpl = require('../../module/tpl/autho-book-tpl.js');
var $ajax = require('../../common/ajax.js');
var imgUpload = require('../../common/img-upload.js');
var localStorageTool = require('../../common/localStorage.js');
var httpURL = require('../../common/http-url.js');
var api_path_config = require('../../../../tmp_path_config.js');
$(function(){
	// var eleIndexArray = ["1","2","3","4","5","6","7","8","9"];
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
	//图片元素宽高缓存 {'1':{'width':**,'height':**}}
	var imgCache = {};
	//文字元素格式缓存 {'3':{'fontFamily':**,'fontSize':**,'color':**}}
	var titleCache = [];
	var saveData = {};
	var itemList = [];
	var bookId = httpURL.getQueryString('id');
	if(!bookId){
		$('#right-bar-container').show();
		initDrag();
	} else {
		$ajax.post('/agent/certificate_template/get.do',{id:bookId},function(data){
			if(data.success) {
				var bookData = data.data;
				// data.data.eleIndexArray = eleIndexArray;
				$('#bookName').val(bookData.name);
				var tempimg = new Image();
				tempimg.src = bookData.back_picture;
				setTimeout(function(){
					$('#bookImg').css({
						'background': 'url(' + bookData.back_picture + ') 0 0 no-repeat',
						'background-size': 'contain',
						'height': tempimg.height
					}).attr('bookimg',bookData.back_picture);
					// $('#book-container').prepend('<div class="book-img" id="bookImg" 				="' + bookData.bookImg + '" style="background: url(' + bookData.bookImg + ') 0 0 no-repeat;background-size: contain;"></div>');
					// $('#right-bar-container').html(doT.template(self_tpl.bookDetail)(data.data));
					var eleData = bookData.list;
					for(var i=0;i<eleData.length;i++) {
						$('#ele' + eleData[i].type).remove();
					}
					bookData.eleType = eleType;
					bookData.eleFlag = eleFlag;
					var innerHTML = doT.template(self_tpl.eleAbosute)(bookData);
					$('#img-format-container').before(innerHTML);
					$('#book-container .Hd').removeClass('Hd');
					$('#right-bar-container').show();
					initDrag();
					initCache(eleData);
				},1000);
			}
		});
	}
	
	function initDrag(eleData) {
		var $draggables = $('.draggable').draggabilly({
			// contain to parent element
			containment: true
		});
	}
	function initCache(eleData) {
		for(var i=0;i<eleData.length;i++) {
			if(eleType[eleData[i].type].type === 'img') {
				imgCache[eleData[i].type] = {};
				imgCache[eleData[i].type].width = eleData[i].width;
				imgCache[eleData[i].type].height = eleData[i].height;
			}
			if(eleType[eleData[i].type].type === 'title') {
				titleCache[eleData[i].type] = {};
				titleCache[eleData[i].type].fontFamily = eleData[i].type_face;
				titleCache[eleData[i].type].fontSize = eleData[i].font_size;
				titleCache[eleData[i].type].color = eleData[i].font_color;
			}
		}
	}
	function filterElem() {
		$('#book-container .draggable').each(function(){
			var item = {};
			var flagId = $(this).data('id');
			if(!ifExists($('#ele'+flagId))) {
				return true;
			}
			item.type = flagId;
			item.id = flagId;
			// item.type = eleFlag[flagId].type;
			if(eleFlag[flagId].type === 'img') {
				formatImgEleFun(item);
				positionFun($('#ele'+flagId),item);
			}
			if(eleFlag[flagId].type === 'title') {
				formatTitleEleFun(item);
				positionFun($('#ele'+flagId),item);
			}
			itemList.push(item);
		});
	}
	function formatImgEleFun(item) {
		var temp = imgCache[item.id];
		if(!temp){
			item.width = '50';
			item.height = '50';
		} else {
			item.width = imgCache[item.id].width;
			item.height = imgCache[item.id].height;
		}
	}
	function formatTitleEleFun(item) {
		var temp = titleCache[item.id];
		if(!temp){
			item.type_face = '1';
			item.font_size = '14';
			item.is_bold = "0";
			item.font_color = '#000000';
			return;
		} else {
			item.type_face = temp.fontFamily;
			item.font_size = temp.fontSize;
			item.is_bold = temp.fontWeight ? temp.fontWeight : "0";
			item.font_color = temp.color;
		}
	}
	//判断元素是否拖动到有效位置
	function ifExists(elem) {
		var imgContainerWidth = $('#book-container .book-img').width();
		var position_left = elem.position().left;
		if(position_left < imgContainerWidth) {
			return true;
		}
		return false;
	}
	function positionFun(elem, item) {
		var bookContainerWidth = $('#book-container').width();
		var bookContainerHeight = $('#book-container').height();
		var imgContainerWidth = $('#book-container .book-img').width();
		var imgContainerHeight = $('#book-container .book-img').height();
		// console.log('realName position:' + $('#realName').position());
		var position_left = elem.position().left;
		var position_top = elem.position().top;
		// console.log('realName position: left:' + realName_left*100/bookContainerWidth + '%')
		// console.log('realName position: top:' + realName_top*100/bookContainerHeight + '%');
		// console.log('realName mobile position: left:' + realName_left*100/imgContainerWidth + '%')
		// console.log('realName mobile position: top:' + realName_top*100/imgContainerHeight + '%');
		// console.log('****************************************');
		// console.log('wechatId position:' + $('#wechatId').position());
		// item.x = (position_left*100/bookContainerWidth).toFixed(2) + '%';
		// item.y = (position_top*100/bookContainerHeight).toFixed(2) + '%';
		// item.app_x = (position_left*100/imgContainerWidth).toFixed(2) + '%';
		// item.app_y =  (position_top*100/imgContainerHeight).toFixed(2) + '%';
		item.x = position_left;
		item.y = position_top;
		item.app_x = position_left;
		item.app_y = position_top;
	}
	// var $draggables = $('.draggable').draggabilly({
	//     // contain to parent element
	//     containment: true
	// });

	$('#right-bar-container').delegate('#save-btn','click',function(){
		if(!$('#bookName').val()) {
			layer.msg('授权书名称不能为空');
			return;
		}
		saveData = {};
		itemList = [];
		// localStorageTool.removeItem('authoBookPreview');
		if(bookId){
			saveData.id = bookId;
		}
		saveData.name = $('#bookName').val();
		saveData.back_picture = $('#bookImg').attr('bookimg');
		filterElem();
		saveData.list = itemList;
		console.log(saveData);
		// localStorageTool.setItem("authoBookPreview", JSON.stringify(saveData));  
		$ajax.post('/agent/certificate_template/save.do',{content:JSON.stringify(saveData)},function(data){
			if(data.success) {
				location.href = 'autho-book-list.html';
			}
		});
	});
	$('#right-bar-container').delegate('#preview-btn','click',function(){
		saveData = {};
		itemList = [];
		localStorageTool.removeItem('authoBookPreview');
		saveData.name = $('#bookName').val();
		saveData.back_picture = $('#bookImg').attr('bookimg');
		filterElem();
		saveData.list = itemList;
		localStorageTool.setItem("authoBookPreview", saveData);  
		// layer.open({
		//   type: 2,
		//   title: '预览',
		//   shadeClose: true,
		//   shade: 0.8,
		//   area: ['414px', '736px'],
		//   content: 'autho-book-mobile.html?type=pc-preview'//iframe的url
		// }); 

		$ajax.post('/agent/certificate_template/previewDetails.do',{content:JSON.stringify(saveData)},function(data){
			if(data.success) {
				$('#preview-layer').remove();
				$('.tools').append('<div id="preview-layer" style="display:none;"><img src="' + api_path_config.upload_path + data.data + '" style="width:100%;"></div>');
				setTimeout(function(){
					layer.open({
					  type: 1,
					  title: false,
					  closeBtn: 1,
					  area: '640px',
					  skin: 'layui-layer-nobg', //没有背景色
					  shadeClose: true,
					  content: $('#preview-layer')
					});
				},1000);
			}
		});
	});
	// $('#book-container .book-img').css({
	// 	'background': 'url("http://192.168.8.143:3002/temp/images/book.jpg") 0 0 no-repeat',
	// 	'background-size': 'contain'
	// });
	// $('#bookImg').attr('bookimg','http://192.168.8.143:3002/temp/images/book.jpg');
	$('#right-bar-container').delegate('#bg-btn','click',function(){
		imgUpload.init(function(value){
			var imgUrl = api_path_config.upload_path + value;
			var tempimg = new Image();
			tempimg.src = imgUrl;
			setTimeout(function(){
				if(tempimg.width != 640){
					layer.msg('请使用宽度为640px的图片...');
					return;
				}
				// tempimg.src = "http://imgtest.hanshuweishang.com/imgtest-hsws/ex/20170612160436933.jpg";
				$('#book-container .book-img').css({
					'background': 'url("' + imgUrl + '") 0 0 no-repeat',
					'background-size': 'contain',
					//'width': img.width,
					'height': tempimg.height
				});
				$('#bookImg').attr('bookimg',imgUrl);
			},1000);
		},false);
	});
	
	$('INPUT.minicolors').minicolors({
		defaultValue: '#000000',
		// change: function(hex, opacity) {
		// 	console.log(hex + ' - ' + opacity);
		// },
		hide: function() {
			var selectedEleId = $('#titleEleSelect').val();
			if(titleCache[selectedEleId]) {
				titleCache[selectedEleId].color = $(this).val();
			}
		}
	});
	// $('INPUT.minicolors').minicolors('value',['#eb0e0e']);
	$('#img-format-container').delegate('#imgEleSelect','change',function(){
		var selectedEleId = $(this).val();
		if(selectedEleId != '0') {
			if(imgCache[selectedEleId]) {
				$('#img-format-container .width-input').val(imgCache[selectedEleId].width);
				$('#img-format-container .height-input').val(imgCache[selectedEleId].height);
			} else {
				imgCache[selectedEleId] = {};
				imgCache[selectedEleId].width = '50';
				imgCache[selectedEleId].height = '50';
				$('#img-format-container .width-input').val('50');
				$('#img-format-container .height-input').val('50');
			}
		} else {
			$('#img-format-container .width-input').val('');
			$('#img-format-container .height-input').val('');
		}
	});

	$('#img-format-container').delegate('input','change',function(){
		//更新imgCache
		var selectedEleId = $('#imgEleSelect').val();
		if(selectedEleId != '0') {
			if(!imgCache[selectedEleId]) {
				imgCache[selectedEleId] = {};
			}
			if($(this).hasClass('width-input')){
				imgCache[selectedEleId].width = $(this).val();
			}
			if($(this).hasClass('height-input')){
				imgCache[selectedEleId].height = $(this).val();
			}
		}
	});
	/**********************************/
	$('#title-format-container').delegate('#titleEleSelect','change',function(){
		var selectedEleId = $(this).val();
		if(selectedEleId != '0') {
			var temp = titleCache[selectedEleId];
			if(temp) {
				// temp.fontFamily = $('#fontFamilySelect').val();
				// temp.fontSize = $('#fontFamilySelect').val();
				$('#fontFamilySelect option[value="' + temp.fontFamily + '"]').prop('selected','selected');
				$('#fontSizeSelect option[value="' + temp.fontSize + '"]').prop('selected','selected');
				$('INPUT.minicolors').minicolors('value',[temp.color]);
			} else {
				$('#fontFamilySelect option[value="1"]').prop('selected','selected');
				$('#fontSizeSelect option[value="14"]').prop('selected','selected');
				$('INPUT.minicolors').minicolors('value',['#000000']);
				titleCache[selectedEleId] = {};
				titleCache[selectedEleId].fontFamily = '1';
				titleCache[selectedEleId].fontSize = '14';
				titleCache[selectedEleId].color = '#000000';
			}
		} else {
			$('#fontFamilySelect option[value="0"]').prop('selected','selected');
			$('#fontSizeSelect option[value="0"]').prop('selected','selected');
			$('INPUT.minicolors').minicolors('value',['#000000']);
		}
	});
	$('#title-format-container').delegate('.fontFamilySelect,.fontSizeSelect','change',function(){
		//titleCache
		var selectedEleId = $('#titleEleSelect').val();
		if(selectedEleId != '0') {
			if(!titleCache[selectedEleId]) {
				titleCache[selectedEleId] = {};
			}
			if($(this).hasClass('fontFamilySelect')){
				titleCache[selectedEleId].fontFamily = $(this).val();
				if($(this).val() === '2' || $(this).val() === '4') {
					titleCache[selectedEleId].fontWeight = '1';
				}
			}
			if($(this).hasClass('fontSizeSelect')){
				titleCache[selectedEleId].fontSize = $(this).val();
			}
		}
	});
	$('#title-format-container').delegate('input','change',function(){
		//更新titleCache
		var selectedEleId = $('#titleEleSelect').val();
		if(selectedEleId != '0') {
			if(!titleCache[selectedEleId]) {
				titleCache[selectedEleId] = {};
			}
			if($(this).hasClass('minicolors')){
				titleCache[selectedEleId].color = $(this).val();
			}
		}
	});
});