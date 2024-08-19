AOS.init();
$('[data-aos]').parent().addClass('hideOverflowOnMobile');
$('.counter').counterUp();
$(document).ready(function(){
    $('.progress-value > span').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 1500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});

var myCarousel = document.getElementById('carouselExampleFade');
var carousel = new bootstrap.Carousel(myCarousel, {
    pause: false
});