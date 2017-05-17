/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
var tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giantsIf I have seen further it is by standing on the shoulders of giantsIf I have seen further it is by standing on the shoulders of giantsIf I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

function createTweetElement(tweetData) {
  const header = $('<header>').append($('<img>', {src:tweetData.user.avatars.large})).append($('<h3>').text(tweetData.user.name)).append($('<span>').addClass('user-tag').text(tweetData.user.handle));
  const footer = $('<footer>').append($('<span>').text(tweetData.created_at));
  const content = $('<div>').addClass('tweet-content').text(tweetData.content.text);
  return $('<article>').addClass('tweet').append(header).append(content).append(footer);
}




$(function(){
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});