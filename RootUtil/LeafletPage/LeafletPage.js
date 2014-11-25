function LeafletUpload() {
	var LeafletForm = document.getElementById('LeafletForm');
	formUploadCallBack(LeafletForm,function(){
		alert("上傳成功！");
		window.location.reload();
	});
}
function LeafletInit() {
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