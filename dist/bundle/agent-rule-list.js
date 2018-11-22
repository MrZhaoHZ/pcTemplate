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

	module.exports = __webpack_require__(48);


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

/***/ 10:
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

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

	var self_tpl = __webpack_require__(49);
	var $ajax = __webpack_require__(3);
	var area = __webpack_require__(9);
	var team_level = __webpack_require__(10);
	var api_path_config = __webpack_require__(4);
	var httpURL = __webpack_require__(6);
	$(function() {
		var type = httpURL.getQueryString('type');
		var currMemberId = null;
		// team_level.team();
		team_level.level();
		area.init();
		var filterCondition = {
			page_size: 20,
			current_page: 1
		};

		function getAgencyList(pageIndex) {
			filterCondition.current_page = pageIndex;
			var reqStr = '/rule/saved_agent_list.do';
			if(type == 'new') {
				reqStr = '/rule/unsaved_agent_list.do';
				$('#create-rule-btn').hide();
			}
			$ajax.post(reqStr, filterCondition, function(data) {
				if(data.success) {
					if(data.data.datas) {
						$('#nodata-tips').hide();
						data.data.operate_type = 'edit';
						if(type == 'new') {
							data.data.operate_type = 'new';
						}
						$('#agency-list').html(doT.template(self_tpl.agencyListTpl)(data.data));
						$("#pager").pager({
							pagenumber: pageIndex,
							pagecount: Math.ceil(data.data.total_count / filterCondition.page_size),
							buttonClickCallback: getAgencyList,
							totalCounts: data.data.total_count
						});
						$("#pager").show();
					} else {
						$('#nodata-tips').show();
						$('#agency-list').html('');
						$("#pager").hide();
					}
				}
			});
		}
		getAgencyList(1);
		// $("body").on("click", ".radio_is_open", function() {
		// 	if($('input[name="isOpen"]:checked').val() == 1) {
		// 		$("#super_esc").css("display", "");
		// 	} else {
		// 		$("#super_esc").css("display", "none");
		// 	}
		// })
		$('#limit-setting-modal-body').delegate('.select-all', 'click', function () {
			if (!$(this).prop("checked")) {
				$("[name = selectItem]:checkbox").prop("checked", false);
			} else {
				$("[name = selectItem]:checkbox").prop("checked", true);
			}
		});
		$("body").on("click", "#super_esc", function() {
			_this = this;
			var content = {
				member_id: parseInt(menberId),
				status: parseInt($('input[name="isOpen"]:checked').val()),
				type: parseInt($('input[name="limit-type"]:checked').val()),
				superesc: "1"
			};
			if($(_this).attr("data_id")) {
				content.id = $(_this).attr("data_id");
			}
			content.agent_rule_list = arr;
			$ajax.post("/rule/superEsc.do", {content: JSON.stringify(content)}, function(data) {
				if(data.success) {
					window.location.reload(); 
				}
			});
		})
		$("body").on("click", "#super_open", function() {
			_this = this;
			var content = {
				member_id: parseInt(menberId),
				status: parseInt($('input[name="isOpen"]:checked').val()),
				type: parseInt($('input[name="limit-type"]:checked').val()),
				agent_grade: agent_grade +"",
				superesc: "3"
			};
			if($(_this).attr("data_id")) {
				content.id = $(_this).attr("data_id");
			}
			content.agent_rule_list = arr;
			$ajax.post("/rule/oneOpen.do", {content: JSON.stringify(content)}, function(data) {
				if(data.success) {
					window.location.reload(); 
				}
			});
		})
		$('#filter-btn').click(function() {
			filterCondition = {
				team: $('#all-team option:checked').val(),
				downLevel: $('#all-team-child option:checked').val(),
				isAll: $('#isAll option:checked').val(),
				allLevel: $('#all-level option:checked').val(),
				name: $('#nickname').val(),
				real_name: $('#name').val(),
				mobile: $('#phone').val(),
				wechat_id: $('#wechatID').val(),
				auth_number: $('#authoCode').val(),
				authon_personalid: $('#idnumber').val(),
				province_code: $('#area-province option:checked').val(),
				city_code: $('#area-province option:checked').val(),
				area_code: $('#area-district option:checked').val(),
				page_size: 20,
				current_page: 1
			}
			getAgencyList(1);
		});
		var pram = {
			"member_id": "",
			"spu_id": ""
		}
		// 点击新建的时候弹窗
		var EditIsSave = 0;
		$('.right-bar').delegate('.limit-setting', 'click', function() {
			EditIsSave = 0;
			$("#goods_list").attr("data_is_new", 2); // 当data_is_new是1的时候是编辑 2的时候是新建
			$('#limit-setting-modal-body').html("")
			menberId = $(this).attr('data-memberid');
			pram.member_id = $(this).attr('data-memberid');
			getAllGoodsList();
			pram.id = "";
			pram.spu_id = "";
			newGoodsRuleList();
			$('#limit-setting-modal').modal('show')
		});
		// 点击编辑的时候弹窗
		var menberId = null;
		var agent_grade = null;
		$('.right-bar').delegate('.limit-setting-edit', 'click', function() {
			EditIsSave = 0;
			$("#goods_list").attr("data_is_new", 1); // 当data_is_new是1的时候是编辑 2的时候是新建
			$('#limit-setting-modal-body').html("");
			agent_grade = $(this).attr('data_grade')
			pram.member_id = $(this).attr('data-memberid');
			menberId = pram.member_id;
			pram.id = "";
			pram.spu_id = "";
			getAllGoodsList();
			editGoodsRuleList();
			$('#limit-setting-modal').modal('show')
		});
		var arr = null;
		// 编辑的网络
		function editGoodsRuleList() {
			$ajax.ajaxPost('/rule/get_agent_ruleList.do', pram, function(data) {
				if(data.success) {
					arr = data.data.agent_rule_list;
					data.upload_path = api_path_config.upload_path;
					$('#limit-setting-modal-body').html(doT.template(self_tpl.limitSettingEdit)(data))
					$('#limit-setting-modal').modal('show');
				}
			});
		};

		function newGoodsRuleList() {
			$ajax.ajaxPost('/rule/get_agent_ruleList.do', pram, function(data) {
				if(data.success) {
					arr = data.data.agent_rule_list;
					data.upload_path = api_path_config.upload_path;
					if(data.data.agent_rule_list) {
						$('#limit-setting-modal-body').html(doT.template(self_tpl.limitSettingEdit)(data));
						return;
					}
					$('#limit-setting-modal-body').html(doT.template(self_tpl.limitSetting)(data));
				}
			});
		}

		function getAllGoodsList() {
			$ajax.ajaxPost('/commodity/spu/list.do', {
				"invalid": 0
			}, function(data) { // 获取商品列表
				if(data.success) {
					$('#goods_list').html(doT.template(self_tpl.goodsLists)(data.data.item_spu_d_t_os));
				}
			});
		};
		$('#limit-setting-modal-body').on('keyup', '.limit-num', function() {
			this.value = this.value.replace(/\D/g, '');
		});
		$("body").on("click", "#save_status", function() {
			_this = this;
			// var _list = [];
			// var arrayList = $("#limit-settimg-tbody").find("input:checked");
			// for (var i = 0; i < arrayList.length;i++){
			// 	var _spuid = $(arrayList[i]).parents("tr").attr("data-spuid");
			// 	var _obj = {};
			// 	_obj.spu_id = _spuid;
			// 	_list.push(_obj)
			// }
			var saveData = {
				id: $(_this).attr("data_id"),
				member_id: parseInt(menberId),
				status: parseInt($('input[name="isOpen"]:checked').val()),
				type: parseInt($('input[name="limit-type"]:checked').val())
			};
			saveDataFn(saveData);
		});
		//选择保存
		$("body").on("click", "#save_status1", function () {
			_this =$(this);
			var _objBox = {};
			_objBox.member_id = parseInt(menberId) + "",
			_objBox.status = parseInt($('input[name="isOpen"]:checked').val()) + "",
			_objBox.type = parseInt($('input[name="limit-type"]:checked').val()) + "";
			_objBox.id = _this.parents("#limit-setting-modal-body").find("table").attr("data_id");
			_objBox.spu_rule_list = [];
			var _list = [];
			var spuidlist = [];
			var arrayList = $("#limit-settimg-tbody").find("input:checked");
			if (arrayList.length == 0){
				layer.msg("请进行选择");
				return;
			}
			for (var i = 0; i < arrayList.length;i++){
				var _skuid = $(arrayList[i]).parents("tr").attr("data-skuid");
				var _day_max = $(arrayList[i]).parents("tr").find('.limit-num').eq(0).val();
				var _week_max = $(arrayList[i]).parents("tr").find('.limit-num').eq(1).val();
				var _month_max = $(arrayList[i]).parents("tr").find('.limit-num').eq(2).val();
				var _spuid = $(arrayList[i]).parents("tr").attr("data-id");
				var _allowed_buy = "2";
				var _status = spuidlist.indexOf(_spuid);
				if (_status == -1){
					spuidlist.push(_spuid);
					var _spuObj = {};
					var _skuObj = {};
					_spuObj.spu_id = _spuid;
					_spuObj.agent_rule_list = [];
					_skuObj.sku_id = _skuid;
					_skuObj.day_max = _day_max;
					_skuObj.week_max = _week_max;
					_skuObj.month_max = _month_max;
					_skuObj.allowed_buy = _allowed_buy;
					_spuObj.agent_rule_list.push(_skuObj);
					_list.push(_spuObj);
				}else{
					for (var j = 0; j < spuidlist.length;j++){
						if (_spuid == spuidlist[j]){
							for (var l = 0; l < _list.length;l++){
								if (_list[l].spu_id == _spuid){
									var _skuObj1 = {};
									_skuObj1.sku_id = _skuid;
									_skuObj1.day_max = _day_max;
									_skuObj1.week_max = _week_max;
									_skuObj1.month_max = _month_max;
									_skuObj1.allowed_buy = _allowed_buy;
									_list[l].agent_rule_list.push(_skuObj1);
								}
							}
						}
					}
				}																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																										
			}
			_objBox.spu_rule_list = _list;
			$ajax.ajaxPost('/rule/batchsave_agent_rule.do', {
				content: JSON.stringify(_objBox)
			}, function (data) {
				if (data.success) {
					layer.msg("操作成功！");
					getAllGoodsList();
					editGoodsRuleList();
				} else {
					layer.msg("操作失败！");
				}
			});
			console.log(_objBox)
		});
		$("body").on("click", ".save_per", function() {
			var saveData = {
				member_id: parseInt(menberId),
				status: parseInt($('input[name="isOpen"]:checked').val()),
				type: parseInt($('input[name="limit-type"]:checked').val())
			};
			if($("#limit-settimg-tbody").attr("data_id")) {
				saveData.id = $("#limit-settimg-tbody").attr("data_id");
			} else {
				saveData.id = "";
			}
			var parentTr = $(this).parents("tr");
			saveData.spu_id = parseInt(parentTr.attr("data-id"));
			var perSpuData = getPerTrData(parentTr); // 获取每个spu商品的信息
			if(perSpuData.flag == 2) { // 信息填写有误 ，返回
				return;
			}
			saveData.agent_rule_list = perSpuData.arr;
			saveDataFn(saveData);
			// $(".save_per").css("color", "#ccc");
		});
		// $("body").on("focus",".limit-num",function(){
		// 	var _this = $(this);
		// 	var _save = _this.parents("tr").find(".save_per").css("color", "#428bca");
		// })
		function getPerTrData(parentTr) {
			var list = [];
			var trLength = parentTr.find(".spu_name").attr("rowspan");
			var flag = 1;
			for(var i = 0; i < trLength; i++) {
				var item = {};
				item.sku_id = parseInt(parentTr.find(".goods_img").attr("data_id"));
				item.day_max = parentTr.find('.limit-num').eq(0).val();
				item.allowed_buy = 2;
				item.week_max = parentTr.find('.limit-num').eq(1).val();
				item.month_max = parentTr.find('.limit-num').eq(2).val();
				var temp = item;
				if(temp.day_max == '' || temp.week_max == '' || temp.month_max == '') {
					layer.msg('规则不能设置为空');
					//$('#limit-setting-modal').modal('toggle');
					flag = 2;
					return;
				}
				if(temp.day_max && temp.week_max && parseInt(temp.day_max) > parseInt(temp.week_max)) {
					layer.msg('周限量必须大于日限量！');
					//$('#limit-setting-modal').modal('toggle');
					flag = 2;
					return;
				}
				if(temp.day_max && temp.month_max && parseInt(temp.day_max) > parseInt(temp.month_max)) {
					layer.msg('月限量必须大于日限量！');
					// $('#limit-setting-modal').modal('toggle');
					flag = 2;
					return;
				}
				if(temp.week_max && temp.month_max && parseInt(temp.week_max) > parseInt(temp.month_max)) {
					layer.msg('月限量必须大于周限量！');
					// $('#limit-setting-modal').modal('toggle');
					flag = 2;
					return;
				};
				if(item.day_max != '' || item.week_max != '' || item.month_max != '') {
					list.push(item);
				};
				parentTr = parentTr.next();
			};
			return {
				"arr": list,
				flag: flag
			};
		}
		$('#save-limit-setting').click(function() {
			menberId = $(this).attr("data-memberid");
			var saveData = {
				member_id: currMemberId,
				status: $('input[name="isOpen"]:checked').val(),
				type: $('input[name="limit-type"]:checked').val()
			}
			var list = [];
			$('#limit-settimg-tbody tr').each(function() {
				var item = {};
				item.sku_id = parseInt($(this).data('id'));
				item.allowed_buy = $(this).find('[name=isHidden' + item.sku_id + ']:checked').val();
				item.day_max = $(this).find('.limit-num').eq(0).val();
				item.week_max = $(this).find('.limit-num').eq(1).val();
				item.month_max = $(this).find('.limit-num').eq(2).val();
				if(item.day_max != '' || item.week_max != '' || item.month_max != '') {
					list.push(item);
				}
			});
			//日<周<月
			for(var i = 0; i < list.length; i++) {
				var temp = list[i];
				if(temp.day_max == '' || temp.week_max == '' || temp.month_max == '') {
					layer.msg('规则不能设置为空');
					//$('#limit-setting-modal').modal('toggle');
					return;
				}
				if(temp.day_max && temp.week_max && parseInt(temp.day_max) > parseInt(temp.week_max)) {
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
					layer.msg('月限量不能小于周限量');
					// $('#limit-setting-modal').modal('toggle');
					return;
				}
			}
			saveData.agent_rule_list = list;
			saveDataFn(saveData);
		});

		function saveDataFn(saveData) {
			if(saveData.id) {

			} else {
				delete saveData.id;
			};
			EditIsSave = 2;
			var index = layer.load();
	//		$('#limit-setting-modal-body').html("");
			$ajax.ajaxPost('/rule/save_agent_rule.do', {
				content: JSON.stringify(saveData)
			}, function(data) {
				layer.close(index);
				if(data.success) {
					layer.msg("操作成功！");
	//				getAllGoodsList();
	//				editGoodsRuleList();
					// window.location.reload();
					// $('#limit-setting-modal').modal('hide');
					// getAgencyList(1);
					//location.href = 'agent-rule-list.html';
				} else {
					layer.msg("操作失败！");
				}
			});
		};
		$('#limit-setting-modal').on('hidden.bs.modal', function(e) {
			// do something...
			if(EditIsSave == 2) {
				location.href = 'agent-rule-list.html';
			};

		})
		$('#create-rule-btn').click(function() {
			location.href = 'agent-rule-list.html?type=new';
		});
		$("#goods_list").on("change", function() {
			var id = $("#goods_list").find("option:selected").attr("data_id");
			pram.spu_id = parseInt(id);
			if($(this).attr("data_is_new") == 1) { // 编辑
				editGoodsRuleList();
			} else if($(this).attr("data_is_new") == 2) { // 新建
				newGoodsRuleList();
			}
		});
		$("body").on("keyup", ".limit-num", function() {
			var value = $(this).val().trim();

			var re = /\D/g;
			if(re.test(value)) {
				$(this).val("");
			};
			var re00 = /^0\d+/;
			//var re = /^\0{0,6}/;
			if(re00.test(value)) {
				$(this).val("");
			};
		});
	});

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

	var self_tpl = {
		'agencyListTpl': '<thead>\
							<tr>\
							  <th>姓名</th>\
							  <th>手机号</th>\
							  <th style="display:none;">货款</th>\
							  <th>级别</th>\
							  <th style="display:none;">直属上级</th>\
							  <th style="display:none;">顶级</th>\
							  <th style="display:none;">直属人数</th>\
							  <th style="display:none;">团队人数</th>\
							  <th style="display:none;">状态</th>\
							  <th>操作</th>\
							</tr>\
						  </thead>\
						  <tbody>\
						  	{{~ it.datas:item:index }}\
								<tr>\
								  <td>{{= item.real_name}}</td>\
								  <td>{{= item.mobile}}</td>\
								  <td style="display:none;">{{= item.amount_str}}</td>\
								  <td>{{= item.agent_grade_name}}</td>\
								  <td style="display:none;">\
								  {{? item.superior_member_id != 1}}<a href="agent-detail.html?id={{= item.superior_member_id}}" target="_blank">{{= item.direct_superior}}</a>{{??}}{{= item.direct_superior}}{{?}}\
								  </td>\
								  <td style="display:none;">\
								  {{? item.top_member_id != 1}}<a href="agent-detail.html?id={{= item.top_member_id}}" target="_blank">{{= item.top_name}}</a>{{??}}{{= item.top_name}}{{?}}\
								  </td>\
								  <td style="display:none;">{{= item.directly_count}}</td>\
								  <td style="display:none;">{{= item.team_count}}</td>\
								  <td style="display:none;">\
								  {{? item.audit_status==0}}\
								  启用\
								  {{?? item.audit_status==1}}\
								  停用\
								  {{?}}\
								  </td>\
								  <td>\
								  {{? it.operate_type == "edit"}}\
								  <a href="javascript:void(0);" data_grade="{{= item.agent_grade}}" class="limit-setting-edit" data-memberid={{= item.member_id}}>\
								  		编辑规则\
								  </a>\
								  {{?? it.operate_type == "new"}}\
								  <a href="javascript:void(0);" class="limit-setting" data-memberid={{= item.member_id}}>\
								  		新建规则\
								  </a>\
								  {{?}}\
								  </td>\
								</tr>\
							{{~}}\
						  </tbody>'
		,'limitSetting': 	'<p>\
								是否开启：\
								<label class="radio-inline">\
								  <input type="radio" class="radio_is_open" name="isOpen" value="1" {{? it.data.status==1}}checked{{?}}> 是\
								</label>\
								<label class="radio-inline">\
								  <input type="radio" class="radio_is_open" name="isOpen" value="2" {{? it.data.status==2 || !it.data.status}}checked{{?}}> 否\
								</label>\
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型：\
								<label class="radio-inline">\
								  <input type="radio" name="limit-type" value="2" {{? !it.data.type}}checked{{?}}{{? it.data.type==2}}checked{{?}}> 团队\
								</label>\
								<label class="radio-inline">\
								  <input type="radio" name="limit-type" value="1" {{? it.data.type==1}}checked{{?}}> 个人\
								</label>\
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
								<button type="button" class="btn btn-primary" id="save_status">保存</button>\
							</p>\
							<div>\
								<table class="table table-bordered tab-content-center">\
								  <thead>\
									<tr>\
									  <th style="display:none;">隐藏商品</th>\
									  <th>商品</th>\
									  <th>图片</th>\
									  <th>商品编码</th>\
									  <th>单位</th>\
									  <th>规格</th>\
									  <th>每日限量</th>\
									  <th>每周限量</th>\
									  <th>每月限量</th>\
									  <th>操作</th>\
									</tr>\
								  </thead>\
								  <tbody id="limit-settimg-tbody">\
								  	{{ for(var j=0; j< it.data.length; j++) { }}\
									  	{{? it.data[j].limit_rule_list}}\
										  	 {{ for(var i=0; i< it.data[j].limit_rule_list.length; i++) { }}\
												<tr data-id="{{= it.data[j].spu_id}}">\
												  {{? i == 0}}\
												    <td class="spu_name" rowspan="{{= it.data[j].limit_rule_list.length}}">{{= it.data[j].item_name}}</td>\
												  {{?}}\
												  <td data_id="{{= it.data[j].limit_rule_list[i].sku_id}}" class="goods_img"><img src="{{= it.upload_path + it.data[j].limit_rule_list[i].image_uri}}" /></td>\
												  <td>{{= it.data[j].limit_rule_list[i].sku_sn}}</td>\
												  <td>{{= it.data[j].limit_rule_list[i].unit}}</td>\
												  <td>{{= it.data[j].limit_rule_list[i].specs || ""}}</td>\
												  <td><input type="text" class="limit-num" value="{{? it.data[j].limit_rule_list[i].day_max}}{{= it.data[j].limit_rule_list[i].day_max}}{{??}}9999{{?}}"></td>\
												  <td><input type="text" class="limit-num" value="{{? it.data[j].limit_rule_list[i].week_max}}{{= it.data[j].limit_rule_list[i].week_max}}{{??}}9999{{?}}"></td>\
												  <td><input type="text" class="limit-num" value="{{? it.data[j].limit_rule_list[i].month_max}}{{= it.data[j].limit_rule_list[i].month_max}}{{??}}9999{{?}}"></td>\
												  {{? i ==0}}\
												    <td rowspan="{{= it.data[j].limit_rule_list.length}}"><span class="save_per" style="cursor: pointer;">保存</span></td>\
												  {{?}}\
												</tr>\
											{{ } }}\
										{{?}}\
									{{ } }}\
								  </tbody>\
								</table>\
							</div>'
		,'limitSettingEdit': 	'<p>\
								开启限量规则：\
								<label class="radio-inline">\
								  <input class="radio_is_open" type="radio" name="isOpen" value="1" {{? it.data.status==1}}checked{{?}}> 是\
								</label>\
								<label class="radio-inline">\
								  <input class="radio_is_open" type="radio" name="isOpen" value="2" {{? it.data.status==2 || !it.data.status}}checked{{?}}> 否\
								</label>\
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型：\
								<label class="radio-inline">\
								  <input type="radio" name="limit-type" value="2" {{? !it.data.type}}checked{{?}}{{? it.data.type==2}}checked{{?}}> 团队\
								</label>\
								<label class="radio-inline">\
								  <input type="radio" name="limit-type" value="1" {{? it.data.type==1}}checked{{?}}> 个人\
								</label>\
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
								<button type="button" class="btn btn-primary" data_id="{{= it.data.id}}" id="save_status">保存</button>\
								&nbsp;&nbsp; \
								<button type="button" class="btn btn-primary" data_id="{{= it.data.id}}" id="save_status1">选择保存</button>\
								&nbsp;&nbsp; \
								<button type="button" class="btn btn-primary" data_grade="{{= it.data.agent_grade}}" data_id="{{= it.data.id}}" id="super_open" style="margin-left:105px;position: relative;bottom: 69px;right: 415px;">一键恢复</button>\
								&nbsp;&nbsp; \
								<button type="button" class="btn btn-primary" data_id="{{= it.data.id}}" id="super_esc" style="position: relative;bottom: 103px;left: 336px;">一键清零</button>\
							</p>\
							<div>\
								<table class="table table-bordered tab-content-center" data_id="{{= it.data.id}}">\
								  <thead>\
									<tr>\
										<th style="display:none;">隐藏商品</th>\
										<th><input type="checkbox" class="select-all"></th>\
									  <th>商品</th>\
									  <th>图片</th>\
									  <th>商品编码</th>\
									  <th>单位</th>\
									  <th>规格</th>\
									  <th>每日限量</th>\
									  <th>每周限量</th>\
									  <th>每月限量</th>\
									  <th>操作</th>\
									</tr>\
								  </thead>\
								  <tbody id="limit-settimg-tbody" data_id="{{= it.data.id}}">\
								  	{{ for(var j=0; j< it.data.agent_rule_list.length; j++) { }}\
									  	{{? it.data.agent_rule_list[j].limit_rule_list}}\
										  	 {{ for(var i=0; i< it.data.agent_rule_list[j].limit_rule_list.length; i++) { }}\
												<tr data-id="{{= it.data.agent_rule_list[j].spu_id}}" data-skuid="{{= it.data.agent_rule_list[j].limit_rule_list[i].sku_id}}">\
													<td><input type="checkbox" name="selectItem"></td>\
												  {{? i== 0}}\
												    <td rowspan="{{= it.data.agent_rule_list[j].limit_rule_list.length}}" class="spu_name">{{= it.data.agent_rule_list[j].item_name}}</td>\
												  {{?}}\
												  <td data_id="{{= it.data.agent_rule_list[j].limit_rule_list[i].sku_id}}" class="goods_img"><img src="{{= it.upload_path + it.data.agent_rule_list[j].limit_rule_list[i].image_uri}}" /></td>\
												  <td>{{= it.data.agent_rule_list[j].limit_rule_list[i].sku_sn}}</td>\
												  <td>{{= it.data.agent_rule_list[j].limit_rule_list[i].unit}}</td>\
												  <td>{{= it.data.agent_rule_list[j].limit_rule_list[i].specs || ""}}</td>\
												  <td><input type="text" class="limit-num" value="{{? it.data.agent_rule_list[j].limit_rule_list[i].day_max}}{{= it.data.agent_rule_list[j].limit_rule_list[i].day_max}}{{??}}9999{{?}}"></td>\
												  <td><input type="text" class="limit-num" value="{{? it.data.agent_rule_list[j].limit_rule_list[i].week_max}}{{= it.data.agent_rule_list[j].limit_rule_list[i].week_max}}{{??}}9999{{?}}"></td>\
												  <td><input type="text" class="limit-num" value="{{? it.data.agent_rule_list[j].limit_rule_list[i].month_max}}{{= it.data.agent_rule_list[j].limit_rule_list[i].month_max}}{{??}}9999{{?}}"></td>\
												  {{? i == 0}}\
												  	<td rowspan="{{= it.data.agent_rule_list[j].limit_rule_list.length}}"><span class="save_per" style="cursor: pointer;">保存</span></td>\
												  {{?}}\
												</tr>\
											{{ } }}\
										{{?}}\
									{{ } }}\
								  </tbody>\
								</table>\
							</div>'
		,'goodsLists': '<option>请选择商品</option>\
								{{~ it:item:index }}\
									<option data_id="{{= item.id}}">{{= item.spu_name}}</option>\
								{{~}}'
	};
	module.exports = self_tpl;


/***/ })

/******/ });