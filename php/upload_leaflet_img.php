<?php  
$mypath = "Leaflet";

$target_path  = "./data/".$mypath."/";//接收文件目录  

rm_folder_recursively($target_path);
mkdir($target_path);

$target_path2 = $target_path . basename( $_FILES['img']['name']);  

if(move_uploaded_file($_FILES['img']['tmp_name'], iconv("UTF-8", "big5//TRANSLIT//IGNORE", $target_path2 ))) {  
    echo "The file ".  basename( $_FILES['img']['name']). " has been uploaded";  
}
else {          
    echo "There was an error uploading the file, please try again!" . $_FILES['img']['error'];  
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