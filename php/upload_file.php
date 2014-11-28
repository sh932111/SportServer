<?php  

$mypath = $_POST["folderName"];
$folderId = $_POST["folderId"];

$first_path = "./data/".$mypath;
mkdir($first_path);

$target_path  = $first_path."/".$folderId."/";//接收文件目录  
mkdir($target_path);

$target_path2  = $target_path."file"."/";//接收文件目录  
mkdir($target_path2);

$target_path3 = $target_path2 . basename( $_FILES['file']['name']);  

if(move_uploaded_file($_FILES['file']['tmp_name'], iconv("UTF-8", "big5", $target_path3 ))) { 

    echo "The file ".  basename( $_FILES['file']['name']). " has been uploaded";  
}
else {          
    echo "There was an error uploading the file, please try again!" . $_FILES['file']['error'];  
}  

?> 