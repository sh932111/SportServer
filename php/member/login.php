<?php
include "../database/database_util.php" ;
include "../database/database_select.php" ;
include "../database/databae_update.php" ;

header('Content-Type: text/html; charset=utf8');

mysql_query("SET NAMES 'utf8'");
mysql_query("SET CHARACTER_SET_CLIENT='utf8'");
mysql_query("SET CHARACTER_SET_RESULTS='utf8'");

$username = $_POST["username"];//帳號
$password = $_POST["password"];//密碼
$update_time = $_POST["update_time"];

$link = initDatabase();
mysql_query("SET NAMES 'utf8'",$link);
$objDB = mysql_select_db("SportData");

if ($objDB) {
	loginStatus(login($link,"rootTable",$username,$password),"rootTable",$username,$update_time,$link);
}
else {
	$data["message"] = "資料庫不存在!";
	$data["result"] = false;
	$res["data"] = $data;
	echo json_encode($res);
	mysql_close($link);
	exit();
}

function loginStatus($row,$table_name,$username,$update_time,$link) {
	$result = false;
	$message = "登入失敗！";
	if (!empty($row)) {
		$result = true;
	}
	$data = array();
	if ($result) {
		$message = "登入成功！";
		updateLoginTime($link,$table_name,$username,$update_time,$link);
		$data["name"] = $row["name"];
		$data["username"] = $row["username"];
		$data["password"] = $row["password"];
		$data["cellphone"] = $row["cellphone"];
		$data["email"] = $row["email"];
		$data["create_time"] = $row["create_time"];
		$data["update_time"] = $row["update_time"];
	}
	$data["message"] = $message;
	$data["result"] = $result;
	$res["data"] = $data;
	echo json_encode($res);
	mysql_close($link);
	exit();
}

?>