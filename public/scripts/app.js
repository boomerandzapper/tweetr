/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.


function timeSince(date) {
  const currentDate = new Date(date)
  return currentDate;
}
function createTweetElement(tweetData) {
  const header = $('<header>').append($('<img>', {src:tweetData.user.avatars.large})).append($('<h3>').text(tweetData.user.name)).append($('<span>').addClass('user-tag').text(tweetData.user.handle));
  const footer = $('<footer>').append($('<span>').text(timeSince(tweetData.created_at)));
  const content = $('<div>').addClass('tweet-content').text(tweetData.content.text);
  return $('<article>').addClass('tweet').append(header).append(content).append(footer);
}

function renderTweets(data) {
  $('#tweets-container').empty();
  data.forEach(function(element) {
    $('#tweets-container').prepend(createTweetElement(element))
  });
}

function loadTweets() {
  $.ajax({
    method: 'GET',
    url: '/tweets',
    success: function(tweetsData) {
      renderTweets(tweetsData);
    }
  })
}

$(function(){
  $('#nav-bar > button').on('click', function () {
    $('.new-tweet').slideToggle(350, function() {
      $(this).find('textarea').focus();
    });
  })
});

$(function(){
  loadTweets();
});

$(function(){
  $('.new-tweet').on('submit', function(event) {
    event.preventDefault();
    var form = $(this).find('form');
    var text = form.find('textarea');
    if (text.val().length === 0) {
      alert('No text.');
    } else if (text.val().length > 140){
      alert('Tweet is too long.')
    } else {
      $.ajax({
        method: 'post',
        url: '/tweets',
        data: form.serialize()
      }).done(function() {
        loadTweets();
      });
      text.val('');
      form.find('span').text('140');
    }
  });
});















