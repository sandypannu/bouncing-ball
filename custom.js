$(document).ready(function() {

    //caching Selectors and variables
    var $grayBall = $(".ball-gray"), 
        $window = $(window), 
         xPosFlag = false, 
         yPosFlag = false,   
         Xposition = 0,
         Yposition = 0,
         distance = 2, 
         delay = 2; 
        
    function resetPosition() {        
        $grayBall.css("left", Xposition); //setting left(x) position of ball; initial x-position is 0)
        $grayBall.css("top", Yposition); //setting top(y) position of the ball; initial y-position is 0)

        xPosFlag ? (Xposition = Xposition + distance) : (Xposition = Xposition - distance); //check if xPosFlag true then add distance to current x-position else subtract distance 
        yPosFlag ? (Yposition = Yposition + distance) : (Yposition = Yposition - distance); //check if yPosFlag true then add distance to current y-position else subtract distance 

        if (Xposition < 0) {  //if x-position < 0 
            xPosFlag = true; //update xPosFlag to true
            Xposition = 0; // reset ball x-position to 0 
        };

        if (Yposition < 0) { //if y-position < 0 
            yPosFlag = true; //update yPosFlag to true
            Yposition = 0; //reset ball y-position to 0 
        };

        (Xposition >= $window.width() - $grayBall.width()) && (xPosFlag = false); //if ball x-position >= (total window height - ball height) then set xPosFlag to false 
        (Yposition >= $window.height() - $grayBall.height()) && (yPosFlag = false); //if ball y-position >= (total window height - ball height) then set yPosFlag to false 
    };


    function init() {
        setInterval(resetPosition, delay); //repeatedly execute resetPosition function with 2ms delay between each call
    };


    init(); //call init function after DOM is fully loaded 

});

