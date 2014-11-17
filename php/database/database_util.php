<?php

function initDatabase() {
	mysql_query("SET NAMES 'utf8'");
	mysql_query("SET CHARACTER_SET_CLIENT='utf8'");
	mysql_query("SET CHARACTER_SET_RESULTS='utf8'");
	$link = mysql_connect('localhost','root','sh3599033');
	return $link;	
}

?>