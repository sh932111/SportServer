<?php

function updateLoginTime($link,$table_name,$username,$update_time) {
	$action = sprintf("UPDATE `$table_name` SET 
		`update_time` = '$update_time'
		WHERE `username` = '$username';");
	return mysql_query($action,$link);
}

?>