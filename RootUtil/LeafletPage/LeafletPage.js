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
	
	
}

function LeafletInit() {
	var input = document.getElementById('LeafletBoxInput');
	input.addEventListener('change', function() {
		isCheckingImage(this); 
		isCheckingName(this);
	});
	var LeafletImg = document.getElementById('LeafletImg');
	
	callApi("",getLeafletPath,function(res){
		if (res.img_path.length > 0) {
			LeafletImg.src = "php/"+res.img_path[0];
		}
		else {
			LeafletImg.src = "img/noneImg.jpg";
		}
	});
}