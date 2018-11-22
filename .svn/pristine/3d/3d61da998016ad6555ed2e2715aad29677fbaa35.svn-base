$(function () {

    var self_tpl = require('../../module/tpl/activity-list-tpl');
    var $ajax = require('../../common/ajax.js');
    var tmp_path_config = require('../../../../tmp_path_config.js');
    var httpURL = require('../../common/http-url.js');
    var img_id = httpURL.getQueryString('data-id');
    
    // 渲染列表
    getData();
    function getData() {
        $ajax.ajaxPost('/activity/get_activity_list.do', {},
            function (data) {
                if (data.code == "10000") {
                    $("tbody").html(doT.template(self_tpl.activityListName)(data));
                }
                if (data.data.length == 0){
                    $("tbody").html("<tr><td colspan='5'><p style='text-align:center;'>暂无数据！</p</td></tr>")
                }
            }
        );
    }

    $("table").on("click", ".edit-laye", function () {
        layer.msg("活动已发布不可进行编辑！");
    });
    $("table").on("click", ".activity-end", function () {
        layer.msg("活动已结束不可进行操作！");
    });
    /*活动发布与撤销*/
    //发布
    var _id = "";
    $("table").on("click", ".release", function () {
        var _this = $(this);
        var _id = _this.attr("data-id");
        layer.confirm('确定要执行操作吗？', {
            btn: ['确定', '取消'] //按钮
        }, function () {
            // $.post('/activity/publish.do', {id:_id},
            $ajax.ajaxPost('/activity/publish.do', { id: _id },
                function (data) {
                    if (data.code == "10000") {
                        layer.msg("列表发布成功", {
                            time: 2000
                        });
                        getData();
                    }else if(data.code == "30016" || data.code == "30017" || data.code == "30018" || data.code == "30019"){
                        layer.msg(data.msg, {
                            time: 2000
                        });
                    }
                }
            );
        });
    });
    //撤销
    $("table").on("click", ".withdraw", function () {
        var _this = $(this);
        _id = _this.attr("data-id");
        layer.confirm('确定要执行操作吗？', {
            btn: ['确定', '取消'] //按钮
        }, function () {
            $ajax.ajaxPost('/activity/remove.do', { id: _id },
                // $.post('/getActivityList.do', { id: _id },
                function (data) {
                    if (data.code == "10000") {
                        layer.msg("列表撤下成功", {
                            time: 2000
                        });
                        getData();
                    }else if(data.code == "30020"){
                        layer.msg(data.msg, {
                            time: 2000
                        });
                    }
                }
            );
        });
    });
    //预览
     $("body").on("click", ".btn-preview", function () {
         activity_id = $(this).attr("data-id");
         $("#nav-select").attr("data-id", activity_id)
         layer.open({
             type: 2,
             title: false,
             closeBtn: 0,
             shadeClose: true,
             skin: 'preview-phone',
             content: ['preview-h5.html','no']
         });
     });
});