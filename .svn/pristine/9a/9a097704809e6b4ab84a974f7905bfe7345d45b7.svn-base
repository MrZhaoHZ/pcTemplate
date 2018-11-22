$(function () {
    var self_tpl = require('../../module/tpl/activity-list-tpl');
    var $ajax = require('../../common/ajax.js');
    var tmp_path_config = require('../../../../tmp_path_config.js');
    var api_path_config = require('../../../../tmp_path_config.js');
    //商品列表渲染
    getGoodsData();
    function getGoodsData() {
        // 获取列表
        $ajax.post('/active_item/get_item_list.do', {}, function (data) {
                if (data.success) {
                    setTimeout(function () {
                        $('#tableBody').html(doT.template(self_tpl.activityGoodsList)({ data: data, path: api_path_config.upload_path }));
                    }, 100);
                }
                if(data.data.length == 0){
                    $("#tableBody").html("<tr><td colspan='7'><p style='text-align:center;'>暂无数据！</p</td></tr>")
                }
            });
    }
    //已作废编辑按钮
    $("body").on("click", ".bad", function () {
         layer.msg("商品已作废无法操作");
    });
    //作废按钮事件to-viod
    $("body").on("click", ".to-viod", function () {
        var _this = $(this);
        _id = _this.attr("data-id");
        $ajax.ajaxPost('/active_item/invalid_item.do?id=' + _id, {}, function (data) {
            if (data.success) {
                getGoodsData();
                layer.msg("商品已作废");
            }
        });
    });

});