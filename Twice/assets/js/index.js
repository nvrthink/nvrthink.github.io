$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    if(wScroll > $ ('.bagian2').offset().top - 5) {
        $('.boxaku').addClass('buka');
    }
    // 
});

$(document).ready(function(){ 

    $('#has').click(function(){
       $('.membertw img').addClass('nyala')
    });

});