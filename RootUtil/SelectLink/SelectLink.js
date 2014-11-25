
function SelectLinkInit() {
	callApi("",getLinkApi,function(user_data){
		if (user_data.result) {
			var link_array = [];
			var list = user_data.list;
			for (var i = 0; i < list.length; i++) {
				var title = list[i].title;
				var link = list[i].link;
				var data_id = list[i].data_id;
				var link_data = {
					link_text : title,
					link_url : link,
					link_id : data_id
				};
				link_array.push(link_data);
			}
			setPageUtilCallBack('#ShowDeatilLinkView','RootUtil/ScrollLinkUtil/ScrollLinkUtil.html', function() {
				ScrollLinkInit2(link_array,function(id,obj){
					var link_data = link_array[id];
					if(confirm("確定刪除連結？")) {
						var post = "data_id="+link_data.link_id;
						callApi(post,deleteLink,function(user_data){
							alert(user_data.message);
							if (user_data.result) {
								ScrollLinkUtilView.removeChild(obj.parentNode);
							}
						});
					}	
				});
			});
		}
	});
}