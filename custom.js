AOS.init({
    duration: 1200,
});


$(document).ready(function(){
    $('.my-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      speed: 300,
      autoplaySpeed: 5000,
      centerMode: true,
      centerPadding: "200px",
      autoplay: true,
      responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        centerPadding: "0px",
      }
    }
    ],
    });
  });