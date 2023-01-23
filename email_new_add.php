<?php

$config['db_host'] = 'localhost'; //адрес хоста базы данных
$config['db_name'] = 'game-admin'; //имя базы данных
$config['db_login'] = 'game-admin'; //имя пользователя базы данных
$config['db_password'] = 'in1085084itgram'; //пароль от базы данных

$link = mysql_connect($config['db_host'], $config['db_login'], $config['db_password']);
mysql_select_db($config['db_name']);
mysql_query("SET NAMES utf8");

if($_POST['email']) {
	mysql_query("INSERT INTO book_email (email,date) VALUE ('".mysql_real_escape_string($_POST['email'])."', NOW())");
	
	echo 'Your email address has been added successfully into the database mailing<br />';
	echo '<a href="'.$_SERVER['HTTP_REFERER'].'">Return to the book page</a>';
}