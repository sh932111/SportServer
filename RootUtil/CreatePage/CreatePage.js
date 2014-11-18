function CreatePageInit() {
	setPageUtilCallBack('#CreatePageBoxSelectBar','CreatePageUtil/SelectBar/SelectBar.html', function() {
    	SelectBarInit();
    });
    setPageUtilCallBack('#CreatePageBoxScrollView','CreatePageUtil/MsgPage/MsgPage.html', function() {
    	MsgInit("學會活動");
    });
}
