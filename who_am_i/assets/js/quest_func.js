var QUESTION_PATH = [];

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



// LITTLE JANKY
function progress(which){ 
    
    /*var sibling = which.nextSibling;
    var siblingParent;
    var questionNumber = qData[which.getAttribute('name')];
    console.log(which);
    
    //Nukes the select siblings after the one changed...in case of changing the middle element. This is gonna be janky.
    
    while( sibling.nextSibling){
        sibling = sibling.nextSibling;
        parent = 
        
        update_AffectedScores( qData
        
    }*/

    //console.log(qData[which.getAttribute('name')].);
    //update_AffectedScores( qData[which.getAttribute('name')].options, -1);
                      
    var affectedScores = qData[which.getAttribute('name')].options[which.selectedIndex-1].scoresAffected;
    update_AffectedScores( affectedScores, 1);
    
    if (get_NextQuestion(which) == -1){
        generate_StatCard(get_HighScore());
    }
     
    else{
        create_QuestionDiv(get_NextQuestion(which));
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
    
    //Check if there is child questions
    if ( childQuestions.length == 0 ){
            return -1; //If not, return -1.
    }
    else{
            return childQuestions[which.selectedIndex-1]; //If so, return the next question in 'qX' form. The '-1' accounts for '--'
    }
}