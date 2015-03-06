<?php
$home = array(
	"name" => "Home",
	"icon" => "fa fa-home",
	"current" => false,
	"this" => "index.php"
);
$about = array(
	"name" => "About",
	"icon" => "fa fa-info-circle",
	"current" => false,
	"General Information" => "about.php#generalinfo",
	"History" => "about.php#history",
	"Development Timeline" => "about.php#development"
);
$beginners = array(
	"name" => "Beginners",
	"icon" => "fa fa-graduation-cap",
	"current" => false,
	"Installation" => "installation.php",
	"Navigating Vim" => "navigation.php",
	"Vim's Modes" => "modes.php",
	"Modes Continued" => "modes_cont.php",
	"Beginners Quiz" => "b_quiz.php"
);
$intermediate = array(
	"name" => "Intermediate",
	"icon" => "fa fa-graduation-cap",
	"current" => false,
	"Workflow" => "workflow.php",
	"Whitespace" => "whitespace.php",
	"Advanced Navigation" => "adv_nav.php"
);
$navArrays = array(
	$home,
	$about,
	$beginners,
	$intermediate
);

function printHeader($title){
	echo
	"<!DOCTYPE html>
	<html>
	<head>
		<meta charset='UTF-8'>
		<title>Vim and Vigor - $title</title>
		<link href='http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css' rel='stylesheet'>
		<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Arvo|Cutive+Mono|Roboto' rel='stylesheet' type='text/css'>
		<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css'>
		<link rel='stylesheet' type='text/css' href='css/styles.css'/>
		<script type='text/javascript' src='http://code.jquery.com/jquery-1.7.1.js'></script>
		<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js'></script>
		<script src='js/navigation.js'></script>
		<script src='js/smooth-scroll.js'></script>

	</head>
	<body>
		<!-- <div id='banner'></div> -->
		<div id='siteHolder'>
			<div id='header'>
				<div id='leftHeader'>
					<img id='logo' src='./images/logo2.png' alt='logo'/>
				</div>
				<div id='rightHeader'>
					<div class='floatRight'>
					<h5>Login:</h5>
					<form>
						<input type='textfield'/><br/>
						<input type='textfield'/><br/>
						<input type='submit'/><button>Register</button>
					</form>
					</div>
				</div>
				<div class='clearfix'></div>
			</div>";
}

function printNav($arrays,$id){
	$home = "index.php";

	$nav = "<div id='$id' ><nav><ul>";

	// For each array in $arrays
	foreach ($arrays as $curr) {
		// Get the name and generate the first level
		// for each array
		if(count($curr) <= 4 && isset($curr["this"])){
			$nav .= "<li><a href='".$curr["this"]."'><h3><i class='".$curr["icon"]."'></i>".$curr['name']."</h3></a>\n";
		}else{
			if ($curr["current"] == true){
				$nav .= "<li class='active'><h3><i class='".$curr["icon"]."'></i>".$curr['name']."</h3>\n";
			}else{
				$nav .= "<li><h3><i class='".$curr["icon"]."'></i>".$curr['name']."</h3>\n";
			}
		    
			$nav .= "<ul>\n";
			foreach ($curr as $key => $val) {
				if($key == "name" || $key == "icon" || $key == "current"){
					
				}else{
					$nav .= "<li><a href='$val'><i class='fa fa-circle-o'></i>$key</a></li>\n";
				}
			}
			$nav .= "</ul>\n";
		}
		$nav .="</li>\n";
	}
	$nav .= "</ul></nav></div>\n";
	echo "$nav";
}

function printLocalNav($arrays,$id){
    $home = "index.php";

    $nav = "<div id='$id' ><nav><ul>";

    // For each array in $arrays
    foreach ($arrays as $curr) {
        // Get the name and generate the first level
        // for each array
        if(count($curr) <= 3 && isset($curr["this"])){
            $nav .= "<li><a href='".$curr["this"]."'><i class='".$curr["icon"]."'></i>".$curr['name']."</a>\n";
        }else{
            $nav .= "<li><i class='".$curr["icon"]."'></i>".$curr['name']."\n";
            $nav .= "<ul>\n";
            foreach ($curr as $key => $val) {
                if($key == "name" || $key == "icon"){
                    
                }else{
                    $nav .= "<li><a href='$val'>$key</a></li>\n";
                }
            }
            $nav .= "</ul>\n";
        }
        $nav .="</li>\n";
    }
    $nav .= "</ul></nav></div>\n";
    echo "$nav";
}

function printContent($page,$breadcumbs){
    echo 
    "<div id='breadcrumbs'>$breadcrumbs</div>
    <div id='pageContent'>";
    include $page;
    echo 
    "</div>\n
    <div class='clearfix'></div>\n
        </div>\n
        <div id='footer'>Copyright &copy; 2014<br>Background image courtousy of <a href='http://subtlepatterns.com/grey-washed-wall/'>Subtle Patterns</a></div>\n
    </body>
    </html>";
    
}

function generatePage($title,$localnav,$globalNav,$content){
	printHeader($title);

	printNav($globalNav,"nav");
	echo "<div id='content' class='home'>\n";
	printLocalNav($localnav,"localNav");

	printContent($content, "IDFK");
}

?>