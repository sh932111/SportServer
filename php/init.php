<?php
include 'database_util.php';
header('Content-Type: text/html; charset=utf8');

$link = initDatabase();
creatDatabase($link,"SportDB");

mysql_query("SET NAMES 'utf8'",$link);

if (!$link) {
	$arr["result"] = FALSE;
	$arr["Message"] = "error open db";
	echo json_encode($arr);
	exit();
}

$db_selected = mysql_select_db('SportDB');

if (!$db_selected) {
	$arr["result"] = FALSE;
	$arr["Message"] = "error select db";
	echo json_encode($arr);
	exit();
}
else {
	creatUserTable($link);
	creatRootTable($link);
}

?>