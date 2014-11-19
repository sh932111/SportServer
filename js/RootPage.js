var viewData = [];
var userRecordData;

function init() {
	var data = window.sessionStorage.getItem("SportData");
	userRecordData = JSON.parse(data);
	
	var CreatePage = {
		id : "CreatePage",
		title : "新增資料",
		category : "RootUtil"
	};
	var ManagementPage = {
		id : "ManagementPage",
		title : "管理資料",
		category : "RootUtil"
	};
	var LeafletPage = {
		id : "LeafletPage",
		title : "文宣資料",
		category : "RootUtil"
	};
	var InformationPage = {
		id : "InformationPage",
		title : "管理者資料",
		category : "RootUtil"
	};
	viewData = [ManagementPage,CreatePage,LeafletPage,InformationPage];
	setUI();
}

function setUI() {
	setPageUtil('#pgHeader','PageUtil/Header/Header.html');
	setPageUtil('#pgMain','RootUtil/ManagementPage/ManagementPage.html');
	setPageUtilCallBack('#pgLeft','RootUtil/LeftBar/LeftBar.html', function() {
    	leftBarInit(viewData);
	});
	setPageUtil('#pgFooter','PageUtil/Footer/Footer.html');
}
