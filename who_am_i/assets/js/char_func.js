//GENERTATE CARD
function generate_StatCard(winningChar) {
    
    var statValue, statName, statColor;
    
    //Update splash image for winning character
    var splash_hold = document.getElementById('splash_hold');
    var splash_image = generate_Element('img', { src: wardrobe[winningChar].imageFilePath, alt: 'Winner!' } );
    splash_hold.appendChild(splash_image);
    
    //Each stat of the winning character
    for ( var stat in wardrobe[winningChar].stats ){
        
       statName = stat;
        
    
       if (stat == 'hearts'){ 
           statValue = wardrobe[winningChar].stats[stat].heartCount; 
           statColor = wardrobe[winningChar].stats[stat].heartType;
       }
       else{
           statValue = wardrobe[winningChar].stats[stat];
           statColor = 'green';
       }

       //Create a statbar
       create_StatDivs( statName, statValue, statColor) 
    }
}


//GET HIGH SCORE, RETURN WINNER
function get_HighScore(){
    
    var scoresToSort = [];
    var winner;
    
    //Objects cant be sorted, so push char/score key/value to assoc array
    for ( var char in wardrobe ){ scoresToSort.push([char, wardrobe[char].score]); } 
    
    //sort greatest to least
    scoresToSort.sort( function(a, b){ return b[1] - a[1]} );
    winner = scoresToSort[0][0];
    
    //return high-scorer's name
    return winner;
}

    
//CREATE CARD FRAMEWORK, INJECT INFO
function create_StatDivs( stat, value, color ){
    
    var bar_color, bar_count;
    
    //Create actual div container.
    var stat_div = generate_Element('div', { class : 'stat_div' } );
    
    //Create span with the stat as text.
    var stat_span = document.createElement('span');
    var span_text = document.createTextNode(stat);
    stat_span.appendChild(span_text);
    
    //add span to div 
    stat_div.appendChild(stat_span);
    
    //create div, id based on stat 
    var bar_container = generate_Element('div', { class: 'stat_bar', name: stat } );
    
    //add to stat
    stat_div.appendChild(bar_container);
        
    //Add to doc    
    document.getElementById('info_hold').appendChild(stat_div);
    
    //Pass values
    var stat_block_path = 'assets/images/' + color + '_stat.jpg';
    
    //Create tag
    for (var i = 0; i < value; i++){
        
        console.log('assets/images/' + color + '_stat.jpg');
        var stat_unit = generate_Element( 'img', { class: 'stat_unit', name: 'stat_unit', src : stat_block_path, alt : 'Stat Unit' } );
        document.getElementsByName(stat)[0].appendChild(stat_unit); 
    }
}   
    
generate_StatCard( get_HighScore() );