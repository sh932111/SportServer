<?php
include "../database/database_util.php" ;
include "../database/database_select.php" ;
include "../database/databae_update.php" ;

header('Content-Type: text/html; charset=utf8');

mysql_query("SET NAMES 'utf8'");
mysql_query("SET CHARACTER_SET_CLIENT='utf8'");
mysql_query("SET CHARACTER_SET_RESULTS='utf8'");

$old_username = $_POST["old_username"];

$name = $_POST["name"];
$username = $_POST["username"];
$password = $_POST["password"];
$cellphone = $_POST["cellphone"];
$email = $_POST["email"];

$link = initDatabase();

mysql_query("SET NAMES 'utf8'",$link);
$objDB = mysql_select_db("SportData");

if ($objDB) {
	$res = updateUserData($link,"rootTable",$old_username,$name,$username,$password,$cellphone,$email);
	$mes = "更改失敗！請重新登入！";
	if ($res) {
		$mes = "更改成功！";
	}

	$data["message"] = $mes;
	$data["result"] = $res;
	$res1["data"] = $data;
	echo json_encode($res1);
	mysql_close($link);
	exit();
	
}
else {
	$data["message"] = "資料庫不存在!";
	$data["result"] = false;
	$res["data"] = $data;
	echo json_encode($res);
	mysql_close($link);
	exit();
}


?>