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

	module.exports = __webpack_require__(84);


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

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

	var provincetpl = '<option value="0">所有省</option>\
					{{~ it:item:index }}\
					<option value="{{= item.code}}">{{= item.name}}</option>\
			  	{{~}}';
	var citytpl = '<option value="0">所有市</option>\
					{{~ it:item:index }}\
					<option value="{{= item.code}}">{{= item.name}}</option>\
			  	{{~}}';
	var districttpl = '<option value="0">所有区县</option>\
					{{~ it:item:index }}\
					<option value="{{= item.code}}">{{= item.name}}</option>\
			  	{{~}}';
	var $ajax = __webpack_require__(3);


	function selectEvent() {
		$('#area-province').change(function(){
			if($(this).val() === '0') {
				$('#area-city').html('<option value="0">所有市</option>')
				$('#area-district').html('<option value="0">所有区县</option>');
				return;
			}
			$ajax.post('/agent/get_delivery.do',{level:2,code:$(this).val()},function(data){
				$('#area-city').html(doT.template(citytpl)(data.data))
			});
		});
		$('#area-city').change(function(){
			if($(this).val() === '0') {
				$('#area-district').html('<option value="0">所有区县</option>');
				return;
			}
			$ajax.post('/agent/get_delivery.do',{level:3,code:$(this).val()},function(data){
				$('#area-district').html(doT.template(districttpl)(data.data))
			});
		});
	}
	function init() {
		selectEvent();
		$ajax.post('/agent/get_delivery.do',{level:1},function(data){
			$('#area-province').html(doT.template(provincetpl)(data.data))
		});
	}


	exports.init = init;

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

	var self_tpl = {
		'selectTpl': '<div class="form-group">\
						<select class="form-control selectcommon topLevelNameClass{{= it.topNameSelectActive }}" data-selectindex="{{= it.topNameSelectActive }}">\
							<option value="{{= it.parent_member_id}}" data-type="1" class="selectall">全部</option>\
							<option value="{{= it.parent_member_id}}" data-type="2" class="selectdirect">直属</option>\
							{{~ it.datas:item:index }}\
								<option value="{{= item.member_id }}">{{= item.grade_name }}-{{= item.real_name }}</option>\
							{{~}}\
						</select>\
					</div>',
		'selectChildTpl': '<div class="form-group">\
						<select class="form-control selectcommon topLevelNameClass{{= it.topNameSelectActive }}" data-selectindex="{{= it.topNameSelectActive }}">\
							<option value="{{= it.parent_member_id}}" data-type="1" class="selectall">全部</option>\
							<option value="{{= it.parent_member_id}}" data-type="2" class="selectdirect">直属</option>\
							{{~ it.datas:item:index }}\
								<option value="{{= item.member_id }}" data-type="{{= item.member_id }}">{{= item.grade_name }}-{{= item.real_name }}</option>\
							{{~}}\
						</select>\
					</div>',
		'selectTypeTpl': '<div class="form-group all-or-direct">\
					<select class="form-control topLevelNameClass{{= it.topNameSelectActive }}" data-selectindex="{{= it.topNameSelectActive }}">\
						<option value="{{= it}}" data-type="1" class="selectall">全部</option>\
						<option value="{{= it}}" data-type="2" class="selectdirect">直属</option>\
					</select>\
				</div>'
	};
	module.exports = self_tpl;



/***/ }),

/***/ 12:
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

/***/ 13:
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

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * @Author: Jing 
	 * @Date: 2018-01-15 17:48:05 
	 * @Last Modified by: Jing
	 * @Last Modified time: 2018-05-21 15:37:26
	 */
	$(function () {

	    var self_tpl = __webpack_require__(85);
	    var $ajax = __webpack_require__(3);
	    var tmp_path_config = __webpack_require__(4);
	    var area = __webpack_require__(9);
	    var api_path_config = __webpack_require__(4);


	    var information ={}
	        
	    var parameter = {};
	    // 发放红包
	    $("#drainage_details").on("click", ".operation", function (e) {
	        parameter.open_id = $(e.target).attr("data-id");
	        parameter.order_sn = $(e.target).attr("data-sn");
	        parameter.act_id = $(e.target).attr("data-act")
	        //询问框
	        layer.confirm("是否确认发放红包", {
	            btn: ['确定', '取消'] //按钮
	        }, function () {
	            $ajax.ajaxPost('/red/send.do', parameter, function (data) {
	                if (data.success) {
	                    if (data.data.error_code == "60002" || data.data.error_code == "60003" || data.data.error_code == "60004" || data.data.error_code == "50010") {
	                        layer.msg(data.data.error_msg);
	                    } else {
	                        layer.msg('发放成功', {
	                            icon: 1
	                        });
	                    }
	                } else {
	                    layer.msg(data.msg)
	                }
	            });
	        }, function () {
	            layer.msg('发放失败');
	        });
	    });

	    // 查询
	    var pram = {
	        current_page: 1,
	        page_size: 15,
	        pageCount: "",
	    };
	    $("body").on("click", "#batch-check", function () {
	        $("#batch-check").attr("disabled","disabled")
	        // $("#tbody").html('<tr><td colspan="9"><img src="../../images/timg.gif" alt=""></td></tr>')
	        $("#tbody").html('<tr><td colspan="9">数据正在加载中，请稍候。。。</td></tr>')
	        //获取查询条件
	        pram.member_name = $("#user_name").val().trim();
	        pram.mobile  = $("#drainage_tel").val().trim();
	        pram.activity_name = $("#drainage_name").val().trim();
	        pram.current_page = 1;
	        pageCount: "",
	        pram.agent_grade = $("#selected_state").find("option:selected").attr("value");
	        pram.top_member_id = $('.topLevelNameClass' + topNameSelectActive + ' :checked').val(),
	        pram.all_direct_type = $('.topLevelNameClass' + topNameSelectActive + ' :checked').attr('data-type'),
	        getRewardList(pram)
	    });

	    //引流数据列表获取
	    function getRewardList(pram) {
	        $ajax.ajaxPost('/act/stat/drai.do', pram, function (data) {
	            if (data.code == 10000) {
	                $("#batch-check").removeAttr("disabled");
	                pram.pageCount = Math.ceil(data.data.total_count / pram.page_size);
	                $("#rewardPager").pager({ pagenumber: pram.current_page, pagecount: pram.pageCount, buttonClickCallback: PageClick });
	                //引流总人数
	                $("#number span").text(data.data.total_counts)
	                if (data.data.act_order_list.length>0){
	                    $("#tbody").html(doT.template(self_tpl.drainageListTpl)(data));
	                } else{
	                    $("#tbody").html('<tr><td colspan="8">暂无数据</td></tr>')
	                }
	            } else {
	                layer.msg(data.msg)
	            }
	        });
	    };
	    //引流页面分页
	    function PageClick(pageclickednumber) {
	        pram.current_page = pageclickednumber;
	        getRewardList(pram);
	    };
	    //导出
	    $("body").on("click", "#export", function () {
	        var pramPage = pram;
	        pramPage.is_all = $("#exports-select").val();
	        var link = __webpack_require__(12).doExports(tmp_path_config.api_path_1, '/act/stat/list/export.do', pramPage);
	        window.location.href = link;
	    });


	    // 订单查询
	    var orderPram = {
	        current_page: 1,
	        page_size: 15,
	        pageCount: "",
	    };
	    //引流详情
	    $("#tbody").on("click", ".eject", function () {
	        $('#drainage_details').modal('toggle');
	        orderPram.member_id = $(this).attr("data-id")
	        orderPram.is_team = $(this).attr("data-type")
	        orderPram.activity_name = $(this).attr("data-act")
	        getRewardOrderList(orderPram)
	    });
	    
	    $(".modal-content").on("click", "#order_query", function () {
	        //获取订单查询条件
	        orderPram.member_name = $("#order_name").val().trim();
	        orderPram.mobile = $("#order_tel").val().trim();
	        orderPram.reco_mobile = $("#share_tel").val().trim();
	        orderPram.deliver = $("#red_state").find("option:selected").attr("value");
	        getRewardOrderList(orderPram)
	    });

	    //代理等级筛选
	    var topNameSelectActive = 1;
	    function select2Event(target) {
	        target.on("select2:select", function (e) {
	            var nowIndex = parseInt($(e.params.data.element.parentNode).attr('data-selectindex'));
	            var tempSelectCommonLength = $('.selectcommon').length;
	            for (var i = nowIndex + 1; i <= tempSelectCommonLength; i++) {
	                $('.topLevelNameClass' + i).closest('.form-group').remove();
	            }
	            if (e.params.data.element.className.indexOf("selectdirect") != -1 || e.params.data.element.className.indexOf("selectall") != -1) {
	                topNameSelectActive = $('.selectcommon').length;
	                return;
	            }
	            topNameSelectActive = $('.selectcommon').length + 1;
	            initTopLevelNameSelect(e.params.data.element.value, topNameSelectActive);
	        });
	    }

	    function initTopLevelNameSelect(member_id, topNameSelectActiveTemp) {
	        $ajax.post('/agent/agent_list/get_child_list.do', { member_id: member_id }, function (data) {
	            if (data.success && data.data.datas.length != 0) {
	                //$('#topLevelContainer').append('<div class="form-group"><select class="form-control selectcommon topLevelNameClass' + topNameSelectActive + '" data-selectIndex="' + topNameSelectActive + '"><optgroup label="大区"><option value="0">bagent001</option><option value="1">bagent002</option><option value="2">bagent003</option></optgroup></select></div>');
	                data.data.topNameSelectActive = topNameSelectActiveTemp;
	                data.data.parent_member_id = data.data.datas[0].parent_member_id;
	                $('#topLevelContainer').append(doT.template(__webpack_require__(11).selectTpl)(data.data));
	                select2Event($('.topLevelNameClass' + topNameSelectActiveTemp).select2());
	            } else {
	                // $('#topLevelContainer').append(doT.template(require('../../module/tpl/top-level-name-select.js').selectTypeTpl)(member_id));
	                topNameSelectActive = $('.selectcommon').length;
	            }
	        })
	    }

	    initTopLevelNameSelect(1, 1);


	    //引流订单列表获取
	    function getRewardOrderList(orderPram) {
	        $ajax.ajaxPost('/act/stat/drai_detail.do', orderPram, function (data) {
	            orderPram.pageCount = Math.ceil(data.data.total_counts / orderPram.page_size);
	            if (data.success) {
	                $("#rewardOrderPager").pager({ pagenumber: orderPram.current_page, pagecount: orderPram.pageCount, buttonClickCallback: orderPageClick });
	                $("#order_tbody").html(doT.template(self_tpl.orderListTpl)(data));
	            } else {
	                layer.msg(data.msg)
	            }
	        });
	    };
	    //引流订单页面分页
	    function orderPageClick(pageclickednumber) {
	        orderPram.current_page = pageclickednumber;
	        getRewardOrderList(orderPram);
	    };
	// 结尾
	});

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

	var self_tpl = {
	    'luckListTpl': '{{~ it.datas:item:index }}\
						<tr>\
	                        <td>{{= item.member_name}}</td>\
	                        <td>{{= item.mobile}}</td>\
	                        <td>{{= item.order_sn}}</td>\
	                        <td>{{= item.act_name}}</td>\
	                        <td>{{= item.amount_str}}</td>\
	                        <td>{{= item.deliver_str}}</td>\
	                        <td>{{= item.remarks}}</td>\
	                        <td>\
	                            <a class="operation" data-sn={{= item.order_sn}}  data-id={{= item.open_id}} data-act={{= item.act_id}} >发红包</a>\
	                        </td>\
	                    </tr>\
	                {{~}}',
	    'drainageListTpl': '{{~ it.data.act_order_list:item:index }}\
						<tr>\
	                        <td>{{= item.member_name}}</td>\
	                        <td>{{= item.mobile}}</td>\
	                        <td>\
	                            {{? item.agent_grade == 1}}\
									合伙人\
								{{?? item.agent_grade == 2}}\
	                                总代理\
	                            {{?? item.agent_grade == 3}}\
	                                市级代理\
	                            {{?? item.agent_grade == 4}}\
	                                品牌督导\
	                            {{?? item.agent_grade == 5}}\
									美丽顾问\
								{{?}}\
	                        </td>\
	                        <td>{{= item.activity_name}}</td>\
	                        <td><a class="eject" data-id={{= item.member_id}} data-act="{{= item.activity_name}}" data-type="1">{{= item.drai_team_count}}</a></td>\
	                        <td><a class="eject" data-id={{= item.member_id}} data-act="{{= item.activity_name}}" data-type="0">{{= item.drai_count}}</a></td>\
	                        <td>￥{{= item.drai_award}}</td>\
	                        <td>￥{{= item.awarded || 0}}</td>\
	                    </tr>\
	                {{~}}',
	    'orderListTpl': '{{~ it.data.act_order_list:item:index }}\
						<tr>\
	                        <td>{{= item.consignee}}</td>\
	                        <td>{{= item.mobile}}</td>\
	                        <td>{{= item.activity_name}}</td>\
	                        <td>\
	                            {{? item.gen_agent == 1}}\
									是\
								{{?? item.gen_agent == 2}}\
	                                否\
								{{?}}\
	                        </td>\
	                        <td>{{= item.member_name}}</td>\
	                        <td>{{= item.reco_mobile}}</td>\
	                        <td>{{= item.deliver_str}}</td>\
	                        <td>{{= item.remarks}}</td>\
	                        <td>{{= item.pay_date || ""}}</td>\
	                        <td><a class="operation" data-id={{= item.open_id}} data-sn={{= item.order_sn}} data-act={{= item.activity_id}}>发红包</a></td>\
	                    </tr>\
					{{~}}',
	};
	module.exports = self_tpl;

/***/ })

/******/ });