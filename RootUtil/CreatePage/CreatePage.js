
function CreatePageInit() {
	var obj = document.getElementById('CreatePageAddView');
	obj.addEventListener("click", function(e){
		addCreatePageView();
    });
    var CreatePageUpload = document.getElementById('CreatePageUpload');
	CreatePageUpload.addEventListener("click", function(e){
		createPageUpload();
    });
    setCreatePageUtilSelectInit();
}

function addCreatePageView() {
	var accordionPart = document.getElementById('accordionPart');

	var form = document.createElement("form");
	form.method = "post";
	form.action = "php/push_zip.php";
	form.enctype = "multipart/form-data";

	var li = document.createElement("li");
	var box_div = document.createElement("div");
	box_div.className = "CreatePageItem";
	var title_div = document.createElement("div");
	title_div.className = "CreatePageItemTitle";
	title_div.appendChild(addTitleInput());
	var edit_div = document.createElement("div");
	edit_div.className = "CreatePageItemBt";
	var delete_div = document.createElement("div");
	delete_div.className = "CreatePageItemBt";
	var edit_bt = document.createElement("img");
	edit_bt.src = "img/editBt.png";
	var delete_bt = document.createElement("img");
	delete_bt.src = "img/deleteBt.png";

	createPageAddDelete(delete_div);

	edit_div.appendChild(edit_bt);
	delete_div.appendChild(delete_bt);
	box_div.appendChild(addFormInformation(userRecordData.username,"root"));
	box_div.appendChild(title_div);
	box_div.appendChild(edit_div);
	box_div.appendChild(delete_div);

	var frame_div = document.createElement("div");
	frame_div.className = "CreatePageItemframe";

	setPageUtil(frame_div,'TeacherUtil/CreatePage/CreatePageUtil.html');

	form.appendChild(box_div);
	form.appendChild(frame_div);
	li.appendChild(form);
	accordionPart.appendChild(li);
	
	$(frame_div).hide();
	$(edit_div).hover(function(){
		$(this).addClass('qa_title_on');
	}, function(){
		$(this).removeClass('qa_title_on');
	}).click(function(){
		var get_root = $(this.parentNode.parentNode)[0];
		var frame = get_root.getElementsByTagName('div')[5];
		$(frame).slideToggle();
	});
}

function createPageAddDelete(obj) {
	obj.addEventListener("click", function(e){
		var accordionPart = document.getElementById('accordionPart');
		accordionPart.removeChild(this.parentNode.parentNode.parentNode);	
    });
}

function addFormInformation(username,foldername) {
	var username_input = addInputInformation("username",username);
	var foldername_input = addInputInformation("foldername",foldername);
	var box_div = document.createElement("div");
	box_div.style.display="none";
	box_div.appendChild(username_input);
	box_div.appendChild(foldername_input);
	return box_div;
}

function addInputInformation(name,value) {
	var input = document.createElement("input");
	input.name=name;
	input.type="text";
	input.value=value;
	input.style.display="none";
	return input;
}

function addTitleInput() {
	var input = document.createElement("input");
	input.type="text";
	input.value="課程名稱";
	input.className="CreatePageUtilViewInput";
	return input;
}

function createPageUpload() {
	var obj = document.getElementById('accordionPart');
	var obj_array = obj.getElementsByTagName('form');
	var push_data =  new Array();
	for (var i = 0; i < obj_array.length; i++) {
		var form = obj_array[i];
		var title_input = form.getElementsByTagName('input')[2];
		var id_input = form.getElementsByTagName('input')[3];
		var outline_input = form.getElementsByTagName('textarea')[0];
		var obj_select = form.getElementsByTagName('select')[0];
		var time = getNowTime();
		var post_data = {};
		post_data['name'] = userRecordData.name;
		post_data['username'] = userRecordData.username;
		post_data['department'] = CreatePageDepartments[obj_select.value];
		post_data['department_id'] = CreatePageDepartmentsIds[obj_select.value];
		post_data['course_id'] = id_input.value;
		post_data['course_name'] = title_input.value;
		post_data['outline'] = outline_input.value;
		post_data['create_time'] = time;
		post_data['update_time'] = time;
		push_data[i] = post_data;
	}
	var d = {
		data:push_data
	};
	var post = "get_data="+JSON.stringify(d);
	createPageCallApi(post);
}

function formUpload(form) {
	$(form).ajaxSubmit({
		beforeSubmit: function(){

		},
		success: function(resp,st,xhr,$form) {
			if(resp!="err") {
				
			}
			else {

			}
		}
	});
}

function createPageCallApi(post) {
	callApi(post,addTeachCourseApi,function(res){
		var check = true;
		var error_code = [];
		var obj = document.getElementById('accordionPart');
		var obj_array = obj.getElementsByTagName('form');
	
		for (var i = 0; i < res.length; i++) {
			var get_data = res[i];
			if (!get_data.result) {
				check = false;
			}
			else {
				var form = obj_array[i];
				formUpload(form);
			}
			error_code.push(get_data.result);
		}
		if (check) {
			alert("檔案上傳成功！");
			window.location.reload();
		}
		else {
			alert("部分檔案上傳成功！以下是失敗檔案！代號可能重複！");
			var accordionPart = document.getElementById('accordionPart');
			var obj_array = accordionPart.getElementsByTagName('li');
			for (var i = 0; i < obj_array.length; i++) {
				var get_obj = obj_array[i];
				var get_err = error_code[i];
				if (get_err) {
					accordionPart.removeChild(get_obj);	
				}
			}
		}
	});
}
