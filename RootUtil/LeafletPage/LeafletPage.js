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
			console.log(res);
		if (res.result) {
		}
	});
}