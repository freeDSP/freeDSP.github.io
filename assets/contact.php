<?php
/*
Credits: Bit Repository
URL: http://www.bitrepository.com/
*/

include dirname(dirname(__FILE__)).'/config.php';

error_reporting (E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if($post)
{
include 'functions.php';

$name = stripslashes($_POST['name']);
$email = trim($_POST['email']);
$message = stripslashes($_POST['message']);


$error = '';

// Check name

if(!$name)
{
$error .= 'You forgot to enter your name :-)<br />';
}

// Check email

if(!$email)
{
$error .= 'You forgot to enter your e-mail address.<br />';
}

if($email && !ValidateEmail($email))
{
$error .= 'This e-mail address doesn\'t seem valid.<br />';
}

// Check message (length)

if(!$message)
{
$error .= "Don't you have anything to say?<br />";
}


if(!$error)
{
ini_set("sendmail_from", WEBMASTER_EMAIL); // for windows server
$mail = mail(WEBMASTER_EMAIL, "New message from contact form", $message,
     "From: ".$name." <".$email.">\r\n"
    ."Reply-To: ".$email."\r\n"
    ."X-Mailer: PHP/" . phpversion());


if($mail)
{
echo 'OK';
}

}
else
{
echo '<div class="alert">'.$error.'</div>';
}

}
?>