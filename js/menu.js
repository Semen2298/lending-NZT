
$(document).ready(function() {
    $('.header__menu_item').click(function() {
      $('.submenu').hide();
      $('.header__menu_item-arrow').removeClass('rotate-up');
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      } else {
        $(this).addClass('active');
        $(this).find('.submenu').show();
        $(this).find('.header__menu_item-arrow').addClass('rotate-up');
      }
    });
    
    $(document).click(function(event) {
      if (!$(event.target).closest('.header__menu_item').length) {
        $('.submenu').hide();
        $('.header__menu_item').removeClass('active');
        $('.header__menu_item-arrow').removeClass('rotate-up');
      }
    });
  });
