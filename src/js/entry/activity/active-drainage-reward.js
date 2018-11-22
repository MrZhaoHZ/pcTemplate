/*
 * @Author: Jing 
 * @Date: 2018-01-15 17:48:05 
 * @Last Modified by: Jing
 * @Last Modified time: 2018-02-08 14:12:50
 */
$(function () {

    var self_tpl = require('../../module/tpl/statistics-details-tpl');
    var $ajax = require('../../common/ajax.js');
    var tmp_path_config = require('../../../../tmp_path_config.js');
    var httpURL = require('../../common/http-url.js');
    var area = require('../../common/area.js');
    var api_path_config = require('../../../../tmp_path_config.js');
    var team_level = require('../../common/team-level.js');
    var _id = httpURL.getQueryString('data-id');
        pram = {
            current_page: 1,
            page_size: 10,
            pageCount: "",
            activity_id: _id
        };

    //引流数量等级选择  
    var topNameSelectActive = 1;
    function select2Event(target) {
        target.on("#rewardContainer  select2:select", function (e) {
            var nowIndex = parseInt($(e.params.data.element.parentNode).attr('data-selectindex'));
            var tempSelectCommonLength = $('#rewardContainer .selectcommon').length;
            for (var i = nowIndex + 1; i <= tempSelectCommonLength; i++) {
                $('.topLevelNameClass' + i).closest('.form-group').remove();
            }
            if (e.params.data.element.className.indexOf("selectdirect") != -1 || e.params.data.element.className.indexOf("selectall") != -1) {
                topNameSelectActive = $('#rewardContainer .selectcommon').length;
                return;
            }
            topNameSelectActive = $('#rewardContainer .selectcommon').length + 1;
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
                $('#rewardContainer').append(doT.template(require('../../module/tpl/top-level-name-select.js').selectTpl)(data.data));
                select2Event($('#rewardContainer .topLevelNameClass' + topNameSelectActiveTemp).select2());
            } else {
                topNameSelectActive = $('#rewardContainer .selectcommon').length;
            }
        });
    }
    $(function () {
        initTopLevelNameSelect(1, 1);
    });

    //根据地址路径判断进入当前项,因数据可能随时改变所以每次切换会重新请求数据
    //点击跳转数据加载
    $("#ullist").on("click", "li", function () {
        var _this = $(this);
        var elName = _this.attr("class");
        itemName = elName;
        name(itemName);
    });
    //进行判断按需加载数据（防止数据实时刷新页面无提交，每次切换都会重新调取接口）
    function name(name) {
        if (itemName == "order") {
            window.location.href = "statistics-details.html?choice=order&data-id="+_id;
        } else if (itemName == "stock") {
            window.location.href = "statistics-details.html?choice=stock&data-id="+_id;
        } else if (itemName == "drainage") {
            window.location.href = "statistics-details.html?choice=drainage&data-id="+_id;
        } else if (itemName == "draw") {
            window.location.href = "statistics-details.html?choice=draw&data-id="+_id;
        }
    }
    pramReward = {
        current_page: 1,
        page_size: 10,
        pageCount: "",
        activity_id: _id
    };
    getDrainageRewardt(_id);
    getDrainageRewardList(pramReward);
    //引流奖励列表获取
    function getDrainageRewardt(_id) {
        $ajax.ajaxPost('/act/stat/agent_award.do', pramReward, function (data) {
            if (data.success) {
                $("#reward_num").text(data.data[0].total_counts);
                $("#amount_num").text(data.data[0].total_amount);
            }
        });
    }
    function getDrainageRewardList(pramReward) {
        $ajax.ajaxPost('/act/stat/award.do', pramReward, function (data) {
            pramReward.pageCount = Math.ceil(data.data.total_count / pramReward.page_size);
            if (data.success) {
                $("#reward_table_pager").pager({ pagenumber: pramReward.current_page, pagecount: pramReward.pageCount, buttonClickCallback: getDrainageReward });
                $('#reward_table').html(doT.template(self_tpl.drainageRewardList)(data.data));
            }
        });
    }
    //引流奖励页面分页
    function getDrainageReward(pageclickednumber) {
        pramReward.current_page = pageclickednumber;
        getDrainageRewardList(pramReward);
    }

    //引流页面查询
    $("body").on("click", "#reward-check", function () {
        pramReward.mobile = $("#reward_name").val();
        pramReward.real_name = $("#reward_naem").val();
        pramReward.top_member_id = $('#rewardContainer .topLevelNameClass' + topNameSelectActive + ' :checked').val();
        pramReward.all_direct_type = $('#rewardContainer .topLevelNameClass' + topNameSelectActive + ' :checked').attr('data-type');
        getDrainageRewardList(pramReward);
        getDrainageRewardt(pramReward);
    });
});