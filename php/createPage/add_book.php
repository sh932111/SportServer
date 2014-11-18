<?php
include "../database/database_util.php" ;
include "../database/database_insert.php" ;

header('Content-Type: text/html; charset=utf8');
mysql_query("SET NAMES 'utf8'");
mysql_query("SET CHARACTER_SET_CLIENT='utf8'");
mysql_query("SET CHARACTER_SET_RESULTS='utf8'");

$data_id = $_POST["data_id"];
$title = $_POST["title"];
$date = $_POST["date"];
$time = $_POST["time"];
$t_link = $_POST["link"];
$type = $_POST["type"];
$create_time = $_POST["create_time"];

$link = initDatabase();
mysql_query("SET NAMES 'utf8'",$link);

if (mysql_select_db('SportData')) {
	$message = "新增失敗！可能已有資料";
	$result = false;
	if (insertBook($link,"bookTable",$data_id,$title,$date,$time,$t_link,$type,$create_time)) {
		$result = true;
		$message = "新增成功！";
	}
	$res["message"] =$message;
	$res["result"] = $result;
	$s["data"] = $res;
	echo json_encode($s);
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