/**
 * Created by Marina on 10.03.2017.
 */

///testimonials slider
$(document).ready(function(){
    $('.slide-testimon').slick({
        dots: true,
        autoplay: true,
        slickNext: false,
        slickPrev: false,
})
    $('.project-img-slide').slick({
        autoplay: true,
    })
    $('.carousel-clients').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        slickNext: true,
        slickPrev: true
    })
});


