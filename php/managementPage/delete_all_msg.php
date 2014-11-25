<?php
include "../database/database_util.php" ;
include "../database/database_delete.php" ;

header('Content-Type: text/html; charset=utf8');

$data_id = $_POST["data_id"];
$folder = $_POST["folder"];
$table_name = $_POST["table_name"];

$link = initDatabase();

mysql_query("SET NAMES 'utf8'",$link);

if (mysql_select_db('SportData')) {
	$check = deleteData($link,$table_name,$data_id);
	$msg = "刪除資料失敗！";
	if ($check) {
		$msg = "刪除資料成功！";
		if ($folder != "Msg" ) {
			rm_folder_recursively("../data/" .$folder."/".$data_id."/");
		}
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

function rm_folder_recursively($dir) {
	foreach(scandir($dir) as $file) {
		if ('.' === $file || '..' === $file) continue;
		if (is_dir("$dir/$file")) rm_folder_recursively("$dir/$file");
		else unlink("$dir/$file");
	}
	rmdir($dir);
	return true;
}
?>