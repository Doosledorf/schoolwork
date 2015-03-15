//GENERTATE CARD
function generate_StatCard(winningChar) {
    
    //Update splash image for winning character
    var splash_hold = document.getElementById('splash_hold');
    var splash_image = generate_Element('img', { src: wardrobe[winningChar].imageFilePath, alt: 'Winner!' } );
    splash_hold.appendChild(splash_image);
    

    //Each stat of the winning character
    for ( var stat in wardrobe[winningChar].stats ){

       //Get stat and its value
       var statValue = wardrobe[winningChar].stats[stat];
       var statName = stat;

       //Create a statbar
       create_StatDivs( statValue, statName) 
    }
}


//GET HIGH SCORE, RETURN WINNER
function get_HighScore(){
    
    var scoresToSort = [];
    var winner;
    
    //Objects cant be sorted, so push char/score key/value to assoc array
    for ( var char in wardrobe ){
        scoresToSort.push([char, wardrobe[char].score]);
    } 
    
    //sort greatest to least
    scoresToSort.sort( function(a, b){ return b[1] - a[1]} );
    winner = scoresToSort[0][0];
    
    //return high-scorer's name
    return winner;
}

    
//CREATE CARD FRAMEWORK, INJECT INFO
function create_StatDivs( stat, value ){
    
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
    var bar_container = generate_Element('div', { class: 'stat_bar', name: 'stat_bar' } );
    
    //add to stat
    stat_div.appendChild(bar_container);
        
    //Add to doc    
    document.getElementById('info_hold').appendChild(stat_div);
    
    //In the case of 'heart' values, need to sift through nested object for value
    if ( stat == 'hearts' ){
        
        bar_color = hearts.heartType;
        bar_count = hearts.heartCount;
    }
    
    //In the case of any other stat
    else{
        
        bar_color = 'green';
        bar_count = value;
    } 
    
    //Pass values
    animate_Bars(stat, bar_color, bar_count);
}   
    

//ANIMATE BARS/ INJECTING THEM INTO STATS
function animate_Bars(stat, color, count){
    
    //Create tag
    for (var i = 0; i <= count; i++){
        console.log('assets/images/' + color + '_stat.jpg');
        var stat_unit = generate_Element( 'img', { class: 'stat_unit', name: 'stat_unit', src : 'assets/images/' + color + '_stat.jpg', alt : 'Stat Unit' } );
     
        document.getElementById('stat_bar').appendChild(stat_unit);
    }
}


generate_StatCard( get_HighScore() );