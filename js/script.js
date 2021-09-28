$(function () {
  'use strict'
  // manu fixed start
  var nav_off = $('.main_manu').offset().top;
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > nav_off) {
      $('.main_manu').addClass('manu_fix');
    } else {
      $('.main_manu').removeClass('manu_fix');
    }
  });
  // manu fixed end
  // scroll bar start
  $('.bt_top').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 4000);
  });
  $(window).scroll(function () {
    var abc = $(this).scrollTop();
    if (abc > 200) {
      $('.bt_top').fadeIn();
    } else {
      $('.bt_top').fadeOut();
    }
  });
  // scroll bar end
  // banner slider start
  $('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });
  // banner slider end
  // team slidr start
  $('.team_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 991.98,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          dots: false,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
        }
      }
    ]
  });
  // team slider end
  // vanu box about part start
  $('.venobox').venobox({
    border: '5px',
    closeColor: 'red',
    spinner: 'wave',
    spinColor: 'red',
  });
  // vanu box about part end
  // testimonial slider start
  $('.text-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1, 
      }
    }
  ]
  });
  // testimonial slider end
  // counter up js start 
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  // counter up js end
  // sponsor start
  $('.spon_slider').slick(
    {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    prevArrow: '<i class="fas fa-angle-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-right next"></i>',
    responsive: [{
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows:false,
      }
    },
      {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows:false,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1, 
        arrows: false,
      }
    }
  ]
  });
  // sponsor end
});