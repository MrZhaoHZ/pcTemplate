var $ajax = require('./ajax.js');
var imgUploadModalTpl = '<div class="modal fade" tabindex="-1" role="dialog" id="img-upload-modal">\
							<div class="modal-dialog" role="document">\
								<div class="modal-content">\
								  <div class="modal-header">\
									<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
									<h4 class="modal-title">选择图片</h4>\
								  </div>\
								  <div class="modal-body">\
									<div class="btn-group nav-select" id="img-tool-select">\
									  <a type="button" class="btn btn-default active" href="javascript:void(0)">选择</a>\
									  <a type="button" class="btn btn-default" href="javascript:void(0)">上传</a>\
									  <a type="button" class="btn btn-default" href="javascript:void(0)">网络</a>\
									</div>\
									<div class="modal-tab img-item">\
										<div class="img-item-container">\
										</div>\
										<nav aria-label="...">\
										  <ul class="pager">\
										  </ul>\
										</nav>\
									</div>\
									<div class="modal-tab img-upload" style="display: none;">\
										<div class="form-inline">\
										  <div class="form-group">\
											<input type="text" class="form-control thumbnail-input" imgsrc="">\
										  </div>\
										  <div class="form-group">\
											<div class="btn-success" id="picker">浏览</div>\
										  </div>\
										</div>\
										<div class="form-inline upload-btn">\
										  <div class="form-group">\
											<button type="button" class="btn btn-success" id="confirm-upload">上传图片</button>\
										  </div>\
										</div>\
									</div>\
									<div class="modal-tab img-network" style="display: none;">\
										<div class="form-inline">\
										  <div class="form-group">\
											<p class="form-control-static">图片地址：</p>\
										  </div>\
										  <div class="form-group">\
											<input type="text" class="network-img-input">\
										  </div>\
										</div>\
										<div class="form-inline use-btn">\
										  <div class="form-group">\
											<button type="button" class="btn btn-success use-network-img">使用该图片</button>\
										  </div>\
										</div>\
									</div>\
								  </div>\
								</div>\
							</div>\
						  </div>';
var pagerTpl = '<li data-flag="last" style="display:inline-block;"><a href="javascript:void(0)" style="background:{{? it.current_page != 1}}#5cb85c{{??}}gray{{?}};color:#fff;">上一页</a></li>\
				<li data-flag="next" style="display:inline-block;"><a href="javascript:void(0)" style="background:{{? it.total_page != it.current_page}}#5cb85c{{??}}gray{{?}};color:#fff;">下一页</a></li>';
var imgItemTpl = '{{~ it.imgList:item:index }}\
					{{? index < 12}}\
					 <img class="uploaded-img" src="{{= it.upload_path}}{{= item.image}}" alt="" data-imgurl="{{= item.image}}">\
					 {{?}}\
				 {{~}}';
var api_path_config = require('../../../tmp_path_config.js');
// 优化retina, 在retina下这个值是2
var ratio = window.devicePixelRatio || 1,
    // 缩略图大小
    thumbnailWidth = 100 * ratio,
    thumbnailHeight = 100 * ratio,
    // Web Uploader实例
    uploader;
var pagerConfig = {
	current_page: 1,
	page_size: 12,
	total_page: null
}
function initUploader(callback, isAutoUpload) {
    // $('#uploader-container').html('<div id="gridFileList"></div><div id="picker">选择图片</div>');
    // 初始化Web Uploader
    uploader = WebUploader.create({
        // 自动上传。
        auto: isAutoUpload,
        // swf文件路径
        //swf: BASE_URL + '/js/Uploader.swf',
        // 文件接收服务端。
        // server: 'http://media.haiyn.com/upload.php',
        server: api_path_config.webupload_path,//'http://192.168.8.143:8061/leaf-manager-web/file/upload.do',
        // formData: {
        //     user_id: 1,
        //     biz_code: 'hanshu'
        // },
        // 选择文件的按钮。可选。
        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
        pick: {
            id: '#picker',
            multiple: false
        },
        // 只允许选择文件，可选。
        accept: {
            title: 'Images',
            extensions: 'gif,jpg,jpeg,bmp,png',
            // mimeTypes: 'image/*'
            mimeTypes: 'image/jpg,image/png'
        }
    });
    $("#picker").mouseenter(function() {
        if (uploader) {
            uploader.refresh();
        }
    });
    // 当有文件添加进来的时候
    uploader.on('fileQueued', function(file) {
        
        var $img = $('#img-upload-modal .thumbnail-input');
        // 创建缩略图
        uploader.makeThumb(file, function(error, src) {
            if (error) {
                $img.replaceWith('<span>不能预览</span>');
                return;
            }
            $img.val(src);
        }, thumbnailWidth, thumbnailHeight);
    });
    // 文件上传过程中创建进度条实时显示。
    uploader.on('uploadProgress', function(file, percentage) {
        var $li = $('#' + file.id),
            $percent = $li.find('.progress span');

        // 避免重复创建
        if (!$percent.length) {
            $percent = $('<p class="progress"><span></span></p>')
                .appendTo($li)
                .find('span');
        }
        $percent.css('width', percentage * 100 + '%');
    });
    // 文件上传成功，给item添加成功class, 用样式标记上传成功。
    uploader.on('uploadSuccess', function(file, res) {
        var imgSrc = res.data;
        uploader = null;
        var $img = $('#img-upload-modal .thumbnail-input');
        $img.attr('imgsrc', imgSrc);
        $('#img-upload-modal').modal('hide');
        callback(imgSrc);
    });
    // 文件上传失败，现实上传出错。
    uploader.on('uploadError', function(file) {
        var $li = $('#' + file.id),
            $error = $li.find('div.error');
        // 避免重复创建
        if (!$error.length) {
            $error = $('<div class="error"></div>').appendTo($li);
        }
        $error.text('上传失败');
    });
    // 完成上传完了，成功或者失败，先删除进度条。
    uploader.on('uploadComplete', function(file) {
        $('#' + file.id).find('.progress').remove();
    });
    $('#confirm-upload').click(function() {
        //console.log("上传...");
        if (uploader) {
            uploader.upload();
        }
    });
}
// function getImgList() {
// 	$ajax.ajaxPost('/file/list.do', {}, function(data) {
// 		if(data.success){
// 			$('#img-upload-modal .img-item-container').html(doT.template(imgItemTpl)(data.data));
// 			$('#img-upload-modal').modal('show');
// 			initUploader(callback);
// 		}
// 	});
// }
var cacheImgList = null;
function getImgByPage(current_page) {
	var imgList = [];
	for(var i=((current_page-1)*pagerConfig.page_size-1)<0 ? 0:((current_page-1)*pagerConfig.page_size-1) ,j=0; i<cacheImgList.length,j<pagerConfig.page_size; i++,j++){
		if(cacheImgList[i]){
			imgList.push(cacheImgList[i]);
		}
	}
	return imgList;
}
function init(callback) {
	$('#img-select-modal-container').html(imgUploadModalTpl);
	// getImgList();
	$ajax.ajaxPost('/file/list.do', {}, function(data) {
		if(data.success && data.data){
			cacheImgList = data.data.reverse();
			pagerConfig.total_page = Math.ceil(data.data.length / pagerConfig.page_size);
			data.upload_path = api_path_config.upload_path;
			data.imgList = getImgByPage(pagerConfig.current_page);
			$('#img-upload-modal .img-item-container').html(doT.template(imgItemTpl)(data));
			$('#img-upload-modal .pager').html(doT.template(pagerTpl)(pagerConfig));
			$('#img-upload-modal').modal('show');
			initUploader(callback);
			$(".webuploader-pick").css("padding","0");
			$(".webuploader-pick").eq(0).css("padding","6px 15px");
		}
	});
	$('#img-tool-select').delegate('a','click',function(){
		$(this).addClass('active').siblings('a').removeClass('active');
		$('#img-upload-modal .modal-tab').hide();
		var selectedTab = $('#img-tool-select a.active').index();
		if(selectedTab === 0) {
			$('#img-upload-modal .img-item').show();
		}
		if(selectedTab === 1) {
			$('#img-upload-modal .img-upload').show();
		}
		if(selectedTab === 2) {
			$('#img-upload-modal .img-network').show();
		}
	});
	$('#img-upload-modal').delegate('.uploaded-img','click',function(){
		$('#img-upload-modal').modal('hide');
		callback($(this).data('imgurl'));
	});
	$('#img-upload-modal .pager').delegate('li','click',function(){
		if($(this).data('flag') === 'next') {
			pagerConfig.current_page++;
		}
		if($(this).data('flag') === 'last') {
			pagerConfig.current_page--;
			if(pagerConfig.current_page < 1) {
				pagerConfig.current_page = 1;
				return;
			}
		}
		// $ajax.ajaxPost('/file/list.do', {}, function(data) {
		// 	if(data.success){
				var data = {};
				data.upload_path = api_path_config.upload_path;
				data.imgList = getImgByPage(pagerConfig.current_page);
				if(data.imgList.length > 0) {
					$('#img-upload-modal .img-item-container').html(doT.template(imgItemTpl)(data));
					$('#img-upload-modal .pager').html(doT.template(pagerTpl)(pagerConfig));
				}
		// 	}
		// });
	});
	$('#img-upload-modal').delegate('.use-network-img','click',function(){
		callback($('#img-upload-modal .network-img-input').val());
		$('#img-upload-modal').modal('hide');
	});
}
exports.init = init;