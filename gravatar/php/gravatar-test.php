<?php

include_once('gravatar.php');

$email = $_REQUEST['email'];
$default = rand(0, 1)
	? 'http://images2.wikia.nocookie.net/__cb20110807031160/tuckerverse/images/f/fd/Sasha_Gray.jpg'
	: 'retro';

echo getGravatarImageUrl($email, 200, $default);
