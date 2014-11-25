var ScrollImgUtilView = document.getElementById('ScrollImgUtilView');

function ScrollImgInit(img_array) {
	
	for (var i = 0; i < img_array.length; i++) {
		var ScrollImgUtilViewBox = document.createElement("div");
		ScrollImgUtilViewBox.className = "ScrollImgUtilViewBox";
		
		var ScrollImgImg = document.createElement("img");
		ScrollImgImg.className = "ScrollImgImg";
		ScrollImgImg.src = img_array[i].link_url;
		var ScrollImgBt = document.createElement("div");
		ScrollImgBt.className = "ScrollImgBt";
		ScrollImgBt.id = i;
		ScrollImgBt.addEventListener("click", function(e){
			imgArray.push(img_array[this.id].link_text);
			ScrollImgUtilView.removeChild(this.parentNode);
		});

		var ScrollImgBtImg = document.createElement("img");
		ScrollImgBtImg.className = "ScrollImgBtImg";
		ScrollImgBtImg.src = "img/deleteBt.png";
		ScrollImgBt.appendChild(ScrollImgBtImg);
		ScrollImgUtilViewBox.appendChild(ScrollImgImg);
		ScrollImgUtilViewBox.appendChild(ScrollImgBt);
		ScrollImgUtilView.appendChild(ScrollImgUtilViewBox);
	}
}