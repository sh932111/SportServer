<?php
function deleteDatabase($link,$db_name) {
	$sql = "DROP DATABASE `$db_name`";
	return mysql_query($sql, $link);
}
?>