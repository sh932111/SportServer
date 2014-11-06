<?php
function initDatabase() {
	mysql_query("SET NAMES 'utf8'");
	mysql_query("SET CHARACTER_SET_CLIENT='utf8'");
	mysql_query("SET CHARACTER_SET_RESULTS='utf8'");
	$link = mysql_connect('localhost','root','sh3599033');
	return $link;	
}

function creatDatabase($link,$db_name) {
	$sql = "CREATE DATABASE `$db_name`";
	return mysql_query($sql, $link);
}

function creatUserTable($link) {
	$action  ="CREATE TABLE `userTable`(
		`name` VARCHAR(20)CHARACTER SET utf8 COLLATE utf8_unicode_ci  NOT NULL,
		`username` VARCHAR(20) NOT NULL PRIMARY KEY,
		`password` VARCHAR(20) NOT NULL,
		`user_id` VARCHAR(20) NOT NULL,
		`telephone`  VARCHAR(20) NOT NULL,
		`cellphone`  VARCHAR(20) NOT NULL,
		`address`  VARCHAR(20) NOT NULL,
		`gender`  VARCHAR(20) NOT NULL,
		`born_day`  VARCHAR(20) NOT NULL,
		`send_time`  VARCHAR(100) NOT NULL
		);";
	return mysql_query($action, $link);
}

function creatRootTable($link) {
	$action  ="CREATE TABLE `rootTable`(
		`name` VARCHAR(20)CHARACTER SET utf8 COLLATE utf8_unicode_ci  NOT NULL,
		`username` VARCHAR(20) NOT NULL PRIMARY KEY,
		`password` VARCHAR(20) NOT NULL,
		`cellphone`  VARCHAR(20) NOT NULL,
		`send_time`  VARCHAR(100) NOT NULL
		);";
	return mysql_query($action, $link);
}

function login($link,$table_name,$username,$password) {
	$action = sprintf("SELECT * FROM `$table_name` WHERE username = '$username' AND password = '$password'");
	$obj = mysql_query($action, $link);
	return mysql_fetch_array($obj);
}

function registerUser($link,$name,$username,$password,$user_id,$telephone,$cellphone,$address,$gender,$born_day,$send_time) {
	$action = sprintf("INSERT INTO `userTable`(
		`name`,`username`,`password`,`user_id`,`telephone`,`cellphone`,`address`,`gender`,`born_day`,`send_time`) 
		VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')",
		$name,$username,$password,$user_id,$telephone,$cellphone,$address,$gender,$born_day,$send_time);
	return mysql_query($action,$link);
}

function registerRoot($link,$name,$username,$password,$cellphone,$send_time) {
	$action = sprintf("INSERT INTO `rootTable`(
		`name`,`username`,`password`,`cellphone`,`send_time`) 
		VALUES ('%s','%s','%s','%s','%s')",
		$name,$username,$password,$cellphone,$send_time);
	return mysql_query($action,$link);
}

function updateLoginTime($link,$table_name,$username,$send_time) {
	$action = sprintf("UPDATE `$table_name` SET 
		`send_time` = '$send_time'
		WHERE `username` = '$username';");
	return mysql_query($action,$link);
}


?>