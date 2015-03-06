<?php

include 'functions.php';

$navArrays[2]["current"] = true;

$page1 = array(
    "name" => "Installation",
    "icon" => "fa fa-download",
    "this" => "#install"
);
$page2 = array(
    "name" => "Opening Vim",
    "icon" => "fa fa-power-off",
    "this" => "#opening"
);

$localNav = array(
    $page1,
    $page2
);
?>
<?php 
generatePage("Installation",$localNav,$navArrays,"./pages/getting_started.html") ?>
