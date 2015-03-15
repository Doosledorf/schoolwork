function generate_Element(typeOfElement, attributeObject){
    
    var newEle = document.createElement(typeOfElement);
    
    for( attribute in attributeObject ){ 
        newEle.setAttribute(attribute, attributeObject[attribute]);
    }
    
    return newEle; 
}

