var localStorage = require('./localStorage.js');
//系统管理员
function isSysAdmin() {
	var isSuperAdmin = false;
	var roleIdList = localStorage.getItem('roleIdList');
	for(var i=0;i<roleIdList.length;i++){
		if(roleIdList[i].role_id == '1') {
			isSuperAdmin = true;
			break;
		}
	}
	return isSuperAdmin;
}

//业务管理员
function isBusiAdmin() {
	var isBusiAdmin = false;
	var roleIdList = localStorage.getItem('roleIdList');
	for(var i=0;i<roleIdList.length;i++){
		if(roleIdList[i].role_id == '2') {
			isBusiAdmin = true;
			break;
		}
	}
	return isBusiAdmin;
}
module.exports = {
	isSysAdmin: isSysAdmin,
	isBusiAdmin: isBusiAdmin
};