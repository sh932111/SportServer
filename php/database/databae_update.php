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

function updateMsgData($link,$table_name,$data_id,$title,$detail,$date,$time) {
	$action = sprintf("UPDATE `$table_name` SET 
		`title` = '$title',
		`detail` = '$detail',
		`date` = '$date',
		`time` = '$time'
		WHERE `data_id` = '$data_id';");
	return mysql_query($action,$link);
}
function updateBookData($link,$table_name,$data_id,$title,$date,$time) {
	$action = sprintf("UPDATE `$table_name` SET 
		`title` = '$title',
		`date` = '$date',
		`time` = '$time'
		WHERE `data_id` = '$data_id';");
	return mysql_query($action,$link);
}
function updateMsgImage($link,$table_name,$data_id,$image) {
	$action = sprintf("UPDATE `$table_name` SET 
		`image` = '$image'
		WHERE `data_id` = '$data_id';");
	return mysql_query($action,$link);
}
?>