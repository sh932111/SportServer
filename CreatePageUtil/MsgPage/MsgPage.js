var MsgImageView = document.getElementById('MsgImageView');
var MsgLinkView = document.getElementById('MsgLinkView');
var get_post ;
function MsgInit(index) {
	if (index != "學會活動") {
		var MsgPageInputSelect = document.getElementById('MsgPageInputSelect');
		MsgPageInputSelect.style.display = "none";
	}
	
	var MsgPageInputSelectSpinner = new getSpinner();
	var MsgPageInputSelect = document.getElementById('MsgPageInputSelect');
	MsgPageInputSelectSpinner.loadSpinner(MsgPageInputSelect,EventClass,EventClass);
	get_post = getPostId();

	MsgSetUI();
}

function MsgSetUI() {
	
	var MsgAddImgTitle = document.getElementById('MsgAddImgTitle');
	MsgAddImgTitle.addEventListener("click", function(e){
		var box_div = document.createElement("div");
		var form = document.createElement("form");
		form.method = "post";
		form.action = "php/upload_img.php";
		form.enctype = "multipart/form-data";
		var input = document.createElement("input");
		input.type = "file";
		input.name = "img";
		var foldername_input = addInputInformation("folderName","Msg");
		var id_input = addInputInformation("folderId",get_post);
		form.appendChild(id_input);
		form.appendChild(input);
		form.appendChild(foldername_input);
		box_div.appendChild(form);
		MsgImageView.appendChild(box_div);
	});

	var MsgDeleteImgTitle = document.getElementById('MsgDeleteImgTitle');
	MsgDeleteImgTitle.addEventListener("click", function(e){
		var div_array = MsgImageView.getElementsByTagName('div');
		if (div_array.length > 0) {
			MsgImageView.removeChild(div_array[div_array.length - 1]);
		}
	});
	
	var MsgAddFileTitle = document.getElementById('MsgAddFileTitle');
	MsgAddFileTitle.addEventListener("click", function(e){
		var box_div = document.createElement("div");
		var form = document.createElement("form");
		form.method = "post";
		form.action = "php/upload_file.php";
		form.enctype = "multipart/form-data";
		var input = document.createElement("input");
		input.type = "file";
		input.name = "file";
		var foldername_input = addInputInformation("folderName","Msg");
		var id_input = addInputInformation("folderId",get_post);
		form.appendChild(input);
		form.appendChild(foldername_input);
		form.appendChild(id_input);
		box_div.appendChild(form);
		MsgLinkView.appendChild(box_div);
	});	

	var MsgDeleteFileTitle = document.getElementById('MsgDeleteFileTitle');
	MsgDeleteFileTitle.addEventListener("click", function(e){
		var div_array = MsgLinkView.getElementsByTagName('div');
		if (div_array.length > 0) {
			MsgLinkView.removeChild(div_array[div_array.length - 1]);
		}
	});
}

function MsgPost() {
	var image = 0;
	var link = 0;
	if (MsgImageView.getElementsByTagName('div').length > 0) {
		image = 1;
	}
	if (MsgLinkView.getElementsByTagName('div').length > 0) {
		link = 1;
	}
	var create_time = getNowTime();
	var title  = document.getElementById('MsgTitle').value;
	var detail = document.getElementById('MsgDetail').value;
	var date = document.getElementById('MsgDate').value;
	var time = document.getElementById('MsgTime').value;
	var m_class = document.getElementById('MsgPageInputSelect').value;
	if (SelectBarViewBoxClass.value != "學會活動") {
		m_class = "";
	}
	var post_data = "data_id="+get_post+"&title="+title+"&detail="+detail+"&date="+date
	+"&time="+time+"&image="+image+"&link="+link+"&type="+SelectBarViewBoxClass.value+"&class="+m_class+"&create_time="+create_time;

	callApi(post_data,addNewMsgApi,function(user_data){
		alert(user_data.message);
		if (user_data.result) {
			var img_array = MsgImageView.getElementsByTagName('form');
			for (var i = 0; i < img_array.length; i++) {
				var form = img_array[i];
				formUpload(form);
			}
			var link_array = MsgLinkView.getElementsByTagName('form');
			for (var i = 0; i < link_array.length; i++) {
				var form = link_array[i];
				formUpload(form);
			}

			var folderName = document.getElementById('folderName');
			folderName.value = "Msg";
			var folderId = document.getElementById('folderId');
			folderId.value = get_post;
			formUpload(document.getElementById('ajaxForm'));
			window.location.reload();
		}
	});
}

