/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(38);


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

	var api_path_config = __webpack_require__(4);
	function redirectURL() {
		location.href = 'http://' + api_path_config.bssdomain + '/leaf_manager_web/static/html/login.html';
	}
	function ajaxPost(url,param,callback) {
		$.post(api_path_config.api_path_1 + url,param,function(data){
			// if(data.isLogin) {
				// if(typeof data != 'object') {
				// 	callback(JSON.parse(data));
				// } else {
				// 	callback(data);
				// }
			// } else {
				// redirectURL();
			// }
			loginJudge(data, callback);
		});
	}

	function ajaxGet(url,param,callback) {
		$.get(api_path_config.api_path_1 + url,param,function(data){
			// if(data.isLogin) {
				// if(typeof data != 'object') {
				// 	callback(JSON.parse(data));
				// } else {
				// 	callback(data);
				// }
			// } else {
				
			// }
			loginJudge(data, callback);
		});
	}


	function ajaxPost4Autho(url,param,callback) {
		$.post(api_path_config.api_path_2 + url,param,function(data){
			// if(data.isLogin) {
				// if(typeof data != 'object') {
				// 	callback(JSON.parse(data));
				// } else {
				// 	callback(data);
				// }
			// } else {
				// redirectURL();
			// }
			loginJudge(data, callback);
		});
	}
	function ajaxGet4Autho(url,param,callback) {
		$.get(api_path_config.api_path_2 + url,param,function(data){
			// if(data.isLogin) {
				// if(typeof data != 'object') {
				// 	callback(JSON.parse(data));
				// } else {
				// 	callback(data);
				// }
			// } else {
				// redirectURL();
			// }
			loginJudge(data, callback);
		});
	}
	//登录跨域ajax跳转
	function ajaxGet4AuthoCR(url,param,callback) {
		$.ajax({
	        type: "get",
	        data: param,
	        url: api_path_config.api_path_2 + url,
	        xhrFields:{
		      withCredentials: true
		    },
	        success: function(data) {
	   //      	if(typeof data != 'object') {
				// 	callback(JSON.parse(data));
				// } else {
				// 	callback(data);
				// }
				loginJudge(data, callback);
	        }
	    });
	}
	function getValicode(url) {
		return api_path_config.api_path_2 + url;
	}

	//登录拦截 权限拦截
	function loginJudge(data, callback) {
		if(typeof data != 'object') {
			var data = JSON.parse(data);
			if(data.code === '40002') {
				redirectURL();
			} else if(data.code === '40003') {
				layer.msg(data.msg);
			} else {
				callback(data);
			}
		} else {
			if(data.code === '40002') {
				redirectURL();
			} else if(data.code === '40003') {
				layer.msg(data.msg);
			} else {
				callback(data);
			}
		}
	}
	exports.ajaxPost = ajaxPost;
	exports.ajaxGet = ajaxGet;
	exports.post = ajaxPost;
	exports.get = ajaxGet;
	exports.ajaxPost4Autho = ajaxPost4Autho;
	exports.ajaxGet4Autho = ajaxGet4Autho;
	exports.getValicode = getValicode;
	exports.ajaxGet4AuthoCR = ajaxGet4AuthoCR;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	module.exports = {
		"api_path_1": "https://bsstest1.yyzws.com/leaf_manager_web",
		"api_path_2": "https://ssotest1.yyzws.com/leaf_sso_web",
		"link_path": "https://bsstest1.yyzws.com/leaf_manager_web/static/html/",
		"static_path": "https://statictest.yyzws.com/",
		"upload_path": "https://yiyezi.yyzws.com/in/",
		"upload_path_aly": "https://yiyezi.yyzws.com/in/",
		"upload_path_h5": "https://yiyezi.yyzws.com/ex/",
		"ueupload_path": "https://bsstest1.yyzws.com/leaf_manager_web/file/ueupload.do",
		"webupload_path": "https://bsstest1.yyzws.com/leaf_manager_web/file/upload.do",
		"wxdomain": "wxtest1.yyzws.com",
		"bssdomain": "bsstest1.yyzws.com",
		"appid": "wxe2ad70729e334402"
	}

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	function getQueryString(name) {
	    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) {
	        return unescape(r[2]);
	    }
	    return null;
	}
	exports.getQueryString = getQueryString;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	var self_tpl = {
		'agencyListTpl': '<thead>\
							<tr>\
							  <th>姓名</th>\
							  <th>手机号</th>\
							  <th>货款</th>\
							  <th>级别</th>\
							  <th>直属上级</th>\
							  <th>顶级</th>\
							  <th>直属人数</th>\
							  <th>团队人数</th>\
							  <th>状态</th>\
							  <th>操作</th>\
							</tr>\
						  </thead>\
						  <tbody>\
						  	{{~ it.datas:item:index }}\
								<tr>\
								  <td>{{= item.real_name}}</td>\
								  <td>{{= item.mobile}}</td>\
								  <td>{{= item.amount_str}}</td>\
								  <td>{{= item.agent_grade_name}}</td>\
								  <td>\
								  {{? item.superior_member_id != 1}}<a href="agent-detail.html?id={{= item.superior_member_id}}" target="_blank">{{= item.direct_superior}}</a>{{??}}{{= item.direct_superior}}{{?}}\
								  </td>\
								  <td>\
								  {{? item.top_member_id != 1}}<a href="agent-detail.html?id={{= item.top_member_id}}" target="_blank">{{= item.top_name}}</a>{{??}}{{= item.top_name}}{{?}}\
								  </td>\
								  <td>{{= item.directly_count}}</td>\
								  <td>{{= item.team_count}}</td>\
								  <td>\
								  {{? item.audit_status==0}}\
								  启用\
								  {{?? item.audit_status==1}}\
								  停用\
								  {{?}}\
								  </td>\
								  <td><a href="agent-detail.html?id={{= item.member_id}}" target="_blank">详情</a>&nbsp;<a href="agent-team.html?id={{= item.member_id}}" target="_blank">团队</a>&nbsp;<a href="agent-operate-log.html?member_id={{= item.member_id}}" target="_blank">操作日志</a></td>\
								</tr>\
							{{~}}\
						  </tbody>'
		,'operateLogListTpl': '<thead>\
							<tr>\
							  <th>编号</th>\
							  <th>操作人</th>\
							  <th>时间</th>\
							  <th>日志</th>\
							</tr>\
						  </thead>\
						  <tbody>\
						  	{{~ it.userLogVOList:item:index }}\
								<tr>\
								  <td>{{= index+1}}</td>\
								  <td>{{? item.operator}}{{= item.operator}}{{??}}-{{?}}</td>\
								  <td>{{= item.create_date}}</td>\
								  <td>{{= item.obj_type_name}}:{{= item.op_action_name}}</td>\
								</tr>\
							{{~}}\
						  </tbody>'
		,'agencyLogListTpl': '<thead>\
							<tr>\
							  <th>编号</th>\
							  <th>操作人</th>\
							  <th>时间</th>\
							  <th>日志</th>\
							</tr>\
						  </thead>\
						  <tbody>\
						  	{{~ it.userLogVOList:item:index }}\
								<tr>\
								  <td>{{= index+1}}</td>\
								  <td>{{? item.operator}}{{= item.operator}}{{??}}-{{?}}</td>\
								  <td>{{= item.create_date}}</td>\
								  <td>{{= item.op_action_name}}</td>\
								</tr>\
							{{~}}\
						  </tbody>'
		,'agencyDetailTpl':'<p>\
								<span>姓名：{{= it.real_name}}</span>\
								<span>手机号码：{{= it.mobile}}</span>\
								<span>身份证信息：{{? it.authon_personal_id}}{{= it.authon_personal_id}}（<a href="javascript:void(0);" target="_blank" class="picture_front_layer">点击查看图片</a>）{{??}}无{{?}}</span>\
								<div id="picture_front_layer" style="display: none;">\
								<img src="{{? it.picture_front}}{{? it.picture_front.indexOf("http") != -1}}{{= it.picture_front}}\
								{{??}}\
								{{= it.uploadpath}}\
								{{= it.picture_front}}{{?}}{{?}}" style="width:100%;"></div>\
							</p>\
							<p>\
								<span>微信号：{{= it.wechat_id || ""}}</span>\
								<span>地址：{{= it.address}}</span>\
							</p>\
							<p>\
								<span>等级：{{= it.grade_name}}</span>\
								<span>直属人数：{{= it.directly_count}}</span>\
								<span>团队人数：{{= it.team_count}}</span>\
								<span>余额：{{= it.amount}}</span>\
								<span style="display:none;">库存：{{= it.store}}</span>\
							</p>\
							<p>\
								<span>授权书（<a href="javascript:void(0);" class="see-autho-book">点击查看授权书</a>）</span>\
								<span>打款凭证：{{? it.payment_voucher}}（<a href="javascript:void(0);" target="_blank" class="layer-img">点击查看</a>）{{??}}无{{?}}</span>\
								<div id="payment_voucher_layer" style="display: none;"><img src="{{? it.payment_voucher}}{{? it.payment_voucher.indexOf("http") != -1}}{{= it.payment_voucher}}{{??}}{{= it.upload_path_h5}}{{= it.payment_voucher}}{{?}}{{?}}" style="width:100%;"></div>\
								<span>状态：\
								{{? it.auth_status==0}}\
								正常\
								{{?? it.auth_status==1}}\
								取消授权\
								{{?}}\
								</span></br>\
								<span>加入时间：{{= it.join_time}}</span></br>\
								<span>修改记录：{{= it.update_log}}</span></br>\
								<span>身份证地址信息：{{= it.id_address}}</span>\
							</p>\
							<div class="btn-group">\
								<button type="button" class="btn btn-success limit-setting" style="display:none;">限量设置</button>\
								<button type="button" class="btn btn-success {{? it.agent_grade == 1}}notsupport{{?}}" id="upGradeBtn"style="{{? it.agent_grade == 1}}background:gray;{{?}}">升级</button>\
								<button type="button" class="btn btn-success" id="downGradeBtn">降级</button>\
								<button type="button" class="btn btn-success" id="translation-btn">平移</button>\
								<button type="button" class="btn btn-success info-edit">修改信息</button>\
								<button type="button" class="btn btn-success" id="cancel-autho" data-status="{{= it.auth_status}}">\
								{{? it.auth_status==0}}\
								取消授权\
								{{?? it.auth_status==1}}\
								开通授权\
								{{?}}\
								</button>\
							</div>'
		,'teamInfoTpl':'直接下级：<span class="numspan">{{= it.directly_count}}</span>\
						下级总人数：<span class="numspan">{{= it.team_count}}</span>\
						<button type="button" class="btn btn-success" id="translation-btn" style="display:none;margin-left:15px;">平移</button>\
						<div class="team-select">\
							<span class="up-agency see-item active">看上级</span><span class="down-agency see-item">看下级</span>\
							&nbsp;&nbsp;<span id="refresh-btn" class="refresh">刷新</span>\
							<div class="level-info">\
							</div>\
						</div>'
		,'teamUpInfoItemTpl': '<div class="item" data-itemindex="{{= it.itemIndex}}">\
								<span>直接推荐人<b>1</b>人</span>\
								<div class="inner up-item">\
									<p data-id="{{= it.member_id}}" class="inner-item active">{{= it.real_name}}({{= it.id}})--{{= it.grade_name}}</p>\
								</div>\
							</div>'
		,'teamDownInfoItemTpl': '<div class="item" data-itemindex="{{= it.itemIndex}}">\
								<span>直接下级<b>{{= it.total_count}}</b>人</span>\
								<div class="inner down-item">\
									{{~ it.datas:item:index }}\
									<p data-id="{{= item.member_id}}" class="inner-item {{? index==0}}active{{?}}">{{= item.real_name}}({{= item.id}})--{{= item.grade_name}}</p>\
									{{~}}\
								</div>\
							</div>'
		,'editAgentInfoTpl': '<tbody>\
								<tr>\
								  <td>\
								  	姓名：<input type="text" value="{{= it.real_name}}" id="realName">\
								  </td>\
								  <td>\
									手机号：<input type="text" value="{{= it.mobile}}" id="mobile">\
								  </td>\
								</tr>\
								<tr>\
								  <td>\
								  	等级：\
								  	<select name="" id="agent_grade" disabled></select>\
								  </td>\
								  <td>\
									身份证：<input type="text" value="{{? it.authon_personal_id}}{{= it.authon_personal_id}}{{??}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--{{?}}" disabled>\
								  </td>\
								</tr>\
								<tr>\
								  <td>\
								  	昵称：<input type="text" value="{{= it.name}}" disabled id="nickName">\
								  </td>\
								  <td>\
									微信号：<input type="text" value="{{= it.wechat_id}}" id="wechatId">\
								  </td>\
								</tr>\
								<tr>\
								  <td>\
								  	省份：\
								  	<select class="form-control area-province" id="province">\
									</select>\
								  </td>\
								  <td>\
									&nbsp;&nbsp;&nbsp;&nbsp;市：\
									<select class="form-control area-city" id="city">\
									</select>\
								  </td>\
								</tr>\
								<tr>\
								  <td>\
								  	&nbsp;&nbsp;&nbsp;&nbsp;区：\
								  	<select class="form-control area-district" id="district">\
									</select>\
								  </td>\
								  <td>\
									地址：<input type="text" value="{{= it.member_address_d_t_o.address}}" maxlength="100" id="address">\
								  </td>\
								</tr>\
								<tr>\
								  <td>\
								  	邮编：<input type="text" value="{{? it.member_address_d_t_o.zip}}{{= it.member_address_d_t_o.zip}}{{?}}" id="zip">\
								  </td>\
								  <td>\
									备注：<input type="text" value="{{? it.remark}}{{= it.remark}}{{?}}" maxlength="100" id="remark">\
								  </td>\
								</tr>\
								<tr>\
								  <td>\
								  	省份：\
								  	<select class="form-control id-area-province" id="idarea-province">\
									</select>\
								  </td>\
								  <td>\
									&nbsp;&nbsp;&nbsp;&nbsp;市：\
									<select class="form-control id-area-city" id="idarea-city">\
									</select>\
								  </td>\
								</tr>\
								<tr>\
									<td>\
											&nbsp;&nbsp;&nbsp;&nbsp;区：\
											<select class="form-control id-area-district" id="idarea-district">\
										</select>\
									</td>\
									<td> <img class="img-box" style="width:70px;" src={{= it.uploadpath + it.picture_front}} alt="身份证"> <button type = "button"class = "btn btn-success"id = "modifyId" style="margin-left:20px;"> 修改身份证图片 </button></td > < /tr>\
							  </tbody>'
		,'selectOptionTpl': '{{~ it.list:item:index }}\
								<option value="{{= item.id}}" {{? it.code==item.code}}selected{{?}}>{{= item.name}}</option>\
						  {{~}}'
		,'limitSetting': '<p>\
							是否开启：\
							<label class="radio-inline">\
							  <input type="radio" name="isOpen" value="1" {{? it.status==1}}checked{{?}}> 是\
							</label>\
							<label class="radio-inline">\
							  <input type="radio" name="isOpen" value="2" {{? it.status==2 || !it.status}}checked{{?}}> 否\
							</label>\
							</p>\
							<p>\
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型：\
							<label class="radio-inline">\
							  <input type="radio" name="limit-type" value="2" {{? !it.type}}checked{{?}}{{? it.type==2}}checked{{?}}> 团队\
							</label>\
							<label class="radio-inline">\
							  <input type="radio" name="limit-type" value="1" {{? it.type==1}}checked{{?}}> 个人\
							</label>\
							</p>\
							<div>\
								<table class="table table-bordered tab-content-center">\
								  <thead>\
									<tr>\
									  <th>隐藏商品</th>\
									  <th>商品编号</th>\
									  <th>商品标题</th>\
									  <th>发货方</th>\
									  <th>商品图片</th>\
									  <th>每日限量</th>\
									  <th>每周限量</th>\
									  <th>每月限量</th>\
									</tr>\
								  </thead>\
								  <tbody id="limit-settimg-tbody">\
								  	{{~ it.agent_rule_list:item:index }}\
									<tr data-id="{{= item.sku_id}}">\
									  <td>\
									  	<label class="radio-inline">\
										  <input type="radio" name="isHidden{{= item.sku_id}}" value="1"{{? item.allowed_buy==1}}checked{{?}}> 是\
										</label>\
										<label class="radio-inline">\
										  <input type="radio" name="isHidden{{= item.sku_id}}" value="2" {{? !item.allowed_buy}}checked{{?}}{{? item.allowed_buy==2}}checked{{?}}> 否\
										</label>\
									  </td>\
									  <td>{{= item.sku_id}}</td>\
									  <td>{{= item.item_name}}</td>\
									  <td>{{? item.delivery_type === 1}}上级发货{{?}}{{? item.delivery_type === 2}}总部发货{{?}}</td>\
									  <td><img src="{{= it.upload_path}}{{= item.image_uri}}"></td>\
									  <td><input type="text" class="limit-num" value="{{? item.day_max}}{{= item.day_max}}{{?}}"></td>\
									  <td><input type="text" class="limit-num" value="{{? item.week_max}}{{= item.week_max}}{{?}}"></td>\
									  <td><input type="text" class="limit-num" value="{{? item.month_max}}{{= item.month_max}}{{?}}"></td>\
									</tr>\
									{{~}}\
								  </tbody>\
								</table>\
							</div>'
		,'translationBody': '<div>\
								<table class="table table-bordered tab-content-center">\
								  <thead>\
									<tr>\
									  <th>选择</th>\
									  <th>姓名</th>\
									  <th>等级</th>\
									  <th>手机</th>\
									</tr>\
								  </thead>\
								  <tbody>\
								  	<tr>\
								  		<td colspan="4">\
									  		<div class="form-inline" style="text-align: left;">\
											  <div class="form-group">\
											    <input type="text" class="form-control movename" placeholder="姓名">\
											  </div>\
											  <div class="form-group">\
											    <input type="email" class="form-control movephone" placeholder="手机">\
											  </div>\
											  <button class="btn btn-default movebtn">查询</button>\
											</div>\
										</td>\
								  	</tr>\
								  	{{~ it.datas:item:index }}\
									<tr>\
									  <td>\
									  	<input type="radio" name="isMove" value="{{= item.member_id}}">\
									  </td>\
									  <td>{{= item.real_name}}</td>\
									  <td>{{= item.agent_grade_name}}</td>\
									  <td>{{= item.mobile}}</td>\
									</tr>\
									{{~}}\
								  </tbody>\
								</table>\
							</div>'
		,'optionNoAllAgentTpl':  '{{~ it:item:index }}\
					<option value="{{= item.id}}">{{= item.name}}</option>\
				   {{~}}'
		,'optionTpl':  '<option value="0">所有等级</option>\
					{{~ it:item:index }}\
					<option value="{{= item.id}}">{{= item.name}}</option>\
				   {{~}}'
	};
	module.exports = self_tpl;


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

	var self_tpl = __webpack_require__(8);
	var httpURL = __webpack_require__(6);
	var $ajax = __webpack_require__(3);
	var api_path_config = __webpack_require__(4);
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
		//����
		$('#right-bar-container').delegate('#upGradeBtn','click',function(){
			if($(this).hasClass('notsupport')){
				return;
			}
			// $ajax.ajaxPost('/.do', {id: agentId}, function(data) {
			// 	window.location.reload()
			// });
			layer.confirm('ȷ��Ҫִ�в�����', {
			  btn: ['ȷ��','ȡ��'] //��ť
			}, function(){
				$ajax.ajaxPost('/agent/agent_list/update_grade.do', {member_id: agentId}, function(data) {
					//$('#agency-detail').html(doT.template(self_tpl.agencyDetailTpl)(data.data))
					if(data.success){
						layer.msg('�����ɹ�');
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
		//����
		$('#right-bar-container').delegate('#downGradeBtn','click',function(){
			$ajax.ajaxPost('/agent/agent_list/demotion_grade.do', {member_id: agentId}, function(data) {
				if(data.success){
					layer.msg('�����ɹ�');
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
			//��<��<��
			for(var i=0;i<list.length;i++){
				var temp = list[i];
				if(temp.day_max && temp.week_max &&parseInt(temp.day_max) > parseInt(temp.week_max)) {
					layer.msg('���������ܴ���������');
					//$('#limit-setting-modal').modal('toggle');
					return;
				}
				if(temp.day_max && temp.month_max && parseInt(temp.day_max) > parseInt(temp.month_max)) {
					layer.msg('���������ܴ���������');
					// $('#limit-setting-modal').modal('toggle');
					return;
				}
				if(temp.week_max && temp.month_max && parseInt(temp.week_max) > parseInt(temp.month_max)) {
					layer.msg('���������ܴ���������');
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
		//�����������Ϣ
		$('#save-info-setting').click(function(){
			if($('#realName').val().trim() === ''){
				layer.msg('��������Ϊ��!');
				return;
			}
			if($('#mobile').val().trim() === ''){
				layer.msg('�ֻ��Ų���Ϊ��!');
				return;
			}
			if($('#wechatId').val().trim() === ''){
				layer.msg('΢�źŲ���Ϊ��!');
				return;
			}
			if($('#nickName').val().trim() === ''){
				layer.msg('�ǳƲ���Ϊ��!');
				return;
			}
			if($('#address').val().trim() === ''){
				layer.msg('��ַ����Ϊ��!');
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
			layer.confirm('ȷ��Ҫִ�в�����', {
			  btn: ['ȷ��','ȡ��'] //��ť
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
				layer.msg('��ѡ����Ҫƽ�ƵĴ�����');
			} else {
				var parent_id = $('input[name="isMove"]:checked').val();
				var member_id = agentId;
				layer.confirm('ȷ��Ҫִ�в�����', {
				  btn: ['ȷ��','ȡ��'] //��ť
				}, function(){
					$ajax.ajaxPost('/agent/agent_list/movement.do', {member_id: member_id,parent_member_id:parent_id}, function(data) {
						//$('#agency-detail').html(doT.template(self_tpl.agencyDetailTpl)(data.data))
						if(data.success){
							layer.msg('ƽ�Ƴɹ�');
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
				$('#agency-info-edit-modal .area-city').html('<option value="0">������</option>')
				$('#agency-info-edit-modal .area-district').html('<option value="0">��������</option>');
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
				$('#agency-info-edit-modal .area-district').html('<option value="0">��������</option>');
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
			var bookId = 107;//������Ȩ��id
			layer.open({
			  type: 2,
			  title: 'Ԥ��',
			  shadeClose: true,
			  shade: 0.8,
			  area: ['414px', '736px'],
			  content: 'agent-autho-book.html?agentid=' + agentId + '&bookid=' + bookId//iframe��url
			}); 
		});

		$('#right-bar-container').delegate('.layer-img','click',function(){
			// var layerImg = $(this);
			layer.open({
			  type: 1,
			  title: false,
			  closeBtn: 0,
			  area: '516px',
			  skin: 'layui-layer-nobg', //û�б���ɫ
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
			  skin: 'layui-layer-nobg', //û�б���ɫ
			  shadeClose: true,
			  content: $('#picture_front_layer')
			});
		});
	});


/***/ })

/******/ });