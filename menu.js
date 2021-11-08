$(window).on('load', function() {
    // parallax jumbotron
    // $('.table').addClass('nyala'); 

    $('td, th').each(function(i){
        setTimeout(function(){
            $('td, th').eq(i).addClass('nyala');
        }, 100 * (i+1));
    });
});