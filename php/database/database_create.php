<?php

function creatDatabase($link,$db_name) {
	$sql = "CREATE DATABASE `$db_name`";
	return mysql_query($sql, $link);
}

function creatUserTable($link,$table_name) {
	$action  ="CREATE TABLE `$table_name`(
		`name` VARCHAR(20)CHARACTER SET utf8 COLLATE utf8_unicode_ci  NOT NULL,
		`username` VARCHAR(20) NOT NULL PRIMARY KEY,
		`password` VARCHAR(20) NOT NULL,
		`cellphone`  VARCHAR(20) NOT NULL,
		`email`  VARCHAR(20) NOT NULL,
		`create_time`  VARCHAR(100) NOT NULL,
		`update_time`  VARCHAR(100) NOT NULL
		);";
	return mysql_query($action, $link);
}
//活動訊息
function creatMsgTable($link,$table_name) {
	$action  ="CREATE TABLE `$table_name`(
		`data_id` VARCHAR(20) NOT NULL PRIMARY KEY,
		`title` VARCHAR(20)CHARACTER SET utf8 COLLATE utf8_unicode_ci  NOT NULL,
		`detail` VARCHAR(200)CHARACTER SET utf8 COLLATE utf8_unicode_ci  NOT NULL,
		`date` VARCHAR(100) NOT NULL,
		`time` VARCHAR(100) NOT NULL,
		`address` VARCHAR(20)CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL ,
		`image` INT NOT NULL,
		`link` INT NOT NULL,
		`type` INT NOT NULL,
		`create_time`  VARCHAR(100) NOT NULL
		);";

	return mysql_query($action, $link);
}
//書刊
function creatBookTable($link,$table_name) {
	$action  ="CREATE TABLE `$table_name`(
		`data_id` VARCHAR(20) NOT NULL PRIMARY KEY,
		`title` VARCHAR(20)CHARACTER SET utf8 COLLATE utf8_unicode_ci  NOT NULL,
		`date` VARCHAR(100) NOT NULL,
		`time` VARCHAR(100) NOT NULL,
		`link` INT NOT NULL,
		`type` INT NOT NULL,
		`create_time`  VARCHAR(100) NOT NULL
		);";

	return mysql_query($action, $link);
}
//相關連結
function creatLinkTable($link,$table_name) {
	$action  ="CREATE TABLE `$table_name`(
		`data_id` VARCHAR(20) NOT NULL PRIMARY KEY,
		`title` VARCHAR(20)CHARACTER SET utf8 COLLATE utf8_unicode_ci  NOT NULL,
		`date` VARCHAR(100) NOT NULL,
		`time` VARCHAR(100) NOT NULL,
		`link` INT NOT NULL,
		`create_time`  VARCHAR(100) NOT NULL
		);";

	return mysql_query($action, $link);
}
//年度計畫
function creatPlanTable($link,$table_name) {
	$action  ="CREATE TABLE `$table_name`(
		`data_id` VARCHAR(20) NOT NULL PRIMARY KEY,
		`title` VARCHAR(20)CHARACTER SET utf8 COLLATE utf8_unicode_ci  NOT NULL,
		`list` VARCHAR(20)CHARACTER SET utf8 COLLATE utf8_unicode_ci  NOT NULL,
		`date` VARCHAR(100) NOT NULL,
		`time` VARCHAR(100) NOT NULL,
		`link` INT NOT NULL,
		`create_time`  VARCHAR(100) NOT NULL
		);";

	return mysql_query($action, $link);
}

?>