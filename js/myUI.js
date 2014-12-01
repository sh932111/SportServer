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
	if(v !=''){
		var a = v.lastIndexOf("."); 

		var str = v.substring(a + 1);

		var imgArr = [ "jpg","jpeg","gif","bmp","JPG","JPEG","GIF","BMP","png","PNG"];
		if($.inArray(str, imgArr)=='-1'){
			clearFileInput(obj);
			alert('請選擇正確的圖片格式！');
		} 
	}

}

function isCheckingName(obj) {
	var v=$(obj).val();
	if(v !=''){
		for (var i = 0 ; i < v.length ; i++){
			var get = v.charAt(i);
			if (!checkcharAt(get)) {
				clearFileInput(obj);
				alert('請勿上傳奇怪字元或是中文的檔名！');
				break;
			}
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

function dialogShow() {
	
	var dialogView = document.getElementById("dialogView");
	dialogView.className = "dialogShow";
	setPageUtilCallBack('#dialogView','RootUtil/Loading/Loading.html',function(){

	});
}

function dialogHidden() {    
	$("#dialogView").empty();
	var dialogView = document.getElementById("dialogView");
	dialogView.className = "dialogHidden";
}

function checkcharAt(key) {
	if (key == "1" || key == "2" || key == "3" || key == "4" || key == "5" || key == "6" || key == "7" || key == "8" || key == "9" || key == "0"
		|| key == "q" || key == "Q" || key == "w" || key == "W" || key == "e" || key == "E" || key == "r" || key == "R" || key == "t" || key == "T"
		|| key == "y" || key == "Y" || key == "u" || key == "U" || key == "i" || key == "I" || key == "o" || key == "O" || key == "p" || key == "P"
		|| key == "a" || key == "A" || key == "s" || key == "S" || key == "d" || key == "D" || key == "f" || key == "F" || key == "g" || key == "G"
		|| key == "h" || key == "H" || key == "j" || key == "J" || key == "k" || key == "K" || key == "l" || key == "L" || key == "z" || key == "Z"
		|| key == "x" || key == "X" || key == "c" || key == "C" || key == "v" || key == "V" || key == "b" || key == "B" || key == "n" || key == "N"
		|| key == "m" || key == "M" || key == "." || key == ":" || key == "_" || key == "(" || key == ")" || key == "-" || key == "\\"|| key == "["
		|| key == "]" || key == "{" || key == "}" || key == "/") {
		return true;
	}
	else {
		return false;
	}
}
