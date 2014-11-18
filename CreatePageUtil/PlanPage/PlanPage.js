var MsgLinkView = document.getElementById('MsgLinkView');
var get_post ;

function PlanPageInit() {
	get_post = getPostId();
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
		var foldername_input = addInputInformation("folderName","Plan");
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
	var link = 0;
	if (MsgLinkView.getElementsByTagName('div').length > 0) {
		link = 1;
	}
	var create_time = getNowTime();
	var title  = document.getElementById('MsgTitle').value;
	var detail = document.getElementById('MsgDetail').value;
	var date = document.getElementById('MsgDate').value;
	var time = document.getElementById('MsgTime').value;
	var post_data = "data_id="+get_post+"&title="+title+"&detail="+detail+"&date="+date
	+"&time="+time+"&link="+link+"&create_time="+create_time;

	callApi(post_data,addPlanApi,function(user_data){
		alert(user_data.message);
		if (user_data.result) {
			var link_array = MsgLinkView.getElementsByTagName('form');
			for (var i = 0; i < link_array.length; i++) {
				var form = link_array[i];
				formUpload(form);
			}
			window.location.reload();
		}
	});
}

