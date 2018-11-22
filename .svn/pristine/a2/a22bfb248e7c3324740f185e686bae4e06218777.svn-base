// var mainTpl = require('../module/recommend/mainweb-tpl.js');
var $ajax = require('../../common/ajax.js');
//var layer = require('../common/layer.js');
// var api_path = require('../../../../tmp_path_config.js').api_path;
var httpUrl = require('../../common/http-url.js');
// var jsonstring2object = require('../../common/jsonstring2object.js');
var $ajax = require('../../common/ajax.js');
var localStorage = require('../../common/localStorage.js');
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
