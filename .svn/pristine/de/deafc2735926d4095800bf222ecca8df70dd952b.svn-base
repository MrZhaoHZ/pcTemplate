var self_tpl = require('../../module/tpl/employee-tpl.js');
var httpURL = require('../../common/http-url.js');
var $ajax = require('../../common/ajax.js');
$(function(){
	
	$('#right-bar-container').delegate('.select-all','click',function(){
		if(!$(this).prop("checked")) {
			$("[name=selectItem]:checkbox").prop("checked", false);
		} else {
			$("[name=selectItem]:checkbox").prop("checked", true);
		}
	});

   var filterCondition = {page_size:'20',current_page:'1'};
	function getEmpList(pageIndex) {
		filterCondition.current_page = pageIndex;
		$ajax.post('/employee/list.do',filterCondition,function(data){
			if(data.success){
				$('#emp-list').html(doT.template(self_tpl.empListTpl)(data.data.datas));
				$("#pager").pager({ pagenumber: pageIndex, pagecount: Math.ceil(data.data.total_count / filterCondition.page_size), buttonClickCallback: getEmpList, totalCounts:data.data.total_count});
			}
		});
	}
	getEmpList(1);
	//批量审核
	$('#batch-check').click(function(){
		layer.confirm('确定批量通过吗？', {
			btn: ['确定','取消'] 
		}, function(){
			var selectedAgent = $('#table-container tbody input:checked');
			if(selectedAgent.length < 1) {
				layer.msg('请选择代理');
				return;
			}
			var agentList = [];
			selectedAgent.each(function(){
				agentList.push($(this).closest('tr').data('id'));
			});
			$ajax.post('/agent/agent_register/batch_audit.do', {content:agentList.join('#')}, function(data) {
				if(data.success) {
					location.reload();
				}
			})
		}, function(){
			return;
		});
	});

	//部门下拉选择
	$ajax.post('/department/list.do',filterCondition,function(data){
		if(data.success){
			$('#dep-select').html('<option value="0">全部</option>' + doT.template(self_tpl.depOptionTpl)(data.data));
		}
	});
	
	$('#search-btn').click(function(){
		filterCondition.name = $('#search-name').val();
		filterCondition.department_id = $('#dep-select option:checked').val();
		getEmpList('1');
	});

	$('#right-bar-container').delegate('.delete-btn','click',function(){
		var employee_id = $(this).closest('tr').data('id');
		layer.confirm('确定删除吗？', {
			btn: ['确定','取消'] 
		}, function(){
			$ajax.post('/employee/delete.do',{employee_id: employee_id},function(data){
				if(data.success) {
					location.reload();
				}
			});
		}, function(){
			return;
		});
	});
});