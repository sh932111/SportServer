function getSpinner() {
	this.objText = "";
	this.objId = "";
	this.loadSpinner = function(obj,text_array,id_array){
		obj.options.length = 0;
		for (var i = 0; i < text_array.length; i++) {
			var item = new Option(text_array[i]);
			if (i == 0) {
				this.objText = text_array[i];
				this.objId = id_array[i];
			}
			item.value = id_array[i];
			obj.options.add(item);
		}
	}
}

function isCheckingImage(obj) {
	var v=$(obj).val();
	if(v!=''){
		var a = v.lastIndexOf("."); 

		var str = v.substring(a + 1);

		var imgArr = [ "jpg","jpeg","gif","bmp","JPG","JPEG","GIF","BMP","png","PNG"];
		if($.inArray(str, imgArr)=='-1'){
			clearFileInput(obj);
			alert('請選擇正確的圖片格式！');
		} 
	}

}
function clearFileInput(ctrl) {
	try {
		ctrl.value = null;
	} catch(ex) { }
	if (ctrl.value) {
		ctrl.parentNode.replaceChild(ctrl.cloneNode(true), ctrl);
	}
}