function LeafletUpload() {
	var LeafletForm = document.getElementById('LeafletForm');
	formUploadCallBack(LeafletForm,function(){
		alert("上傳成功！");
		window.location.reload();
	});
}