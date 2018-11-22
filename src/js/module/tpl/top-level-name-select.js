var self_tpl = {
	'selectTpl': '<div class="form-group">\
					<select class="form-control selectcommon topLevelNameClass{{= it.topNameSelectActive }}" data-selectindex="{{= it.topNameSelectActive }}">\
						<option value="{{= it.parent_member_id}}" data-type="1" class="selectall">全部</option>\
						<option value="{{= it.parent_member_id}}" data-type="2" class="selectdirect">直属</option>\
						{{~ it.datas:item:index }}\
							<option value="{{= item.member_id }}">{{= item.grade_name }}-{{= item.real_name }}</option>\
						{{~}}\
					</select>\
				</div>',
	'selectChildTpl': '<div class="form-group">\
					<select class="form-control selectcommon topLevelNameClass{{= it.topNameSelectActive }}" data-selectindex="{{= it.topNameSelectActive }}">\
						<option value="{{= it.parent_member_id}}" data-type="1" class="selectall">全部</option>\
						<option value="{{= it.parent_member_id}}" data-type="2" class="selectdirect">直属</option>\
						{{~ it.datas:item:index }}\
							<option value="{{= item.member_id }}" data-type="{{= item.member_id }}">{{= item.grade_name }}-{{= item.real_name }}</option>\
						{{~}}\
					</select>\
				</div>',
	'selectTypeTpl': '<div class="form-group all-or-direct">\
				<select class="form-control topLevelNameClass{{= it.topNameSelectActive }}" data-selectindex="{{= it.topNameSelectActive }}">\
					<option value="{{= it}}" data-type="1" class="selectall">全部</option>\
					<option value="{{= it}}" data-type="2" class="selectdirect">直属</option>\
				</select>\
			</div>'
};
module.exports = self_tpl;

