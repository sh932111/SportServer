<?php
include "../database/database_util.php" ;
include "../database/databae_update.php" ;

header('Content-Type: text/html; charset=utf8');

$data_id = $_POST["data_id"];
$folder = $_POST["folder"];
$table_name = $_POST["table_name"];
$title = $_POST["title"];
$detail = $_POST["detail"];
$date = $_POST["date"];
$time = $_POST["time"];
$file_array = explode(',', $_POST["file_array"]);
$img_array = explode(',', $_POST["img_array"]);

$path = "../data/".$folder."/".$data_id."/";

$link = initDatabase();

mysql_query("SET NAMES 'utf8'",$link);

if (mysql_select_db('SportData')) {
	
	for ($i = 0; $i < count($file_array); $i++) { 
		unlink($path."/file/".$file_array[$i]);
	}
	for ($i = 0; $i < count($img_array); $i++) { 
		unlink($path."/img/".$img_array[$i]);
	}

	$check = false;

	if ($folder == "Book") {
		$check = updateBookData($link,$table_name,$data_id,$title,$date,$time);
	}
	else {
		$check = updateMsgData($link,$table_name,$data_id,$title,$detail,$date,$time);
	}

	$msg = "更新資料失敗！";
	if ($check) {
		$msg = "更新資料成功！";
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