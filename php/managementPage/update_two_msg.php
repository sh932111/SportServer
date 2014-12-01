<?php
include "../database/database_util.php" ;
include "../database/databae_update.php" ;

$data_id = $_POST["data_id"];
$image = $_POST["image"];

$link = initDatabase();

mysql_query("SET NAMES 'utf8'",$link);

// $paths = "../data/Msg/".$data_id."/*.*";
// $path = glob($paths)[0];
// if ($image == 0) {
// 	unlink($path);
// }

if (mysql_select_db('SportData')) {
	updateMsgImage($link,"newMsgTable",$data_id,$image);
	updateMsgImage($link,"msgTable",$data_id,$image);
	$data["message"] = "更新成功!";
	$data["result"] = true;
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