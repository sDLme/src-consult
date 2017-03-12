/**
 * Created by Marina on 10.03.2017.
 */

///testimonials slider
$(document).ready(function(){

///testimonials slider
    $('.slide-testimon').slick({
        dots: true,
        autoplay: true,
        slickNext: false,
        slickPrev: false,
}),

/// Portfolio-slider
    $('.project-img-slide').slick({
        //autoplay: true,
    }),

    ///ABOUT carousel
    $('.carousel-clients').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        slickNext: true,
        slickPrev: true
    }),
///intro
    $('.intro-slide').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
    })
});


