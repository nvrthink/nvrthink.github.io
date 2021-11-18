$(document).ready(function() {
    setTimeout(function () {
        $("#myModal").modal('show');
    }, 2000);
  });


$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // parallax about
    if(wScroll > $ ('.aboutustrans').offset().top - 500) {
        $('.aboutustrans').addClass('nyala');
    }

    // parallax article
    if(wScroll > $ ('.artictrans2').offset().top - 850) {
        $('.artictrans2').addClass('nyala');
    }
    if(wScroll > $ ('.artictrans').offset().top - 850) {
        $('.artictrans').addClass('nyala');
    }
    if(wScroll > $ ('.menus').offset().top - 850) {
        $('.menus').addClass('nyala');
    }
    // 
});

$(window).on('load', function() {
    // parallax jumbotron
    $('#jumbo').addClass('nyala'); 
    // parallax panel
    $('#panel').addClass('nyala'); 

});