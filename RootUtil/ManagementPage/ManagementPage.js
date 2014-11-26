function ManagementPageInit() {
	setPageUtilCallBack('#ManagementPageSelectBar','CreatePageUtil/SelectBar/SelectBar.html', function() {
    	SelectBarInitTime();
    });
	setPageUtilCallBack('#ManagementPageScrollView','RootUtil/ListView/ListView.html', function() {

		var post_data = "year="+getNowYear()+"&month="+0+"&type="+"學會活動";
		
		callApi(post_data,getNewMsgApi,function(user_data){
			if (user_data.result) {
				getApiData = user_data;
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

    });
	
}