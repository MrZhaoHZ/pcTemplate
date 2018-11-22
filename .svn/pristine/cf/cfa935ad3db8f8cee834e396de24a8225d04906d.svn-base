$(function(){
	var self_tpl = require('../../module/tpl/content-tpl.js');
	var $ajax = require('../../common/ajax.js');
	// var tpl = '{{~ it.list:item:index }}\
	// 			<option value="{{= item.id}}">{{= item.name}}</option>\
	// 	  {{~}}';
	// function level() {
	// 	$ajax.post('/getLevel.do',null,function(data){
	// 		$('#options').html(doT.template(tpl)(data.data))
	// 	});
	// };
	//level();
	var tpl = '<option value=""></option>\
				{{~ it:item:index }}\
					<option value="{{= item.id}}">{{= item.name}}</option>\
			  	{{~}}';
	function cate() {
		$ajax.ajaxPost('/content/get_main_menu.do',{},function(data){
			if (data.code == "10000") {
				$('#options').html(doT.template(tpl)(data.data));
			};
		});
	};
	// cate();
	getData();
	function getData(pagenumber){
		$ajax.ajaxPost('/content/custom_menu_list.do', {  },
			function(data){
				$('#table-body').html(doT.template(self_tpl.contentCustomMenuTpl)(data.data));
				//$("#pager").pager({ pagenumber: pagenumber, pagecount: 18, buttonClickCallback: PageClick});
		});
	};
	function PageClick (pageclickednumber) {
		getData(pageclickednumber);
	};

	var pram = {
		name: "",
		sort: "",
		type: ""
	};
	var flag = 1;
	$("#searcher").on("click", function(){
		pram = {
			name: "",
			sort: "",
			type: ""
		};
		flag = 1;
		pram.id = "";
		$("#options").removeAttr("disabled", "disabled");
		$("#menu_link").val("");
		$("#menu_name").val("");
		$("#menu_key").val("");
		$("#menu_sort").val("");
		//$("input[name=optionsStatus]").attr("checked", false);
		$('input:radio:first').trigger("click");
		$("#options option").remove();
		$('#myModal').modal();
	});
	//只能输入0-6个数字
	$("#menu_sort").keyup(function(){
		var num = $("#menu_sort").val();
		if(!(/^\d{0,2}$/.test(num))){ 
			$("#menu_sort").val("");
		};
	});
	$("#table").on("click",".edit", function(){
		pram = {
			name: "",
			sort: "",
			type: ""
		};
		flag = 2;
		$("#menu_link").val("");
		$("#menu_name").val("");
		$("#menu_key").val("");
		$("#menu_sort").val("");
		$('#myModal').modal();
		$("#options option").remove();

		var parent_id = "";
		pram.id = $(this).parent().attr("data_id");
		var type = $(this).attr("data_type");
		parent_id = $(this).attr("data_parent_id");
		$("#options").attr("disabled", "disabled");
		if (type == "2" || type == "3") {
			cate();
			setTimeout(function(){
				if (parent_id) {
					$("#options option[value=" + parent_id + "]").attr("selected", true);
				};
			},500);
			
			
		};
		
		
		
			//$("input[name=optionsStatus]").attr("checked", false);
		var tmp_value = parseInt(type) -1;
		$("input[name=optionsStatus][value=" + tmp_value + "]").trigger("click");
		
		//var parent_id = $(this).parent().attr("data_id");

		
		var parent = $(this).parent().parent();
		$("#menu_name").val(parent.find(".text").text());
		$("#menu_key").val(parent.children(".key_world").text());
		$("#menu_link").val(parent.children(".link").text());
		$("#menu_sort").val(parent.children(".sort").text());
		
	});
	$("#up_data").on("click", function(){
	 	$ajax.ajaxPost('/content/menu/wxsync.do', {},
			function(data){
				if (data.success) {
					layer.msg("微信同步成功！");
				};
		});
	});
	$("#save").on("click", function(){
		
		pram.name = $("#menu_name").val().trim();
		if (!pram.name) {
			layer.msg("菜单名不能为空！");
			return;
		};
		
		tmp_type = parseInt($("input[name='optionsStatus']:checked").attr("value")) + 1;
		pram.type = String(tmp_type);
		if (pram.type == "2") {
			pram.keywords = $("#menu_key").val().trim();
			if (!pram.keywords) {
				layer.msg("关键字不能为空！");
				return;
			};
		}else if (pram.type =="3") {
			pram.uri = $("#menu_link").val().trim();
			if (!pram.uri) {
				layer.msg("链接不能为空！");
				return;
			};
		};
		if (pram.type == "2" || pram.type == "3") {
			pram.parent_id = $("#options option:checked").attr("value");
		};
		
		pram.sort = $("#menu_sort").val().trim();
		if (!pram.sort) {
			layer.msg("排序不能为空！");
			return;
		};
		if (flag == 1) {
			$ajax.ajaxPost('/content/save_custom_menu.do', pram,
				function(data){
					if (data.success) {
						$("#menu_link").val("");
						$("#menu_name").val("");
						$("#menu_key").val("");
						$("input[name=optionsStatus]").attr("checked", false);
						$('#myModal').modal("hide");
						$("#options option").remove();
						if (pram.id) {
							layer.msg("保存成功！");
						}else {
							layer.msg("新建成功！");
						}
						
						getData();
					};
			});
		} else{
			$ajax.ajaxPost('/content/menu/modify.do', pram,
				function(data){
					if (data.success) {
						$("#menu_link").val("");
						$("#menu_name").val("");
						$("#menu_key").val("");
						$("input[name=optionsStatus]").attr("checked", false);
						$('#myModal').modal("hide");
						$("#options option").remove();
						if (pram.id) {
							layer.msg("保存成功！");
						}else {
							layer.msg("编辑成功！");
						}
						
						getData();
					};
			});
		};
		
	});
	$("#table").on("click",".dele", function(){
		var id = $(this).parent().attr("data_id");
		layer.confirm('确定要删除该管理帐号吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			$ajax.ajaxPost('/content/deleted_custom_menu.do', {id: id}, function(data) {
				layer.close(layer.index);
				layer.msg("删除成功！");
				getData();
			});
		});
	});

	$("#radio").on("click", "input", function(){
		
			var index = $("#radio input").index(this);
			$(".isHidden .div_hidden").css("display","none");
			$(".isHidden .type_input").eq(index).css("display", "block");
			if (flag == 1) {
				if ($(this).attr("value") =="1" || $(this).attr("value")== "2") {
					cate();
				}else{
					$("#options option").remove();
				}
			}
		
	});
});
