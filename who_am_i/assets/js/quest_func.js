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
    
    nuke_StatCard();
    nuke_EndForm();
    
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
    console.log(ANSWER_PATH);
    console.log(QUESTION_PATH);
}




// NUKE ALL SIBLINGS AFTER DESIGNATED SELECT. UPDATES SCORES ACCORDINGLY. FIX!!!
function nuke_Siblings(which){
   
    
    var whichIndex = indexOf(which.getAttribute('name'), QUESTION_PATH);
    console.log('whichIndex' + whichIndex);
    
    for ( var i = 0, l = ANSWER_PATH.length; i < l; i++ ){
        
        console.log(i);
        //Case 1. Question is changed the last so far.
        if (l < whichIndex) continue;
        
        //
        if (l == whichIndex){
            recalculate_Score( ANSWER_PATH);
            
        }
        
        if (l > whichIndex){
            
            ANSWER_PATH.splice(i, 1);
            recalculate_Score( ANSWER_PATH );
            
            document.forms[0].removeChild(document.forms[0].children[i]);
            QUESTION_PATH.splice(i, 1);   
        
        }
    }  
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
    console.log(childQuestions);
    //Check if there is child questions
    if ( childQuestions.length == 0 ){
            return -1; //If not, return -1.
    }
    else{
            console.log(childQuestions[which.selectedIndex-1]);
            return childQuestions[which.selectedIndex-1]; //If so, return the next question in 'qX' form. The '-1' accounts for '--'
    }
}





