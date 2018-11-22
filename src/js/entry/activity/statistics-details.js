/*
 * @Author: Jing 
 * @Date: 2018-01-15 17:48:05 
 * @Last Modified by: Jing
 * @Last Modified time: 2018-03-05 19:48:24
 */
$(function () {

    var self_tpl = require('../../module/tpl/statistics-details-tpl');
    var $ajax = require('../../common/ajax.js');
    var tmp_path_config = require('../../../../tmp_path_config.js');
    var httpURL = require('../../common/http-url.js');
    var area = require('../../common/area.js');
    var api_path_config = require('../../../../tmp_path_config.js');
    var team_level = require('../../common/team-level.js');
    var choice = httpURL.getQueryString('choice');
    var _id = httpURL.getQueryString('data-id');
    var url = "",
        pram = {
            current_page: 1,
            page_size: 10,
            pageCount: "",
            activity_id : _id
        },
        pageId="",
        dataNumber, itemName = "";
//引流数量等级选择  
    var topNameSelectActive = 1;
    function select2Event(target) {
        target.on("#topLevelContainer  select2:select", function (e) {
            var nowIndex = parseInt($(e.params.data.element.parentNode).attr('data-selectindex'));
            var tempSelectCommonLength = $('#topLevelContainer .selectcommon').length;
            for (var i = nowIndex + 1; i <= tempSelectCommonLength; i++) {
                $('.topLevelNameClass' + i).closest('.form-group').remove();
            }
            if (e.params.data.element.className.indexOf("selectdirect") != -1 || e.params.data.element.className.indexOf("selectall") != -1) {
                topNameSelectActive = $('#topLevelContainer .selectcommon').length;
                return;
            }
            topNameSelectActive = $('#topLevelContainer .selectcommon').length + 1;
            initTopLevelNameSelect(e.params.data.element.value, topNameSelectActive);
        });
    }

    function initTopLevelNameSelect(member_id, topNameSelectActiveTemp) {
        $ajax.post('/agent/agent_list/get_child_list.do', {
            member_id: member_id
        }, function (data) {
            if (data.success && data.data.datas.length != 0) {
                data.data.topNameSelectActive = topNameSelectActiveTemp;
                data.data.parent_member_id = data.data.datas[0].parent_member_id;
                $('#topLevelContainer').append(doT.template(require('../../module/tpl/top-level-name-select.js').selectTpl)(data.data));
                select2Event($('#topLevelContainer .topLevelNameClass' + topNameSelectActiveTemp).select2());
            } else {
                topNameSelectActive = $('#topLevelContainer .selectcommon').length;
            }
        });
    }
    $(function () {
        initTopLevelNameSelect(1, 1);
    });


    
    
    //根据地址路径判断进入当前项,因数据可能随时改变所以每次切换会重新请求数据
    name(choice)
    //点击跳转数据加载
    $("#ullist").on("click", "li", function () {
        var _this = $(this);
        var elName = _this.attr("class");
        itemName = elName;
        name(itemName);
    });
    //进行判断按需加载数据（防止数据实时刷新页面无提交，每次切换都会重新调取接口）
    function name(name) {
        if (choice == "order" || itemName == "order") {
            choice = null;
            getOrderList(pram)
        } else if (choice == "stock" || itemName == "stock") {
            $(".stock").tab("show");
            $(".tab-content div").removeClass("active");
            $("#stock").addClass("active");
            choice = null;
            getStockList(pram)
        } else if (choice == "drainage" || itemName == "drainage") {
            $(".drainage").tab("show");
            $(".tab-content div").removeClass("active");
            $("#drainage").addClass("active");
            choice = null;
            getDrainageList(pram);
        } else if (choice == "draw" || itemName == "draw") {
            $(".draw").tab("show");
            $(".tab-content div").removeClass("active");
            $("#draw").addClass("active");
            choice = null;
            getDrawgeList(pram);
        } else if (choice == "reward" || itemName == "reward") {
            window.location.href = "active-drainage-reward.html?data-id="+_id;
        }
    }

    //订单数据列表获取
    function getOrderList(pram){
        $ajax.ajaxPost("/act/order/statistics.do", pram, function (data) {
            if (data.success) {
                $('#table-body').html(doT.template(self_tpl.orderListName)({ data: data.data, path: api_path_config.upload_path }));
            }
        });
    };
    //库存数据列表获取
    function getStockList(pram) {
        $ajax.ajaxPost('/activity/get_activity_item_by_act_id.do', pram, function (data) {
            if (data.success) {
                setTimeout(function () {
                    $("#stock_table").html(doT.template(self_tpl.activityStockList)({ data: data, path: api_path_config.upload_path }));
                }, 100);
            }
        });
    };
    //引流数据列表获取
    function getDrainageList(pram) {
        $ajax.ajaxPost('/act/stat/drai.do', pram, function (data) {
            pram.pageCount = Math.ceil(data.data[1].total_count / pram.page_size);
            if (data.success) {
                $("#drainage_pager").pager({ pagenumber: pram.current_page, pagecount: pram.pageCount, buttonClickCallback: PageClick });
                $("#content").html(doT.template(self_tpl.drainageListName)(data));
            }
        });
    };
    
    //抽奖数据列表获取
    function getDrawgeList(pram) {
        $ajax.ajaxPost('/lottery/get_lottery_awards.do', pram, function (data) {
            if (data.success && data.data) {
              $("#draw").html(doT.template(self_tpl.drawListName)(data));
            }else if (data.code!=10000){
                layer.msg(data.msg)
            }
        });
    };
  

    //引流页面查询
    $("body").on("click", "#batch-check", function () {
        pram.mobile = $("#drainage_tel").val();
        pram.real_name = $("#drainage_name").val();
        pram.top_member_id = $('#topLevelContainer .topLevelNameClass' + topNameSelectActive + ' :checked').val();
        pram.all_direct_type = $('#topLevelContainer .topLevelNameClass' + topNameSelectActive + ' :checked').attr('data-type');
        getDrainageList(pram);
    });
    

    //引流页面代理详情
    var drainageData = {};
    $("#drainage").on("click", ".proxyNumber", function () {
        $('#rewardPreview').modal('toggle');
        var _this = $(this);
        drainageData.activity_id=_id;
        drainageData.current_page= 1;
        drainageData.page_size= 10;
        drainageData.pageCount= "";
        drainageData.mobile = $("#drainage_tel").val();
        drainageData.real_name = $("#drainage_name").val();
        drainageData.top_member_id = $('.topLevelNameClass' + topNameSelectActive + ' :checked').val();
        drainageData.all_direct_type = $('.topLevelNameClass' + topNameSelectActive + ' :checked').attr('data-type');
        drainageData.recommend_name = _this.attr("data-name");
        drainageData.referee_id = _this.attr("data-referee");
        drainageData.become_agemt = _this.attr("data-agemt");
        rewardPreview(drainageData);
    });
    function rewardPreview(drainageData) {
        $ajax.ajaxPost('/act/stat/agent.do', drainageData, function (data) {
            drainageData.pageCount = Math.ceil(data.data.total_count / drainageData.page_size);
            if (data.success) {
                $("#rewardPreviewPager").pager({ pagenumber: drainageData.current_page, pagecount: drainageData.pageCount, buttonClickCallback: rewardPageClick });
                $('#tableLib').html(doT.template(self_tpl.drainageSubListName)(data.data));
            }
        });
    };
    //引流页面分页
    function PageClick(pageclickednumber) {
        pram.current_page = pageclickednumber;
        getDrainageList(pram);
    };
    //引流页面代理分页
    function rewardPageClick(pageclickednumber) {
        drainageData.current_page = pageclickednumber;
        rewardPreview(drainageData);
    };
    //抽奖页面中奖详情
    var drawData = {};
    $("#draw").on("click", ".draw-paces", function () {
        $('#draw_rewardPreview').modal('toggle');
        var _this = $(this);
        var award_conf_id=_this.attr("data-id");
        drawData.activity_id=_id;
        drawData.award_conf_id = award_conf_id;
        drawData.current_page = 1;
        drawData.page_size = 10;
        drawData.pageCount = "";
        drawPreview(drawData);
    });
    function drawPreview(drawData) {
        $ajax.ajaxPost('/lottery/get_lottery_detail.do', drawData, function (data) {
            drawData.pageCount = Math.ceil(data.data.total_count/ drawData.page_size);
            if (data.success) {
                $("#drawPreviewPager").pager({ pagenumber: drawData.current_page, pagecount: drawData.pageCount, buttonClickCallback: drawPageClick });
                $('#draw_tableLib').html(doT.template(self_tpl.drawPageListName)(data.data));
            }
        });
    };
    //抽奖页面代理分页
    function drawPageClick(pageclickednumber) {
        drawData.current_page = pageclickednumber;
        drawPreview(drawData)
    }











































    //结尾
});