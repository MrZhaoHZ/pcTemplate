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

	module.exports = __webpack_require__(110);


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

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

	// var mainTpl = require('../module/recommend/mainweb-tpl.js');
	var $ajax = __webpack_require__(3);
	//var layer = require('../common/layer.js');
	// var api_path = require('../../../../tmp_path_config.js').api_path;
	var httpUrl = __webpack_require__(6);
	// var jsonstring2object = require('../../common/jsonstring2object.js');
	var $ajax = __webpack_require__(3);
	var localStorage = __webpack_require__(13);
	$(function() {
		// 传递的参数
		var param ={
			login_name: "",
			password: "",
			verify_code: ""
		};
		var publicKey = {};

		//初始化公钥
		// $ajax.ajaxPost4Autho('/rsa/get.do', null, function(data) {
		// 	if(data.success) {
		// 		publicKey.publicKeyExponent = data.data.publicKeyExponent;
		// 		publicKey.publicKeyModulus = data.data.publicKeyModulus;
		// 	}
		// });

		//初始化验证码
		$('#imgValicode').attr('src',$ajax.getValicode('/verify/verify_code.do'));
		// 验证码点击刷新
		$("#imgValicode").on("click", function(){
			$("#imgValicode").attr("src", $ajax.getValicode('/verify/verify_code.do'));
		});
		// 展示的错误提示信息
		var msg = "";
		// 输入用户名时 右侧小图标的显示隐藏
		// $("#user-name").keyup(function(){
		// 	if($("#user-name").val().length != 0){
		// 		$("#dele").css("display","block");
		// 	} else{
		// 		$("#dele").css("display","none");
		// 	};
		// });
		// $("#dele").click(function(){
		// 	$("#user-name").val("");
		// });
		// $("#pwd").on("keyup", function(){
		// 	if($("#user-name").val().length < 6){
		// 		$("#tips").css("visibility","visible");
		// 		$("#tips").text("*密码长度不能小于6")
		// 	};
		// });
		// $("#pwd").focus(function(){
		// 	$("#tips").css("visibility","hidden");
		// });
		// $("#check-num").keyup(function(){
		// 	this.value=this.value.replace(/\D/g,'');
		// });
		// $("#tips").click(function(){
		// 	$.get('/bossmanager/category/query.do', { parent_id: 0 }, function(data) {
	            
	 //        });
		// })
		// 数据校验
		function chectData(){
			msg = "";
			param.login_name = $("#name").val().trim();
			if(!param.login_name){
				msg = "*请输入用户名！";
				return;
			};
			param.password = $("#pwd").val();
			if(!param.password){
				msg = "*请输入密码！";
				return;
			};
			param.verify_code = $("#check-num").val();
			if(!param.verify_code){
				msg = "*请输入验证码！";
				return;
			};
		};
		// 点击登陆按钮
		$("#submit").click(function(){
			chectData();
			if(msg){
				$("#tips").css("visibility","visible");
		 		$("#tips").text(msg);
		 		return;
			};
			RSAUtils.setMaxDigits(200);
			// var key = new RSAUtils.getKeyPair(publicKey.publicKeyExponent ,"",publicKey.publicKeyModulus);  
			// var enPwd = RSAUtils.encryptedString(key,$('#pwd').val().split("").reverse().join("")); 
			console.log('md5 pwd:' + hex_md5($('#pwd').val()));
			// var enPwd = RSAUtils.encryptedString(key,hex_md5($('#pwd').val())); 
			var enPwd = hex_md5($('#pwd').val()); 
			param.password = enPwd;
			// var dePwd = RSAUtils.decryptedString(enPwd, key);
			// console.log('decrypted:' + RSAUtils.decryptedString(enPwd, key))
			// $ajax.ajaxGet4Autho('/user/login.do', param, function(data) {
			$ajax.ajaxGet4AuthoCR('/user/login.do', param, function(data) {
				if(data.success) {
					$.cookie('userId',data.data.user_id, {path: '/'});
					$.cookie('userName',data.data.user_name, {path: '/'});
					$ajax.post('/roleFunction/get_role_list.do', {}, function (data) {
						if (data.success) {
							localStorage.setItem('roleIdList', data.data[0]);
							// location.href = 'main/index.html';
							location.href = 'main/index.html';
						}
					})
				} else {
					$("#tips").css("visibility","visible");
		 			// $("#tips").text(data.msg);
		 			if(data.code == '30061' || data.code == "30014" || data.code == "30013") {
		 				$("#tips").text(data.msg);
		 			};
				}
			});
		});
		$("#pwd").focus(function(){
			$("#tips").css("visibility","hidden");
		});
		$("#check-num").keyup(function(){
			this.value=this.value.replace(/\D/g,'');
		});
		// $("#tips").click(function(){
		// 	$.get('/bossmanager/category/query.do', { parent_id: 0 }, function(data) {
				
		// 	});
		// })
	});


/***/ })

/******/ });