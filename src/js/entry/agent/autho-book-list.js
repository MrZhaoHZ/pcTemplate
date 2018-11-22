var self_tpl = require('../../module/tpl/autho-book-tpl.js');
var $ajax = require('../../common/ajax.js');
$(function(){
	var filterCondition = {page_size:20,current_page:1};
	function getAuthoBook(pageIndex) {
		filterCondition.current_page = pageIndex;
		$ajax.post('/agent/certificate_template/list.do',filterCondition,function(data){
			$('#right-bar-container table').html(doT.template(self_tpl.listTpl)(data.data));
			$("#pager").pager({ pagenumber: pageIndex, pagecount: Math.ceil(data.data.total_count / filterCondition.page_size), buttonClickCallback: getAuthoBook});
		});
	}
	getAuthoBook(1);
	$('#right-bar-container').delegate('.preview-btn','click',function(){
		var bookId = $(this).closest('tr').data('id');
		// layer.open({
		//   type: 2,
		//   title: '预览',
		//   shadeClose: true,
		//   shade: 0.8,
		//   area: ['414px', '736px'],
		//   content: 'autho-book-mobile.html?id=' + bookId//iframe的url
		// }); 
		$ajax.post('/agent/certificate_template/preview.do',{id: bookId},function(data){
			if(data.success) {
				$('#preview-layer').remove();
				$('body').append('<div id="preview-layer" style="display:none;"><img src="' + require('../../../../tmp_path_config.js').upload_path + data.data + '" style="width:100%;"></div>');
				setTimeout(function () {
					layer.open({
					  type: 1,
					  title: false,
					  closeBtn: 1,
					  area: '640px',
					  skin: 'layui-layer-nobg', //没有背景色
					  shadeClose: true,
					  content: $('#preview-layer')
					});
				},2000);
			}
		});
	});
});