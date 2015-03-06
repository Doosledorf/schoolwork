<?php

include "functions.php";
include "quiz.php";

$ansQ1 = array(
	"Linux" => true,
	"Vi" => false,
	".vimrc" => false,
	"Vi Improved" => false
);
$question1 = array(
	"ques" => "Which of the following is the precursor to Vim?",
	"ans" => $ansQ1
);

$ansQ2 = array(
	"True" => false,
	"False" => true,
);
$question2 = array(
	"ques" => "<strong>True or False:</strong> The :guide command is used to open up the help tool in Vim.",
	"ans" => $ansQ2
);

$ansQ3 = array(
	"James Gosling" => false,
	"Bill Gates" => false,
	"Brian Moolenar" => true,
	"Grace Hopper" => false
);
$question3 = array(
	"ques" => "Who originally wrote Vim?",
	"ans" => $ansQ3
);

$ansQ4 = array(
	"Visual" => false,
	"Select" => false,
	"Command-line" => true,
	"Normal" => false
);
$question4 = array(
	"ques" => "The command mode is also known as what mode?",
	"ans" => $ansQ4
);

$questions = array(
	$question1,
	$question2,
	$question3,
	$question4
);

printHeader("Quiz 1");

printNav($navArrays,"nav");

$localNav = array();
?>
<div id="content" class="home">
<?php printLocalNav($localNav, "localNav") ?>
<?php 
echo 
    "<div id='breadcrumbs'>$breadcrumbs</div>
    <div id='pageContent'>";
generateQuiz($questions);
echo 
    "</div>\n
    <div class='clearfix'></div>\n
        </div>\n
        <div id='footer'>Copyright &copy; 2014<br>Background image courtousy of <a href='http://subtlepatterns.com/grey-washed-wall/'>Subtle Patterns</a></div>\n
    </body>
    </html>";
?>