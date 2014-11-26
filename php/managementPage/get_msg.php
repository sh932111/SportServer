<?php
include "../database/database_util.php" ;
include "../database/database_select.php" ;

header('Content-Type: text/html; charset=utf8');
mysql_query("SET NAMES 'utf8'");
mysql_query("SET CHARACTER_SET_CLIENT='utf8'");
mysql_query("SET CHARACTER_SET_RESULTS='utf8'");

$year = $_POST["year"];
$month = $_POST["month"];
$post_type = $_POST["type"];
$post_date;
$post_date2;
if ($month == 0) {
	$post_date = $year."/1/1";
	$post_date2 = $year."/12/31";
}
else {
	$post_date = $year."/".$month."/1";
	$post_date2 = $year."/".$month."/31";
}
$link = initDatabase();

mysql_query("SET NAMES 'utf8'",$link);

if (mysql_select_db('SportData')) {
	$data = array();
	$list = array();
	$i = 0;
	$obj = selectAllTable($link,"msgTable");

	if (mysql_num_rows($obj) != 0) {
		while ($record = mysql_fetch_array($obj)) 
		{
			$data_id = $record['data_id'];
			$title = $record['title'];
			$detail = $record['detail'];
			$date = $record['date'];
			$time = $record['time'];
			$image = $record['image'];
			$t_link = $record['link'];
			$type = $record['type'];
			$create_time = $record['create_time'];
			
			if ($post_type == $type && date('Y/m/d', strtotime($date)) >= date('Y/m/d', strtotime($post_date)) && date('Y/m/d', strtotime($post_date2)) >= date('Y/m/d', strtotime($date))) 
			{
				$data["data_id"] = $data_id;
				$data["title"] = $title;
				$data["detail"] = $detail;
				$data["date"] = $date;
				$data["time"] = $time;
				$data["image"] = $image;
				$data["link"] = $t_link;
				$data["type"] = $type;
				$data["create_time"] = $create_time;

				$list[$i] = $data;

				$i = $i + 1;
			}
		}
	}

	$arr["result"]= true;
	$arr["message"]="sucess";
	$arr["list"] = $list;
	$res["data"] = $arr;

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