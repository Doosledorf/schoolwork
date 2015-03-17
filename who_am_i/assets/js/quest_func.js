// DAMN IT IE7! I JUST WANNA USE indexOf()
var QUESTION_PATH = []; // QUESTION PROGRESSION MADE
var ANSWER_PATH = []; // ANSWER PROGRESSION MADE. STORE BOTH AS JSON IF TIME ALLOWS.

//INITIATE QUESTIONS. THREE CASES
//First: At the beginning. No parents.
//Second: In the 'middle.' 
//Third: At the end. No children. Complete.
function init(){
    
    //Initiate with the dynamic creation of Q1. Tried to work around this...
    if( document.forms[0].childNodes.length == 0 ){
        
        create_QuestionDiv( 'q1' );
        QUESTION_PATH.push( 'q1' );
    }
}



// LITTLE JANKY BUT MAKING PROGRESS
function progress(which){ 
    
    //Nuke siblings in case we are in the 'middle' of the questionairre
    nuke_Siblings(which);
    
    //Get adjusted index of choice.
    var selectedChoiceIndex = which.selectedIndex-1;
    var affectedScores = qData[which.getAttribute('name')].options[selectedChoiceIndex].scoresAffected;
    
    //Store and update scores
    ANSWER_PATH.push(selectedChoiceIndex);
    update_AffectedScores( affectedScores, 1);
    
    //If no children left, get winner and generate his stats.
    if (get_NextQuestion(which) == -1){
        generate_StatCard(get_HighScore());
    }
    
    //Get the next question in the chain. Instantiate it and place it an array.
    else{
        create_QuestionDiv(get_NextQuestion(which));
        QUESTION_PATH.push(get_NextQuestion(which));
    }      
    console.log(QUESTION_PATH);
}



// GENERATES THE QUESTIONS AND THEIR SELECT OPTIONS. COMPLETE
function create_QuestionDiv( questionNumber ){
    
    //Generate the div to hold each individual question and options. Append.
    var questionDiv = generate_Element('div', {class : 'questionDiv'});
    document.forms[0].appendChild(questionDiv);
    
    //Generate the question. Append.
    var theQuestion = generate_Element('span', {class : 'question'}, qData[questionNumber].question);
    questionDiv.appendChild(theQuestion);
    
    //Generate the select input object and append.
    var theOptions = generate_Element('select', { name: questionNumber, onchange : 'progress(this);' });
    questionDiv.appendChild(theOptions);
    
    //Generate the default options and append.
    var defaultOption = generate_Element('option', { value : 'default', selected : 'selected' }, '--')
    theOptions.appendChild(defaultOption);
    
    //Generate the actual options.
    for( var i = 0; i < qData[questionNumber].options.length; i++ ){
            var anOption = generate_Element('option', { value: i}, qData[questionNumber].options[i].text);
            theOptions.appendChild(anOption);
    }
    
}




// RETURNS THE NEXT QUESTION TO ASK BASED ON RELATIVE POSITIONING IN THE QDATA.
// -1 TO INFROM OF NO CHILDREN...THE END OF THE LINE. COMPLETE.
function get_NextQuestion(which){
    
    //Children questions of the current question
    var childQuestions = qData[which.getAttribute('name')].children;
    
    //Check if there is child questions
    if ( childQuestions.length == 0 ){
            return -1; //If not, return -1.
    }
    else{
            return childQuestions[which.selectedIndex-1]; //If so, return the next question in 'qX' form. The '-1' accounts for '--'
    }
}



// CUZ SCREW IE7
function indexOf( which, array ){
    
    for (var i = 0, l = array.length; i <l ; i++){
        if( which == array[i]){ return i }
        else { continue }
    }
    return -1;
}



// NUKE ALL SIBLINGS AFTER DESIGNATED SELECT. UPDATES SCORES ACCORDINGLY.
function nuke_Siblings(which){
    
    var all_Questions = document.getElementsByTagName('select');
    
    var whichIndex = indexOf(which.getAttribute('name'), QUESTION_PATH);
    
    for ( var i = 0, l = QUESTION_PATH.length; i < l; i++ ){
        
        if (i <= whichIndex) continue;
        if (i > whichIndex){
            document.forms[0].removeChild(document.forms[0].children[i]);
            QUESTION_PATH.splice(i, 1);
        }
    }  
    
}
