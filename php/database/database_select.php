<?php

function login($link,$table_name,$username,$password) {
	$action = sprintf("SELECT * FROM `$table_name` WHERE username = '$username' AND password = '$password'");
	$obj = mysql_query($action, $link);
	return mysql_fetch_array($obj);
}

function selectAllTable($link,$table_name) {
	$action = sprintf("SELECT * FROM `$table_name` ORDER BY CAST(time AS signed) DESC");
	$obj = mysql_query($action, $link);
	return $obj;
}
function selectAllTableNotCast($link,$table_name) {
	$action = sprintf("SELECT * FROM `$table_name`");
	$obj = mysql_query($action, $link);
	return $obj;
}

?>