<?php
	header('Content-Type: text/html; charset=utf8');
	
	mysql_query("SET NAMES 'utf8'");
	mysql_query("SET CHARACTER_SET_CLIENT='utf8'");
	mysql_query("SET CHARACTER_SET_RESULTS='utf8'");

	$name = $_POST["name"];//使用者名稱
	$username = $_POST["username"];//帳號
	$password = $_POST["password"];//密碼
	$user_id = $_POST["user_id"];//身分證
	$telephone = $_POST["telephone"];//家電話
	$cellphone = $_POST["cellphone"];//手機
	$address = $_POST["address"];//住址
	$gender = $_POST["gender"];//性別
	$born_day = $_POST["born_day"];//出生年月日

	$link = mysql_connect('localhost','root','sh3599033');
	$sql = 'CREATE DATABASE UserCategory';
	
	mysql_query($sql, $link);

	mysql_query("SET NAMES 'utf8'",$link);
	if (!$link) 
	{
		$arr["result"] = FALSE;
		$arr["Message"] = "errpr open db";
		echo json_encode($arr);
		exit();
	}

	$db_selected = mysql_select_db('user_data');

	if (!$db_selected)
 	{
		$arr["result"] = FALSE;
		$arr["Message"] = "error select db";
		echo json_encode($arr);
		exit();
	}

	if ($db_selected) 
	{
		$creat_query  ="CREATE TABLE `user_table`(
			`name` VARCHAR(20)CHARACTER SET utf8 COLLATE utf8_unicode_ci  NOT NULL,
			`username` VARCHAR(20) NOT NULL PRIMARY KEY,
			`password` VARCHAR(20) NOT NULL,
			`user_id` VARCHAR(20) NOT NULL,
			`device_token` VARCHAR(200) NOT NULL,
			`device_os` VARCHAR(10) NOT NULL,
			`user_city` VARCHAR(20)CHARACTER SET utf8 COLLATE utf8_unicode_ci  NOT NULL,
			`user_city_detail` VARCHAR(20)CHARACTER SET utf8 COLLATE utf8_unicode_ci  NOT NULL,
			`city_id` VARCHAR(20) NOT NULL,
			`city_detail_id` VARCHAR(20) NOT NULL,
			`cellphone`  VARCHAR(20) NOT NULL,
			`send_time`  VARCHAR(100) NOT NULL
			);";
		$table_selected = mysql_query($creat_query, $link);

		$query = sprintf("INSERT INTO `user_table`(`name`,`username`,`password`,`user_id`,`device_token`,`device_os`,`user_city`,`user_city_detail`,`city_id`,`city_detail_id`,`cellphone`,`send_time`) 
			VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')",
			$name,$username,$password,$user_id,$device_token,$device_os,$user_city,$user_city_detail,$city_id,$city_detail_id,$cellphone,$send_time);

			$res = mysql_query($query,$link);

			if (!$res) 
			{
				$arr["Message"] = '以有同樣帳戶';
				$arr["result"] = FALSE;
				echo json_encode($arr);
				exit();
			}
			else
			{
				$db_selected = mysql_select_db('UserCategory');

				$creat_query  ="CREATE TABLE `$username`(
				`id` VARCHAR(200) NOT NULL PRIMARY KEY
				);";
			
				$table_selected = mysql_query($creat_query, $link);

				$arr["Message"] = '新增會員成功！';
				$arr["result"] = true;
				echo json_encode($arr);
				exit();
			}
		
	}

	mysql_close($link);
	
?>
