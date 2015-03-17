function LeafletUpload() {
	dialogShow();
	var LeafletForm = document.getElementById('LeafletForm');
	formUploadCallBack(LeafletForm,function(){
		dialogHidden();
		alert("上傳成功！");
		window.location.reload();
	});
}

function LeafletDelete() {
	dialogShow();
	var LeafletForm = document.getElementById('LeafletForm2');
	formUploadCallBack(LeafletForm,function(){
		dialogHidden();
		alert("刪除成功！");
		window.location.reload();
	});
}

function HeadUpload() {
	dialogShow();
	var LeafletForm = document.getElementById('HeadForm');
	formUploadCallBack(LeafletForm,function(){
		dialogHidden();
		alert("上傳成功！");
		window.location.reload();
	});
}

function HeadDelete() {
	dialogShow();
	var LeafletForm = document.getElementById('HeadForm2');
	formUploadCallBack(LeafletForm,function(){
		dialogHidden();
		alert("刪除成功！");
		window.location.reload();
	});
}

function footerUpload() {
	dialogShow();
	var LeafletForm = document.getElementById('footerForm');
	formUploadCallBack(LeafletForm,function(){
		dialogHidden();
		alert("上傳成功！");
		window.location.reload();
	});
}

function footerDelete() {
	dialogShow();
	var LeafletForm = document.getElementById('footerForm2');
	formUploadCallBack(LeafletForm,function(){
		dialogHidden();
		alert("刪除成功！");
		window.location.reload();
	});
}

function LeafletInit() {
	var input = document.getElementById('LeafletBoxInput');
	input.addEventListener('change', function() {
		isCheckingImage(this); 
		isCheckingName(this);
	});

	var input2 = document.getElementById('HeadBoxInput');
	input2.addEventListener('change', function() {
		isCheckingImage(this); 
		isCheckingName(this);
	});

	var input3 = document.getElementById('footerBoxInput');
	input3.addEventListener('change', function() {
		isCheckingImage(this); 
		isCheckingName(this);
	});

	var LeafletImg = document.getElementById('LeafletImg');
	var HeadImg = document.getElementById('HeadImg');
	var footerImg = document.getElementById('footerImg');
	
	callApi("",getLeafletPath,function(res){
		if (res.img_path.length > 0) {
			LeafletImg.src = "php/"+res.img_path[0];
		}
		else {
			LeafletImg.src = "img/noneImg.jpg";
		}
	});
	
	callApi("",getHeadPath,function(res){
		if (res.img_path.length > 0) {
			HeadImg.src = "php/"+res.img_path[0];
		}
		else {
			HeadImg.src = "img/noneImg.jpg";
		}
	});

	callApi("",getFooterPath,function(res){
		if (res.img_path.length > 0) {
			footerImg.src = "php/"+res.img_path[0];
		}
		else {
			footerImg.src = "img/noneImg.jpg";
		}
	});
}