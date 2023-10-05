// preloader
window.addEventListener('load', function () {
  const preloader = document.querySelector('.preloader-container');
  const content = document.querySelector('div[style="display: none;"]');
  preloader.style.display = 'none';
  content.style.display = 'block';
});

// object select element
const selectElement = {
  dropdownBtn: document.getElementsByClassName("dropdown_button"),
  subNavItem: document.getElementsByClassName("dropdown_sub"),
}

// element destructure
let { dropdownBtn, subNavItem } = selectElement

  ;[...dropdownBtn].forEach((innerBtn, index) => {
    let innerNav = subNavItem[index];
    innerBtn.addEventListener("click", function () {
      $(innerNav).slideToggle();
      $(".dropdown_sub").not(innerNav).slideUp();
      $(".dropdown_button").removeClass("active");
      $(innerBtn).toggleClass("active");
    });
  });


// banner start
$('.banner__active').slick({
  dots: true,
  infinite: true,
  // fade: true,
  // cssEase: 'linear',
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});
// banner end

// featured university start
$(function (e) {
  "use strict";
  e(".university__active").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    prevArrow: '<i class="fa-solid fa-angle-left"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right"></i>',
    slidesToScroll: 1,
    appendArrows: e(".slick_arrow"),
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        dots: true,
        arrows: false,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        dots: true,
        arrows: false,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
      }
    }
    ]
  })
});
// university end

// university start
$('.partnet__active').slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplaySpeed: 1000,
  autoplay: true,
  speed: 600,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});
// university end

// university start
$('.review__active').slick({
  dots: true,
  arrows: false,
  autoplaySpeed: 3000,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
// university end

// scrollup
$.scrollUp({
  scrollName: 'scrollUp', // Element ID
  topDistance: '300', // Distance from top before showing element (px)
  topSpeed: 300, // Speed back to top (ms)
  animation: 'fade', // Fade, slide, none
  animationInSpeed: 200, // Animation in speed (ms)
  animationOutSpeed: 200, // Animation out speed (ms)
  scrollText: '<i class="fa-solid fa-angle-up"></i>', // Text for element
  activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});