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

	module.exports = __webpack_require__(86);


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

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * @Author: Jing 
	 * @Date: 2018-01-15 17:48:05 
	 * @Last Modified by: Jing
	 * @Last Modified time: 2018-05-18 14:08:42
	 */
	$(function () {

	    var self_tpl = __webpack_require__(85);
	    var $ajax = __webpack_require__(3);
	    var tmp_path_config = __webpack_require__(4);
	    var area = __webpack_require__(9);
	    var api_path_config = __webpack_require__(4);
	    
	    var parameter = {};
	    // 发放红包
	    $("#tbody").on("click", ".operation", function (e) {
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
	        page_size: 10,
	        pageCount: "",
	    };
	    $("body").on("click", "#batch-check", function () {
	        //获取查询条件
	        pram.member_name = $("#user_name").val().trim();
	        pram.mobile = $("#drainage_tel").val().trim();
	        pram.act_name = $("#drainage_name").val().trim();
	        pram.status = $("#selected_state").find("option:selected").attr("value");
	        getLuckList(pram)
	    });
	    //抽奖数据列表获取
	    function getLuckList(pram) {
	        $ajax.ajaxPost('/red/packet.do', pram, function (data) {
	            if (data.success) {
	                pram.pageCount = Math.ceil(data.data.Pagination.total_count / pram.page_size);
	                $("#pager").pager({ pagenumber: pram.current_page, pagecount: pram.pageCount, buttonClickCallback: PageClick });
	                $("#tbody").html(doT.template(self_tpl.luckListTpl)(data.data.Pagination));
	                $("#no_used_date").text(data.data.stat.no_used_date);
	                $("#used_date").text(data.data.stat.used_date);
	            } else {
	                layer.msg(data.msg)
	            }
	        });
	    };
	    //抽奖页面分页
	    function PageClick(pageclickednumber) {
	        pram.current_page = pageclickednumber;
	        getLuckList(pram);
	    };
	    //导出
	    $("body").on("click", "#export", function () {
	        var pramPage = pram;
	        pramPage.is_all = $("#exports-select").val();
	        var link = __webpack_require__(12).doExports(tmp_path_config.api_path_1, '/red/export.do', pramPage);
	        window.location.href = link;
	    });
	// 结尾
	});

/***/ })

/******/ });