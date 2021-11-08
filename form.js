$(window).on('load', function() {
    $('#jumbo').addClass('nyala'); 
    $('label, input, .pButton').each(function(i){
        setTimeout(function(){
            $('label, input, .pButton').eq(i).addClass('nyala');
        }, 100 * (i+1));
    });
});