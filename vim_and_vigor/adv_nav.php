<?php

include "functions.php";

$navArrays[3]["current"] = true;

$page1 = array(
    "name" => "Stuff1",
    "icon" => "fa fa-home",
    "this" => "#"
);
$page2 = array(
    "name" => "Stuff2",
    "icon" => "fa fa-home",
    "this" => "#"
);
$page3 = array(
    "name" => "Stuff3",
    "icon" => "fa fa-home",
    "this" => "#"
);

$localNav = array(
    $page1,
    $page2,
    $page3
);
?>
<?php 
generatePage("Advanced Navigation",$localNav,$navArrays,"./pages/intermediate_search.html") ?>