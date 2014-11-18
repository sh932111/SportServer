<?php  

$mypath = $_POST["folderName"];
$folderId = $_POST["folderId"];

$target_path  = "./data/".$mypath."/".$folderId."/";//接收文件目录  
mkdir($target_path);
$target_path2  = $target_path."file"."/";//接收文件目录  
mkdir($target_path2);

$target_path2 = $target_path2 . basename( $_FILES['file']['name']);  

if(move_uploaded_file($_FILES['file']['tmp_name'], $target_path2)) {  
    echo "The file ".  basename( $_FILES['file']['name']). " has been uploaded";  
}
else {          
    echo "There was an error uploading the file, please try again!" . $_FILES['file']['error'];  
}  
?> 