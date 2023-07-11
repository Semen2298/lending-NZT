
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.header').addClass('active');
      $('.header__logo_wrapper img').attr('src', './img/logoBlue.svg');
      $('.header__menu_item-btn').css('color', '#252627');
      $('.header__menu_item-arrow').addClass('scroll-down');
      $('.header__btn_originality').addClass('scroll-down');
      $('.header__btn_buy').addClass('scroll-down');
      $('.header__menu_btn-loupe img').attr('src', './img/loupeIcon-fix.svg');
    } else {
      $('.header').removeClass('active');
      $('.header__logo_wrapper img').attr('src', './img/logo.svg');
      $('.header__menu_item-btn').css('color', '#FDFDFD');
      $('.header__menu_item-arrow').removeClass('scroll-down');
      $('.header__btn_originality').removeClass('scroll-down');
      $('.header__btn_buy').removeClass('scroll-down');
      $('.header__menu_btn-loupe img').attr('src', './img/loupeIcon.svg');
    }
  });