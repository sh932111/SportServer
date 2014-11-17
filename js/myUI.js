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