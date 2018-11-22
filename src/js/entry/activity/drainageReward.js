/*
 * @Author: Jing 
 * @Date: 2018-01-15 17:48:05 
 * @Last Modified by: Jing
 * @Last Modified time: 2018-05-18 14:08:42
 */
$(function () {

    var self_tpl = require('../../module/tpl/drainage-list-tpl');
    var $ajax = require('../../common/ajax.js');
    var tmp_path_config = require('../../../../tmp_path_config.js');
    var area = require('../../common/area.js');
    var api_path_config = require('../../../../tmp_path_config.js');
    
    var parameter = {};
    // 发放红包
    $("#tbody").on("click", ".operation", function (e) {
        parameter.open_id = $(e.target).attr("data-id");
        parameter.order_sn = $(e.target).attr("data-sn");
        parameter.act_id = $(e.target).attr("data-act")
        //询问框
        layer.confirm("是否确认发放红包", {
            btn: ['确定', '取消'] //按钮
        }, function () {
            $ajax.ajaxPost('/red/send.do', parameter, function (data) {
                if (data.success) {
                    if (data.data.error_code == "60002" || data.data.error_code == "60003" || data.data.error_code == "60004" || data.data.error_code == "50010") {
                        layer.msg(data.data.error_msg);
                    } else {
                        layer.msg('发放成功', {
                            icon: 1
                        });
                    }
                } else {
                    layer.msg(data.msg)
                }
            });
        }, function () {
            layer.msg('发放失败');
        });
    });
    
    // 查询
    var pram = {
        current_page: 1,
        page_size: 10,
        pageCount: "",
    };
    $("body").on("click", "#batch-check", function () {
        //获取查询条件
        pram.member_name = $("#user_name").val().trim();
        pram.mobile = $("#drainage_tel").val().trim();
        pram.act_name = $("#drainage_name").val().trim();
        pram.status = $("#selected_state").find("option:selected").attr("value");
        getLuckList(pram)
    });
    //抽奖数据列表获取
    function getLuckList(pram) {
        $ajax.ajaxPost('/red/packet.do', pram, function (data) {
            if (data.success) {
                pram.pageCount = Math.ceil(data.data.Pagination.total_count / pram.page_size);
                $("#pager").pager({ pagenumber: pram.current_page, pagecount: pram.pageCount, buttonClickCallback: PageClick });
                $("#tbody").html(doT.template(self_tpl.luckListTpl)(data.data.Pagination));
                $("#no_used_date").text(data.data.stat.no_used_date);
                $("#used_date").text(data.data.stat.used_date);
            } else {
                layer.msg(data.msg)
            }
        });
    };
    //抽奖页面分页
    function PageClick(pageclickednumber) {
        pram.current_page = pageclickednumber;
        getLuckList(pram);
    };
    //导出
    $("body").on("click", "#export", function () {
        var pramPage = pram;
        pramPage.is_all = $("#exports-select").val();
        var link = require('../../common/export.js').doExports(tmp_path_config.api_path_1, '/red/export.do', pramPage);
        window.location.href = link;
    });
// 结尾
});