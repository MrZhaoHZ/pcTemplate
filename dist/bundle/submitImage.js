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

	module.exports = __webpack_require__(125);


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

/***/ 23:
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

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

	$(function () {
	    var self_tpl = __webpack_require__(23);
	    var $ajax = __webpack_require__(3);
	    var tmp_path_config = __webpack_require__(4);
	    var httpURL = __webpack_require__(6);
	    var api_path_config = __webpack_require__(4);
	    var pram ={
	        page_size: 20,
	        current_page: 1,
	        pageCount: "",
	    }
	    // 查询
	    $("body").on("click", "#batch-check", function () {
	        //获取查询条件
	        pram.name = $("#user_name").val().trim();
	        pram.mobile = $("#drainage_tel").val().trim();
	        pram.marked = $("#selected_state").find("option:selected").attr("value");
	        getData(pram)
	    });
	    // 渲染列表
	    getData(pram);
	    function getData() {
	        $ajax.ajaxPost('/selection/get.do', pram,
	            function (data) {
	                if (data.code == "10000") {
	                    pram.pageCount = Math.ceil(data.data.count / pram.page_size);
	                    $("#rewardPager").pager({
	                        pagenumber: pram.current_page,
	                        pagecount: pram.pageCount,
	                        buttonClickCallback: PageClick
	                    });
	                    $("tbody").html(doT.template(self_tpl.modelList)({
	                        data: data.data,
	                        path: api_path_config.upload_path_aly
	                    }));
	                }
	                if (data.data.length == 0) {
	                    $("tbody").html("<tr><td colspan='5'><p style='text-align:center;'>暂无数据！</p</td></tr>")
	                }
	            }
	        );
	    }
	    //页面分页
	    function PageClick(pageclickednumber) {
	        pram.current_page = pageclickednumber;
	        getData(pram);
	        submission();
	    };
	    //批量选择
	    $('#right-bar-container').delegate('.select-all', 'click', function () {
	        if (!$(this).prop("checked")) {
	            $("[name = selectItem]:checkbox").prop("checked", false);
	        } else {
	            $("[name = selectItem]:checkbox").prop("checked", true);
	        }
	    });
	    // 获取商品id
	    function getGoodsId() {
	        var items = $("input[name='selectItem']");
	        var len = items.length;
	        var data = {
	            "arr": []
	        } 
	        var arr = [];
	        var item = "";
	        for (var i = 0; i < len; i++) {
	            item = items.eq(i).attr("data_id");
	            marked = items.eq(i).is(":checked") == true ? 1 : 0;
	            data.arr.push({
	                id: item,
	                marked: marked
	            });
	        };
	        return data;
	    };
	    //提交
	    var ok ;
	    $("body").on("click", "#submission", function () {
	        submission();
	        if(ok){
	            layer.msg("提交成功")
	        }
	        getData(pram)
	    });
	    function submission() {
	        var data = getGoodsId();
	        $ajax.ajaxPost('/selection/deal.do', {
	            id_list: JSON.stringify(data.arr)
	        }, function (data) {
	            if (data.code == 10000) {
	                ok = true;
	                return ok
	            }else{
	                layer.msg(data.msg)
	            }
	        });
	    }
	    //图片预览
	    $("body").on("click", ".img_btn", function (e) {
	        $('#img_preview').modal('toggle')
	        var img = $(e.target).attr("data_img");
	        var img_arr = img.split(',')
	        var imgHtml = "";
	        for (let i = 0; i < img_arr.length; i++) {
	            imgHtml += `<div class="item">
	                            <img style="margin: 0 auto;" src=${api_path_config.upload_path_aly}${img_arr[i]}>
	                        </div>`            
	        }
	        $("#carousel-example-generic .carousel-inner").html(imgHtml)
	        $("#carousel-example-generic .carousel-inner :first").addClass("active")
	    });
	})

/***/ })

/******/ });