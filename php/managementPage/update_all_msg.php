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
$image = $_POST["image"];

$get_path = "../data/Msg/".$data_id."/*.*";
$paths = glob($get_path);
if (count($paths) > 0 && $image == 0) {
	unlink($paths[0]);
}

$path = "../data/".$folder."/".$data_id."/";

$link = initDatabase();

mysql_query("SET NAMES 'utf8'",$link);

if (mysql_select_db('SportData')) {
	
	for ($i = 0; $i < count($file_array); $i++) { 
		unlink($path."file/".$file_array[$i]);
	}
	$dir1 = $path."file/";
	if (file_exists($dir1)) {
		$file_path = $path."file/*.*";
		$file_paths = glob($file_path);
		if (count($file_paths) == 0) {
			rm_folder_recursively($dir1);
		}
	}
	for ($i = 0; $i < count($img_array); $i++) { 
		unlink($path."img/".$img_array[$i]);
	}
	$dir2 = $path."img/";
	if (file_exists($dir2)) {	
		$image_path = $path."img/*.*";
		$image_paths = glob($image_path);
		if (count($image_paths) == 0) {
			rm_folder_recursively($dir2);
		}
	}

	$check = false;

	if ($folder == "Book") {
		$check = updateBookData($link,$table_name,$data_id,$title,$date,$time);
	}
	else if ($folder == "Msg" ) {
		$check = updateMsgData($link,$table_name,$data_id,$title,$detail,$date,$time);
		updateMsgImage($link,"newMsgTable",$data_id,$image);
		updateMsgImage($link,"msgTable",$data_id,$image);
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