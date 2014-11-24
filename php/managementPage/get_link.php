<?php
include "../database/database_util.php" ;
include "../database/database_select.php" ;

header('Content-Type: text/html; charset=utf8');

$link = initDatabase();

mysql_query("SET NAMES 'utf8'",$link);

if (mysql_select_db("SportData")) {
	$data = array();
	$list = array();
	$i = 0;
	$obj = selectAllTableNotCast($link,"linkTable");
	if (mysql_num_rows($obj) != 0) {
		while ($record = mysql_fetch_array($obj)) 
		{
			$data_id = $record['data_id'];
			$title = $record['title'];
			$t_link = $record['link'];
			$create_time = $record['create_time'];
			
			$data["data_id"] = $data_id;
			$data["title"] = $title;
			$data["link"] = $t_link;
			$data["create_time"] = $create_time;

			$list[$i] = $data;

			$i = $i + 1;
			
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