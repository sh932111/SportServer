var loginApi = "php/member/login.php";
var addNewMsgApi = "php/createPage/add_new_msg.php";
var addPlanApi = "php/createPage/add_plan.php";
var addBookApi = "php/createPage/add_book.php";
var addLinkApi = "php/createPage/add_link.php";

function callApi(post_data,api,callback) {
	var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", api, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.onreadystatechange = function() 
    {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) 
        {
            var return_data = xmlhttp.responseText;
            var get_json = JSON.parse(return_data);
            var user_data = get_json.data;
            callback(user_data);
        }
    }
    xmlhttp.send(post_data);
}

function callApiIndex(post_data,api,callback,resource) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", api, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function() 
    {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) 
        {
            var return_data = xmlhttp.responseText;
            var get_json = JSON.parse(return_data);
            var user_data = get_json.data;
            callback(user_data,resource);
        }
    }
    xmlhttp.send(post_data);
}

function getNowTime() {
	var dt = new Date();
	var month = dt.getMonth()+1;
	var day = dt.getDate();
	var year = dt.getFullYear();
	var send_time = year +"/"+ month +"/"+ day + " " + dt.getHours()+":"+ dt.getMinutes()+":"+ dt.getSeconds();
	return send_time;
}
function getPostId() {
    var dt = new Date();
    var month = dt.getMonth()+1;
    var day = dt.getDate();
    var year = dt.getFullYear();
    var send_time = year +""+ month +""+ day + "" + dt.getHours()+""+ dt.getMinutes()+""+ dt.getSeconds();
    return send_time;
}

//檢查是否空值
function checkIng(text,key) {
    if (text == "") {
        alert("請輸入"+key);
        return false;
    }
    return true;
}
//換頁
function setPageUtil(page_id, page_link) {
    $(page_id).load(page_link);
}

function setPageUtilCallBack(page_id, page_link,callback) {
    $(page_id).load(page_link, function() {
        callback();
    });
}

function formUpload(form) {
    $(form).ajaxSubmit({
        beforeSubmit: function(){
        },
        success: function(resp,st,xhr,$form) {
            if(resp != "err") {
            }
            else {
            }
        }
    });
}

function addInputInformation(name,value) {
    var input = document.createElement("input");
    input.name=name;
    input.type="text";
    input.value=value;
    input.style.display="none";
    return input;
}
