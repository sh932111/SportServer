<?php
$get_img = "data/Leaflet/*.*";
$img_path = glob($get_img);

$arr["img_path"] = $img_path;

$res["data"] = $arr;
echo json_encode($res);
exit();

?>