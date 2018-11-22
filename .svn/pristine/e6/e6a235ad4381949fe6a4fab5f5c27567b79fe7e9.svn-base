$(function () {
    var self_tpl = require('../../module/tpl/activity-list-tpl');
    var $ajax = require('../../common/ajax.js');
    var tmp_path_config = require('../../../../tmp_path_config.js');
    var api_path_config = require('../../../../tmp_path_config.js');
    var imgUpload = require('../../common/img-upload.js');
    var httpURL = require('../../common/http-url.js');
    var _id = httpURL.getQueryString('data-id');

    if(_id != null){    //编辑渲染内容列表
        $ajax.ajaxPost('/active_item/get_item.do?id=' + _id, {}, function (data) {
            if (data.success) {
                $("#goods_name").val(data.data.item_name);
                $("#goods_code").val(data.data.item_sn);
                $("#goods_company").val(data.data.unit);
                $("#goods_price").val(data.data.item_price_str);
                $("#goods_explain").val(data.data.item_desc);
                new_obj = $('<div class="per_img ">' +
                    '	<span class="icon">X</span>' +
                    '</div>');
                var background = 'url(' + api_path_config.upload_path + data.data.image_uri + ') 0 0 no-repeat';
                new_obj.css({
                    'background': background,
                    'background-size': 'contain'
                });
                new_obj.attr('data_img', data.data.image_uri);
                $(".add_box").before($(new_obj));
            }
        });
    } 

    // 图片上传
    if ($(".per_img ").length == 0) {
        $("#add_img_goods").on("click", function () {
            imgUpload.init(function (value) {
                var realValue = api_path_config.upload_path + value;
                new_obj = $('<div class="per_img ">' +
                    '	<span class="icon">X</span>' +
                    '</div>');
                var url = 'url(' + realValue + ') 0 0 no-repeat';
                new_obj.css({
                    'background': url,
                    'background-size': 'contain'
                });
                new_obj.attr('data_img', value);
                $(".per_img").remove();
                $(".add_box").before($(new_obj));

            }, false);
        });
    }

    $(".user-container").on("click", ".per_img .icon", function () {
        $(this).parent().remove();
    });



    //根据选中商品进行添加/修改添加事件
    var addGoodsPram = {};
    $("body").on("click", "#addChoiceGoods", function () {
        addGoodsPram.item_name = $("#goods_name").val().trim();
        addGoodsPram.item_sn = $("#goods_code").val().trim();
        addGoodsPram.image_uri = $(".per_img").attr("data_img");
        addGoodsPram.item_unit = $("#goods_company").val().trim();
        addGoodsPram.item_price = $("#goods_price").val().trim();
        addGoodsPram.item_desc = $("#goods_explain").val().trim();
        if (!addGoodsPram.item_name) {
            layer.msg("请输入商品名！");
            return;
        } else if (!addGoodsPram.item_sn) {
            layer.msg("请输入商品编码！");
            return;
        }
        else if (!addGoodsPram.item_unit) {
            layer.msg("请选择商品单位！");
            return;
        } else if (!addGoodsPram.item_price) {
            layer.msg("请输入商品价格！");
            return;
        } else if (!addGoodsPram.item_desc) {
            layer.msg("请输入商品说明！");
            return;
        }
        else if (!addGoodsPram.image_uri) {
            layer.msg("请选择商品图片！");
            return;
        }
        if (_id == null) {
            $ajax.ajaxPost('/active_item/add_item.do', addGoodsPram, function (data) {
                if (data.success) {
                    window.location.href = "activity-goods-management.html";
                } else if (data.code == "21001" || data.code == "21002" || data.code == "21003" || data.code == "21004"){
                    layer.msg(data.msg);
                }
            });
        } else if (_id != null) {
            $ajax.ajaxPost('/active_item/modify_itemById.do?id=' + _id, addGoodsPram, function (data) {
                if (data.success) {
                    window.location.href = "activity-goods-management.html";
                } else if (data.code == "21001" || data.code == "21002" || data.code == "21003" || data.code == "21004") {
                    layer.msg(data.msg);
                }
            });
        }
    });


    //input框内容校验
    //排序
    $("body").on("keyup", ".sort", function () {
        var value = $(this).val().trim();
        var re = /^\d{1,2}$/;
        if (!re.test(value)) {
            $(this).val("");
        }
    });
    //数量
    $("body").on("keyup", ".amount", function () {
        var value = $(this).val().trim();
        var re = /^\+?[0-9][0-9]*$/;
        if (!re.test(value)) {
            layer.msg("输入内容为数字");
            $(this).val("");
        }
    });
    //价格
    $("body").on("keyup", "#goods_price", function () {
        var value = $(this).val().trim();
        var re = /^\d{1,6}(\.(\d{1,2})?)?$/;
        if (!re.test(value)) {
            layer.msg("价格为数字，且小数点后为两位");
            $(this).val("");
        }
    });
    //编码
    $("body").on("keyup", "#goods_code", function () {
        var value = $(this).val().trim();
        var gre = /^[0-9a-zA-Z]*$/g;
        if (!gre.test(value)) {
            layer.msg("商品编码只能输入数字和字母！");
            $(this).val("");
            return;
        }
    });
});