//GENERTATE CARD
function generate_StatCard(winningChar) {
    
    //The statbars accounted, the stat's name and the statunit color
    var statValue, statName, statColor;
    
    //Update splash image for winning character
    var splash_hold = document.getElementById('splash_hold');
    console.log(winningChar);
    var splash_image = generate_Element('img', { src: wardrobe[winningChar].imageFilePath, alt: 'Winner!' } );
    splash_hold.appendChild(splash_image);
    
    //Each stat of the winning character
    for ( var stat in wardrobe[winningChar].stats ){
        
       statName = stat; 
        
       // Hearts are a special case. Can be a multitude of colors
       if (stat == 'hearts'){ 
           statValue = wardrobe[winningChar].stats[stat].heartCount; 
           statColor = wardrobe[winningChar].stats[stat].heartType;
       }
       
       // Standard color statunit assigned
       else{
           statValue = wardrobe[winningChar].stats[stat];
           statColor = 'green';
       }

       //Create a statbar for said stat, using values provided.
       create_StatDivs( statName, statValue, statColor) 
    }
    
//    var pickup_span = document.createElement('span');
//    var pickup_text = document.createTextNode(wardrobe[winningChar].pickup);
//    pickup_span.appendChild(span_text);
//    splash_hold.appendChild(pickup_span);
}



//NUKE STATCARD
function nuke_StatCard(){

    var statCard = document.getElementById('char_stat_container');
}
    


//GET HIGH SCORE, RETURN WINNER. COMPLETE.
function get_HighScore(){
    
    var scoresToSort = []; //Score:Char Assoc Array
    var winner; //The Winner's Name
    
    //Objects cant be sorted, so push char/score key/value to assoc array
    for ( var char in wardrobe ){ scoresToSort.push([char, wardrobe[char].score]); } 
    
    //sort greatest to least
    scoresToSort.sort( function(a, b){ return b[1] - a[1]} );
    winner = scoresToSort[0][0];
    
    //return high-scorer's name
    return winner;
}



//UPDATE AFFECTED SCORES. COMPLETE.
function update_AffectedScores( affectedCharArray, operation){    
    //Loop through array.
    for ( var i = 0,  l = affectedCharArray.length; i < l; i++ ){
        switch( operation ){
                case 1: //Add one to the score of each character within wardrobe
                    wardrobe[affectedCharArray[i]].score++;
                    console.log(wardrobe[affectedCharArray[i]]);
                    break;
                case -1: //Subtract one "               "
                    wardrobe[affectedCharArray[i]].score--; 
                    console.log(wardrobe[affectedCharArray[i]]);
                    break;
                case 0: //May as well have a reset.
                    for( var char in wardrobe ){
                        wardrobe[char].score = 0;
                    }
                    break;
        }
    }
}



//RECACLULATE SCORE BASED ON SCORE
function recalculate_Score( pathArray ){

    
}
    
    

//CREATE CARD FRAMEWORK, INJECT INFO
function create_StatDivs( stat, value, color ){
    
    var bar_color, bar_count;
    
    //Create actual div container to hold the whole shebang.
    var stat_div = generate_Element('div', { class : 'stat_div' } );
    
    //Create span that correlates to the stat in question.
    var stat_span = generate_Element( 'span', {} , stat );
    
    //Add span to main stat-div. 
    stat_div.appendChild(stat_span);
    
    //Create div to house stat-units, id based on stat. 
    var bar_container = generate_Element('div', { class: 'stat_bar', name: stat } );
    
    //Add to main stat-div
    stat_div.appendChild(bar_container);
        
    //Add to stat-div to main stat-hold.    
    document.getElementById('info_hold').appendChild(stat_div);
    
    //Get unit image based on stat-unit color.
    var stat_block_path = 'assets/images/' + color + '_stat.jpg';
    
    //For as many stat-units as this stat has.
    for (var i = 0; i < value; i++){
        
        //Generate stat-unit and append to the stat-unit div. Perhaps a timeout?
        var stat_unit = generate_Element( 'img', { class: 'stat_unit', name: 'stat_unit', src : stat_block_path, alt : 'Stat Unit' }, '' );
        document.getElementsByName(stat)[0].appendChild(stat_unit); 
    }
}


function create_ItemDivs(){
    
}
    
