$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".navbar").css("background-color" , "white");
        }
  
        else{
            $(".navbar").css("background-color" , "transparent");  	
        }
    })
  });