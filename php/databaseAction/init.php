<?php
include "../database/database_create.php" ;
include "../database/database_insert.php" ;
include "../database/database_util.php" ;
date_default_timezone_set('Asia/Taipei');
header('Content-Type: text/html; charset=utf8');
$link = initDatabase();
mysql_query("SET NAMES 'utf8'",$link);

creatDatabase($link,"SportData");

$datetime = date ("Y/m/d H:i:s");

$name = "qqq";
$username = "qqq";
$password = "qqq";
$cellphone = "qqq";
$email = "qqq";

if (mysql_select_db('SportData')) {
	creatUserTable($link,"rootTable");
	creatMsgTable($link,"msgTable");
	creatMsgTable($link,"newMsgTable");
	creatBookTable($link,"bookTable");
	creatLinkTable($link,"linkTable");
	creatPlanTable($link,"planTable");
	registerUser($link,"rootTable",$name,$username,$password,$cellphone,$email,$datetime,$datetime);
	mkdir("../data/");
	mkdir("../data/Plan");
	mkdir("../data/Book");
	mkdir("../data/Msg");
}

?>