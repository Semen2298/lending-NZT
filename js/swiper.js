const swiper1 = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 11113000,
    },
    speed: 2000,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.slider__btn-arrow_rightBtn',
      prevEl: '.slider__btn-arrow_leftBtn',
    },
  });
const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 44,
    speed: 3000,
    autoplay: {
        enabled: true,
        delay: 1001500,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.specialist-opinion__btn-arrow_rightBtn',
      prevEl: '.specialist-opinion__btn-arrow_leftBtn',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      1280: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    }
  });