<?php
function deleteDatabase($link,$db_name) {
	$sql = "DROP DATABASE `$db_name`";
	return mysql_query($sql, $link);
}
function deleteData($link,$table_name,$data_id) {
	$action = "DELETE FROM `$table_name` WHERE data_id = '$data_id'";
	return mysql_query($action,$link);
}

?>