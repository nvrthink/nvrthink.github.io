$(window).on('load', function() {
    // parallax jumbotron
    // $('.table').addClass('nyala'); 

    $('.memberimg').each(function(i){
        setTimeout(function(){
            $('.memberimg').eq(i).addClass('nyala');
        }, 500 * (i+1));
    });
});


$(document).ready(function(){ 

    $('#dahyunah').click(function(){
       $('.kotakdahyun').addClass('hidup')
    });

    $('.closedahyun').click(function(){
        $('.kotakdahyun').removeClass('hidup')
     });

    $('#nayeonah').click(function(){
        $('.kotaknayeon').addClass('hidup')
    });
 
    $('.closenayeon').click(function(){
         $('.kotaknayeon').removeClass('hidup')
    });

    $('#jeongyeonah').click(function(){
        $('.kotakjeongyeon').addClass('hidup')
    });
 
    $('.closejeongyeon').click(function(){
         $('.kotakjeongyeon').removeClass('hidup')
    });
    
  

});