"use strict";

console.log("main.js");

let $ = require('jquery');

var blogPosts = new XMLHttpRequest();

blogPosts.addEventListener("load", blogPostsComplete);
blogPosts.addEventListener("error", blogPostsFailed);

function blogPostsComplete(event) {
    console.log("Some very eloquent blog posts have loaded");
    var data = JSON.parse(event.target.responseText);
    console.log("the blog data- ", data);

    makePosts(data);
}

function blogPostsFailed(event) {
    console.log("Oh man, you're missing out.");
}

blogPosts.open("GET", "posts.json");
blogPosts.send();


function makePosts(posts) {
    const postArea = document.getElementById("container");
    let postData = "";

    for (var i = 0; i < posts.length; i++) {
        var blogItem = posts[i];
        postData += "<div class='blogpost'>";
        postData += "<h2 class='weekly' class='text-left'>" + blogItem.Bweek + "</h2>";
        postData += "<p class='post'>" + blogItem.Bentry + "</p>";
        postData += "</div>";
    }

    postArea.innerHTML += posts;
}