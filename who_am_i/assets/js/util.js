function generate_Element(typeOfElement, attributeObject, textOptional){
    
    //Create Element
    var newEle = document.createElement(typeOfElement);
    
    //Establish its attributes, if existent
    if (attributeObject){
        for( attribute in attributeObject ){ 
            newEle.setAttribute(attribute, attributeObject[attribute]);
        }
    }
    
    //If text exists, create textNode and append. Pretty common so far. Perhaps adapt this for anything?
    if (textOptional){ 
        var elementText = document.createTextNode(textOptional);
        newEle.appendChild( elementText );
    }
    
    return newEle; 
}



function emptyNode( nodeID ){
    
    
    var theNode = document.getElementById(nodeID);
    
    var node_FirstChild = theNode.firstChild;
    
    while(node_FirstChild){
        theNode.removeChild(node_FirstChild);
        node_FirstChild = theNode.firstChild;
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

    