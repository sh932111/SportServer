var SelectBarTitleData = ["最新消息","學會簡介","出版資訊","相關連結"];
var SelectBarTitleData2 = ["最新消息","學會簡介","出版資訊","相關連結","活動訊息"];
var SelectBarClassNewMsg = ["學會活動","會訊","優秀論文獎","代發訊息"];
var SelectBarClassInformation = ["年度計畫"];
var SelectBarClassBook = ["學報","季刊","雙月刊"];
var EventClass = ["社區活動","研習活動","運動研討會","學術活動"];
var SelectBarViewBoxTitleSpinner = new getSpinner();
var SelectBarViewBoxClassSpinner = new getSpinner();
var SelectBarViewBoxTitle = document.getElementById('SelectBarViewBoxTitle');
var SelectBarViewBoxClass = document.getElementById('SelectBarViewBoxClass');

var SelectBarTime = document.getElementById('SelectBarTime');
var TitleBarSelectYear = document.getElementById('TitleBarSelectYear');
var TitleBarSelect = document.getElementById('TitleBarSelect');

var SelectBarCallApiCheck;
var SelectBarCallApi = getNewMsgApi;
var SelectBarPost = "year="+getNowYear()+"&month="+(getNowMonth()+1)+"&type="+"學會活動";

var refreshSelectBarPostIndex = 1;

function SelectBarInit() {
	SelectBarViewBoxTitleSpinner.loadSpinner(SelectBarViewBoxTitle,SelectBarTitleData,SelectBarTitleData);
	refreshSelectBarItems(0);
	SelectBarTime.style.display = "none";
	SelectBarCallApiCheck = false;
}	

function SelectBarInitTime() {
	SelectBarViewBoxTitleSpinner.loadSpinner(SelectBarViewBoxTitle,SelectBarTitleData2,SelectBarTitleData2);
	refreshSelectBarItems(0);
	var month = getNowMonth();

	// var options_array = TitleBarSelect.getElementsByTagName('option')[month];
	// options_array.selected = true;
	var year_text_array = [];
	var year_array = [];
	var year = getNowYear();

	var index = year - 2014 + 8;
	for (var i = 0; i < index; i++) {
		var y = year - i;
		year_text_array.push(y+"年");
		year_array.push(y);
	}
	
	var spinner = new getSpinner();
	spinner.loadSpinner(TitleBarSelectYear,year_text_array,year_array);
	SelectBarCallApiCheck = true;
}

function setTitleItems(obj){
	refreshSelectBarItems(obj.selectedIndex);
	refreshCreateView();
	
}

function setClassItems(obj){
	refreshCreateView();
}

function refreshSelectBarItems(index) {
	if (index == 0) {
		SelectBarViewBoxClassSpinner.loadSpinner(SelectBarViewBoxClass,SelectBarClassNewMsg,SelectBarClassNewMsg);		
	}
	else if (index == 1) {
		SelectBarViewBoxClassSpinner.loadSpinner(SelectBarViewBoxClass,SelectBarClassInformation,SelectBarClassInformation);		
	}
	else if (index == 2) {
		SelectBarViewBoxClassSpinner.loadSpinner(SelectBarViewBoxClass,SelectBarClassBook,SelectBarClassBook);		
	}
	else if (index == 3) {
		SelectBarViewBoxClassSpinner.loadSpinner(SelectBarViewBoxClass,["無"],["無"]);
	}
	else if (index == 4) {
		SelectBarViewBoxClassSpinner.loadSpinner(SelectBarViewBoxClass,EventClass,EventClass);
	}
}

function refreshCreateView() {
	checkToUserData();
	$("#CreatePageBoxScrollView").empty();
	SelectBarTime.style.display = "";
	if (SelectBarViewBoxTitle.value == "最新消息") {
		SelectBarCallApi = getNewMsgApi;
		refreshSelectBarPostIndex = 1;
		if (!SelectBarCallApiCheck) {
			SelectBarTime.style.display = "none";
		    setPageUtilCallBack('#CreatePageBoxScrollView','CreatePageUtil/MsgPage/MsgPage.html', function() {
		    	MsgInit(SelectBarViewBoxClass.value);
		    });
		}
		else {
			setPageUtil('#ManagementPageScrollView','RootUtil/ListView/ListView.html');
		}
		refreshSelectBarPost(refreshSelectBarPostIndex);
		selectBarCallApi();
	}
	else if (SelectBarViewBoxTitle.value == "學會簡介") {
		SelectBarCallApi = getPlanApi;
		refreshSelectBarPostIndex = 2;
		if (!SelectBarCallApiCheck) {
			SelectBarTime.style.display = "none";
		    setPageUtilCallBack('#CreatePageBoxScrollView','CreatePageUtil/PlanPage/PlanPage.html', function() {
		    	PlanPageInit();
		    });
		}
		else {
			setPageUtil('#ManagementPageScrollView','RootUtil/ListView/ListView.html');
		}
		refreshSelectBarPost(refreshSelectBarPostIndex);
		selectBarCallApi();
	}
	else if (SelectBarViewBoxTitle.value == "出版資訊") {
		SelectBarCallApi = getBookApi;
		refreshSelectBarPostIndex = 1;
		if (!SelectBarCallApiCheck) {
			SelectBarTime.style.display = "none";
		    setPageUtilCallBack('#CreatePageBoxScrollView','CreatePageUtil/BookPage/BookPage.html', function() {
		    	BookPageInit();
		    });
		}
		else {
			setPageUtil('#ManagementPageScrollView','RootUtil/ListView/ListView.html');
		}
		refreshSelectBarPost(refreshSelectBarPostIndex);
		selectBarCallApi();
	}
	else if (SelectBarViewBoxTitle.value == "相關連結") {
		SelectBarTime.style.display = "none";
		SelectBarCallApi = getLinkApi;
		refreshSelectBarPostIndex = 3;
		if (!SelectBarCallApiCheck) {
		    setPageUtilCallBack('#CreatePageBoxScrollView','CreatePageUtil/LinkPage/LinkPage.html', function() {
		   
		    });
		}
		else {
			setPageUtilCallBack('#ManagementPageScrollView','RootUtil/SelectLink/SelectLink.html', function() {
		   		SelectLinkInit();
		    });
		}
	}
	else if (SelectBarViewBoxTitle.value == "活動訊息") {
		SelectBarCallApi = getMsgApi;
		refreshSelectBarPostIndex = 1;
		setPageUtil('#ManagementPageScrollView','RootUtil/ListView/ListView.html');
		refreshSelectBarPost(refreshSelectBarPostIndex);
		selectBarCallApi();
	}
}

function setIndxeBox(obj) {
	refreshSelectBarPost(refreshSelectBarPostIndex);
	refreshCreateView();
	//selectBarCallApi();
}

function setIndxeYearBox(obj) {
	refreshSelectBarPost(refreshSelectBarPostIndex);
	refreshCreateView();
	//selectBarCallApi();
}

function refreshSelectBarPost(index) {
	if (index == 1) {
		SelectBarPost = "year="+TitleBarSelectYear.value+"&month="+TitleBarSelect.value+"&type="+SelectBarViewBoxClass.value;
	}
	else if (index == 2) {
		SelectBarPost = "year="+TitleBarSelectYear.value+"&month="+TitleBarSelect.value;
	}
	else if (index == 3) {
		SelectBarPost = "";
	}
}

function selectBarCallApi() {
	if (SelectBarCallApiCheck) {
		callApi(SelectBarPost,SelectBarCallApi,function(get_data){
			if (get_data.result) {
				getApiData = get_data;
				var title_array = [];
				var date_array = [];
				var list = getApiData.list;
				for (var i = 0; i < list.length; i++) {
					title_array.push(list[i].title);					
					date_array.push(list[i].create_time);
				}

    			listViewInit(title_array,date_array);
			}
		});
	}
}
