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

	module.exports = __webpack_require__(20);


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
/* 6 */
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
/* 7 */,
/* 8 */,
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var tpl = '<option value="0">所有等级</option>\
			  {{~ it:item:index }}\
					<option value="{{= item.id}}">{{= item.name}}</option>\
			  {{~}}';
	var tpl2 = '<option value="">所有等级</option>\
			  {{~ it:item:index }}\
					<option value="{{= item.id}}">{{= item.name}}</option>\
			  {{~}}';
	var $ajax = __webpack_require__(3);


	function selectEvent() {
		$('#all-team').change(function(){
			if($(this).val() === '0') {
				$('#all-team-child').hide().html('');
				return;
			}
			$('#all-team-child').show();
			$ajax.post('/getTeamChild.do',null,function(data){
				$('#all-team-child').html(doT.template(tpl)(data.data))
			});
		});
	}
	function team() {
		selectEvent();
		$ajax.post('/getTeam.do',null,function(data){
			$('#all-team').html(doT.template(tpl)(data.data))
		});
	}

	function level() {
		$ajax.post('/agent/agent_grade/list.do',null,function(data){
			$('#all-level').html(doT.template(tpl)(data.data))
		});
	}
	function level2() {
		$ajax.post('/agent/agent_grade/list.do',null,function(data){
			$('#all-level').html(doT.template(tpl2)(data.data))
		});
	}
	exports.team = team;
	exports.level = level;
	exports.level2 = level2;

/***/ }),
/* 11 */
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
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * @Author: Jing 
	 * @Date: 2018-01-15 17:48:05 
	 * @Last Modified by: Jing
	 * @Last Modified time: 2018-02-08 14:12:50
	 */
	$(function () {

	    var self_tpl = __webpack_require__(21);
	    var $ajax = __webpack_require__(3);
	    var tmp_path_config = __webpack_require__(4);
	    var httpURL = __webpack_require__(6);
	    var area = __webpack_require__(9);
	    var api_path_config = __webpack_require__(4);
	    var team_level = __webpack_require__(10);
	    var _id = httpURL.getQueryString('data-id');
	        pram = {
	            current_page: 1,
	            page_size: 10,
	            pageCount: "",
	            activity_id: _id
	        };

	    //引流数量等级选择  
	    var topNameSelectActive = 1;
	    function select2Event(target) {
	        target.on("#rewardContainer  select2:select", function (e) {
	            var nowIndex = parseInt($(e.params.data.element.parentNode).attr('data-selectindex'));
	            var tempSelectCommonLength = $('#rewardContainer .selectcommon').length;
	            for (var i = nowIndex + 1; i <= tempSelectCommonLength; i++) {
	                $('.topLevelNameClass' + i).closest('.form-group').remove();
	            }
	            if (e.params.data.element.className.indexOf("selectdirect") != -1 || e.params.data.element.className.indexOf("selectall") != -1) {
	                topNameSelectActive = $('#rewardContainer .selectcommon').length;
	                return;
	            }
	            topNameSelectActive = $('#rewardContainer .selectcommon').length + 1;
	            initTopLevelNameSelect(e.params.data.element.value, topNameSelectActive);
	        });
	    }

	    function initTopLevelNameSelect(member_id, topNameSelectActiveTemp) {
	        $ajax.post('/agent/agent_list/get_child_list.do', {
	            member_id: member_id
	        }, function (data) {
	            if (data.success && data.data.datas.length != 0) {
	                data.data.topNameSelectActive = topNameSelectActiveTemp;
	                data.data.parent_member_id = data.data.datas[0].parent_member_id;
	                $('#rewardContainer').append(doT.template(__webpack_require__(11).selectTpl)(data.data));
	                select2Event($('#rewardContainer .topLevelNameClass' + topNameSelectActiveTemp).select2());
	            } else {
	                topNameSelectActive = $('#rewardContainer .selectcommon').length;
	            }
	        });
	    }
	    $(function () {
	        initTopLevelNameSelect(1, 1);
	    });

	    //根据地址路径判断进入当前项,因数据可能随时改变所以每次切换会重新请求数据
	    //点击跳转数据加载
	    $("#ullist").on("click", "li", function () {
	        var _this = $(this);
	        var elName = _this.attr("class");
	        itemName = elName;
	        name(itemName);
	    });
	    //进行判断按需加载数据（防止数据实时刷新页面无提交，每次切换都会重新调取接口）
	    function name(name) {
	        if (itemName == "order") {
	            window.location.href = "statistics-details.html?choice=order&data-id="+_id;
	        } else if (itemName == "stock") {
	            window.location.href = "statistics-details.html?choice=stock&data-id="+_id;
	        } else if (itemName == "drainage") {
	            window.location.href = "statistics-details.html?choice=drainage&data-id="+_id;
	        } else if (itemName == "draw") {
	            window.location.href = "statistics-details.html?choice=draw&data-id="+_id;
	        }
	    }
	    pramReward = {
	        current_page: 1,
	        page_size: 10,
	        pageCount: "",
	        activity_id: _id
	    };
	    getDrainageRewardt(_id);
	    getDrainageRewardList(pramReward);
	    //引流奖励列表获取
	    function getDrainageRewardt(_id) {
	        $ajax.ajaxPost('/act/stat/agent_award.do', pramReward, function (data) {
	            if (data.success) {
	                $("#reward_num").text(data.data[0].total_counts);
	                $("#amount_num").text(data.data[0].total_amount);
	            }
	        });
	    }
	    function getDrainageRewardList(pramReward) {
	        $ajax.ajaxPost('/act/stat/award.do', pramReward, function (data) {
	            pramReward.pageCount = Math.ceil(data.data.total_count / pramReward.page_size);
	            if (data.success) {
	                $("#reward_table_pager").pager({ pagenumber: pramReward.current_page, pagecount: pramReward.pageCount, buttonClickCallback: getDrainageReward });
	                $('#reward_table').html(doT.template(self_tpl.drainageRewardList)(data.data));
	            }
	        });
	    }
	    //引流奖励页面分页
	    function getDrainageReward(pageclickednumber) {
	        pramReward.current_page = pageclickednumber;
	        getDrainageRewardList(pramReward);
	    }

	    //引流页面查询
	    $("body").on("click", "#reward-check", function () {
	        pramReward.mobile = $("#reward_name").val();
	        pramReward.real_name = $("#reward_naem").val();
	        pramReward.top_member_id = $('#rewardContainer .topLevelNameClass' + topNameSelectActive + ' :checked').val();
	        pramReward.all_direct_type = $('#rewardContainer .topLevelNameClass' + topNameSelectActive + ' :checked').attr('data-type');
	        getDrainageRewardList(pramReward);
	        getDrainageRewardt(pramReward);
	    });
	});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	var self_tpl = {
	    'orderListName': '{{~ it.data:item:index1 }}\
	                            <tr>\
	                                <td><img style="width:40px" src="{{= it.path + item.image_uri}}" alt="">\</td>\
							        <td>{{= item.item_name}}</td>\
							        <td>{{= item.sales_count}}</td>\
	                                <td>{{= item.total_amount}}</td>\
	                            </tr>\
	                        {{~}}',
	    'activityStockList': '{{~ it.data.data:item:index}}\
								<tr>\
									<td>{{= item.sort}}</td>\
									<td><img style="width:50px" src="{{= it.path + item.picture_url}}" alt=""></td>\
									<td>{{= item.item_name}}</td>\
									<td>{{= item.item_price}}</td>\
									<td>{{= item.total_inv}}</td>\
									<td>{{= item.usable_inv || ""}}</td>\
								</tr>\
							{{~}}',
		'drainageListName': '<div class= "form-inline" style="margin:10px 0">\
									<div class="form-group">准代理总数:\
									 <a class="proxyNumber" data-id="" data-agemt="0">{{= it.data[0].totalIntentAgent}}</a>\
									<div class="form-group" style="margin-left:15px">正式代理总数：\
									 <a class="proxyNumber"data-id="" data-agemt="1">{{= it.data[0].totalFormalAgent}}</a>\
									</div>\
	                        	</div >\
								<table class="table table-striped table-bordered table-hover user-table" id="">\
									<thead>\
										<tr>\
											<th>推荐人</th>\
											<th>准代理数</th>\
											<th>正式代理数</th>\
										</tr>\
									</thead>\
									<tbody id="drainage_table">\
									{{~ it.data[1].datas:item:index}}\
										<tr>\
											<td>{{= item.recommend_name}}</td>\
											<td><a class="proxyNumber" data-name={{= item.recommend_name}} data-agemt="0" data-referee={{= item.referee_id}} >{{= item.intent_count}}</a>\</td>\
											<td><a class="proxyNumber" data-name={{= item.recommend_name}} data-agemt="1" data-referee={{= item.referee_id}}>{{= item.formal_count}}</a>\</td>\
										</tr>\
									{{~}}\
									</tbody>\
								</table>',
		'drawListName': '<div class="form-inline">\
							<div class= "form-group" >发放资格总数 :  \
	                            <a style = "color:blueviolet">{{= it.data[0].luckCount}}</a>\
	                        </div>\
							<br>\
							<div class="form-group">&nbsp;&nbsp;&nbsp;已抽奖次数 :\
	                            <a style="color:darkmagenta">{{= it.data[0].lotteryCount}}</a>\
							</div>\
							<br>\
							<div class="form-group">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   抽中次数 : \
	                            <a class="draw-paces" data-id="">{{= it.data[0].winCount}}</a>\
							</div>\
	                    	</div>\
							<table class="table table-striped table-bordered table-hover user-table" style="margin-top:20px" id="">\
								<thead>\
									<tr>\
										<th>奖品类型</th>\
										<th>奖品</th>\
										<th>价值</th>\
										<th>已出奖数</th>\
										<th>总奖数</th>\
									</tr>\
								</thead>\
								<tbody id="draw_table">\
									{{~ it.data[1]:item:index}}\
									<tr>\
									{{? item.lottery_type == 0}}\
										<td>红包</td>\
									{{?? item.lottery_type ==1 }}\
										<td>商品</td>\
									{{?}}\
										<td>{{= item.item_name}}</td>\
										<td>{{= item.lottery_amount}}</td>\
										<td><a class="draw-paces" data-id={{= item.award_conf_id}}>{{= item.award_num}}</a></td>\
										<td>{{= item.win_count}}</td>\
									</tr>\
									{{~}}\
								</tbody>\
							</table>',
		'drainageRewardList': '{{~ it.datas:item:index}}\
								<tr>\
									<td>{{= item.real_name}}</td>\
									<td>{{= item.mobile}}</td>\
									<td>{{= item.wechat_no}}</td>\
									<td>{{= item.award_amount || ""}}</td>\
									<td>{{= item.create_date}}</td>\
								</tr>\
							{{~}}',
		'drainageSubListName': '{{~ it.datas:item:index}}\
								<tr>\
									<td>{{= item.para_agent_name}}</td>\
									<td>{{= item.mobile}}</td>\
									<td>{{= item.wechat_no}}</td>\
									<td>{{= item.become_agent_str || ""}}</td>\
									<td>{{= item.recommend_name}}</td>\
								</tr>\
							{{~}}',
		'drawPageListName': '{{~ it.datas:item:index}}\
								<tr>\
									<td>{{= item.member_name}}</td>\
									<td>{{= item.mobile}}</td>\
									<td>{{= item.wechat_no}}</td>\
									{{? item.lottery_type == 0}}\
										<td>红包</td>\
									{{?? item.lottery_type ==1 }}\
										<td>商品</td>\
									{{?}}\
									<td>{{= item.item_name}}</td>\
									<td>{{= item.lottery_amount}}</td>\
									<td>{{= item.create_date}}</td>\
								</tr>\
							{{~}}',
	};
	module.exports = self_tpl;

/***/ })
/******/ ]);