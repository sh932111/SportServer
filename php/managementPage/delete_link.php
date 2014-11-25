<?php
include "../database/database_util.php" ;
include "../database/database_delete.php" ;

header('Content-Type: text/html; charset=utf8');

$data_id = $_POST["data_id"];

$link = initDatabase();

mysql_query("SET NAMES 'utf8'",$link);

if (mysql_select_db('SportData')) {
	$check = deleteData($link,"linkTable",$data_id);
	$msg = "刪除資料失敗！";
	if ($check) {
		$msg = "刪除資料成功！";
	}
	$data["message"] = $msg;
	$data["result"] = $check;
	$res["data"] = $data;
	echo json_encode($res);
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