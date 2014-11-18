<?php

function registerUser($link,$table_name,$name,$username,$password,$cellphone,$email,$create_time,$update_time) {
	$action = sprintf("INSERT INTO `$table_name`(
		`name`,`username`,`password`,`cellphone`,`email`,`create_time`,`update_time`) 
		VALUES ('%s','%s','%s','%s','%s','%s','%s')",
		$name,$username,$password,$cellphone,$email,$create_time,$update_time);
	return mysql_query($action,$link);
}
function insertNewMsg($link,$table_name,$data_id,$title,$detail,$date,$time,$image,$t_link,$type,$class,$create_time) {
	$action = sprintf("INSERT INTO `$table_name`(
		`data_id`,`title`,`detail`,`date`,`time`,`image`,`link`,`type`,`class`,`create_time`) 
		VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')",
		$data_id,$title,$detail,$date,$time,$image,$t_link,$type,$class,$create_time);
	return mysql_query($action,$link);
}

function insertMsg($link,$table_name,$data_id,$title,$detail,$date,$time,$image,$t_link,$type,$create_time) {
	$action = sprintf("INSERT INTO `$table_name`(
		`data_id`,`title`,`detail`,`date`,`time`,`image`,`link`,`type`,`create_time`) 
		VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s')",
		$data_id,$title,$detail,$date,$time,$image,$t_link,$type,$create_time);
	return mysql_query($action,$link);
}

function insertPlan($link,$table_name,$data_id,$title,$detail,$date,$time,$t_link,$create_time) {
	$action = sprintf("INSERT INTO `$table_name`(
		`data_id`,`title`,`detail`,`date`,`time`,`link`,`create_time`) 
		VALUES ('%s','%s','%s','%s','%s','%s','%s')",
		$data_id,$title,$detail,$date,$time,$t_link,$create_time);
	return mysql_query($action,$link);
}

function insertBook($link,$table_name,$data_id,$title,$date,$time,$t_link,$type,$create_time) {
	$action = sprintf("INSERT INTO `$table_name`(
		`data_id`,`title`,`date`,`time`,`link`,`type`,`create_time`) 
		VALUES ('%s','%s','%s','%s','%s','%s','%s')",
		$data_id,$title,$date,$time,$t_link,$type,$create_time);
	return mysql_query($action,$link);
}

function insertLink($link,$table_name,$data_id,$title,$t_link,$create_time) {
	$action = sprintf("INSERT INTO `$table_name`(
		`data_id`,`title`,`link`,`create_time`) 
		VALUES ('%s','%s','%s','%s')",
		$data_id,$title,$t_link,$create_time);
	return mysql_query($action,$link);
}
?>