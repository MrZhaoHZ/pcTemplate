/*
 * @Author: Jing 
 * @Date: 2018-01-15 17:48:05 
 * @Last Modified by: Jing
 * @Last Modified time: 2018-04-20 11:55:38
 */
$(function () {

    var self_tpl = require('../../module/tpl/drainage-list-tpl');
    var $ajax = require('../../common/ajax.js');
    var tmp_path_config = require('../../../../tmp_path_config.js');
    var area = require('../../common/area.js');
    var api_path_config = require('../../../../tmp_path_config.js');

    // 查询
    var pram = {
    };
    $("body").on("click", "button", function () {
        //获取查询条件
        pram.orderSn = $("#query_text").val().trim();
        getLuckList(pram)
    });
    //抽奖数据列表获取
    function getLuckList(pram) {
        $ajax.ajaxPost('/red/info.do', pram, function (data) {
            if (data.success) {
                $("#state").text(data.data.status || "");
                $("#money").text(data.data.money || "");
                $("#number").text(data.data.number || "");
                $("#release_time").text(data.data.send_date || "");
                $("#return_time").text(data.data.rf_time || "");
                $("#error_message").text(data.data.message || "");
            } else {
                layer.msg(data.msg)
            }
        });
    };

});