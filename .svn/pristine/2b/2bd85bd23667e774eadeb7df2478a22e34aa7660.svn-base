$(function () {

    var self_tpl = require('../../module/tpl/activity-list-tpl');
    var $ajax = require('../../common/ajax.js');
    var tmp_path_config = require('../../../../tmp_path_config.js');
    // 渲染列表
    getData();
    function getData() {
        $ajax.ajaxPost('/activity/get_activity_list.do', {act_status:4},
            function (data) {
                if (data.code == 10000) {
                    $("tbody").html(doT.template(self_tpl.activityStatisticsListName)(data));
                }
                if( data.data.length == 0){
                    $("#tbody").html("<tr><td colspan='5'><p style='text-align:center;'>暂无数据！</p</td></tr>")
                }
            }
        );
    }
});