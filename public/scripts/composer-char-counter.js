$(function(){
  $('.new-tweet > form').on('keyup', 'textarea', function () {
    let charused = $(this).val().length;
    let counter = $(this).closest('form').find('.counter')
    counter.text(140 - charused);
    if (charused > 140) {
      counter.addClass('error');
    } else {
      counter.removeClass('error');
    }
  });
});