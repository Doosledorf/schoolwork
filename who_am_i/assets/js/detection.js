//BEWARE: MEGA JANK.

var OS, browser;
var screwIE = ['IE7','IE8','IE9','IE10','IE11'];
function whatYouUsing(){
            
    detectOS();
    detectBrowser();
    if (OS == 'MacOS' && indexOf(browser, screwIE) != -1){
        window.location('https://www.mozilla.org/en-US/firefox/new/');
    }
    console.log(browser);
}

function detectOS(){
    nApp = navigator.appVersion;
    if(nApp.indexOf('Win') != -1) OS = 'Windows';
    if(nApp.indexOf('Mac') != -1) OS = 'MacOS';
    if(nApp.indexOf('X11') != -1) OS = 'UNIX';
    if(nApp.indexOf('Linux') != -1) OS = 'Linux';
}

function detectBrowser(){
    nAgt = navigator.userAgent;
    if( (nAgt.indexOf('Gecko')) != -1 ) browser = 'Gecko';
    if( (nAgt.indexOf('Opera')) != -1 ) browser = 'Opera';
    if( (nAgt.indexOf('Safari')) != -1 ) browser = 'Safari';
    if( (nAgt.indexOf('Chrome')) != -1 ) browser = 'Chrome';
    if( (nAgt.indexOf('Firefox')) != -1 ) browser = 'Firefox';
    
    
    //special treatment for IE
    if (document.all) browser = 'IE10';
    if (document.all && !window.atob) browser = 'IE9';
    if (document.all && !document.addEventListener) browser = 'IE8';
    if (document.all && !document.querySelector) browser = 'IE7';
    else browser = 'IE11'
}