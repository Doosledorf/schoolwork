<?php

include "functions.php";

printHeader("About");

$navArrays[1]["current"] = true;

printNav($navArrays,"nav");

$page1 = array(
    "name" => "Introduction",
    "icon" => "fa fa-info-circle",
    "this" => "#genIntro"
);
$page2 = array(
    "name" => "History",
    "icon" => "fa fa-history",
    "this" => "#history"
);
$page3 = array(
    "name" => "Timeline",
    "icon" => "fa fa-clock-o",
    "this" => "#devTime"
);

$localNav = array(
    $page1,
    $page2,
    $page3
);
?>
<div id="content" class="home">
<?php printLocalNav($localNav, "localNav") ?>
<?php printContent("./pages/about.html", "IDFK") ?>