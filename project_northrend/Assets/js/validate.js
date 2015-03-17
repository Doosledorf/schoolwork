function validate(){
    
    var ourForm = document.forms[0];
    var commenter_name = ourForm['name'].value;
    var commenter_comment = ourForm['comment'].value;
    
    console.log(commenter_comment);
    console.log(commenter_comment.length);
    console.log(commenter_comment.match(/^[A-z0-9]*$/));
    console.log(document.getElementById('error'));
    
    var errorMsg = "";
    
    if ((commenter_name == "") || (commenter_name.length < 6) || (/^[A-z0-9]*$/.test(commenter_name) == false)){
        errorMsg += "<li>Please enter a valid name of at least 6 alphanumeric characters.</li>\n";
        document.getElementById('name').sty;e.borderColor = red;
    }

    if ((commenter_comment == "") || (commenter_comment.length < 15)){
        errorMsg += "<li>Please enter at least 15 characters for your comment.</li>\n";
        document.getElementById('comment').style.borderColor = red;
    }
    
    if (errorMsg != ""){
        errorMsg = "Please address the following: <ul>\n" + errorMsg;
        console.log(document.getElementById('error'));
        document.getElementById("error").innerHTML = errorMsg + "</ul>";
        document.getElementById("error").style.display = 'block';
        return false;
    }
    return true;
}