$(function(){
	var self_tpl = require('../../module/tpl/content-tpl.js');
	var $ajax = require('../../common/ajax.js');
	var parm = {
		nickName: "",
		name: "",
		phone: "",
		weChat: "",
		identity_num: "",
		level: ""
	};

	$("#save").on("click", function(){
		$('#myModal').modal();
		getData(1);
		function getData(pagenumber){
			
			$ajax.post('/getContentImgTextSettingTpl.do', {  }, 
				function(data){
					console.log(data.data.data[2].content_title)
					$('#home_content').append(doT.template(self_tpl.contentImgTextSettingTpl)(data.data));
					$("#pager").pager({ pagenumber: pagenumber, pagecount: 18, buttonClickCallback: PageClick});
			});
		};
		function PageClick (pageclickednumber) {
			getData(pageclickednumber);
		};
	});
	$("#myModal").on("click", ".modal-body a", function(){
		console.log("fujichao")
	});
	
});