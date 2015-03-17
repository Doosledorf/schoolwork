<?php
    
    ////////////////////////INCLUDES AND DEFINITIONS/////////////////////////
    
    define("PATH", "/Volumes/Students/students/141/rno7687/");
    include PATH . "Sites/connect_to_db.php";

    

    ///////////////////////FORM NONSENSE/////////////////////////////////////
      
    function sanitize( $data, $link){
     
        $data = trim($data);
        $data = strip_tags($data, '<em><strong>');
        $data = htmlentities($data);
        $data = mysqli_real_escape_string( $link, $data );
        return $data;
    }

    function init_comments(){
       
        echo "
            <div id = 'main_form_container'>
                <script src = 'Assets/js/validate.js'></script>
                <form name = 'main_form' method = 'post' action = 'about.php' onsubmit = 'return validate()'>

                    <label class = 'field' for = 'name'>Name</label>
                        <input type = 'text' id = 'name' class = 'textfield' name = 'name' placeholder = 'Name'/><br><br>
                    <label class = 'field' for = 'comment'>Your Comment</label>
                <textarea class = 'textarea' name = 'comment' rows = '5' cols = '85' ></textarea><br><br>
                        <input type = 'submit' id = 'comment' class = 'submit' name = 'submit' value = 'Submit' >
                        <div class = 'error' style = 'display:none'></div>
                </form>
            </div>";
            
    }
?>
