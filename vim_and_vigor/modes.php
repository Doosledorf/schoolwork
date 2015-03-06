<?php

include "functions.php";

$navArrays[2]["current"] = true;

$page1 = array(
    "name" => "Basic Modes",
    "icon" => "fa fa-home",
    "this" => "#basicModes"
);
$page2 = array(
    "name" => "Other Modes",
    "icon" => "fa fa-home",
    "this" => "#otherModes"
);

$localNav = array(
    $page1,
    $page2
);
?>
<?php 
generatePage("Modes",$localNav,$navArrays,"./pages/modes.html") ?>