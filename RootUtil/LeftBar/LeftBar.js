function leftBarInit(view_data) {
	var LeftBarTable = document.getElementById('LeftBarTable');
	for (var i = 0; i < view_data.length; i++) {
		var view_id = view_data[i].id;
		var view_title = view_data[i].title;
		var view_category = view_data[i].category;
		var LeftBarTr = document.createElement("div");
		LeftBarTr.className = "LeftBarTr";
		var LeftBarTd = document.createElement("div");
		LeftBarTd.className = "LeftBarTd";
		var LeftBarItem = document.createElement("div");
		LeftBarItem.className = "LeftBarItem";
		LeftBarItem.id=view_id;
		LeftBarItem.value=view_category;
		LeftBarItem.innerHTML = view_title;
		addFunction(LeftBarItem);
		LeftBarTd.appendChild(LeftBarItem);
		LeftBarTr.appendChild(LeftBarTd);
		LeftBarTable.appendChild(LeftBarTr);
	}
	LeftBarTable.style.height = view_data.length * 10 + "%";
}

function addFunction(obj) {
	obj.addEventListener("click", function(e){
		var go = this.value+"/"+this.id+"/"+this.id+".html";
		setPageUtilCallBack('#pgMain',go,function(){
			if (go == "StudentUtil/LearningPage/LearningPage.html") {
				LearningPageInit ();
			}
		});
    });
}