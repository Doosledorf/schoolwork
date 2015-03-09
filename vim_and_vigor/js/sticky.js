// This function will be executed when the user scrolls the page.
$(window).scroll(function(e) {
    // Get the position of the location where the anchor starts.
    var stickyAnchor = $("#stickyAnchor").offset().top;

    // Check if the user has scrolled and position is after the anchor's start location and if its not already fixed at the top 
    if ($(this).scrollTop() >= stickyAnchor && $('.imFixed').css('visibility') != 'visible') 
    {    // Change the CSS of the element to be stuck and change the hight of the anchor.
    	$('.imFixed').css('visibility','visible');
    	$('#side').fadeOut();
        console.log('go');
    } 
    else if ($(this).scrollTop() < stickyAnchor && $('.imFixed').css('visibility') != 'hidden') 
    {    // If the user has scrolled back to the location above the scroller anchor place it back into the content.
    	$('.imFixed').css('visibility','hidden');
    	$('#side').css('display','block');
    }
});