<?php

function updateLoginTime($link,$table_name,$username,$update_time) {
	$action = sprintf("UPDATE `$table_name` SET 
		`update_time` = '$update_time'
		WHERE `username` = '$username';");
	return mysql_query($action,$link);
}
function updateUserData($link,$table_name,$old_username,$name,$username,$password,$cellphone,$email) {
	$action = sprintf("UPDATE `$table_name` SET 
		`name` = '$name',
		`username` = '$username',
		`password` = '$password',
		`cellphone` = '$cellphone',
		`email` = '$email'
		WHERE `username` = '$old_username';");
	return mysql_query($action,$link);
}

?>