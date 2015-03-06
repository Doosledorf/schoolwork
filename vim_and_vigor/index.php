<?php

include "functions.php";

printHeader("Homepage");

printNav($navArrays,"nav");

$localNav = array();
?>
<div id="content" class="home">
<?php printLocalNav($localNav, "localNav") ?>
<?php printContent("./pages/home.html", "IDFK") ?>