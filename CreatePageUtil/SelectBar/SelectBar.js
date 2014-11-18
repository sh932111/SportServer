var SelectBarTitleData = ["最新消息","學會簡介","出版資訊","相關連結"];
var SelectBarClassNewMsg = ["學會活動","會訊","優秀論文獎","代發訊息"];
var SelectBarClassInformation = ["年度計畫"];
var SelectBarClassBook = ["學報","季刊","雙月刊"];
var EventClass = ["社區活動","研習活動","運動研討會","學術活動"];
var SelectBarViewBoxTitleSpinner = new getSpinner();
var SelectBarViewBoxClassSpinner = new getSpinner();
var SelectBarViewBoxTitle = document.getElementById('SelectBarViewBoxTitle');
var SelectBarViewBoxClass = document.getElementById('SelectBarViewBoxClass');

function SelectBarInit() {
	SelectBarViewBoxTitleSpinner.loadSpinner(SelectBarViewBoxTitle,SelectBarTitleData,SelectBarTitleData);
	refreshSelectBarItems(0);
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
}

function refreshCreateView() {

	$("#CreatePageBoxScrollView").empty();

	if (SelectBarViewBoxTitle.value == "最新消息") {
	    setPageUtilCallBack('#CreatePageBoxScrollView','CreatePageUtil/MsgPage/MsgPage.html', function() {
	    	MsgInit(SelectBarViewBoxClass.value);
	    });
	}
	else if (SelectBarViewBoxTitle.value == "學會簡介") {
	    setPageUtilCallBack('#CreatePageBoxScrollView','CreatePageUtil/PlanPage/PlanPage.html', function() {
	    	PlanPageInit();
	    });
	}
	else if (SelectBarViewBoxTitle.value == "出版資訊") {
	    setPageUtilCallBack('#CreatePageBoxScrollView','CreatePageUtil/BookPage/BookPage.html', function() {
	    	BookPageInit();
	    });
	}
	else if (SelectBarViewBoxTitle.value == "相關連結") {
	    setPageUtilCallBack('#CreatePageBoxScrollView','CreatePageUtil/LinkPage/LinkPage.html', function() {
	   
	    });
	}
}