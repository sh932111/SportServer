//8個資料一組
var selectedIndex = 0;
function listViewInit(res_title_items,res_date_items){
	var title_items = [];
	var date_items = [];
	if (res_date_items.length > 8){
		var titles = [];
		var dates = [];
		for (var i = 1; i <= res_date_items.length; i++) {
			titles.push(res_title_items[i-1]);
			dates.push(res_date_items[i-1]);
			if (i % 8 == 0){
				title_items.push(titles);
				date_items.push(dates);
				titles = [];
				dates = [];
			}
			else if(i == res_date_items.length){
				title_items.push(titles);
				date_items.push(dates);
				titles = [];
				dates = [];
				
			}
		}
		setListView(title_items[0],date_items[0]);
		setListLink(title_items.length,0,title_items,date_items);
	}
	else{
		setListView(res_title_items,res_date_items);
		setListLink(1,0,res_title_items,res_date_items);
	}	
}

function setListView(title_items,date_items){
	$("#css_table").empty();
	var css_table = document.getElementById('css_table');
	addListViewTitle(css_table);
	for (var i = 0; i < title_items.length; i++) {
		var box_div = document.createElement("div");
		box_div.className = "css_tr";
		box_div.id = i;
		var title_div = document.createElement("div");
		title_div.innerHTML = title_items[i];
		var date_div = document.createElement("div");
		date_div.innerHTML = date_items[i];
		if (title_items.length - 1 == i){
			date_div.className = "date_css_td underLineStyle2";
			title_div.className = "title_css_td underLineStyle2";
		}
		else{
			date_div.className = "date_css_td underLineStyle1";
			title_div.className = "title_css_td underLineStyle1";
		}
		box_div.addEventListener("click", function(e){
			var index = this.id;
			var get_index = parseInt(index) + parseInt(selectedIndex*8);
			setPageUtilCallBack('#ManagementPageScrollView','RootUtil/ShowDetailData/ShowDetailData.html', function() {
				ShowDetailDataInit(get_index);
		    });
		});
		box_div.appendChild(title_div);
		box_div.appendChild(date_div);
		css_table.appendChild(box_div);
	}	
}

function setListLink(data_num,selected_index,title_items,date_items){
	selectedIndex = selected_index;
	var ListViewIndex = document.getElementById('ListViewIndex');
	$("#ListViewIndex").empty();
	var box = document.createElement("div");
	box.className = "ListViewIndexBox";
	for (var i = 1; i <= data_num; i++) {
		var page_index = document.createElement("div");
		page_index.id = i - 1;
		page_index.innerHTML = i;
		if ((i - 1) == selected_index){
			page_index.className = "ListViewIndexDetail ListViewIndexDetailSelectStyle";
		}
		else{
			page_index.className = "ListViewIndexDetail ListViewIndexDetailStyle";
			page_index.addEventListener("click", function(e){
				setListView(title_items[this.id],date_items[this.id]);
	        	setListLink(data_num,this.id,title_items,date_items);
	        });
		}
		box.appendChild(page_index);
	}
	box.style.width = data_num * 20 +"px";
	ListViewIndex.appendChild(box);
}

function addListViewTitle(css_table){
	var box_div = document.createElement("div");
	box_div.className = "first_css_tr";
	var title_div = document.createElement("div");
	title_div.innerHTML = "標題";
	var date_div = document.createElement("div");
	date_div.innerHTML = "新增時間";
	date_div.className = "first_date_css_td underLineStyle2";
	title_div.className = "first_title_css_td underLineStyle2";
	box_div.appendChild(title_div);
	box_div.appendChild(date_div);
	css_table.appendChild(box_div);
}