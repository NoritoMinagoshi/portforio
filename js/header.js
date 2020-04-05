$(function() {
  $('.header-icon').on('click', function() {
    if($('.header-nav ul').css('display') === 'block') {
      $('.header-nav ul').slideUp('1500');
    } else {
      $('.header-nav ul').slideDown('1500');
    }
  });
});
