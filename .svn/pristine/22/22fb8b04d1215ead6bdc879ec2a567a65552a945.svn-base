var provincetpl = '<option value="0">所有省</option>\
				{{~ it:item:index }}\
				<option value="{{= item.code}}">{{= item.name}}</option>\
		  	{{~}}';
var citytpl = '<option value="0">所有市</option>\
				{{~ it:item:index }}\
				<option value="{{= item.code}}">{{= item.name}}</option>\
		  	{{~}}';
var districttpl = '<option value="0">所有区县</option>\
				{{~ it:item:index }}\
				<option value="{{= item.code}}">{{= item.name}}</option>\
		  	{{~}}';
var $ajax = require('./ajax.js');


function selectEvent() {
    $('#idarea-province').change(function () {
        if ($(this).val() === '0') {
            $('#idarea-city').html('<option value="0">所有市</option>')
            $('#idarea-district').html('<option value="0">所有区县</option>');
            return;
        }
        $ajax.post('/agent/get_delivery.do', {
            level: 2,
            code: $(this).val()
        }, function (data) {
            $('#idarea-city').html(doT.template(citytpl)(data.data))
        });
    });
    $('#idarea-city').change(function () {
        if ($(this).val() === '0') {
            $('#idarea-district').html('<option value="0">所有区县</option>');
            return;
        }
        $ajax.post('/agent/get_delivery.do', {
            level: 3,
            code: $(this).val()
        }, function (data) {
            $('#idarea-district').html(doT.template(districttpl)(data.data))
        });
    });
}

function inita() {
    selectEvent();
    $ajax.post('/agent/get_delivery.do', {
        level: 1
    }, function (data) {
        $('#idarea-province').html(doT.template(provincetpl)(data.data))
    });
}


exports.inita = inita;