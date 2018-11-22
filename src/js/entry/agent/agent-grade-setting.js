var self_tpl = require('../../module/tpl/agent-grade-tpl.js');
var $ajax = require('../../common/ajax.js');
var imgUpload = require('../../common/img-upload.js');
var httpURL = require('../../common/http-url.js');
var api_path_config = require('../../../../tmp_path_config.js');
$(function(){
	var agentId = httpURL.getQueryString('id');
	var ue1;
	var ue2;
	// UE.Editor.prototype._bkGetActionUrl = UE.Editor.prototype.getActionUrl;
	// UE.Editor.prototype.getActionUrl = function(action) {
	// 	if (action == 'uploadimage' || action == 'uploadscrawl' || action == 'uploadvideo') {
	// 		// return '${ctx}/manage/attach/uploadFile.do';
	// 		return 'http://192.168.8.143:8061/leaf-manager-web/file/uploadFile.do';
	// 	} else {
	// 		return this._bkGetActionUrl.call(this, action);
	// 	}
	// }
	if(!agentId) {
		$('#right-bar-container').show();
		initParentLevel();
		ue1 = UE.getEditor('application_des', {
			toolbars: [[
				// 'fullscreen', 'source', '|', 'undo', 'redo', '|',
				'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
				// 'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
				, 'fontfamily', 'fontsize', '|',
				// 'directionalityltr', 'directionalityrtl', 'indent', '|',
				'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify'//,
				//'simpleupload'
				// 'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
				// 'simpleupload', 'insertimage', 'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'map', 'gmap', 'insertframe', 'insertcode', 'webapp', 'pagebreak', 'template', 'background', '|',
				// 'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
				// 'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
				// 'print', 'preview', 'searchreplace', 'drafts', 'help'
			]],
			autoHeightEnabled: false,
			autoFloatEnabled: true,
			initialFrameHeight: 100,
			initialFrameWidth:500,
			serverUrl: api_path_config.ueupload_path
		});
		ue2 = UE.getEditor('upgrade_des', {
			toolbars: [[
				// 'fullscreen', 'source', '|', 'undo', 'redo', '|',
				'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
				// 'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
				, 'fontfamily', 'fontsize', '|',
				// 'directionalityltr', 'directionalityrtl', 'indent', '|',
				'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify'//,
				//'simpleupload'
				// 'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
				// 'simpleupload', 'insertimage', 'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'map', 'gmap', 'insertframe', 'insertcode', 'webapp', 'pagebreak', 'template', 'background', '|',
				// 'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
				// 'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
				// 'print', 'preview', 'searchreplace', 'drafts', 'help'
			]],
			autoHeightEnabled: false,
			autoFloatEnabled: true,
			initialFrameHeight: 100,
			initialFrameWidth:500
		});
	} else {
		$ajax.ajaxPost('/agent/agent_grade/get.do', {id: agentId}, function(data) {
			if(data.success) {
				$('#right-bar-container').html(doT.template(self_tpl.gradeSettingTpl)(data.data));
				initCanDevelepLevel(agentId);
				ue1 = UE.getEditor('application_des', {
					toolbars: [[
						// 'fullscreen', 'source', '|', 'undo', 'redo', '|',
						'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
						// 'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
						, 'fontfamily', 'fontsize', '|',
						// 'directionalityltr', 'directionalityrtl', 'indent', '|',
						'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify'//,
						//'simpleupload'
						// 'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
						// 'simpleupload', 'insertimage', 'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'map', 'gmap', 'insertframe', 'insertcode', 'webapp', 'pagebreak', 'template', 'background', '|',
						// 'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
						// 'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
						// 'print', 'preview', 'searchreplace', 'drafts', 'help'
					]],
					autoHeightEnabled: false,
					autoFloatEnabled: true,
					initialFrameHeight: 100,
					initialFrameWidth:500
				});
				ue2 = UE.getEditor('upgrade_des', {
					toolbars: [[
						// 'fullscreen', 'source', '|', 'undo', 'redo', '|',
						'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
						// 'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
						, 'fontfamily', 'fontsize', '|',
						// 'directionalityltr', 'directionalityrtl', 'indent', '|',
						'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify'//,
						//'simpleupload'
						// 'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
						// 'simpleupload', 'insertimage', 'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'map', 'gmap', 'insertframe', 'insertcode', 'webapp', 'pagebreak', 'template', 'background', '|',
						// 'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
						// 'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
						// 'print', 'preview', 'searchreplace', 'drafts', 'help'
					]],
					autoHeightEnabled: false,
					autoFloatEnabled: true,
					initialFrameHeight: 100,
					initialFrameWidth:500
				});
				ue1.ready(function() {
					ue1.setContent(data.data.application_des, false);
				});
				ue2.ready(function() {
					ue2.setContent(data.data.upgrade_des, false);
				});
				$('#right-bar-container').show();
			}
		});
	}
	//新建，所属等级
	function initParentLevel() {
		$ajax.ajaxPost('/agent/agent_grade/parent.do', null, function(data) {
			$('#parent_id').html(doT.template(self_tpl.optionTpl)(data.data));
		});
	}
	//编辑，可招募等级
	function initCanDevelepLevel(id) {
		$ajax.ajaxPost('/agent/agent_grade/allow.do', {id:id}, function(data) {
			$('#allow_grade').html(doT.template(self_tpl.allow_grade)(data.data));
		});
	}
	function subLevel() {
		$ajax.ajaxPost('/agent/agent_grade/list.do', null, function(data) {
			$('#allow_grade').html(doT.template(self_tpl.subLevelTpl)(data.data));
		});
	}
	$('#right-bar-container').delegate('#price-tab','focus',function(){
		imgUpload.init(imgUploadAfter);
	});
	$('#right-bar-container').delegate('#tips-close','click',function(){
		$(this).closest('.tips').remove();
	});
	function imgUploadAfter(value) {
		$('#price-tab').val(value);
	}
	var valiMsg = '';
	function validateForm() {
		//正数，支持两位小数
		function sumValidate(value) {
			var isValid = false;
			var re = /^\d{1,8}(\.(\d{1,2})?)?$/;
			if(re.test(value)){
				isValid = true;
			};
			return isValid;
		}
		if($('#level_name').val() === '') {
			valiMsg = '请输入级别名称！';
			return;
		}
		if($('#auth_amount').val() === '') {
			valiMsg = '请输入授权金额！';
			return;
		} else {
			if(!sumValidate($('#auth_amount').val())) {
				valiMsg = '授权金额必须为正数(支持两位小数)';
				return;
			}
		}
		if($('#upgrade_amount').val() === '') {
			valiMsg = '请输入升级金额！';
			return;
		} else {
			if(!sumValidate($('#upgrade_amount').val())) {
				valiMsg = '升级金额必须为正数(支持两位小数)';
				return;
			}
		}
		if(!sumValidate($('#warning_line').val())) {
			valiMsg = '预警线必须为正数(支持两位小数)';
			return;
		}
	}
	$('#right-bar-container').delegate('#save-btn','click',function(){
		// alert(ue.getContent())
		valiMsg = '';
		validateForm()
		if(valiMsg) {
			layer.msg(valiMsg);
			return;
		}
		var param = {
			name: $('#level_name').val(),
			auth_amount: $('#auth_amount').val(),
			upgrade_amount: $('#upgrade_amount').val(),
			allow_shipment: $('#allow_shipment').is(':checked') ? 0 : 1,
			allow_upgrade: $('#allow_update option:checked').val(),
			status: $('#status option:checked').val(),
			application_des: ue1.getContent(),
			upgrade_des: ue2.getContent(),
			price_uri: $('#price-tab').val(),
			need_idcard: $('#need_idcard').is(':checked') ? 0 : 1,
			payment_voucher: $('#payment_voucher').is(':checked') ? 0 : 1,
			parent_id: $('#parent_id option:checked').val(),
			warning_line: $('#warning_line').val()
		}
		if(agentId) {
			param.id = agentId;
			//可招募等级
			var allowGrade = [];
			$('#allow_grade .item:checked').each(function(){
				allowGrade.push($(this).val());
			});
			param.allow_grade = allowGrade.join('#');
		}
		$ajax.ajaxPost('/agent/agent_grade/save.do', param, function(data) {
			if(data.success) {
				location.href = 'agent-grade-management.html';
			} else {
				if(data.code === '40001'){
					layer.msg(data.msg);
				}
			}
		});
	});
});