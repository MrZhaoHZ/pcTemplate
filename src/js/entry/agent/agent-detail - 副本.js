var self_tpl = require('../../module/tpl/agent-management-tpl.js');
var httpURL = require('../../common/http-url.js');
var $ajax = require('../../common/ajax.js');
var api_path_config = require('../../../../tmp_path_config.js');
$(function() {
	var agentId = httpURL.getQueryString('id');
	var agentArea = null;
	var selectOptionTpl = '{{~ it.data:item:index }}\
								<option value="{{= item.code}}" {{? it.agentArea==item.code}}selected{{?}}>{{= item.name}}</option>\
							{{~}}';
	var optionChangeTpl = '{{~ it:item:index }}\
						<option value="{{= item.code}}">{{= item.name}}</option>\
					{{~}}';

	function getAgentDetail(){
		$ajax.post('/agent/agent_list/get_agent.do', {member_id: agentId}, function(data) {
			if(data.success){
				data.data.upload_path = api_path_config.upload_path;
				data.data.upload_path_h5 = api_path_config.upload_path_h5;
				$('#agency-detail').html(doT.template(self_tpl.agencyDetailTpl)(data.data))
			}
		});
	}
	getAgentDetail();
	//升级
	$('#right-bar-container').delegate('#upGradeBtn','click',function(){
		if($(this).hasClass('notsupport')){
			return;
		}
		// $ajax.ajaxPost('/.do', {id: agentId}, function(data) {
		// 	window.location.reload()
		// });
		layer.confirm('确定要执行操作吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(){
			$ajax.ajaxPost('/agent/agent_list/update_grade.do', {member_id: agentId}, function(data) {
				//$('#agency-detail').html(doT.template(self_tpl.agencyDetailTpl)(data.data))
				if(data.success){
					layer.msg('升级成功');
					// location.reload();
					getAgentDetail();
				} else {
					if(data.code == '30046' || data.code == '30052') {
						layer.msg(data.msg);
					}
				}
			});
		}, function(){
			return;
		 //  	$ajax.ajaxPost('/agent/agent_list/update.do', {member_id: agentId}, function(data) {
			// 	$('#agency-detail').html(doT.template(self_tpl.agencyDetailTpl)(data.data))
			// });
		});
	});
	//降级
	$('#right-bar-container').delegate('#downGradeBtn','click',function(){
		$ajax.ajaxPost('/agent/agent_list/demotion_grade.do', {member_id: agentId}, function(data) {
			if(data.success){
				layer.msg('降级成功');
				// window.location.reload()
				getAgentDetail();
			} else {
				if(data.code == '30068' || data.code == '30008') {
					layer.msg(data.msg);
				}
			}
		});
	});

	$('#right-bar-container').delegate('.limit-setting','click',function(){
		$ajax.ajaxPost('/rule/agent_rule.do', {member_id: agentId}, function(data) {
			if(data.success){
				data.data.upload_path = api_path_config.upload_path;
				$('#limit-setting-modal-body').html(doT.template(self_tpl.limitSetting)(data.data))
				$('#limit-setting-modal').modal('toggle');
			}
		});
	});
	$('#limit-setting-modal-body').on('keyup','.limit-num',function(){
		this.value = this.value.replace(/\D/g,'');
	});
	$('#save-limit-setting').click(function(){
		var saveData = {
			member_id: agentId,
			status: $('input[name="isOpen"]:checked').val(),
			type: $('input[name="limit-type"]:checked').val()
		}
		var list = [];
		$('#limit-settimg-tbody tr').each(function(){
			var item = {};
			item.sku_id = $(this).data('id');
			item.allowed_buy = $(this).find('[name=isHidden'+ item.sku_id + ']:checked').val();
			item.day_max = $(this).find('.limit-num').eq(0).val();
			item.week_max = $(this).find('.limit-num').eq(1).val();
			item.month_max = $(this).find('.limit-num').eq(2).val();
			if(item.day_max != '' || item.week_max != '' || item.month_max != '') {
				list.push(item);
			}
		});
		//日<周<月
		for(var i=0;i<list.length;i++){
			var temp = list[i];
			if(temp.day_max && temp.week_max &&parseInt(temp.day_max) > parseInt(temp.week_max)) {
				layer.msg('日限量不能大于周限量');
				//$('#limit-setting-modal').modal('toggle');
				return;
			}
			if(temp.day_max && temp.month_max && parseInt(temp.day_max) > parseInt(temp.month_max)) {
				layer.msg('日限量不能大于月限量');
				// $('#limit-setting-modal').modal('toggle');
				return;
			}
			if(temp.week_max && temp.month_max && parseInt(temp.week_max) > parseInt(temp.month_max)) {
				layer.msg('月限量不能大于周限量');
				// $('#limit-setting-modal').modal('toggle');
				return;
			}
		}
		saveData.agent_rule_list = list;
		$ajax.ajaxPost('/rule/save_agent_rule.do', {content: JSON.stringify(saveData)}, function(data) {
			if(data.success){
				window.location.reload();
			}
		});
	});
	//保存代理商信息
	$('#save-info-setting').click(function(){
		if($('#realName').val().trim() === ''){
			layer.msg('姓名不能为空!');
			return;
		}
		if($('#mobile').val().trim() === ''){
			layer.msg('手机号不能为空!');
			return;
		}
		if($('#wechatId').val().trim() === ''){
			layer.msg('微信号不能为空!');
			return;
		}
		if($('#nickName').val().trim() === ''){
			layer.msg('昵称不能为空!');
			return;
		}
		if($('#address').val().trim() === ''){
			layer.msg('地址不能为空!');
			return;
		}
		var saveData = {
			member_id: agentId,
			real_name: $('#realName').val(),
			mobile: $('#mobile').val(),
			wechat_id: $('#wechatId').val(),
			province_code: $('#province option:checked').val(),
			city_code: $('#city option:checked').val(),
			area_code: $('#district option:checked').val(),
			address: $('#address').val(),
			zip: $('#zip').val(),
			remark: $('#remark').val()
		}
		$ajax.ajaxPost('/agent/agent_list/update.do', saveData, function(data) {
			if(data.success){
				window.location.reload();
			} else {
				if(data.code == '30009'){
					layer.msg(data.msg);
				}
			}
		});
	})
	$('#right-bar-container').delegate('.info-edit','click',function(){
		$ajax.post('/agent/agent_list/get_agent.do', {member_id: agentId}, function(data) {
			if(data.success){
				$('#agency-info-edit-modal table').html(doT.template(self_tpl.editAgentInfoTpl)(data.data));
				agentArea = data.data.member_address_d_t_o;
				initArea(agentArea);
				getGrade(data.data.agent_grade);
				$('#agency-info-edit-modal').modal('toggle');
			}
		});
	});
	$('#right-bar-container').delegate('#cancel-autho','click', function(){
		var auth_status = $(this).data('status') === 0 ? 1 : 0;
		layer.confirm('确定要执行操作吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(){
			$ajax.ajaxPost('/agent/agent_list/update_status.do', {member_id: agentId,auth_status:auth_status}, function(data) {
				//$('#agency-detail').html(doT.template(self_tpl.agencyDetailTpl)(data.data))
				if(data.success){
					location.reload();
				}
			});
		}, function(){
			return;
		 //  	$ajax.ajaxPost('/agent/agent_list/update.do', {member_id: agentId}, function(data) {
			// 	$('#agency-detail').html(doT.template(self_tpl.agencyDetailTpl)(data.data))
			// });
		});
	});
	$('#right-bar-container').delegate('#translation-btn','click',function(){
		$ajax.ajaxPost('/agent/agent_list/get_list.do', {}, function(data) {
			$('#translation-modal .modal-body').html(doT.template(self_tpl.translationBody)(data.data))
			$('#translation-modal').modal('show');
		});
	});
	$('#translation-modal').delegate('.movebtn','click',function(){
		var filterCondition = {
			real_name: $('#translation-modal .movename').val(),
			mobile: $('#translation-modal .movephone').val(),
			page_size: 20,
			current_page: 1
		}
		$ajax.post('/agent/agent_list/get_list.do',filterCondition,function(data){
			if(data.success){
				if(data.data.datas){
					$('#translation-modal .modal-body').html(doT.template(self_tpl.translationBody)(data.data))
				} else {
					// $('#nodata-tips').show();
					// $('#agency-list').html('');
					// $("#pager").hide();
				}
			}
		});
	});
	$('#save-translation-btn').click(function(){
		if($('input[name="isMove"]:checked').length == 0){
			layer.msg('请选择需要平移的代理商');
		} else {
			var parent_id = $('input[name="isMove"]:checked').val();
			var member_id = agentId;
			layer.confirm('确定要执行操作吗？', {
			  btn: ['确定','取消'] //按钮
			}, function(){
				$ajax.ajaxPost('/agent/agent_list/movement.do', {member_id: member_id,parent_member_id:parent_id}, function(data) {
					//$('#agency-detail').html(doT.template(self_tpl.agencyDetailTpl)(data.data))
					if(data.success){
						layer.msg('平移成功');
						setTimeout(function(){
							location.reload();
						},2000)
					} else {
						if(data.code == '30046') {
							layer.msg(data.msg);
						}
					}
				});
			}, function(){
				return;
			 //  	$ajax.ajaxPost('/agent/agent_list/update.do', {member_id: agentId}, function(data) {
				// 	$('#agency-detail').html(doT.template(self_tpl.agencyDetailTpl)(data.data))
				// });
			});
		}
	});
	// $('#filter-btn').click(function(){
	// 	filterCondition = {
	// 		team: $('#all-team option:checked').val(),
	// 		downLevel: $('#all-team-child option:checked').val(),
	// 		type: $('#isAll option:checked').val(),
	// 		agent_grade: $('#all-level option:checked').val(),
	// 		name: $('#nickname').val(),
	// 		real_name: $('#name').val(),
	// 		mobile: $('#phone').val(),
	// 		wechat_id: $('#wechatID').val(),
	// 		auth_number: $('#authoCode').val(),
	// 		authon_personalid: $('#idnumber').val(),
	// 		province_code: $('#area-province option:checked').val(),
	// 		city_code: $('#area-city option:checked').val(),
	// 		area_code: $('#area-district option:checked').val(),
	// 		page_size: 20,
	// 		current_page: 1
	// 	}
	// 	getAgencyList(1);
	// });
	// $('#edit-area').delegate('#save-dep','click',function(){
	// 	var param = {
	// 		id: $('#dep-id').val(),
	// 		name: $('#dep-name').val(),
	// 		sex: $('input[name="empSex"]:checked').val(),
	// 		depId: $('#depSelect option:checked').val(),
	// 		userId: $('#userSelect option:checked').val()
	// 	}
	// 	$.post('/saveDepInfo.do', param, function(data) {
	// 		if(data.isSuccess) {
	// 			location.href = 'employee.html';
	// 		} else {
	// 			layer.msg(data.msg);
	// 		}
	// 	});
	// });
	function initArea(agentArea) {
		$ajax.post('/agent/get_delivery.do',{level:1},function(data){
			if(data.success){
				data.agentArea = agentArea.province_code;
				$('#agency-info-edit-modal .area-province').html(doT.template(selectOptionTpl)(data))
				initCity(agentArea)
			}
		});
		function initCity(agentArea) {
			$ajax.post('/agent/get_delivery.do',{level:2,code:agentArea.province_code},function(data){
				if(data.success){
					data.agentArea = agentArea.area_code;
					$('#agency-info-edit-modal .area-city').html(doT.template(selectOptionTpl)(data))
					initDistrict(agentArea);
				}
			});
		}
		function initDistrict(agentArea) {
			$ajax.post('/agent/get_delivery.do',{level:3,code:agentArea.city_code},function(data){
				if(data.success){
					data.agentArea = agentArea.area_code;
					$('#agency-info-edit-modal .area-district').html(doT.template(selectOptionTpl)(data))
				}
			});
		}
	}
	$('#agency-info-edit-modal').delegate('.area-province','change',function(){
		if($(this).val() === '0') {
			$('#agency-info-edit-modal .area-city').html('<option value="0">所有市</option>')
			$('#agency-info-edit-modal .area-district').html('<option value="0">所有区县</option>');
			return;
		}
		$ajax.post('/agent/get_delivery.do',{level:2,code:$(this).val()},function(data){
			$('#agency-info-edit-modal .area-city').html(doT.template(optionChangeTpl)(data.data))
			$ajax.post('/agent/get_delivery.do',{level:3,code:data.data[0].code},function(data){
				$('#agency-info-edit-modal .area-district').html(doT.template(optionChangeTpl)(data.data))
			});
		});
	});
	$('#agency-info-edit-modal').delegate('.area-city','change',function(){
		if($(this).val() === '0') {
			$('#agency-info-edit-modal .area-district').html('<option value="0">所有区县</option>');
			return;
		}
		$ajax.post('/agent/get_delivery.do',{level:3,code:$(this).val()},function(data){
			$('#agency-info-edit-modal .area-district').html(doT.template(optionChangeTpl)(data.data))
		});
	});
	function getGrade(agent_grade){
		var optionTpl = '{{~ it.data:item:index }}\
								<option value="{{= item.id}}" {{? it.agent_grade==item.id}}selected{{?}}>{{= item.name}}</option>\
							{{~}}';
		$ajax.post('/agent/agent_grade/list.do',null,function(data){
			if(data.success) {
				data.agent_grade = agent_grade;
				$('#agent_grade').html(doT.template(optionTpl)(data));
			}
		});
	};

	$('#right-bar-container').delegate('.see-autho-book','click',function(){
		var bookId = 107;//韩束授权书id
		layer.open({
		  type: 2,
		  title: '预览',
		  shadeClose: true,
		  shade: 0.8,
		  area: ['414px', '736px'],
		  content: 'agent-autho-book.html?agentid=' + agentId + '&bookid=' + bookId//iframe的url
		}); 
	});

	$('#right-bar-container').delegate('.layer-img','click',function(){
		// var layerImg = $(this);
		layer.open({
		  type: 1,
		  title: false,
		  closeBtn: 0,
		  area: '516px',
		  skin: 'layui-layer-nobg', //没有背景色
		  shadeClose: true,
		  content: $('#payment_voucher_layer')
		});
	});
	$('#right-bar-container').delegate('.picture_front_layer','click',function(){
		// var layerImg = $(this);
		layer.open({
		  type: 1,
		  title: false,
		  closeBtn: 0,
		  area: '516px',
		  skin: 'layui-layer-nobg', //没有背景色
		  shadeClose: true,
		  content: $('#picture_front_layer')
		});
	});
});
