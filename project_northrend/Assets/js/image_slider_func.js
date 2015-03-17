var images;
var image_width;
var num_images;
var prev, next;
var currentPos = 0;
var currentImage = 0;


function slider_init(){
    
    var slider = document.getElementById('slider');
    var images = slider.children;
    
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    
    num_images = images.length;
    image_width = images[0].children[0].clientWidth;
    slider.style.width = parseInt( imageWidth * imageNumber) + 'px';  
    
    prev.onclick = function(){slide();};
    next.onclick = function(){slide();};
}   

function next_slide(){
    console.log(images);
}

function prev_slide(){
    current 
}

function slide(){
    
}