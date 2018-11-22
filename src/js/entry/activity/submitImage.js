$(function () {
    var self_tpl = require('../../module/tpl/activity-list-tpl');
    var $ajax = require('../../common/ajax.js');
    var tmp_path_config = require('../../../../tmp_path_config.js');
    var httpURL = require('../../common/http-url.js');
    var api_path_config = require('../../../../tmp_path_config.js');
    var pram ={
        page_size: 20,
        current_page: 1,
        pageCount: "",
    }
    // 查询
    $("body").on("click", "#batch-check", function () {
        //获取查询条件
        pram.name = $("#user_name").val().trim();
        pram.mobile = $("#drainage_tel").val().trim();
        pram.marked = $("#selected_state").find("option:selected").attr("value");
        getData(pram)
    });
    // 渲染列表
    getData(pram);
    function getData() {
        $ajax.ajaxPost('/selection/get.do', pram,
            function (data) {
                if (data.code == "10000") {
                    pram.pageCount = Math.ceil(data.data.count / pram.page_size);
                    $("#rewardPager").pager({
                        pagenumber: pram.current_page,
                        pagecount: pram.pageCount,
                        buttonClickCallback: PageClick
                    });
                    $("tbody").html(doT.template(self_tpl.modelList)({
                        data: data.data,
                        path: api_path_config.upload_path_aly
                    }));
                }
                if (data.data.length == 0) {
                    $("tbody").html("<tr><td colspan='5'><p style='text-align:center;'>暂无数据！</p</td></tr>")
                }
            }
        );
    }
    //页面分页
    function PageClick(pageclickednumber) {
        pram.current_page = pageclickednumber;
        getData(pram);
        submission();
    };
    //批量选择
    $('#right-bar-container').delegate('.select-all', 'click', function () {
        if (!$(this).prop("checked")) {
            $("[name = selectItem]:checkbox").prop("checked", false);
        } else {
            $("[name = selectItem]:checkbox").prop("checked", true);
        }
    });
    // 获取商品id
    function getGoodsId() {
        var items = $("input[name='selectItem']");
        var len = items.length;
        var data = {
            "arr": []
        } 
        var arr = [];
        var item = "";
        for (var i = 0; i < len; i++) {
            item = items.eq(i).attr("data_id");
            marked = items.eq(i).is(":checked") == true ? 1 : 0;
            data.arr.push({
                id: item,
                marked: marked
            });
        };
        return data;
    };
    //提交
    var ok ;
    $("body").on("click", "#submission", function () {
        submission();
        if(ok){
            layer.msg("提交成功")
        }
        getData(pram)
    });
    function submission() {
        var data = getGoodsId();
        $ajax.ajaxPost('/selection/deal.do', {
            id_list: JSON.stringify(data.arr)
        }, function (data) {
            if (data.code == 10000) {
                ok = true;
                return ok
            }else{
                layer.msg(data.msg)
            }
        });
    }
    //图片预览
    $("body").on("click", ".img_btn", function (e) {
        $('#img_preview').modal('toggle')
        var img = $(e.target).attr("data_img");
        var img_arr = img.split(',')
        var imgHtml = "";
        for (let i = 0; i < img_arr.length; i++) {
            imgHtml += `<div class="item">
                            <img style="margin: 0 auto;" src=${api_path_config.upload_path_aly}${img_arr[i]}>
                        </div>`            
        }
        $("#carousel-example-generic .carousel-inner").html(imgHtml)
        $("#carousel-example-generic .carousel-inner :first").addClass("active")
    });
})