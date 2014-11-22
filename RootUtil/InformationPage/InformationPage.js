function InformationPageInit() {
	document.getElementById("InformationPageBoxName").value = userRecordData.name;
	document.getElementById("InformationPageBoxUsername").value = userRecordData.username;
	document.getElementById("InformationPageBoxPassword").value = userRecordData.password;
	document.getElementById("InformationPageBoxPhone").value = userRecordData.cellphone;
	document.getElementById("InformationPageBoxEmail").value = userRecordData.email;
}

function InformationPagePost() {
	var post_data = "name="+document.getElementById("InformationPageBoxName").value
	+"&username="+document.getElementById("InformationPageBoxUsername").value
	+"&password="+document.getElementById("InformationPageBoxPassword").value
	+"&cellphone="+document.getElementById("InformationPageBoxPhone").value
	+"&email="+document.getElementById("InformationPageBoxEmail").value
	+"&old_username="+userRecordData.username
	;

	callApi(post_data,updateUserDataApi,function(user_data){
		alert(user_data.message);
		if (user_data.result) {
			userRecordData.name = document.getElementById("InformationPageBoxName").value;
			userRecordData.username = document.getElementById("InformationPageBoxUsername").value;
			userRecordData.password = document.getElementById("InformationPageBoxPassword").value;
			userRecordData.cellphone = document.getElementById("InformationPageBoxPhone").value;
			userRecordData.email = document.getElementById("InformationPageBoxEmail").value;
		}
	});
}