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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(26);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
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
/* 4 */
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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var localStorage = __webpack_require__(13);

	function doExports(api_path, reqStr, param) {
		var exportsUrl = api_path + reqStr + '?';
		for(var i in param) {
			if(param[i]) {
				exportsUrl += i + '=' + param[i] + '&';
			}
		}
		return exportsUrl;
	}


	module.exports = {
		doExports: doExports,
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	function setItem(item, obj) {
		localStorage.setItem(item, JSON.stringify(obj));
	}

	function getItem(item) {
		return JSON.parse(localStorage.getItem(item));
	}

	function removeItem(item){
		localStorage.removeItem(item);
	}

	exports.setItem = setItem;
	exports.removeItem = removeItem;
	exports.getItem = getItem;

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

	function open() {
		// layer.msg('正在处理');
		// return layer.load(1, {
		// 	  shade: [0.1,'#fff'] //0.1透明度的白色背景
		// 	});
		return layer.msg('正在处理', {
				  icon: 16
				  ,shade: 0.01
				  ,time: 0
				});
	}

	function close(loadingIndex) {
		layer.close(loadingIndex);
	}


	module.exports = {
		open: open,
		close: close
	}

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

	var self_tpl = {
	    'activityListName': '{{~ it.data:value1:index1 }}\
	                            <tr>\
							        <td>{{= value1.act_name}}</td>\
							        <td>{{= value1.start_date}}</td>\
	                                <td>{{= value1.end_date}}</td>\
	                                {{? value1.act_status == 1}}\
	                                <td>未发布</td>\
	                                {{?? value1.act_status == 2}}\
	                                <td>活动进行中</td>\
	                                {{?? value1.act_status == 3}}\
	                                <td>已撤下</td>\
	                                {{?? value1.act_status == 4 || value1.act_status == 6}}\
	                                <td>活动结束</td>\
	                                {{?? value1.act_status == 5}}\
	                                <td>即将开始</td>\
	                                {{? }}\
	                                <td>\
	                                {{? value1.act_status == 3}}\
	                                <a  style="cursor:pointer" href="activity-set-edit.html?data-id='+ "{{= value1.id }}" +'">编辑</a>&nbsp;&nbsp;\
	                                {{?? value1.act_status == 1}}\
	                                <a  style="cursor:pointer" href="activity-set-edit.html?data-id='+ "{{= value1.id }}" +'">编辑</a>&nbsp;&nbsp;\
	                                {{?? value1.act_status == 2}}\
	                                <a  style="cursor:pointer" class="edit-laye" href="javascript:void(0)"=>编辑</a>&nbsp;&nbsp;\
	                                {{?? value1.act_status == 4 || value1.act_status == 6}}\
	                                <a  style="cursor:pointer" class="activity-end" href="javascript:void(0)"=>编辑</a>&nbsp;&nbsp;\
	                                {{?? value1.act_status == 5}}\
	                                <a  style="cursor:pointer" class="edit-laye" href="javascript:void(0)"=>编辑</a>&nbsp;&nbsp;\
	                                <a  style="cursor:pointer" class="withdraw" data-id = "{{= value1.id}}">撤下</a>\
	                                {{? }}\
	                                {{? value1.act_status == 2}}\
	                                <a  style="cursor:pointer" class="withdraw" data-id = "{{= value1.id}}">撤下</a>\
	                                {{?? value1.act_status == 3}}\
	                                <a  style="cursor:pointer" class="release" data-id = "{{= value1.id}}">发布</a>\
	                                {{?? value1.act_status == 1}}\
	                                <a  style="cursor:pointer" class="release" data-id = "{{= value1.id}}">发布</a>\
	                                 {{?? value1.act_status == 4 || value1.act_status == 6}}\
	                                <a  style="cursor:pointer" class="activity-end" href="javascript:void(0)"=></a>&nbsp;&nbsp;\
	                                {{?}}\
	                                </td>\
	                            </tr>\
	                        {{~}}',
	    'modelList': ' {{~ it.data.modelSelectionD_T_O_S:item:index}}\
	                        <tr>\
	                            <td><input data_id="{{= item.id}}" type="checkbox" {{= item.marked==0? "" :"checked"}} name="selectItem"></td>\
	                            <td>{{= item.name}}</td>\
	                            <td>{{= item.mobile}}</td>\
	                            <td>{{= item.desc || ""}}</td>\
	                            <td>\
	                                {{? item.marked==0}}\
	                                未标记\
	                                {{?? item.marked==1}}\
	                                已标记\
	                                {{?}}\
	                            </td>\
	                            <td>{{= item.img.length}}</td>\
	                            <td class="img_btn" data_img={{= item.img}}><img data_img={{= item.img}} style="width:50px;height:50px" src={{= it.path + item.img[0] || ""}}></td>\
	                        </tr>\
	                    {{~}}',
	    'activityGoodsList': '{{~ it.data.data:item:index}}\
	                            <tr>\
	                                <td><img style="width:50px" src={{= it.path + item.image_uri}}></td>\
	                                <td>{{= item.item_name}}</td>\
	                                <td>{{= item.item_sn}}</td>\
	                                <td>{{= item.unit}}</td>\
	                                <td>{{= item.item_price_str}}</td>\
	                                {{? item.invalid==0}}\
	                                <td>正常</td>\
	                                {{?? item.invalid==1}}\
	                                <td>已作废</td>\
	                                {{?? !item.invalid}}\
	                                <td></td>\
	                                {{?}}\
	                                <td>\
	                                    {{?  item.invalid==0}}\
	                                     <a class="add-goods" style="cursor:pointer" href="activity-addGoods-management.html?data-id={{= item.id}}">编辑</a>&nbsp;\
	                                     <a class="to-viod" style="cursor:pointer" data-id={{= item.id}}>作废</a>\
	                                     {{?? item.invalid==1}}\
	                                     <a class="add-goods bad" style="cursor:pointer;color:#ccc;" href="javascript:void(0);">编辑</a>&nbsp;\
	                                     <a class="bad" style="cursor:pointer;color:#ccc;" data-id={{= item.id}}>作废</a>\
	                                     {{?}}\
	                                </td>\
	                            </tr >\
	                          {{~}}',
	    'activityOrderList': '{{~ it:item:index}}\
	        {{? item.act_order_details_d_t_o_list}}\
	            {{ for(var j=0, len=item.act_order_details_d_t_o_list.length; j<len; j++) { }}\
	                            <tr data_id="{{= item.id}}">\
	                                <td>{{= item.activity_name}}</td>\
	                                <td rowspan="{{= len}}">{{= item.act_order_details_d_t_o_list[j].item_name}}</td>\
	                                <td>{{= item.mobile}}</td>\
	                                <td>{{= item.province_name}}{{= item.city_name}}{{= item.area_name}}{{= item.address}}</td>\
	                                <td>{{= item.create_date}}</td>\
	                                {{? item.order_status==0}}\
	                                <td>待支付</td>\
	                                {{?? item.order_status==1}}\
	                                <td>待发货</td>\
	                                {{?? item.order_status==2}}\
	                                <td>已作废</td>\
	                                {{?? item.order_status==3}}\
	                                <td>已发货</td>\
	                                {{?? item.order_status==-1}}\
	                                <td></td>\
	                                {{?}}\
	                                <td>{{= item.reco_mobile}}</td>\
	                                <td>\
	                                    {{? item.order_status == 0 }}\
	                                        <a class="remove" data_status="{{= item.order_status}}">作废</a>\
	                                    {{?? item.order_status == 1}}\
	                                        <a class="remove" data_status="{{= item.order_status}}">作废</a>\
	                                        <a class="fahuo">发货</a>\
	                                    {{?? item.order_status==2}}\
	                                        <a class="remove" data_status="{{= item.order_status}}">已作废</a>\
	                                    {{?? item.order_status==3}}\
	                                        <a style="display:block;word-break:keep-all;white-space:nowrap;cursor:pointer;">已发货</a>\
	                                        <a style="display:block;word-break:keep-all;white-space:nowrap;cursor:pointer;">成为代理商</a>\
	                                    {{?}}\
	                                </td>\
	                            </tr >\
	            {{ } }}\
	        {{??}}\
	        {{?}}\
	    {{~}}',
	    'activityOrderListNew': '{{~ it:item:index}}\
	            <tr data_id="{{= item.id}}">\
	                <td>{{= item.activity_name}}</td>\
	                <td>{{= item.consignee}}</td>\
	                <td>{{= item.mobile}}</td>\
	                <td>{{= item.province_name}}{{= item.city_name}}{{= item.area_name}}{{= item.address}}</td>\
	                <td>{{= item.create_date}}</td>\
	                {{? item.order_status==0}}\
	                <td>待支付</td>\
	                {{?? item.order_status==1}}\
	                <td>支付中</td>\
	                {{?? item.order_status==2}}\
	                <td>支付完成</td>\
	                {{?? item.order_status==6}}\
	                <td>订单关闭</td>\
	                {{?? item.order_status==7}}\
	                <td>发货中</td>\
	                {{?? item.order_status==8}}\
	                <td>已发货</td>\
	                {{?? item.order_status==-1}}\
	                <td></td>\
	                {{??}}\
	                <td></td>\
	                {{?}}\
	                {{? item.gen_agent==1}}\
	                <td>是</td>\
	                {{?? item.gen_agent==2}}\
	                <td>否</td>\
	                {{?}}\
	                <td>{{= item.reco_mobile}}</td>\
	                <td>{{= item.express || ""}}</td>\
	                <td>{{= item.express_no || ""}}</td>\
	                <td>\
	                    {{? (item.order_status==7 || item.order_status==2 || item.order_status==8 )&& item.gen_agent==2}}\
	                        <a id="do_daili" style="display:block;word-break:keep-all;white-space:nowrap;cursor:pointer;">成为代理</a>\
	                    {{?}}\
	                    {{? item.order_status != 6}}\
	                        <a id="g_status" style="display:block;word-break:keep-all;white-space:nowrap;cursor:pointer;">更改状态</a>\
	                    {{?}}\
	                    {{? item.order_status==8}}\
	                        <a href="https://m.kuaidi100.com/index_all.html?postid={{= item.express_no}}" target="_blank" id="see_load" style="display:block;word-break:keep-all;white-space:nowrap;cursor:pointer;">查看物流</a>\
	                    {{?}}\
	                </td>\
	            </tr >\
	    {{~}}',
	    'expressOptionTpl': '<option value="">选择物流公司</option>\
	                         {{~ it.data:item:index }}\
	                            <option value="{{= item.express_code}}" {{? it.express_code== item.express_code}}selected{{?}}>{{= item.express_name}}</option>\
	                         {{~}}',
	    'activityStatisticsListName': '{{~ it.data:value1:index1 }}\
	                            <tr>\
							        <td>{{= value1.act_name}}</td>\
							        <td>{{= value1.show_start_date}}</td>\
	                                <td>{{= value1.show_end_date}}</td>\
	                                {{? value1.act_status == 1}}\
	                                <td>未发布</td>\
	                                {{?? value1.act_status == 2}}\
	                                <td>已发布</td>\
	                                {{?? value1.act_status == 3}}\
	                                <td>已撤下</td>\
	                                {{?? value1.act_status == 4}}\
	                                <td>活动结束</td>\
	                                {{? }}\
	                                <td>\
	                                    <a href="statistics-details.html?choice=order&data-id={{= value1.id}}" style="color:#428bca" > 订单统计</a>&nbsp;\
	                                    <a href="statistics-details.html?choice=stock&data-id={{= value1.id}}"" style = "color:#428bca" > 库存展示</a>&nbsp;\
	                                    <a href="statistics-details.html?choice=drainage&data-id={{= value1.id}}"" style="color:#428bca">引流数量</a> &nbsp;\
	                                    <a href="statistics-details.html?choice=draw&data-id={{= value1.id}}"" style="color:#428bca">抽奖详情</a> &nbsp;\
	                                    <a href="statistics-details.html?choice=reward&data-id={{= value1.id}}"" style="color:#428bca">引流奖励</a> &nbsp;\
	                                </td >\
	                            </tr>\
	                        {{~}}',
	    'activityGoods': '{{~ it:item:index}}\
	                            <li>\
	                                <div class= "prodImage" >\
	                                    <img src={{= item.picture_url}} alt="">\
	                                </div>\
	                                <div class="prodInfor">\
	                                    <p class="" style="margin-bottom:5px;">{{= item.item_name}}</p>\
	                                    <p class="">\
	                                        <label>价格:</label>\
	                                        <span class="itemPrice">{{= item.item_price}}</span>\
	                                    </p>\
	                                    <p class="">\
	                                        <label>数量:</label>\
	                                        <span class="num">{{= item.single_buy_num}}</span>\
	                                    </p>\
	                                    <p class="">\
	                                        <label>规格:</label>\
	                                        <span class="num">{{= item.unit}}</span>\
	                                    </p>\
	                                    <p class="">\
	                                        <label>库存:</label>\
	                                        <span class="total">{{= item.total_inv}}</span>\
	                                 </p>\
	                                    <p class="dinghuo">\
	                                        <a class="xd" href="javascript:void(0);">下单</a>\
	                                    </p>\
	                                </div>\
	                            </li >\
	                          {{~}}',
	};
	module.exports = self_tpl;

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	$(function () {
	    var self_tpl = __webpack_require__(23);
	    var $ajax = __webpack_require__(3);
	    var tmp_path_config = __webpack_require__(4);
	    //时间选择控件
	    var timepickerCfg = {
	        minInterval: (1000 * 60),
	        showSecond: true,
	        timeFormat: 'HH:mm:ss',
	        start: {
	           // maxDate: new Date()
	        },
	        end: {
	            //new Date()
	        }
	    };
	    $.timepicker.datetimeRange(
	        $('#start_time'),
	        $('#end_time'),
	        timepickerCfg
	    );

	    var param;
	    $("#batch-check").on("click",function(){
	        getList();
	       getData(param);
	    });
	    getList()
	    function getList() {
	        var _activity_name = $("#order_name").val(),
	            _reco_mobile = $("#referee_tel").val(),
	            _mobile = $("#user_tel").val(),
	            _consignee = $("#user_name").val(),
	            _wechat_no = $("#user_wx").val(),
	            _order_status = $("#status_act").find("option:selected").attr("data_order_status"),
	            _gen_agent = $("#gen_agent_status").find("option:selected").attr("data_gen_agent"),
	            _consignee = $("#name").val(),
	            _start_time = $("#start_time").val(),
	            _end_time = $("#end_time").val();
	        param = {
	            activity_name: _activity_name,
	            mobile: _mobile,
	            reco_mobile: _reco_mobile,
	            start_time: _start_time,
	            end_time: _end_time,
	            consignee: _consignee,
	            wechat_no: _wechat_no,
	            consignee:_consignee,
	            order_status:_order_status,
	            gen_agent:_gen_agent,
	            current_page: 1,
	            page_size: 10,
	            pageCount: ""
	        };
	    }
	    function getData(param){
	        $ajax.ajaxPost('/act/order/list.do', param, function(data) {
	        // $.post('/getYlJson.do', param, function(data) {
	            console.log(data)
	            param.pageCount = Math.ceil(data.data.total_counts / param.page_size);
	            if(data.success){
	                if(data.data.total_counts == 0){
	                    $("tbody").html("<tr><td colspan='9'><p style='text-align:center;'>没有相关订单！</p</td></tr>");
	                    $("#pager").html("");
	                }else{
	                    $("tbody").html(doT.template(self_tpl.activityOrderListNew)(data.data.act_order_list));
	                    $("#pager").pager({ pagenumber: param.current_page, pagecount: param.pageCount, buttonClickCallback: PageClick });
	                }
	            }
	        });
	    }
	     function PageClick(pageclickednumber) {
	        param.current_page = pageclickednumber;
	        getData(param);
	    };
	    $(".container").on("click","#g_status",function(){
	        $("#xiugai_status").modal('show');
	        var _id = $(this).parents("tr").attr("data_id");
	        $("#status-submit").attr("_id",_id);

	    });
	    // 修改状态提交
	    $("body").on("click","#status-submit",function(){
	        var _id = $("#status-submit").attr("_id");
	        var _status = $("#selStatus").find("option:selected").attr("data_order_status");
	        $ajax.ajaxPost('/act/order/invalid.do', {order_status:_status,order_id:_id}, function(data) {
	            $("#xiugai_status").modal('hide');
	            getData(param);
	        });
	    })
	    //导出
	    $("#exports-btn").click(function(){
	        var _order_name = $("#order_name").val(),
	            _referee_tel = $("#referee_tel").val(),
	            _user_tel = $("#user_tel").val(),
	            _name = $("#name").val(),
	            _status_act = $("#status_act option:selected").attr("data_order_status"),
	            _gen_agent_status = $("#gen_agent_status option:selected").attr("data_gen_agent"),
	            _start_time = $("#start_time").val(),
	            _end_time = $("#end_time").val();
	         if (!_order_name && !_referee_tel && !_user_tel && !_name && !_status_act && !_gen_agent_status && !_start_time && !_end_time) {
	            layer.msg("请选择至少一个查询条件导出", {
	                time: 500
	            });
	            return;
	         }
			var pramPage = param;
			// pramPage.is_all = $("#exports-select").val();
			// pramPage.current_page = filterCondition.current_page;
			// pramPage.page_size = filterCondition.page_size;
			// pramPage.status = $('#order_status option:checked').val();
			// var link = tmp_path_config.api_path_1 + "/delivery/export.do?is_all=" + pramPage.is_all +　"&status=" + pramPage.status + "&current_page=" + pramPage.current_page + "&page_size=" + pramPage.page_size;
			var link = __webpack_require__(12).doExports(tmp_path_config.api_path_1, '/act/order/export.do', pramPage);
			window.location.href = link;
	    });
	    
	    //成为代理操作
	    $(".container").on("click","#do_daili",function(){
	        var _id = $(this).parents("tr").attr("data_id");
	        layer.confirm("确定成为代理吗？" , {
				btn: ["确定", '取消'] //按钮
			}, function() {
	            $ajax.ajaxPost('/act/order/addActAgent.do', {order_id:_id}, function(data) {
	                    if(data.code == "10000") {
	                        layer.msg("成为代理成功",{
	                            time: 500
	                        });
	                        getData();
	                    }else{
	                        layer.msg("成为代理失败",{
	                            time: 1000
	                        });
	                        getData();
	                    }
	                }
	            );
			});
	        // var  _id = $(this).parents("tr").attr("data_id");
	        // $.post('/getStatusOrder.do', {id:_id}, function(data) {
	        //    if(data.code == 10000){
	        //     getData();
	        //    }
	        // });
	    })
	    // $('.container').delegate('.fahuo','click',function(){
	    //      var orderId = $(this).closest('tr').attr('data_id');
	    //     $('#order-delivery-modal').modal('show');
	    //     $('#delivery-confirm').attr('data_id',orderId);
	    //     getExpressInfo();
	    // });
	    function getExpressInfo() {
	        $ajax.post('/express/get.do',{},function(data){
	            if(data.success) {
	                $('#express_code_select').html(doT.template(self_tpl.expressOptionTpl)(data));
	            }
	        });
	    }
	    $('body').delegate('#delivery-confirm','click',function(){
	        var orderId = $(this).attr('data_id');
	        $ajax.post('/act/order/ship.do',{order_id:orderId,remarks:$('#expess-remarks').val(),express_no: $('#express-no').val(),express_code:$('#express_code_select option:checked').val(),express:$('#express_code_select option:checked').html()},function(data){
	            if(data.success) {
	                getData(param);
	                $('#order-delivery-modal').modal('hide');
	                $('#expess-remarks').val('');
	            }
	        });
	    });

	    var ratio = window.devicePixelRatio || 1,
			// 缩略图大小
			thumbnailWidth = 100 * ratio,
			thumbnailHeight = 100 * ratio,
			// Web Uploader实例
			uploader;
		uploader = WebUploader.create({
			// 自动上传。
			auto: false,
			// swf文件路径
			//swf: BASE_URL + '/js/Uploader.swf',
			// 文件接收服务端。
			// server: 'http://media.haiyn.com/upload.php',
			server: tmp_path_config.api_path_1 + '/act/order/impActortUnShipOrder.do',
			// formData: {
			//     user_id: 1,
			//     biz_code: 'hanshu'
			// },
			// 选择文件的按钮。可选。
			// 内部根据当前运行是创建，可能是input元素，也可能是flash.
			pick: {
				id: '#preview-btn',
				multiple: false
			},
			// 只允许选择文件，可选。
			accept: {
				title: 'Applications',
				//extensions: 'csv',
				// mimeTypes: 'image/*'
				mimeTypes: 'application/csv'
			}
		});
		$("#preview-btn").mouseenter(function() {
			if (uploader) {
				uploader.refresh();
			}
		});
		// 当有文件添加进来的时候
		uploader.on('fileQueued', function(file) {
			if(file.name.indexOf('.csv') != -1) {
				$('#selected-file').val(file.name);
			} else {
				layer.msg('只允许导入后缀名为csv的文件')
			}
			
			
			// var $img = $('#img-upload-modal .thumbnail-input');
			// // 创建缩略图
			// uploader.makeThumb(file, function(error, src) {
			// 	if (error) {
			// 		$img.replaceWith('<span>不能预览</span>');
			// 		return;
			// 	}
			// 	$img.val(src);
			// }, thumbnailWidth, thumbnailHeight);
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
			__webpack_require__(18).close(loadingIndex);
			$('#selected-file').val('');

			if(res.code === '40017') {
				layer.msg(res.msg);
			}
			
			if(res.code === '10000') {
				layer.msg(res.msg);
				getOrderList(1);
			}
			// location.reload();
			
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
		$('#confirm-import').click(function() {
			//console.log("上传...");
			if (uploader) {
				loadingIndex = __webpack_require__(18).open();
				uploader.upload();
			}
		});
	});

/***/ })
/******/ ]);