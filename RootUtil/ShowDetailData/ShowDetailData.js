function ShowDetailDataInit(get_index) {
	MsgSetUI();

	var get_data = getApiData.list[get_index];
	getPost = get_data.data_id;

	var post_data = "folder="+"Msg"+"&data_id="+getPost;

	callApi(post_data,getDataPath,function(res){
		console.log(res);
		var folder_path = res.folder_path[1];
		var folder_path2 = res.folder_path[0];
		var img_array = [];
		var link_array = [];
		for (var i = 0; i < folder_path.length; i++) {
			img_array.push("php/"+folder_path[i]);
		}
		for (var i = 0; i < folder_path2.length; i++) {
			link_array.push("php/"+folder_path2[i]);
		}
		
		setPageUtilCallBack('#ShowDeatilImageView','RootUtil/ScrollImgUtil/ScrollImgUtil.html', function() {
			ScrollImgInit(img_array);
		});

		setPageUtilCallBack('#ShowDeatilLinkView','RootUtil/ScrollLinkUtil/ScrollLinkUtil.html', function() {
			ScrollLinkInit(link_array);
		});
		var ShowDetailImg = document.getElementById('ShowDetailImg');
		ShowDetailImg.src = "php/"+res.img_path[0];
	});

	var ShowDetailDataTitle = document.getElementById('ShowDetailDataTitle');
	ShowDetailDataTitle.value = get_data.title;
	var ShowDetailDataDetail = document.getElementById('ShowDetailDataDetail');
	ShowDetailDataDetail.innerHTML = get_data.detail;
	var ShowDetailDataDate = document.getElementById('ShowDetailDataDate');
	ShowDetailDataDate.value = get_data.date;
	var ShowDetailDataTime = document.getElementById('ShowDetailDataTime');
	ShowDetailDataTime.value = get_data.time;
}