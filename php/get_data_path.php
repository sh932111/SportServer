<?php
$folder = $_POST["folder"];
$data_id = $_POST["data_id"];

$path = "data/".$folder."/".$data_id;
$get_img = $path."/*.*";	
$get_folder =  $path."/*";

$dirs = array_filter(glob($get_folder,GLOB_MARK), 'is_dir');

$data_array = array();

foreach ($dirs as $get_path) {
	//$get_path = $dirs[$i];
	// isset($get_path->$dirs[$i]);
	$res_str = str_replace ($path."/","",$get_path);
	$get_detail_folder =  $get_path."*.*";
 	$data_path = glob($get_detail_folder);
 	if ($res_str == "img/") {
		$data_array["img"] = $data_path;
	}
 	else {
 		$data_array["file"] = $data_path;
 	}
}
//$dir_all = listdirs($get_folder);
$img_path = glob($get_img);

$arr["img_path"] = $img_path;
$arr["folder_path"] = $data_array;
$arr["replace_file_path"] = $path."/file/";
$arr["replace_img_path"] = $path."/img/";
// $arr["path"] = $dirs;
$res["data"] = $arr;
echo json_encode($res);
exit();

?>