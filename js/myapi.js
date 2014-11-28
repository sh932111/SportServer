var loginApi = "php/member/login.php";
var addNewMsgApi = "php/createPage/add_new_msg.php";
var addPlanApi = "php/createPage/add_plan.php";
var addBookApi = "php/createPage/add_book.php";
var addLinkApi = "php/createPage/add_link.php";
var updateUserDataApi = "php/member/update_user.php";

var getBookApi = "php/managementPage/get_book.php";
var getLinkApi = "php/managementPage/get_link.php";
var getMsgApi = "php/managementPage/get_msg.php";
var getNewMsgApi = "php/managementPage/get_new_msg.php";
var getPlanApi = "php/managementPage/get_plan.php";

var getDataPath = "php/get_data_path.php";
var getLeafletPath = "php/get_leaflet_path.php";
var deleteAllMsg = "php/managementPage/delete_all_msg.php";
var deleteLink = "php/managementPage/delete_link.php";
var updateAllMsg = "php/managementPage/update_all_msg.php";

function callApi(post_data,api,callback) {
	var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", api, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.onreadystatechange = function() 
    {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) 
        {
            var return_data = xmlhttp.responseText;
            console.log(return_data);
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
function formUploadCallBack(form,callback) {
    $(form).ajaxSubmit({
        beforeSubmit: function(){
        },
        success: function(resp,st,xhr,$form) {
            console.log(xhr);
            if(resp != "err") {
            }
            else {
            }
            callback();
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
function getNowMonth() {
    var dt = new Date();
    return dt.getMonth();
}
function getNowYear() {
    var dt = new Date();
    return dt.getFullYear();
}
function checkToUserData() {
    if (!userRecordData) {
        alert("使用者已登出！請重新登入");
        location.href = 'index.html';
    }
}

