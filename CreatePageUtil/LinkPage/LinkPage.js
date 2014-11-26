function MsgPost() {
	var get_post = getPostId();
	var create_time = getNowTime();
	var link = document.getElementById('MsgLink').value;
	var title  = document.getElementById('MsgTitle').value;
	checkIng(title,"標題");
	var post_data = "data_id="+get_post+"&title="+title+"&link="+link+"&create_time="+create_time;

	callApi(post_data,addLinkApi,function(user_data){
		alert(user_data.message);
		if (user_data.result) {
			window.location.reload();
		}
	});
}