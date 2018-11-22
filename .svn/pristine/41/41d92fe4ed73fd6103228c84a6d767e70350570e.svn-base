$(function () {
    var self_tpl = require('../../module/tpl/activity-list-tpl');
    var $ajax = require('../../common/ajax.js');
    var tmp_path_config = require('../../../../tmp_path_config.js');
    var httpURL = require('../../common/http-url.js');
    var _id = httpURL.getQueryString('data-id');
    var api_path_config = require('../../../../tmp_path_config.js');
    var img_path = api_path_config.upload_path;
    $("#header .nav .left a").on("click",function () {
        window.location.href = "preview-h5.html?data-id="+_id;
    });
    getData(_id);
    function getData(_id) {
        $ajax.ajaxPost('/activity/act_item_detail.do ', { activity_id: _id, path: api_path_config.upload_path },
            function (data) {
                if (data.code == "10000") {
                    var len = data.data.length;
                    if(len !=0){
                        $("#act_entrance .img-content img").attr("src", img_path + data.data[0].trade_entr_pic);
                        $("#act_explain .prodlistCon").html(doT.template(self_tpl.activityGoods)(data.data))
                    }else{
                        $("#content").html('<p>没有数据，或获取失败</p>');
                        return;
                    }
                }
            }
        );
    }
})