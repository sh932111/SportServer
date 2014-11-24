<?php
$folder = $_POST["folder"];
$data_id = $_POST["data_id"];

$path = "data/".$folder."/".$data_id;
$get_img = $path."/*.jpg";	
$get_folder =  $path."/*";

$dirs = array_filter(glob($get_folder,GLOB_MARK), 'is_dir');

$data_array = array();
$i = 0;
foreach ($dirs as $get_path) {
	//$get_path = $dirs[$i];
	// isset($get_path->$dirs[$i]);
	$get_detail_folder =  $get_path."*.*";
 	$data_path = glob($get_detail_folder);
 	$data_array[$i] = $data_path;
 	$i++;
}
//$dir_all = listdirs($get_folder);
$img_path = glob($get_img);

$arr["img_path"] = $img_path;
$arr["folder_path"] = $data_array;
// $arr["path"] = $dirs;
$res["data"] = $arr;
echo json_encode($res);
exit();

?>