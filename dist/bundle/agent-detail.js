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

	module.exports = __webpack_require__(37);


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

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

	var $ajax = __webpack_require__(3);
	var imgUploadModalTpl = '<div class="modal fade" tabindex="-1" role="dialog" id="img-upload-modal">\
								<div class="modal-dialog" role="document">\
									<div class="modal-content">\
									  <div class="modal-header">\
										<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
										<h4 class="modal-title">选择图片</h4>\
									  </div>\
									  <div class="modal-body">\
										<div class="btn-group nav-select" id="img-tool-select">\
										  <a type="button" class="btn btn-default active" href="javascript:void(0)">选择</a>\
										  <a type="button" class="btn btn-default" href="javascript:void(0)">上传</a>\
										  <a type="button" class="btn btn-default" href="javascript:void(0)">网络</a>\
										</div>\
										<div class="modal-tab img-item">\
											<div class="img-item-container">\
											</div>\
											<nav aria-label="...">\
											  <ul class="pager">\
											  </ul>\
											</nav>\
										</div>\
										<div class="modal-tab img-upload" style="display: none;">\
											<div class="form-inline">\
											  <div class="form-group">\
												<input type="text" class="form-control thumbnail-input" imgsrc="">\
											  </div>\
											  <div class="form-group">\
												<div class="btn-success" id="picker">浏览</div>\
											  </div>\
											</div>\
											<div class="form-inline upload-btn">\
											  <div class="form-group">\
												<button type="button" class="btn btn-success" id="confirm-upload">上传图片</button>\
											  </div>\
											</div>\
										</div>\
										<div class="modal-tab img-network" style="display: none;">\
											<div class="form-inline">\
											  <div class="form-group">\
												<p class="form-control-static">图片地址：</p>\
											  </div>\
											  <div class="form-group">\
												<input type="text" class="network-img-input">\
											  </div>\
											</div>\
											<div class="form-inline use-btn">\
											  <div class="form-group">\
												<button type="button" class="btn btn-success use-network-img">使用该图片</button>\
											  </div>\
											</div>\
										</div>\
									  </div>\
									</div>\
								</div>\
							  </div>';
	var pagerTpl = '<li data-flag="last" style="display:inline-block;"><a href="javascript:void(0)" style="background:{{? it.current_page != 1}}#5cb85c{{??}}gray{{?}};color:#fff;">上一页</a></li>\
					<li data-flag="next" style="display:inline-block;"><a href="javascript:void(0)" style="background:{{? it.total_page != it.current_page}}#5cb85c{{??}}gray{{?}};color:#fff;">下一页</a></li>';
	var imgItemTpl = '{{~ it.imgList:item:index }}\
						{{? index < 12}}\
						 <img class="uploaded-img" src="{{= it.upload_path}}{{= item.image}}" alt="" data-imgurl="{{= item.image}}">\
						 {{?}}\
					 {{~}}';
	var api_path_config = __webpack_require__(4);
	// 优化retina, 在retina下这个值是2
	var ratio = window.devicePixelRatio || 1,
	    // 缩略图大小
	    thumbnailWidth = 100 * ratio,
	    thumbnailHeight = 100 * ratio,
	    // Web Uploader实例
	    uploader;
	var pagerConfig = {
		current_page: 1,
		page_size: 12,
		total_page: null
	}
	function initUploader(callback, isAutoUpload) {
	    // $('#uploader-container').html('<div id="gridFileList"></div><div id="picker">选择图片</div>');
	    // 初始化Web Uploader
	    uploader = WebUploader.create({
	        // 自动上传。
	        auto: isAutoUpload,
	        // swf文件路径
	        //swf: BASE_URL + '/js/Uploader.swf',
	        // 文件接收服务端。
	        // server: 'http://media.haiyn.com/upload.php',
	        server: api_path_config.webupload_path,//'http://192.168.8.143:8061/leaf-manager-web/file/upload.do',
	        // formData: {
	        //     user_id: 1,
	        //     biz_code: 'hanshu'
	        // },
	        // 选择文件的按钮。可选。
	        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
	        pick: {
	            id: '#picker',
	            multiple: false
	        },
	        // 只允许选择文件，可选。
	        accept: {
	            title: 'Images',
	            extensions: 'gif,jpg,jpeg,bmp,png',
	            // mimeTypes: 'image/*'
	            mimeTypes: 'image/jpg,image/png'
	        }
	    });
	    $("#picker").mouseenter(function() {
	        if (uploader) {
	            uploader.refresh();
	        }
	    });
	    // 当有文件添加进来的时候
	    uploader.on('fileQueued', function(file) {
	        
	        var $img = $('#img-upload-modal .thumbnail-input');
	        // 创建缩略图
	        uploader.makeThumb(file, function(error, src) {
	            if (error) {
	                $img.replaceWith('<span>不能预览</span>');
	                return;
	            }
	            $img.val(src);
	        }, thumbnailWidth, thumbnailHeight);
	    });
	    // 文件上传过程中创建进度条实时显示。
	    uploader.on('uploadProgress', function(file, percentage) {
	        var $li = $('#' + file.id),
	            $percent = $li.find('.progress span');

	        // 避免重复创建
	        if (!$percent.length) {
	            $percent = $('<p class="progress"><span></span></p>')
	                .appendTo($li)
	                .find('span');
	        }
	        $percent.css('width', percentage * 100 + '%');
	    });
	    // 文件上传成功，给item添加成功class, 用样式标记上传成功。
	    uploader.on('uploadSuccess', function(file, res) {
	        var imgSrc = res.data;
	        uploader = null;
	        var $img = $('#img-upload-modal .thumbnail-input');
	        $img.attr('imgsrc', imgSrc);
	        $('#img-upload-modal').modal('hide');
	        callback(imgSrc);
	    });
	    // 文件上传失败，现实上传出错。
	    uploader.on('uploadError', function(file) {
	        var $li = $('#' + file.id),
	            $error = $li.find('div.error');
	        // 避免重复创建
	        if (!$error.length) {
	            $error = $('<div class="error"></div>').appendTo($li);
	        }
	        $error.text('上传失败');
	    });
	    // 完成上传完了，成功或者失败，先删除进度条。
	    uploader.on('uploadComplete', function(file) {
	        $('#' + file.id).find('.progress').remove();
	    });
	    $('#confirm-upload').click(function() {
	        //console.log("上传...");
	        if (uploader) {
	            uploader.upload();
	        }
	    });
	}
	// function getImgList() {
	// 	$ajax.ajaxPost('/file/list.do', {}, function(data) {
	// 		if(data.success){
	// 			$('#img-upload-modal .img-item-container').html(doT.template(imgItemTpl)(data.data));
	// 			$('#img-upload-modal').modal('show');
	// 			initUploader(callback);
	// 		}
	// 	});
	// }
	var cacheImgList = null;
	function getImgByPage(current_page) {
		var imgList = [];
		for(var i=((current_page-1)*pagerConfig.page_size-1)<0 ? 0:((current_page-1)*pagerConfig.page_size-1) ,j=0; i<cacheImgList.length,j<pagerConfig.page_size; i++,j++){
			if(cacheImgList[i]){
				imgList.push(cacheImgList[i]);
			}
		}
		return imgList;
	}
	function init(callback) {
		$('#img-select-modal-container').html(imgUploadModalTpl);
		// getImgList();
		$ajax.ajaxPost('/file/list.do', {}, function(data) {
			if(data.success && data.data){
				cacheImgList = data.data.reverse();
				pagerConfig.total_page = Math.ceil(data.data.length / pagerConfig.page_size);
				data.upload_path = api_path_config.upload_path;
				data.imgList = getImgByPage(pagerConfig.current_page);
				$('#img-upload-modal .img-item-container').html(doT.template(imgItemTpl)(data));
				$('#img-upload-modal .pager').html(doT.template(pagerTpl)(pagerConfig));
				$('#img-upload-modal').modal('show');
				initUploader(callback);
				$(".webuploader-pick").css("padding","0");
				$(".webuploader-pick").eq(0).css("padding","6px 15px");
			}
		});
		$('#img-tool-select').delegate('a','click',function(){
			$(this).addClass('active').siblings('a').removeClass('active');
			$('#img-upload-modal .modal-tab').hide();
			var selectedTab = $('#img-tool-select a.active').index();
			if(selectedTab === 0) {
				$('#img-upload-modal .img-item').show();
			}
			if(selectedTab === 1) {
				$('#img-upload-modal .img-upload').show();
			}
			if(selectedTab === 2) {
				$('#img-upload-modal .img-network').show();
			}
		});
		$('#img-upload-modal').delegate('.uploaded-img','click',function(){
			$('#img-upload-modal').modal('hide');
			callback($(this).data('imgurl'));
		});
		$('#img-upload-modal .pager').delegate('li','click',function(){
			if($(this).data('flag') === 'next') {
				pagerConfig.current_page++;
			}
			if($(this).data('flag') === 'last') {
				pagerConfig.current_page--;
				if(pagerConfig.current_page < 1) {
					pagerConfig.current_page = 1;
					return;
				}
			}
			// $ajax.ajaxPost('/file/list.do', {}, function(data) {
			// 	if(data.success){
					var data = {};
					data.upload_path = api_path_config.upload_path;
					data.imgList = getImgByPage(pagerConfig.current_page);
					if(data.imgList.length > 0) {
						$('#img-upload-modal .img-item-container').html(doT.template(imgItemTpl)(data));
						$('#img-upload-modal .pager').html(doT.template(pagerTpl)(pagerConfig));
					}
			// 	}
			// });
		});
		$('#img-upload-modal').delegate('.use-network-img','click',function(){
			callback($('#img-upload-modal .network-img-input').val());
			$('#img-upload-modal').modal('hide');
		});
	}
	exports.init = init;

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

	var self_tpl = __webpack_require__(8);
	var httpURL = __webpack_require__(6);
	var $ajax = __webpack_require__(3);
	var imgUpload = __webpack_require__(16);
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
					var _imgData = data.data.picture_front;
					var img_01 = api_path_config.upload_path + data.data.picture_front;
					var img_02 = api_path_config.upload_path_h5 + data.data.picture_front;
					// var _img = $("#picture_front_layer").find("img").attr("src");
					var ImgObj = new Image(); //判断图片是否存在  
					ImgObj.src = img_02;
					//没有图片，则返回-1  
					if (ImgObj.fileSize <= 0 || ImgObj.width <= 0 || ImgObj.height <= 0) {
						data.data.uploadpath = api_path_config.upload_path;
					}else{
						data.data.uploadpath = api_path_config.upload_path_h5;
					}
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
						if(data.code == '30046' || data.code == '30052' || data.code == '30018' || data.code == '30057') {
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
					if(data.code == '30068' || data.code == '30008' || data.code == "30078") {
						layer.msg(data.msg);
					}
				}
			});
		});

		$('#right-bar-container').delegate('.limit-setting','click',function(){
			$ajax.ajaxPost('/rule/get_agent_ruleList.do', {member_id: agentId}, function(data) {
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
				id_province_code: $('#idarea-province option:checked').val(),
				id_city_code: $('#idarea-city option:checked').val(),
				id_area_code: $('#idarea-district option:checked').val(),
				address: $('#address').val(),
				zip: $('#zip').val(),
				remark: $('#remark').val(),
				picture_front: imgUrl
			}
			$ajax.ajaxPost('/agent/agent_list/update.do', saveData, function(data) {
				if(data.code == 10000){
					window.location.reload();
				} else {
					layer.msg(data.msg);
				}
			});
		})
		$('#right-bar-container').delegate('.info-edit','click',function(){
			$ajax.post('/agent/agent_list/get_agent.do', {member_id: agentId}, function(data) {
				if(data.success){
					data.data.path = api_path_config.upload_path_h5
					data.data.path1 = api_path_config.upload_path
					
					var _imgData = data.data.picture_front;
					var img_01 = api_path_config.upload_path + data.data.picture_front;
					var img_02 = api_path_config.upload_path_h5 + data.data.picture_front;
					// var _img = $("#picture_front_layer").find("img").attr("src");
					var ImgObj = new Image(); //判断图片是否存在  
					ImgObj.src = img_02;
					//没有图片，则返回-1  
					if (ImgObj.fileSize <= 0 || ImgObj.width <= 0 || ImgObj.height <= 0) {
						data.data.uploadpath = api_path_config.upload_path;
					} else {
						data.data.uploadpath = api_path_config.upload_path_h5;
					}

					$('#agency-info-edit-modal table').html(doT.template(self_tpl.editAgentInfoTpl)(data.data));
					agentArea = data.data.member_address_d_t_o;
					idCode = data.data
					initArea(agentArea);
					initAreaId(idCode)
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
					} else {
						if(data.code == '30057') {
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
					} else {//平移30018  30057 30046
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
							if(data.code == '30046' || data.code == '30018' || data.code == '30057') {
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
		//身份证地址
		function initAreaId(idCode) {
			$ajax.post('/agent/get_delivery.do', {
				level: 1
			}, function (data) {
				if (data.success) {
					data.agentArea = idCode.id_province_code;
					$('#agency-info-edit-modal .id-area-province').html(doT.template(selectOptionTpl)(data))
					initCityId(idCode)
				}
			});

			function initCityId(idCode) {
				$ajax.post('/agent/get_delivery.do', {
					level: 2,
					code: idCode.id_province_code
				}, function (data) {
					if (data.success) {
						data.agentArea = idCode.id_city_code;
						$('#agency-info-edit-modal .id-area-city').html(doT.template(selectOptionTpl)(data))
						initDistrictId(idCode);
					}
				});
			}

			function initDistrictId(idCode) {
				$ajax.post('/agent/get_delivery.do', {
					level: 3,
					code: idCode.id_city_code
				}, function (data) {
					if (data.success) {
						data.agentArea = idCode.id_area_code;
						$('#agency-info-edit-modal .id-area-district').html(doT.template(selectOptionTpl)(data))
					}
				});
			}
		}
		$('#agency-info-edit-modal').delegate('.id-area-province', 'change', function () {
			if ($(this).val() === '0') {
				$('#agency-info-edit-modal .id-area-city').html('<option value="0">所有市</option>')
				$('#agency-info-edit-modal .id-area-district').html('<option value="0">所有区县</option>');
				return;
			}
			$ajax.post('/agent/get_delivery.do', {
				level: 2,
				code: $(this).val()
			}, function (data) {
				$('#agency-info-edit-modal .id-area-city').html(doT.template(optionChangeTpl)(data.data))
				$ajax.post('/agent/get_delivery.do', {
					level: 3,
					code: data.data[0].code
				}, function (data) {
					$('#agency-info-edit-modal .id-area-district').html(doT.template(optionChangeTpl)(data.data))
				});
			});
		});
		$('#agency-info-edit-modal').delegate('.id-area-city', 'change', function () {
			if ($(this).val() === '0') {
				$('#agency-info-edit-modal .id-area-district').html('<option value="0">所有区县</option>');
				return;
			}
			$ajax.post('/agent/get_delivery.do', {
				level: 3,
				code: $(this).val()
			}, function (data) {
				$('#agency-info-edit-modal .id-area-district').html(doT.template(optionChangeTpl)(data.data))
			});
		});
		//收货地址
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
						data.agentArea = agentArea.city_code;
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
			var bookId = 26;//韩束授权书id
			// layer.open({
			//   type: 2,
			//   title: '预览',
			//   shadeClose: true,
			//   shade: 0.8,
			//   area: ['414px', '736px'],
			//   content: 'agent-autho-book.html?agentid=' + agentId + '&bookid=' + bookId//iframe的url
			// }); 
			$ajax.post('/agent/agent_list/get_cert.do',{member_id: agentId, cert_id: bookId},function(data){
				if(data.success) {
					$('#preview-layer').remove();
					$('body').append('<div id="preview-layer" style="display:none;"><img src="' + api_path_config.upload_path + data.data + '" style="width:100%;"></div>');
					setTimeout(function(){
						layer.open({
						  type: 1,
						  closeBtn: 1,
						  title: "信息",
						  area: '640px',
						  skin: 'layui-layer-nobg', //没有背景色
						  shadeClose: true,
						  content: $('#preview-layer')
						});
					},1000);
				}
			});
		});

		$('#right-bar-container').delegate('.layer-img','click',function(){
			// var layerImg = $(this);
			layer.open({
			  type: 1,
			  title: "信息",
			  closeBtn: 1,
			  area: '516px',
			  skin: 'layui-layer-nobg', //没有背景色
			  shadeClose: true,
			  content: $('#payment_voucher_layer')
			});
		});
		$('#right-bar-container').delegate('.picture_front_layer','click',function(){
			
			layer.open({
			  type: 1,
			  title: "信息",
			  closeBtn: 1,
			  area: '516px',
			  skin: 'layui-layer-nobg', //没有背景色
			  shadeClose: true,
			  content: $('#picture_front_layer')
			});
			
		});
		var imgUrl;
		//修改身份证信息
		$("body").on("click", "#modifyId", function () {
	        imgUpload.init(function (value) {
				imgUrl = value;
				$(".img-box").attr("str",imgUrl)
			})
	    });
	});


/***/ })

/******/ });