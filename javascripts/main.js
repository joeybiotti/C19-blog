"use strict";

console.log("main.js");

var blogPosts = new XMLHttpRequest();

blogPosts.addEventListener("load", blogPostsComplete);
blogPosts.addEventListener("error", blogPostsFailed);

function blogPostsComplete(event) {
    console.log("Some very eloquent blog posts have loaded");
    var data = JSON.parse(event.target.responseText);
    console.log("the blog data- ", data);

    makePost(data);
}

function blogPostsFailed(event) {
    console.log("Oh man, you're missing out.");
}

blogPosts.open("GET", "posts.json");
blogPosts.send();


function makePost(post) {
    let postArea = document.getElementById("posts");
    let postData = "";

    for (var entries in posts){
    var blogItem = posts[entries];
    postData += "<div class='blogpost'>";
    postData += "<h2 class='weekly' class='text-left'>" + blogItem.Bweek + "</h2>";
    postData += "<p class='post'>" + blogItem.Bentry + "</p>";
    postData += "</div>";

    postArea.innerHTML += postData;

    }
}


// function makePost(post) {
//     let postArea = $("#post");
//     let postData = "";

//     for (var thing in post);
//     var blogItem = post[thing];
//     postData += "<div class='blogpost'>";
//     postData += "<h2 class='weekly' class='text-left'>" + blogItem.blogWweek + "</h2>";
//     postData += "<p class='post'>" + blogItem.blogEntry + "</p>";
//     postData += "</div>";

//     postArea.innerHTML += postData;
// }
