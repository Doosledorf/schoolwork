<?php 

function display_array($arr){
	echo "<pre>";
	print_r($arr);
	echo "</pre>";
}

function generateQuiz($quiz){
	$prevQuiz = $quiz;
	shuffle($quiz);
	$i = 0;
	$aNum = 0;
	echo "<form id='quiz' method='post' action='quiz.php'>";
	foreach ($quiz as $question) {
		$i +=1;
		echo "<h2>Question #$i</h2>";
		echo "<h3>".$question["ques"]."</h3>";
		$id = "question".$i;
		shuffle_assoc($question["ans"]);
		foreach ($question["ans"] as $key => $value) {
			echo "<input id='q".$i."a".$aNum."' type='radio' name='$id' value='ans".$aNum."'><label for='q".$i."a".$aNum."'>".$key."</label><br/>";
			$aNum +=1;
		}
		$aNum = 0;
	}
	echo "<input id='submit' type='submit' name='submit' value='Submit Quiz'>";
	echo "</form>";
}

function validateQuiz($quiz){
	if ( isset($_POST["submit"]) ){
		
	}else{
		echo "NO VALID FOR U";
	}
}
function shuffle_assoc(&$array) {
	$keys = array_keys($array);
	shuffle($keys);
	foreach($keys as $key) {
		$new[$key] = $array[$key];
	}
	$array = $new;
	return true;
}
// display_array($_POST);
// generateQuiz($questions);
// display_array($prevQuiz);
// validateQuiz($questions);
?>