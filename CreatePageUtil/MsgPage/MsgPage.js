var MsgImageView = document.getElementById('MsgImageView');
var MsgLinkView = document.getElementById('MsgLinkView');
var getPost ;
var MsgPostNum = 0;
var MsgResponseNum = 0;

function MsgInit(index) {
	if (index != "學會活動") {
		var MsgPageInputSelect = document.getElementById('MsgPageInputSelect');
		MsgPageInputSelect.style.display = "none";
	}
	
	var MsgPageInputSelectSpinner = new getSpinner();
	var MsgPageInputSelect = document.getElementById('MsgPageInputSelect');
	MsgPageInputSelectSpinner.loadSpinner(MsgPageInputSelect,EventClass,EventClass);
	getPost = getPostId();

	MsgSetUI("Msg");
}

function MsgSetUI(folderName) {
	
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
		input.addEventListener('change', function() {
			isCheckingImage(this); 
		});

		var foldername_input = addInputInformation("folderName",folderName);
		var id_input = addInputInformation("folderId",getPost);
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
		
		var foldername_input = addInputInformation("folderName",folderName);
		var id_input = addInputInformation("folderId",getPost);
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
	var get_input = document.getElementById('ajaxForm').getElementsByTagName('input')[0];
	var filename = get_input.value;
	var extend = filename.substring(filename.lastIndexOf(".") + 1);
	if (extend != "") {
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
	checkIng(title,"標題");
	checkIng(date,"日期");
	checkIng(time,"時間");
	var m_class = document.getElementById('MsgPageInputSelect').value;
	if (SelectBarViewBoxClass.value != "學會活動") {
		m_class = "";
	}
	var post_data = "data_id="+getPost+"&title="+title+"&detail="+detail+"&date="+date
	+"&time="+time+"&image="+image+"&link="+link+"&type="+SelectBarViewBoxClass.value+
	"&class="+m_class+"&create_time="+create_time;

	callApi(post_data,addNewMsgApi,function(user_data){
		alert(user_data.message);
		if (user_data.result) {
			var img_array = MsgImageView.getElementsByTagName('form');
			var link_array = MsgLinkView.getElementsByTagName('form');
			MsgPostNum = img_array.length+link_array.length+1;

			var get_input2 = document.getElementById('ajaxForm').getElementsByTagName('input')[0];
			var filename1 = get_input2.value;
			var extend1 = filename1.substring(filename1.lastIndexOf(".") + 1);
			if (extend1 == "" && (img_array.length+link_array.length)==0) {
				window.location.reload();
			}
			
			for (var i = 0; i < img_array.length; i++) {
				var form = img_array[i];
				var get_input = form.getElementsByTagName('input')[1];
				var filename = get_input.value;
				var extend = filename.substring(filename.lastIndexOf(".") + 1);
				if (extend == "") {
					MsgPostNum = MsgPostNum - 1;
				}
				formUploadCallBack(form,function(){
					uploadFinishReload();
				});
			}
			for (var i = 0; i < link_array.length; i++) {
				var form = link_array[i];
				var get_input = form.getElementsByTagName('input')[1];
				var filename = get_input.value;
				var extend = filename.substring(filename.lastIndexOf(".") + 1);
				if (extend == "") {
					MsgPostNum = MsgPostNum - 1;
				}
				formUploadCallBack(form,function(){
					uploadFinishReload();
				});
			}

			var folderName = document.getElementById('folderName');
			folderName.value = "Msg";
			var folderId = document.getElementById('folderId');
			folderId.value = getPost;

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
			//window.location.reload();
		}
	});
}
function uploadFinishReload(){
	MsgResponseNum ++;
	console.log(MsgResponseNum);
	console.log(MsgPostNum);
	if (MsgResponseNum == MsgPostNum) {
		//window.location.reload();
	}
}
