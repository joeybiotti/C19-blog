"use strict";

console.log("main.js");

let $ = require('jquery');

var blogPosts = new XMLHttpRequest();

blogPosts.addEventListener("load", blogPostsComplete);
blogPosts.addEventListener("error", blogPostsFailed);

function blogPostsComplete(blog){
  console.log("the posts have loaded motherfucker");
  var data = JSON.parse(event.target.responseText);
  console.log("this is the post data: ", data);

  makePosts(data);
}

function blogPostsFailed(blog){
  console.log("shit got fucked");
}

blogPosts.open("GET", "data/posts.json");
blogPosts.send();

function makePosts(stuff){
  const postArea = document.getElementById("posts");
  let postData = "";

  for (var i = 0; i < stuff.length; i++) {
    var weeklyPost = stuff[i];

      postData += "<div class='blogpost'>";
      postData += "<h2 class='weekly' class='text-left'>" + weeklyPost.Bweek + "</h2>";
      postData += "<p class='post'>" + weeklyPost.Bentry + "</p>";
      postData += "</div>";
  }
}
