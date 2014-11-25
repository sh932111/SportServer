var ShowDetailImgView = document.getElementById('ShowDetailImgView');
var ShowDetailLinkImgView = document.getElementById('ShowDetailLinkImgView');
var MsgImageView = document.getElementById('MsgImageView');
var ShowDeatilImageView = document.getElementById('ShowDeatilImageView');
var ShowDetailDataTitle = document.getElementById('ShowDetailDataTitle');
var ShowDetailDataDetail = document.getElementById('ShowDetailDataDetail');
var ShowDetailDataDate = document.getElementById('ShowDetailDataDate');
var ShowDetailDataTime = document.getElementById('ShowDetailDataTime');
var ShowDetailDataDetailBox = document.getElementById('ShowDetailDataDetailBox');
			
var fileArray = [];
var imgArray = [];

function ShowDetailDataInit(get_index) {
	
	MsgSetUI(getShowDetailDataFolder(SelectBarViewBoxTitle.value));
	var post_folder = getShowDetailDataFolder(SelectBarViewBoxTitle.value);//"Msg";

	var get_data = getApiData.list[get_index];
	getPost = get_data.data_id;

	var post_data = "folder="+post_folder+"&data_id="+getPost;
	callApi(post_data,getDataPath,function(res){
		console.log(res);
		var replace_file_path = res.replace_file_path;
		var replace_img_path = res.replace_img_path;
		
		var img_array = [];
		var link_array = [];

		for (var i = 0; i < res.folder_path.length; i++) {
			var folder_path = res.folder_path[i];
			if (i == 1) {
				for (var x = 0; x < folder_path.length; x++) {
					var link_text = folder_path[x].replace(replace_img_path, "");
					var link_url = "php/"+folder_path[x];
					var link_data = {
						link_text : link_text,
						link_url : link_url
					};
					
					img_array.push(link_data);
				}	
			}
			else if (i == 0) {
				for (var x = 0; x < folder_path.length; x++) {

					var link_text = folder_path[x].replace(replace_file_path, "");
					var link_url = "php/"+folder_path[x];
					var link_data = {
						link_text : link_text,
						link_url : link_url
					};
					link_array.push(link_data);
				}
			}
		}
		
		setPageUtilCallBack('#ShowDeatilImageView','RootUtil/ScrollImgUtil/ScrollImgUtil.html', function() {
			ScrollImgInit(img_array);
		});

		setPageUtilCallBack('#ShowDeatilLinkView','RootUtil/ScrollLinkUtil/ScrollLinkUtil.html', function() {
			ScrollLinkInit(link_array);
		});
		if (SelectBarViewBoxTitle.value == "最新消息" || SelectBarViewBoxTitle.value == "活動訊息" ) {
			var ShowDetailImg = document.getElementById('ShowDetailImg');
			if (res.img_path.length > 0) {
				ShowDetailImg.src = "php/"+res.img_path[0];
			}
			else {
				ShowDetailImg.src = "img/noneImg.jpg";
			}
		}
	});

	ShowDetailDataTitle.value = get_data.title;
	if (SelectBarViewBoxTitle.value == "出版資訊") {
		ShowDetailDataDetailBox.style.display = "none";
	}
	else {
		ShowDetailDataDetail.innerHTML = get_data.detail;
	}
	ShowDetailDataDate.value = get_data.date;
	ShowDetailDataTime.value = get_data.time;
}

function getShowDetailDataFolder(value){
	var post_folder = "Msg";

	if (value == "最新消息") {
		post_folder = "Msg";
	}
	else if (value == "學會簡介") {
		post_folder = "Plan";
		ShowDetailImgView.style.display = "none";
		ShowDetailLinkImgView.style.display = "none";
		MsgImageView.style.display = "none";
		ShowDeatilImageView.style.display = "none";
	}
	else if (value == "出版資訊") {
		post_folder = "Book";
		ShowDetailImgView.style.display = "none";
		ShowDetailLinkImgView.style.display = "none";
		MsgImageView.style.display = "none";
		ShowDeatilImageView.style.display = "none";
	}
	else if (value == "活動訊息") {
		post_folder = "Msg";
	}
	return post_folder;
}
function getShowDetailDataTableName(value){
	var post_folder = "newMsgTable";

	if (value == "最新消息") {
		post_folder = "newMsgTable";
	}
	else if (value == "學會簡介") {
		post_folder = "planTable";
	}
	else if (value == "出版資訊") {
		post_folder = "bookTable";
	}
	else if (value == "活動訊息") {
		post_folder = "msgTable";
	}
	return post_folder;
}
function deleteShowDetailDataMsg() {
	if(confirm("確定刪除？")) {
		var post_folder = getShowDetailDataFolder(SelectBarViewBoxTitle.value);
		var post_table = getShowDetailDataTableName(SelectBarViewBoxTitle.value);
		var post_data = "data_id="+getPost+"&folder="+post_folder+"&table_name="+post_table;
		callApi(post_data,deleteAllMsg,function(res){
			alert(res.message);
			if (res.result) {
				window.location.reload();
			}
		});
	}
}
function updateShowDetailDataMsg() {
	if(confirm("確定更改資料？")) {
		var post_folder = getShowDetailDataFolder(SelectBarViewBoxTitle.value);
		var post_table = getShowDetailDataTableName(SelectBarViewBoxTitle.value);
		var post_data = "data_id="+getPost+"&folder="+post_folder+"&table_name="+post_table
		+"&title="+ShowDetailDataTitle.value+"&detail="+ShowDetailDataDetail.value
		+"&date="+ShowDetailDataDate.value+"&time="+ShowDetailDataTime.value
		+"&file_array="+fileArray+"&img_array="+imgArray;
		
		callApi(post_data,updateAllMsg,function(res){
			console.log(res);
			alert(res.message);
			if (res.result) {
				var img_array = MsgImageView.getElementsByTagName('form');
				var link_array = MsgLinkView.getElementsByTagName('form');
				
				MsgPostNum = img_array.length+link_array.length+1;
				
				if (ShowDetailImgView.style.display == "none") {
					MsgPostNum  = MsgPostNum -1;
					if (MsgPostNum == 0) {
						window.location.reload();
					}
				}

				for (var i = 0; i < img_array.length; i++) {
					var form = img_array[i];
					var get_input = form.getElementsByTagName('input')[1];
					var filename = get_input.value;
					var extend = filename.substring(filename.lastIndexOf(".") + 1);
					if (extend == "") {
						MsgPostNum = MsgPostNum - 1;
					}

					else {
						formUploadCallBack(form,function(){
							uploadFinishReload();
						});
					}
				}
				for (var i = 0; i < link_array.length; i++) {
					var form = link_array[i];
					var get_input = form.getElementsByTagName('input')[1];
					var filename = get_input.value;
					var extend = filename.substring(filename.lastIndexOf(".") + 1);
					if (extend == "") {
						MsgPostNum = MsgPostNum - 1;
					}
					
					else {
						formUploadCallBack(form,function(){
							uploadFinishReload();
						});
					}
				}

				var folderName = document.getElementById('folderName');
				folderName.value = post_folder;
				var folderId = document.getElementById('folderId');
				folderId.value = getPost;

				if (ShowDetailImgView.style.display != "none") {
					var get_input = document.getElementById('ajaxForm').getElementsByTagName('input')[0];
					var filename = get_input.value;
					var extend = filename.substring(filename.lastIndexOf(".") + 1);
					if (extend == "") {
						MsgPostNum = MsgPostNum - 1;
					}
					else {
						formUploadCallBack(document.getElementById('ajaxForm'),function(){
							uploadFinishReload();
						});
					}
				}
			}
		});
	}
}

