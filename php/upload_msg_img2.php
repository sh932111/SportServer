<?php

header('Content-Type: text/html; charset=utf8');
$mypath = $_POST["folderName"];
$folderId = $_POST["folderId"];

$get_path = "./data/Msg/".$folderId."/*.*";
$paths = glob($get_path);
if (count($paths) > 0) {
	$path = $paths[0];
	unlink($path);
}

$first_path = "./data/".$mypath;
mkdir($first_path);

$target_path  = $first_path."/".$folderId."/";//接收文件目录  
mkdir($target_path);

$target_path2  = $target_path."/";//接收文件目录  
mkdir($target_path2);
$target_path3 = $target_path2 . basename( $_FILES['img']['name']);  

if(move_uploaded_file($_FILES['img']['tmp_name'], $target_path3)) {  
    echo "The file ".  basename( $_FILES['img']['name']). " has been uploaded";  
}
else {          
    echo "There was an error uploading the file, please try again!" . $_FILES['img']['error'];  
}  
?> 