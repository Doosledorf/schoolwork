<?php

include "functions.php";

$navArrays[3]["current"] = true;

$page1 = array(
    "name" => "Indentation",
    "icon" => "fa fa-indent",
    "this" => "#indent"
);
$page2 = array(
    "name" => "Line Numbers",
    "icon" => "fa fa-list-ol",
    "this" => "#"
);
$page3 = array(
    "name" => "Spell Check",
    "icon" => "fa fa-check",
    "this" => "#spell"
);
$page4 = array(
    "name" => "Directories",
    "icon" => "fa fa-folder-open",
    "this" => "#"
);
$page5 = array(
    "name" => "Tabs",
    "icon" => "fa fa-folder",
    "this" => "#tabs"
);
$page6 = array(
    "name" => "Search",
    "icon" => "fa fa-search",
    "this" => "#search"
);


$localNav = array(
    $page1,
    $page2,
    $page3,
    $page4,
    $page5,
    $page6
);
?>
<?php 
generatePage("Workflow",$localNav,$navArrays,"./pages/intermediate_workflow.html") ?>