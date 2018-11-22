/*
 * @Author: Jing 
 * @Date: 2018-01-15 17:48:05 
 * @Last Modified by: Jing
 * @Last Modified time: 2018-05-21 15:37:26
 */
$(function () {

    var self_tpl = require('../../module/tpl/drainage-list-tpl');
    var $ajax = require('../../common/ajax.js');
    var tmp_path_config = require('../../../../tmp_path_config.js');
    var area = require('../../common/area.js');
    var api_path_config = require('../../../../tmp_path_config.js');


    var information ={}
        
    var parameter = {};
    // 发放红包
    $("#drainage_details").on("click", ".operation", function (e) {
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
        page_size: 15,
        pageCount: "",
    };
    $("body").on("click", "#batch-check", function () {
        $("#batch-check").attr("disabled","disabled")
        // $("#tbody").html('<tr><td colspan="9"><img src="../../images/timg.gif" alt=""></td></tr>')
        $("#tbody").html('<tr><td colspan="9">数据正在加载中，请稍候。。。</td></tr>')
        //获取查询条件
        pram.member_name = $("#user_name").val().trim();
        pram.mobile  = $("#drainage_tel").val().trim();
        pram.activity_name = $("#drainage_name").val().trim();
        pram.current_page = 1;
        pageCount: "",
        pram.agent_grade = $("#selected_state").find("option:selected").attr("value");
        pram.top_member_id = $('.topLevelNameClass' + topNameSelectActive + ' :checked').val(),
        pram.all_direct_type = $('.topLevelNameClass' + topNameSelectActive + ' :checked').attr('data-type'),
        getRewardList(pram)
    });

    //引流数据列表获取
    function getRewardList(pram) {
        $ajax.ajaxPost('/act/stat/drai.do', pram, function (data) {
            if (data.code == 10000) {
                $("#batch-check").removeAttr("disabled");
                pram.pageCount = Math.ceil(data.data.total_count / pram.page_size);
                $("#rewardPager").pager({ pagenumber: pram.current_page, pagecount: pram.pageCount, buttonClickCallback: PageClick });
                //引流总人数
                $("#number span").text(data.data.total_counts)
                if (data.data.act_order_list.length>0){
                    $("#tbody").html(doT.template(self_tpl.drainageListTpl)(data));
                } else{
                    $("#tbody").html('<tr><td colspan="8">暂无数据</td></tr>')
                }
            } else {
                layer.msg(data.msg)
            }
        });
    };
    //引流页面分页
    function PageClick(pageclickednumber) {
        pram.current_page = pageclickednumber;
        getRewardList(pram);
    };
    //导出
    $("body").on("click", "#export", function () {
        var pramPage = pram;
        pramPage.is_all = $("#exports-select").val();
        var link = require('../../common/export.js').doExports(tmp_path_config.api_path_1, '/act/stat/list/export.do', pramPage);
        window.location.href = link;
    });


    // 订单查询
    var orderPram = {
        current_page: 1,
        page_size: 15,
        pageCount: "",
    };
    //引流详情
    $("#tbody").on("click", ".eject", function () {
        $('#drainage_details').modal('toggle');
        orderPram.member_id = $(this).attr("data-id")
        orderPram.is_team = $(this).attr("data-type")
        orderPram.activity_name = $(this).attr("data-act")
        getRewardOrderList(orderPram)
    });
    
    $(".modal-content").on("click", "#order_query", function () {
        //获取订单查询条件
        orderPram.member_name = $("#order_name").val().trim();
        orderPram.mobile = $("#order_tel").val().trim();
        orderPram.reco_mobile = $("#share_tel").val().trim();
        orderPram.deliver = $("#red_state").find("option:selected").attr("value");
        getRewardOrderList(orderPram)
    });

    //代理等级筛选
    var topNameSelectActive = 1;
    function select2Event(target) {
        target.on("select2:select", function (e) {
            var nowIndex = parseInt($(e.params.data.element.parentNode).attr('data-selectindex'));
            var tempSelectCommonLength = $('.selectcommon').length;
            for (var i = nowIndex + 1; i <= tempSelectCommonLength; i++) {
                $('.topLevelNameClass' + i).closest('.form-group').remove();
            }
            if (e.params.data.element.className.indexOf("selectdirect") != -1 || e.params.data.element.className.indexOf("selectall") != -1) {
                topNameSelectActive = $('.selectcommon').length;
                return;
            }
            topNameSelectActive = $('.selectcommon').length + 1;
            initTopLevelNameSelect(e.params.data.element.value, topNameSelectActive);
        });
    }

    function initTopLevelNameSelect(member_id, topNameSelectActiveTemp) {
        $ajax.post('/agent/agent_list/get_child_list.do', { member_id: member_id }, function (data) {
            if (data.success && data.data.datas.length != 0) {
                //$('#topLevelContainer').append('<div class="form-group"><select class="form-control selectcommon topLevelNameClass' + topNameSelectActive + '" data-selectIndex="' + topNameSelectActive + '"><optgroup label="大区"><option value="0">bagent001</option><option value="1">bagent002</option><option value="2">bagent003</option></optgroup></select></div>');
                data.data.topNameSelectActive = topNameSelectActiveTemp;
                data.data.parent_member_id = data.data.datas[0].parent_member_id;
                $('#topLevelContainer').append(doT.template(require('../../module/tpl/top-level-name-select.js').selectTpl)(data.data));
                select2Event($('.topLevelNameClass' + topNameSelectActiveTemp).select2());
            } else {
                // $('#topLevelContainer').append(doT.template(require('../../module/tpl/top-level-name-select.js').selectTypeTpl)(member_id));
                topNameSelectActive = $('.selectcommon').length;
            }
        })
    }

    initTopLevelNameSelect(1, 1);


    //引流订单列表获取
    function getRewardOrderList(orderPram) {
        $ajax.ajaxPost('/act/stat/drai_detail.do', orderPram, function (data) {
            orderPram.pageCount = Math.ceil(data.data.total_counts / orderPram.page_size);
            if (data.success) {
                $("#rewardOrderPager").pager({ pagenumber: orderPram.current_page, pagecount: orderPram.pageCount, buttonClickCallback: orderPageClick });
                $("#order_tbody").html(doT.template(self_tpl.orderListTpl)(data));
            } else {
                layer.msg(data.msg)
            }
        });
    };
    //引流订单页面分页
    function orderPageClick(pageclickednumber) {
        orderPram.current_page = pageclickednumber;
        getRewardOrderList(orderPram);
    };
// 结尾
});