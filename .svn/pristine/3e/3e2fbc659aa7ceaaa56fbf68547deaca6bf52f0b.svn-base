var gulp = require('gulp');
var clean = require('gulp-clean');
var less = require('gulp-less');
var cssmin = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var rename = require('gulp-rename');
var velocity = require('gulp-velocity');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var md5 = require("gulp-md5-plus");
var fs = require('fs');
var argv = require('yargs').argv;
// var lineReader = require('line-reader');
// var getDirFile = require('./getDirFile.js');
var webpack = require('gulp-webpack');
// var webpack = require('webpack');
var wp_config = require('./webpack.config.js');
var named = require('vinyl-named');
var gReplace = require('gulp-replace');
var config = require('./global_config.js');
var rename = require("gulp-rename");

// vm-to-html
gulp.task('vm-to-html', function() {
	gulp.src(config.tpl_config.root + '**/*.vm')
		.pipe(plumber())
		.pipe(
			velocity(config.tpl_config)
			.on('error', gutil.log)
		)
		.pipe(rename({
			extname: ".html"
		}))
		.pipe(gulp.dest(config.html_output));
});
// view2html
gulp.task('view2html', function() {
	var static_path = null;
	var gulp_param = require('yargs').argv._[0];
	switch(gulp_param) {
		//测试环境
		case "test":
			// static_path_1 = '//192.168.8.143:3002';
			// static_path_2 = '//192.168.8.137:3002';
			static_path_1 = '//bsstest.hanshuweishang.com/leaf_manager_web/static';
			static_path_2 = '//bsstest.hanshuweishang.com/leaf_manager_web/static';
			static_path_3 = '//wxtest.hanshuweishang.com';
			break;
		//联调环境
		case "lt":
			static_path_1 = '//192.168.8.154:3002';
			static_path_2 = '//192.168.8.154:3002';
			break;
		case "lzg":
			static_path_1 = '//192.168.8.145:3002';
			static_path_2 = '//192.168.8.145:3002';
			static_path_3 = '//wxtest.hanshuweishang.com';
			break;
		case "ly":
			static_path_1 = '//192.168.8.143:3002';
			static_path_2 = '//192.168.8.143:3002';
			break;
		case "cgm":
			static_path_1 = '//192.168.8.145:3002';
			static_path_2 = '//192.168.8.145:3002';
			static_path_3 = '//wx.hanshuweishang.com';
			break;
		case "hy":
			static_path_1 = '//192.168.8.143:3002';
			static_path_2 = '//192.168.8.143:3002';
			// static_path_1 = 'http://192.168.8.143:8061/leaf-manager-web/static';
			// static_path_2 = 'http://192.168.8.143:8061/leaf-manager-web/static';
			break;
		case "beta":
			static_path_1 = '//192.168.8.143:3002';
			static_path_2 = '//192.168.8.137:3002';
			break;
		case "pro":
			static_path_1 = '//bss.hanshuweishang.com/leaf_manager_web/static';
			static_path_2 = '//bss.hanshuweishang.com/leaf_manager_web/static';
			static_path_3 = '//wx.hanshuweishang.com';
			break;
		default:
			static_path_1 = '//192.168.8.143:3002';
			static_path_2 = '//192.168.8.143:3002';
	}
	gulp.src(config.view_config.root + '**/*.html')
		.pipe(plumber())
		// .pipe(
		//     velocity(config.tpl_config)
		//     .on('error', gutil.log)
		// )
		// .pipe(rename({
		//     extname: ".html"
		// }))
		.pipe(gReplace(/@version/g, config.version))
		.pipe(gReplace(/@static_path/g, static_path_1))
		.pipe(gReplace(/@static_2_path/g, static_path_2))
		.pipe(gReplace(/@static_3_path/g, static_path_3))
		.pipe(gulp.dest(config.html_output));
});

function pathConfig(content) {
	if(fs.existsSync('./tmp_path_config.js')) {
		fs.unlinkSync('./tmp_path_config.js');
	}
	fs.appendFileSync('./tmp_path_config.js', content);
	console.log('The "path config" is ready!');
}
gulp.task('webpack',function(){
	var gulp_param = require('yargs').argv._[0];
	switch(gulp_param) {
		case "test":
			pathConfig('module.exports = {\n\t"api_path_1": "http://bsstest.hanshuweishang.com/leaf_manager_web",\n\t"api_path_2": "http://ssotest.hanshuweishang.com/leaf_sso_web",\n\t"link_path": "http://bsstest.hanshuweishang.com/leaf_manager_web/static/html/",\n\t"static_path": "http://statictest.hanshuweishang.com/",\n\t"upload_path": "http://imgtest.hanshuweishang.com/imgtest-hsws/ex/",\n\t"upload_path_h5": "http://imgtest.hanshuweishang.com/imgtest-hsws/in/",\n\t"ueupload_path": "http://bsstest.hanshuweishang.com/leaf_manager_web/file/ueupload.do",\n\t"webupload_path": "http://bsstest.hanshuweishang.com/leaf_manager_web/file/upload.do",\n\t"wxdomain": "wxtest.hanshuweishang.com",\n\t"bssdomain": "bsstest.hanshuweishang.com",\n\t"appid": "wx00945b8865c0f39e"\n}');
			break;
		//联调环境
		case "lt":
			pathConfig('module.exports = {\n\t"api_path_1": "http://bss.leaf.com/leaf_manager_web",\n\t"api_path_2": "http://sso.leaf.com/leaf_sso_web",\n\t"upload_path": "http://bss.leaf.com/leaf_manager_web",\n\t"link_path": "http://bss.leaf.com/leaf_manager_web/static/html/"\n}');
			break;
		case "lzg":
			pathConfig('module.exports = {\n\t"api_path_1": "http://192.168.8.182:8061/leaf-manager-web",\n\t"api_path_2": "http://192.168.8.182:8062/leaf-sso-web",\n\t"link_path": "http://192.168.8.182:8061/leaf-manager-web/static/html/"\n}');
			break;
		case "ly":
			pathConfig('module.exports = {\n\t"api_path_1": "http://192.168.8.157:8061/leaf-manager-web",\n\t"api_path_2": "http://192.168.8.168:8062/leaf-sso-web",\n\t"link_path": "http://192.168.8.168:8061/leaf-manager-web/static/html/"\n}');
			break;
		case "cgm":
			pathConfig('module.exports = {\n\t"api_path_1": "http://192.168.8.79:8061/leaf-manager-web",\n\t"api_path_2": "http://192.168.8.79:8062/leaf-sso-web",\n\t"link_path": "http://192.168.8.79:8061/leaf-manager-web/static/html/",\n\t"static_path": "http://statictest.hanshuweishang.com/",\n\t"upload_path": "http://img.hanshuweishang.com/img-hanshuweishang/ex/",\n\t"upload_path_h5": "http://img.hanshuweishang.com/img-hanshuweishang/in/",\n\t"ueupload_path": "http://bsstest.hanshuweishang.com/leaf_manager_web/file/ueupload.do",\n\t"webupload_path": "http://bsstest.hanshuweishang.com/leaf_manager_web/file/upload.do",\n\t"wxdomain": "wxtest.hanshuweishang.com",\n\t"appid": "wx33c37063f8d0ec8e"\n}');
			break;
		case "hy":
			pathConfig('module.exports = {\n\t"api_path_1": "http://192.168.8.143:8061/leaf-manager-web",\n\t"api_path_2": "http://192.168.8.143:8062/leaf-sso-web",\n\t"link_path": "http://192.168.8.143:8061/leaf-manager-web/static/html/",\n\t"ueupload_path": "http://192.168.8.143:8061/leaf-manager-web/file/ueupload.do",\n\t"webupload_path": "http://192.168.8.143:8061/leaf-manager-web/file/upload.do"\n}');
			break;
		case "beta":
			pathConfig('module.exports = {\n\t"api_path": "/jeesite/a"');
			break;
		case "pro":
			pathConfig('module.exports = {\n\t"api_path_1": "http://bss.hanshuweishang.com/leaf_manager_web",\n\t"api_path_2": "http://sso.hanshuweishang.com/leaf_sso_web",\n\t"link_path": "http://bss.hanshuweishang.com/leaf_manager_web/static/html/",\n\t"static_path": "http://statictest.hanshuweishang.com/",\n\t"upload_path": "http://img.hanshuweishang.com/img-hanshuweishang/ex/",\n\t"upload_path_h5": "http://img.hanshuweishang.com/img-hanshuweishang/in/",\n\t"ueupload_path": "http://bss.hanshuweishang.com/leaf_manager_web/file/ueupload.do",\n\t"webupload_path": "http://bss.hanshuweishang.com/leaf_manager_web/file/upload.do",\n\t"wxdomain": "wx.hanshuweishang.com",\n\t"bssdomain": "bss.hanshuweishang.com",\n\t"appid": "wx33c37063f8d0ec8e"\n}');
			break;
		default:
			pathConfig('module.exports = {\n\t"api_path": ""}');
	}
	
	return gulp.src('src/js/entry/**/*.js')
		.pipe(named())
		.pipe(webpack())
		// .pipe(uglify())
		.pipe(gulp.dest('dist/bundle'));
});
// gulp.task('uglifyJs',function(){
// 	return gulp.src('src/js/unUglifyJs/*.js')
// 		.pipe(named())
// 		// .pipe(webpack())
// 		.pipe(uglify())
// 		.pipe(gulp.dest('dist/libs/RSA'));
// });
gulp.task('uglifyJs',function(){
	return gulp.src('src/js/unUglifyJs/md5.js')
		.pipe(named())
		// .pipe(webpack())
		.pipe(uglify())
		.pipe(gulp.dest('dist/libs/md5/'));
});
gulp.task('less2css', function() {
	//require('yargs').argv._[0] = "less2css"
	//console.log(require('yargs').argv._);
	gulp.src('src/less/**/*.less')
		.pipe(less())
		.pipe(cssmin()) //兼容IE7及以下需设置compatibility属性 .pipe(cssmin({compatibility: 'ie7'}))
		.pipe(gulp.dest('dist/css'))
		.pipe(reload({ stream: true }));
});
// gulp.task('default', ['less2css', 'browser-sync'], function(){
//  console.log("all is well...");
// });

//延迟 执行vm-to-html命令， 如果实时执行 html无法刷新
gulp.task('browserSync-watch', ['less2css'], function() {
	setTimeout(function() {
		//console.log('browserSync reload!!');
		reload();
	}, 1000);
});

gulp.task('view-watch', ['view2html'], function() {
	setTimeout(function() {
		//console.log('browserSync reload!!');
		reload();
	}, 1000);
});

gulp.task('wapack-watch', ['webpack'], function() {
	setTimeout(function() {
		//console.log('browserSync reload!!');
		reload();
	}, 1000);
});

function start_server() {
	// console.log('************************************************');
	// console.log(require('yargs').argv._);
	// console.log('************************************************');
	//var mocks = require('./routeConfig').mocks;
	var middlewareFun = require('./routeConfig').middleware;
	browserSync.init({
		server: "./dist",
		//files: "**/*",
		open: false,
		port: 3002,
		// middleware: function (req, res, next) {
		//     console.log(req);
		//     console.log("Hi from middleware");
		//     next();
		// }
		//middleware: redirect()
		middleware: middlewareFun()
	});

	// gulp.watch("mock/**/*.less", ['less2css']);
	//gulp.watch("app/**/*.html").on('change', reload);
	//gulp.watch("src/tpl/**/*.vm").on('change', reload);
	gulp.watch([
		// './src/tpl/**/*.vm',
		//'./src/view/**/*.html',
		'./src/less/*.less',
		'./mock/data/json/*.json',
		'./mock/data/renderHTML/*.html'
	], ['browserSync-watch']);

	gulp.watch([
		// './src/tpl/**/*.vm',
		'./src/view/**/*.html'
	], ['view-watch']);

	gulp.watch([
		'./src/js/**/*.js',
	], ['wapack-watch']);
}
// 静态服务器 + 监听 less/html 文件
gulp.task('server', ['less2css', 'view2html', 'webpack'], start_server);



gulp.task('clean', function() {
	return gulp.src('dist/css/*.css')
		.pipe(clean({ force: true }))
		.pipe(gulp.dest('dist/temp'));
});

gulp.task('clean-dirfile', function() {
	return gulp.src('./dirfile/*.*')
		.pipe(clean({ force: true }));
	//.pipe(gulp.dest('dest/temp'));
});


gulp.task('build-html', function() {
	return gulp.src('./webapp/WEB-INF/pages/**/*.vm')
		.pipe(gulp.dest('./output/vm'));
});


// gulp.task('html2jsp', function(){
// 	setTimeout(function(){
// 		return gulp.src('./dist/html/**/*.html')
// 			.pipe(gReplace(/<!DOCTYPE html>/g, config.jsp_code))
// 			.pipe(rename(function (path) {
// 				// path.dirname += "/temp";
// 				// path.basename += "-goodbye";
// 				path.extname = ".jsp"
// 			}))
// 			.pipe(gulp.dest("./dist/jsp"));
// 	},500);
// });
// gulp.task('jsp2jeesite', ['html2jsp'], function(){
// 	setTimeout(function(){
// 		return gulp.src('./dist/jsp/**/*.*')
// 			.pipe(gulp.dest("F:/haiynadmin/src/main/webapp/WEB-INF/views/modules"));
// 	},1000);
// });

gulp.task('default', ['server']);
//测试环境
gulp.task('test', ['server']);
//生产环境
gulp.task('pro', ['server']);
//联调环境
gulp.task('lt', ['server']);
gulp.task('lzg', ['server']);
gulp.task('ly', ['server']);
gulp.task('cgm', ['server']);
gulp.task('hy', ['server']);

// gulp.task('test',['view2html','less2css','webpack'], start_server);
// gulp.task('beta',['view2html','less2css','webpack'], start_server);
// gulp.task('pro',['view2html','less2css','webpack'], start_server);
// console.log('********************* test version build success *********************');
// console.log('********************* beta version build success *********************');
// console.log('********************* production version build success *********************');