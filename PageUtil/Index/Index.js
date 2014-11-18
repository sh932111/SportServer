function login() {	
	var username = document.getElementById("indxeBoxUsername").value;
	var password = document.getElementById("indxeBoxPassword").value;	
	if (!checkIng(username,"帳號") || !checkIng(password,"密碼") ){
		return;
	}
	var time = getNowTime();
	var post_data = "username="+username+"&password="+password+"&update_time="+time;
	callApi(post_data,loginApi,function(user_data){
		alert(user_data.message);
		if (user_data.result) {
			var jsonData = JSON.stringify(user_data);
			window.sessionStorage["SportData"] = jsonData;
			location.href = 'RootPage.html';
		}
	});
}