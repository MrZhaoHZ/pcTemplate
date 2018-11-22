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

	module.exports = __webpack_require__(116);


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

/***/ 93:
/***/ (function(module, exports) {

	var self_tpl = {
		'newOrderListTpl1': '<thead>\
								<tr>\
								  <th><input type="checkbox" class="select-all"></th>\
									<th> 个人信息</th>\
									<th>产品信息</th>\
									<th>产品类型与状态</th>\
									<th>团队信息</th>\
									<th>订单信息</th>\
									<th>操作</th>\
								</tr>\
							  </thead>\
							  <tbody>\
							  	{{~ it.order_list:item:index }}\
								<tr data-id="{{= item.order_id}}" data-delivertype="{{= item.deliver_type}}" data-status="{{= item.status}}">\
								<td>{{? item.status == 1 || item.status == 2 || item.status == 7}}<input type="checkbox" name="selectItem">{{?}}</td>\
								<td>\
										<ul>\
											<li>用户名:<a href="../agent/agent-detail.html?id={{= item.member_id}}" target="_blank">{{= item.member_name}}</a></li>\
											<li>手机号：{{= item.mobile}}</li>\
										</ul>\
								</td>\
								<td>\
										<ul>\
											<li>产品名:{{= item.sku_name}}</li>\
											<li>编码：{{= item.sku_sn}}</li>\
											<li>单位：{{= item.unit}}</li>\
											<li>规格：{{= item.specs }}</li>\
										</ul>\
								</td>\
								<td>\
										<ul>\
											<li>类型:\
												{{? item.deliver_type == 1 }} 上级发货{{?}}\
												{{? item.deliver_type == 2 }} 总部发货{{?}}\
											</li>\
											<li>状态：{{? item.status == 0 }}\
											待审核\
											{{?}}\
											{{? item.status == 1 }}\
											待上级审核\
											{{?}}\
											{{? item.status == 2 }}\
											待总部审核\
											{{?}}\
											{{? item.status == 3 }}\
											待发货\
											{{?}}\
											{{? item.status == 4 }}\
											已发货\
											{{?}}\
											{{? item.status == 5 }}\
											上级拒绝\
											{{?}}\
											{{? item.status == 6 }}\
											总部拒绝\
											{{?}}\
											{{? item.status == 7 }}\
											取消中\
											{{?}}\
											{{? item.status == 8 }}\
											已取消\
											{{?}}\
											{{? item.status == 9 }}\
											已完成\
											{{?}}\
											{{? item.status == 12 }}\
												强制取消\
											{{?}}\
											</li>\
										</ul>\
								</td>\
								<td>\
									<ul>\
										<li>\
											上级：{{? item.direct_superior !=1}}<a href="../agent/agent-detail.html?id={{= item.direct_superior}}" target="_blank">{{= item.direct_superior_name}}</a>{{??}}{{= item.direct_superior_name}}{{?}}\
										</li>\
											团队：{{? item.team_id !=1}}<a href="../agent/agent-detail.html?id={{= item.team_id}}" target="_blank">{{= item.team_name}}</a>{{??}}{{= item.team_name}}{{?}}\
										<li>\
										</li>\
									</ul>\
								</td>\
								<td>\
										<ul>\
											<li>\
												数量：{{= item.count}}\
											</li>\
											<li>\
												金额:￥{{= item.total_amount}}\
											</li>\
											<li>\
												下单时间：{{= item.order_time}}\
											</li>\
											<li>\
												订单号：{{= item.order_sn }}\
											</li>\
										</ul>\
								</td>\
								<td>\
									<ul>\
										{{? item.status == 1 }}\
											<li>\
											<a href="javascript:void(0)" class="pass-btn" data-status="{{= item.status}}">强制通过</a>&nbsp;\
											</li>\
											<li>\
											<a href="javascript:void(0)" class="nopass-btn" data-status="{{= item.status}}">强制拒绝</a>&nbsp;\
											</li>\
											{{?}}\
										{{?item.status == 2 }}\
										<li>\
											<a href="javascript:void(0)" class="pass-btn" data-status="{{= item.status}}">通过</a> &nbsp;\
										</li>\
										<li>\
											<a href="javascript:void(0)" class="nopass-btn" data-status="{{= item.status}}">拒绝 </a> &nbsp;\
										</li>\
										{{?}}\
										{{? item.status == 7 }}\
										<li>\
										{{? item.deliver_type == 1}}<a href="javascript:void(0)" class="pass-btn" data-status="{{= item.status}}">强制同意</a>&nbsp;\
										</li>\
										<li>\
										<a href="javascript:void(0)" class="nopass-btn" data-status="{{= item.status}}">强制拒绝</a>&nbsp;{{?}}\
										</li>\
										<li>\
											{{? item.deliver_type == 2}}<a href="javascript:void(0)" class="pass-btn" data-status="{{= item.status}}">同意</a>&nbsp;\
										</li>\
										<li>\
											<a href="javascript:void(0)" class="nopass-btn" data-status="{{= item.status}}">拒绝 </a> &nbsp;\
											{{?}}\
										</li>\
											{{?}}\
										<li><a href="order-detail.html?id={{= item.order_id}}" target="_blank">详情</a></li>\
									</ul>\
								</td>\
								</tr>\
								{{~}}\
							  </tbody>',
		'orderListTpl1': '<thead>\
								<tr>\
								  <th><input type="checkbox" class="select-all"></th>\
								  <th>订单号</th>\
								  <th>姓名</th>\
								  <th>手机号</th>\
								  <th>产品信息</th>\
								  <th>数量</th>\
								  <th>金额</th>\
								  <th>类型</th>\
								  <th>状态</th>\
								  <th>上级</th>\
								  <th>团队</th>\
								  <th>下单时间</th>\
								  <th>操作</th>\
								</tr>\
							  </thead>\
							  <tbody>\
							  	{{~ it.order_list:item:index }}\
								<tr data-id="{{= item.order_id}}" data-delivertype="{{= item.deliver_type}}" data-status="{{= item.status}}">\
								  <td>{{? item.status == 1 || item.status == 2 || item.status == 7}}<input type="checkbox" name="selectItem">{{?}}</td>\
								  <td>{{= item.order_sn}}</td>\
								  <td><a href="../agent/agent-detail.html?id={{= item.member_id}}" target="_blank">{{= item.member_name}}</a></td>\
								  <td>{{= item.mobile}}</td>\
								  <td>{{= item.sku_name}}</td>\
								  <td>{{= item.count}}</td>\
								  <td>￥{{= item.total_amount}}</td>\
								  <td>\
								  {{? item.deliver_type == 1}}上级发货{{?}}\
								  {{? item.deliver_type == 2}}总部发货{{?}}\
								  </td>\
								  <td>\
								  {{? item.status == 0 }}\
									待审核\
								  {{?}}\
								  {{? item.status == 1 }}\
									待上级审核\
								  {{?}}\
								  {{? item.status == 2 }}\
									待总部审核\
								  {{?}}\
								  {{? item.status == 3 }}\
									待发货\
								  {{?}}\
								  {{? item.status == 4 }}\
									已发货\
								  {{?}}\
								  {{? item.status == 5 }}\
									上级拒绝\
								  {{?}}\
								  {{? item.status == 6 }}\
									总部拒绝\
								  {{?}}\
								  {{? item.status == 7 }}\
									取消中\
								  {{?}}\
								  {{? item.status == 8 }}\
									已取消\
								  {{?}}\
								  {{? item.status == 9 }}\
									已完成\
								  {{?}}\
								  {{? item.status == 12 }}\
								  	强制取消\
								  {{?}}\
								  </td>\
								  <td>{{? item.direct_superior !=1}}<a href="../agent/agent-detail.html?id={{= item.direct_superior}}" target="_blank">{{= item.direct_superior_name}}</a>{{??}}{{= item.direct_superior_name}}{{?}}</td>\
								  <td>{{? item.team_id !=1}}<a href="../agent/agent-detail.html?id={{= item.team_id}}" target="_blank">{{= item.team_name}}</a>{{??}}{{= item.team_name}}{{?}}</td>\
								  <td>{{= item.order_time}}</td>\
								  <td>\
								  {{? item.status == 1 }}\
									<a href="javascript:void(0)" class="pass-btn" data-status="{{= item.status}}">强制通过</a>&nbsp;<a href="javascript:void(0)" class="nopass-btn" data-status="{{= item.status}}">强制拒绝</a>&nbsp;\
								  {{?}}\
								  {{? item.status == 2 }}\
									<a href="javascript:void(0)" class="pass-btn" data-status="{{= item.status}}">通过</a>&nbsp;<a href="javascript:void(0)" class="nopass-btn" data-status="{{= item.status}}">拒绝</a>&nbsp;\
								  {{?}}\
								  {{? item.status == 7 }}\
								  	{{? item.deliver_type == 1}}<a href="javascript:void(0)" class="pass-btn" data-status="{{= item.status}}">强制同意</a>&nbsp;<a href="javascript:void(0)" class="nopass-btn" data-status="{{= item.status}}">强制拒绝</a>&nbsp;{{?}}\
								  	{{? item.deliver_type == 2}}<a href="javascript:void(0)" class="pass-btn" data-status="{{= item.status}}">同意</a>&nbsp;<a href="javascript:void(0)" class="nopass-btn" data-status="{{= item.status}}">拒绝</a>&nbsp;{{?}}\
								  {{?}}\
								  <a href="order-detail.html?id={{= item.order_id}}" target="_blank">详情</a></td>\
								</tr>\
								{{~}}\
							  </tbody>',
		'orderListTpl': '<thead>\
							<tr>\
							  <th>订单号</th>\
							  <th>姓名</th>\
							  <th>手机号</th>\
							  <th>产品信息</th>\
							  <th>数量</th>\
							  <th>金额</th>\
							  <th>下单后金额</th>\
							  <th>发货类型</th>\
							  <th>操作类型</th>\
							  <th>状态</th>\
							  <th>上级</th>\
							  <th>团队</th>\
							  <th>下单时间</th>\
							</tr>\
						  </thead>\
						  <tbody>\
						  	{{~ it.datas:item:index }}\
							<tr data-id="{{= item.order_id}}" data-delivertype="{{= item.deliver_type}}" data-status="{{= item.status}}">\
							  <td>{{= item.order_sn}}</td>\
							  <td><a href="../agent/agent-detail.html?id={{= item.member_id}}" target="_blank">{{= item.real_name}}</a></td>\
							  <td>{{= item.mobile}}</td>\
							  <td>{{= item.spu_name}}</td>\
							  <td>{{= item.buy_count}}</td>\
							  <td>￥{{= item.amount_str}}</td>\
							  <td>￥{{= item.changed_amount_str}}</td>\
							  <td>\
							  {{? item.deliver_type == 1}}上级发货{{?}}\
							  {{? item.deliver_type == 2}}总部发货{{?}}\
							  </td>\
							  <td>\
							  {{= item.busi_audit_type_str}}\
							  </td>\
							  <td>\
							  {{? item.status == 0 }}\
								待审核\
							  {{?}}\
							  {{? item.status == 1 }}\
								待上级审核\
							  {{?}}\
							  {{? item.status == 2 }}\
								待总部审核\
							  {{?}}\
							  {{? item.status == 3 }}\
								待发货\
							  {{?}}\
							  {{? item.status == 4 }}\
								已发货\
							  {{?}}\
							  {{? item.status == 5 }}\
								上级拒绝\
							  {{?}}\
							  {{? item.status == 6 }}\
								总部拒绝\
							  {{?}}\
							  {{? item.status == 7 }}\
								取消中\
							  {{?}}\
							  {{? item.status == 8 }}\
								已取消\
							  {{?}}\
							  {{? item.status == 9 }}\
								已完成\
							  {{?}}\
							  {{? item.status == 12 }}\
							  	强制取消\
							  {{?}}\
							  </td>\
							  <td>{{? item.direct_superior !=1}}<a href="../agent/agent-detail.html?id={{= item.direct_superior}}" target="_blank">{{= item.direct_superior_name}}</a>{{??}}{{= item.direct_superior_name}}{{?}}</td>\
							  <td>{{? item.team_id !=1}}<a href="../agent/agent-detail.html?id={{= item.team_id}}" target="_blank">{{= item.team_name}}</a>{{??}}{{= item.team_name}}{{?}}</td>\
							  <td>{{= item.order_time_str}}</td>\
							</tr>\
							{{~}}\
						  </tbody>',
		'orderDetailTpl': '<div class="form-inline">\
							  <div class="form-group">\
							    <p class="form-control-static">订单编号：</p>\
							  </div>\
							  <div class="form-group">\
							    <span>{{= it.orderDetailsVO.order_sn}}</span>\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
							    <p class="form-control-static">下单时间：</p>\
							  </div>\
							  <div class="form-group">\
							    <span>{{= it.orderDetailsVO.order_time}}</span>\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
							    <p class="form-control-static">发货类型：</p>\
							  </div>\
							  <div class="form-group">\
							    <span>{{? it.orderDetailsVO.deliver_type == 1}}上级发货{{?}}\
							  {{? it.orderDetailsVO.deliver_type == 2}}总部发货{{?}}\</span>\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
							    <p class="form-control-static">订单状态：</p>\
							  </div>\
							  <div class="form-group">\
							  <span>\
							  {{? it.orderDetailsVO.status == 0 }}\
								待审核\
							  {{?}}\
							  {{? it.orderDetailsVO.status == 1 || it.orderDetailsVO.status == 10}}\
								待上级审核\
							  {{?}}\
							  {{? it.orderDetailsVO.status == 2 || it.orderDetailsVO.status == 11}}\
								待总部审核\
							  {{?}}\
							  {{? it.orderDetailsVO.status == 3 }}\
								待发货\
							  {{?}}\
							  {{? it.orderDetailsVO.status == 4 }}\
								已发货\
							  {{?}}\
							  {{? it.orderDetailsVO.status == 5 }}\
								上级拒绝\
							  {{?}}\
							  {{? it.orderDetailsVO.status == 6 }}\
								总部拒绝\
							  {{?}}\
							  {{? it.orderDetailsVO.status == 7 }}\
								取消中\
							  {{?}}\
							  {{? it.orderDetailsVO.status == 8 }}\
								已取消\
							  {{?}}\
							  {{? it.orderDetailsVO.status == 9 }}\
								已完成\
							  {{?}}\
							  {{? it.orderDetailsVO.status == 12 }}\
								强制取消\
							  {{?}}\
							  </span>\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
							    <p class="form-control-static">收货地址：</p>\
							  </div>\
							  <div class="form-group">\
							    <span>{{= it.orderDetailsVO.address}}</span>\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
							    <p class="form-control-static">收件人：</p>\
							  </div>\
							  <div class="form-group">\
							    <span>{{= it.orderDetailsVO.member_name}}</span>\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
							    <p class="form-control-static">联系电话：</p>\
							  </div>\
							  <div class="form-group">\
							    <span>{{= it.orderDetailsVO.mobile}}</span>\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
							    <p class="form-control-static">上级：</p>\
							  </div>\
							  <div class="form-group">\
							    <span>{{= it.orderDetailsVO.up_auditor_name}}</span>\
							  </div>\
							</div>\
							<div class="form-inline">\
							  <div class="form-group">\
							    <p class="form-control-static">团队：</p>\
							  </div>\
							  <div class="form-group">\
							    <span>{{= it.orderDetailsVO.team_name}}</span>\
							  </div>\
							</div>\
							<table class="table table-bordered tab-content-center item-detail-table">\
							  <thead>\
								<tr>\
								  <th>商品</th>\
								  <th>价格</th>\
								  <th>数量</th>\
								  <th>商品总价</th>\
								</tr>\
							  </thead>\
							  <tbody>\
								<tr>\
								  <td>\
								  	<img src="{{= it.upload_path}}{{= it.orderDetailsVO.sku_image_url}}" alt="">\
								  	<p style="font-size:12px;display: inline-block;margin-bottom: 0;vertical-align: middle;"><span style="display: block;font-size: 14px;padding-bottom: 10px;text-align: left;">{{= it.orderDetailsVO.sku_name}}</span><span>( {{= it.orderDetailsVO.sku_specs || ""}} )</span></p>\
								  </td>\
								  <td>￥{{= it.orderDetailsVO.wechat_price}}</td>\
								  <td>{{= it.orderDetailsVO.count}}</td>\
								  <td>￥{{= it.orderDetailsVO.total_amount}}</td>\
								</tr>\
								<tr>\
								  <td colspan="4" class="total-info">\
								  	<span>运费：￥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;订单金额：￥{{= it.orderDetailsVO.total_amount}}</span>\
								  </td>\
								</tr>\
							  </tbody>\
							</table>\
							<div class="order-flow">\
								<span>订单流程</span>\
								<table class="table table-bordered tab-content-center">\
								  <thead>\
									<tr>\
									  <th>等级</th>\
									  <th>姓名</th>\
									  <th>处理时间</th>\
									  <th>备注</th>\
									  <th>状态</th>\
									</tr>\
								  </thead>\
								  <tbody>\
								  {{~ it.orderAudits:item:index }}\
									<tr>\
									  <td>{{= item.grade_name}}</td>\
									  <td>{{= item.member_name}}</td>\
									  <td>{{= item.handle_time}}</td>\
									  <td>{{= item.remarks}}</td>\
									  <td>\
									  {{? item.status == 0}}待审核\
									  {{?? item.status == 1 || item.status == 10}}待上级审核\
									  {{?? item.status == 5}}上级拒绝\
									  {{?? item.status == 2 || item.status == 11}}待总部审核\
									  {{?? item.status == 6}}总部拒绝\
									  {{?? item.status == 3}}待发货\
									  {{?? item.status == 4}}已发货\
									  {{?? item.status == 7}}取消中\
									  {{?? item.status == 8}}已取消\
									  {{?? item.status == 9}}已完成\
									  {{?? item.status == 12}}强制取消\
									  {{?}}\
									  </td>\
									</tr>\
									{{~}}\
								  </tbody>\
								</table>\
							</div>\
							{{? it.orderDetailsVO.status == 4 || it.orderDetailsVO.status == 9}}\
							<div class="express-info">\
								<span>物流信息</span>\
								<table class="table table-bordered">\
								  <tbody>\
									<tr>\
									  <td>物流公司：{{= it.orderDetailsVO.express}}</td>\
									</tr>\
									<tr>\
									  <td>物流单号：{{= it.orderDetailsVO.express_no}}</td>\
									</tr>\
									<tr>\
									  <td>备注：{{? it.orderDetailsVO.remarks}}{{= it.orderDetailsVO.remarks}}{{?}}</td>\
									</tr>\
									<tr>\
									  <td class="express-his">\
										  <div>物流跟踪：</div>\
										  <div>\
										  	<p style="display:none;">2016-11-16 10:55:05 已签收</p>\
										  	<p><a href="https://m.kuaidi100.com/index_all.html?type={{= it.orderDetailsVO.express_code}}&postid={{= it.orderDetailsVO.express_no}}" target="_blank">查看物流</a></p>\
										  </div>\
									  </td>\
									</tr>\
								  </tbody>\
								</table>\
							</div>\
							{{?}}',
		'deliverTpl': '<thead>\
						<tr>\
						  <th>订单号</th>\
						  <th>团队</th>\
						  <th>代理级别</th>\
						  <th>姓名</th>\
						  <th>手机号</th>\
						  <th>地址</th>\
						  <th>商品信息</th>\
						  <th>数量</th>\
						  <th>金额</th>\
						  <th>规格</th>\
						  <th>类型</th>\
						  <th>下单时间</th>\
						  <th>操作</th>\
						</tr>\
					  </thead>\
					  <tbody>\
					  	{{~ it.order_delivery_list:item:index }}\
						<tr data-id="{{= item.order_id}}">\
						  <td>{{= item.order_sn}}</td>\
						  <td>{{= item.team_name}}</td>\
						  <td>{{= item.agent_grade_name}}</td>\
						  <td>{{= item.member_name}}</td>\
						  <td>{{= item.mobile}}</td>\
						  <td>{{= item.address}}</td>\
						  <td>{{= item.sku_name}}</td>\
						  <td>{{= item.count}}</td>\
						  <td>￥{{= item.total_amount}}</td>\
						  <td>{{= item.sku_specs || ""}}</td>\
						  <td>{{? item.deliver_type==1}}上级发货{{?? item.deliver_type==2}}总部发货{{?}}</td>\
						  <td>{{= item.order_time}}</td>\
						  <td class="td-btn">\
						  {{? item.order_status==3}}<a href="javascript:void(0);" class="delivery-btn">{{? item.deliver_type==1}}强制{{?}}发货</a>{{?}}\
						  <a href="order-detail.html?id={{= item.order_id}}" target="_blank">详情</a>\
						  {{? item.order_status==4}}<a href="javascript:void(0);" class="delivery-edit-btn">{{? item.deliver_type==1}}强制{{?}}修改</a>{{?}}\
						  {{? item.order_status == 0 || item.order_status == 1 || item.order_status == 2 || item.order_status == 3 }}\
						  	<a href="javascript:void(0)" class="cancel-btn" data-status="{{= item.order_status}}">强制取消</a>&nbsp;\
						  {{?}}\
						  </td>\
						</tr>\
						{{~}}\
						</tbody>',
		'newDeliverTpl': '<thead>\
						<tr>\
						  <th>客户信息</th>\
						  <th>商品信息</th>\
						  <th>订单信息</th>\
						  <th>级别与团队</th>\
						  <th>合伙人信息</th>\
						  <th>规格与类型</th>\
						  <th>操作</th>\
						</tr>\
					  </thead>\
					  <tbody>\
					  	{{~ it.order_delivery_list:item:index }}\
						<tr data-id="{{= item.order_id}}">\
							<td>\
								<ul>\
									<li>姓名：{{= item.member_name}}</li>\
									<li>手机号：{{= item.mobile}}</li>\
									<li>地址：{{= item.address}}</li>\
								</ul>\
							</td>\
							<td>\
								<ul>\
									<li>商品名：{{= item.sku_name}}</li>\
									<li>商品编码：{{= item.sku_sn}}</li>\
								</ul>\
							</td>\
						  <td>\
								<ul>\
									<li>数量：{{= item.count}}</li>\
									<li>金额：{{= item.total_amount}}</li>\
									<li>下单时间：{{= item.order_time}}</li>\
									<li>订单号：{{= item.order_sn}}</li>\
								</ul>\
							</td>\
						  <td>\
								<ul>\
									<li>级别：{{= item.agent_grade_name}}</li>\
									<li>团队：{{= item.team_name}}</li>\
								</ul>\
							</td>\
							<td>\
								<ul>\
									<li>审单时间：{{= item.verify_time || ""}}</li>\
									<li>扣款金额：{{= item.pay_amount_str || ""}}</li>\
								</ul>\
							</td>\
						  <td>\
								<ul>\
									<li>规格：{{= item.sku_specs || ""}}</li>\
									<li>类型：{{? item.deliver_type==1}}上级发货{{?? item.deliver_type==2}}总部发货{{?}}</li>\
								</ul>\
							</td>\
						  <td class="td-btn">\
								<ul>\
									{{? item.order_status==3}}<li><a href="javascript:void(0);" class="delivery-btn">{{? item.deliver_type==1}}强制{{?}}发货</a></li>{{?}}\
						  			<li><a href="order-detail.html?id={{= item.order_id}}" target="_blank">详情</a></li>\
						  {{? item.order_status==4}}<li><a href="javascript:void(0);" class="delivery-edit-btn">{{? item.deliver_type==1}}强制{{?}}修改</a></li>{{?}}\
						  {{? item.order_status == 0 || item.order_status == 1 || item.order_status == 2 || item.order_status == 3 }}\
						  	<li><a href="javascript:void(0)" class="cancel-btn" data-status="{{= item.order_status}}">强制取消</a></li>&nbsp;\
						  {{?}}\
								</ul>\
						  </td>\
						</tr>\
						{{~}}\
					  </tbody>',
		'expressOptionTpl': '<option value="">选择物流公司</option>\
							 {{~ it.data:item:index }}\
							 <option value="{{= item.express_code}}" {{? it.express_code== item.express_code}}selected{{?}}>{{= item.express_name}}</option>\
							 {{~}}',
		'orderLogisticsList': '{{~ it:item:index }}\
						<tr>\
						    <td>{{= item.express_name}}</td>\
						    <td>{{= item.mobile}}</td>\
						    <td>{{= item.sort}}</td>\
						    <td data_id={{= item.id}}>\
						    	{{? item.status ==1}}\
						    		启用\
						    	{{?? item.status == 2}}\
						    		禁用\
						    	{{?}}\
						    </td>\
						    <td data_id={{= item.id}}>\
						    	{{? item.status == 2}}\
						    		<a class="enable" data_id="{{= item.id}}">启用</a>\
						    	{{?? item.status == 1}}\
						    		<a class="disable" data_id="{{= item.id}}">禁用</a>\
						    	{{?}}\
						    	&nbsp;<a href="order-logistics-setting.html?type=1&data_id={{= item.id}}">编辑</a>\
						    </td>\
						</tr>\
					{{~}}'
	};
	module.exports = self_tpl;

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

	var self_tpl = __webpack_require__(93);
	var httpURL = __webpack_require__(6);
	var $ajax = __webpack_require__(3);
	var tmp_path_config = __webpack_require__(4);
	$(function() {
		var orderId = httpURL.getQueryString('id');
		$ajax.post('/order/details.do', {order_id: orderId}, function(data) {
			if(data.success){
				data.data.upload_path = tmp_path_config.upload_path;
				data.data.orderDetailsVO.sku_specs = data.data.orderDetailsVO.sku_specs.replace(/null,/g, "");
				data.data.orderDetailsVO.sku_specs = data.data.orderDetailsVO.sku_specs.replace(/,null/g, "");
				$('.order-info-container').html(doT.template(self_tpl.orderDetailTpl)(data.data))
			}
		});
	});


/***/ })

/******/ });