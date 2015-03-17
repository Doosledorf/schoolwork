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

