console.log("what up main.js")

let blogPost = [{
    week: "Week One",
    entry: "Lorem ipsum dolor sit amet, erat praesent sed integer quis, aliquet neque ultrices condimentum blandit iaculis non, at 	in. Molestiae lorem tempor dolor nulla per, integer at imperdiet. Wisi vivamus vitae dui blandit in, hendrerit turpis. Mi leo suspendisse suspendisse lacinia tincidunt amet, sed dui feugiat venenatis parturient, aliquam sodales ullamcorper, lectus vitae justo quisque egestas ac eu, integer lectus urna viverra cras libero architecto. Ornare magna vel.",
}, {
    week: "Week Two",
    entry: "When I started ths blog, I used lorem ipsum as placeholder text. Five whole paragraphs of it. In retrospect, it was a missed oppurtunity to actually document the week to week progress I make at NSS. Going forward, that's what I'll use this for. This past week was the second week and things are progressing. I thought I had a better handle on HTML and CSS than I actually do, but that's ok. I figured out some of the mistakes I was making and I'm learning not to make them over and over again. I've also embraced the MVP ethos-- its more important that things work like they're supposed to rather than look nice. I need to continue to keep that in mind. I mean, things should still look nice, but I shouldn't waste time picking the perfect typography if the JavaScript won't run. Which brings me to my next point. JavaScript. I need to practice. I understand the concepts but putting into into practice isn't alway the easiest. I'm confident I can pick it up though. Ok. That's all for this week.",
}, {
    week: "Week Three",
    entry: "The third week is down and things are starting to gel. JavaScript is still challenging, but its starting to make sense. I'm still having trouble with some aspects, but I feel like I am making progress. As things get more complex it becomes easier to grasp the basic concepts. Its hard to explain, but its like looking at something from the next level and then finally understanding the purpose. We also were introduced to Sass, Bootstrap and Materialize. All of these make CSS styling more efficient, uniformed and, most importantly, less time consuming. I really like Sass and need to play around with Bootstrap/Materialize some more.</p><p>Git is getting easier, too. I'm not making the same mistakes I was a few weeks ago. I'm making it a point to commit more often not only because its probably a good habit to get into, but also because its giving me more exposure to the commit process. I'm staring to feel more comfortable with the process. I've also starting including markdowns in all my commits. Again, this is mostly to get in the habit of doing it-- most of the actual text is just 'here's what I did and here's what you're looking for'.</p><p>Hopefully next week's post will also be optimistic.</p>"
}, {
    week: "Week Four",
    entry: "Another week is down and things are still moving along. This week we covered IIFE's and XHR, concept that I understand but I'm still trying to figure out how to execute. Like anything else we learn, its going to take doing it over and over again in order to fully understand how the concept works.</p><p>Complete comprehension of JavaScript is still elusive, but I've been thumbing through <i>JavaScript and JQuery</i> by John Duckett and I've been finding that very helpful. It's more in-depth that W3Schools.com and more readable than MDN. When I come to something I don't understand, which is often, I go to the websites first (because its easier) and if I'm still not clear, I go right to Duckett. I haven't looked at his JQuery yet-- mostly because I don't want to confuse myself-- but I'm sure it will be just as helpful when I get there.</p><p>Last weekend, I ran into a friend of mine that is a full time programmer. He asked me how the bootcamp was going and what languages I was learning. When I mentioned JavaScript he rolled his eyes and started complaining about JS. He has a CS Degree and uses multiple programing languages on regular basis and <strong>he still finds JavaScript difficult to grasp</strong>. I took some comfort in that.</p>"
}, {
    week: "Week Five",
    entry: "Another week is down. Things are still moving suepr fast, but I think I'm grasping everything. This week we mostly worked on a group project, which ended up being really fun. It also felt like the first real web app we've built. The translator was pretty involved, but Chatty actually seemed like something you'd find on the internet. It ended up being a lot of fun.</p><p>I'm still pretty surprised how often I struggle with something only for it to start making sense when we move on to the next step. I guess it's because some of the concepts only start to make sense in a larger context. Its happened a few times before and its <i>starting</i> to happen with IIFEs and JSON. I still need to practice those.</p><p>After the projects were presented, we went a little bit deeper with NPM, Bower and Grunt. I can see how something like Grunt makes life easier because it does all the things I tend to forget about! Its not so muhc that it does all the heavy lifting, but it takes care of all the boring stuff.</p><p>We dipped our toes into JQuery this week as well, which I'm pretty excited about. I know its important to be able to read and write plain jane JavaScript, but JQuery looks so much easier. I'm sure there's a learning curve, but I'm looking forward to being able to type less words and more dollar signs.</p>"
}];

for (post in blogPost) {
    var wklyPosts =
        `<div class="blogpost">
			<h2 class="weekly" class="text-left">${blogPost[post].week}</h2>
			<article>
				<p class="post">${blogPost[post].entry}</p>
			</article>
		</div>`;


var container = document.getElementById("container");

container.innerHTML += wklyPosts;

}