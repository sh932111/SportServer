var ScrollLinkUtilView = document.getElementById('ScrollLinkUtilView');

function ScrollLinkInit(link_array) {
	for (var i = 0; i < link_array.length; i++) {
		var ScrollLinkUtilViewBox = document.createElement("div");
		ScrollLinkUtilViewBox.className = "ScrollLinkUtilViewBox";
		
		var ScrollLinkBt = document.createElement("div");
		ScrollLinkBt.className = "ScrollLinkBt";
		ScrollLinkBt.id = i;
		ScrollLinkBt.addEventListener("click", function(e){
			fileArray.push(link_array[this.id].link_text);
			ScrollLinkUtilView.removeChild(this.parentNode);
		});

		var ScrollLinkUtilViewBt = document.createElement("img");
		ScrollLinkUtilViewBt.className = "ScrollLinkUtilViewBt";
		ScrollLinkUtilViewBt.src = "img/deleteBt.png";

		var ScrollLinkUtilViewText = document.createElement("div");
		ScrollLinkUtilViewText.className = "ScrollLinkUtilViewText";

		var a_link = document.createElement("a");
		a_link.innerHTML = link_array[i].link_text;
		if (link_array[i].link_url) {
			a_link.href = link_array[i].link_url;
		}
		a_link.target = "_blank";
		ScrollLinkBt.appendChild(ScrollLinkUtilViewBt);
		ScrollLinkUtilViewBox.appendChild(ScrollLinkBt);
		ScrollLinkUtilViewBox.appendChild(a_link);
		ScrollLinkUtilView.appendChild(ScrollLinkUtilViewBox);
	}
}
function ScrollLinkInit2(link_array,callback) {
	for (var i = 0; i < link_array.length; i++) {
		var ScrollLinkUtilViewBox = document.createElement("div");
		ScrollLinkUtilViewBox.className = "ScrollLinkUtilViewBox";
		
		var ScrollLinkBt = document.createElement("div");
		ScrollLinkBt.className = "ScrollLinkBt";
		ScrollLinkBt.id = i;
		ScrollLinkBt.addEventListener("click", function(e){
			callback(this.id,this);
		});

		var ScrollLinkUtilViewBt = document.createElement("img");
		ScrollLinkUtilViewBt.className = "ScrollLinkUtilViewBt";
		ScrollLinkUtilViewBt.src = "img/deleteBt.png";

		var ScrollLinkUtilViewText = document.createElement("div");
		ScrollLinkUtilViewText.className = "ScrollLinkUtilViewText";

		var a_link = document.createElement("a");
		a_link.innerHTML = link_array[i].link_text;
		if (link_array[i].link_url) {
			a_link.href = link_array[i].link_url;
		}
		a_link.target = "_blank";
		ScrollLinkBt.appendChild(ScrollLinkUtilViewBt);
		ScrollLinkUtilViewBox.appendChild(ScrollLinkBt);
		ScrollLinkUtilViewBox.appendChild(a_link);
		ScrollLinkUtilView.appendChild(ScrollLinkUtilViewBox);
	}
}