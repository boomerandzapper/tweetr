$(function(){
  const counter = $('#counter');
  function validate(charCount) {
    return charCount > 140;
  }
  //Call this function with true to add an error, or call this function to remove error
  function toggleCounterError(addError) {
    if (addError) {
      counter.addClass('error');
    } else {
      counter.removeClass('error');
    }
  }
  $('.new-tweet > form').on('keyup', 'textarea', function () {
    const charUsed = $(this).val().length;
    counter.text(140 - charUsed);
    toggleCounterError(validate(charUsed));
  });
});