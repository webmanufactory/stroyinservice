$('.faq-item__body').slideUp();
$('.faq-item__header').on('click', function () {
  $(this).siblings('.faq-item .faq-item__body').slideToggle();
  $(this).children('.faq-header__button').toggleClass('active');
})