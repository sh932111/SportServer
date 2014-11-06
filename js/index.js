function init() {
	setUI();
}

function setUI() {
	setPageUtil('#pgHeader','PageUtil/Header/Header.html');
	setPageUtil('#pgLeft','PageUtil/LeftBar/LeftBar.html');
	setPageUtil('#pgMain','PageUtil/Index/Index.html');
	setPageUtil('#pgFooter','PageUtil/Footer/Footer.html');
}

function setPageUtil(page_id, page_link) {
	$.get(page_link, function(data) {
		$(page_id).html(data);
	});
}
