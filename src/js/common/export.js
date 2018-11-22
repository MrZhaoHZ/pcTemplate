var localStorage = require('./localStorage.js');

function doExports(api_path, reqStr, param) {
	var exportsUrl = api_path + reqStr + '?';
	for(var i in param) {
		if(param[i]) {
			exportsUrl += i + '=' + param[i] + '&';
		}
	}
	return exportsUrl;
}


module.exports = {
	doExports: doExports,
};