var content = ["My name is Arthur. I prefer not to give out my last name. Online, I call myself kvackkvack.  I prefer not to give out my password.",
"This is the second page of this post."]
var current = 0;
var change;

setInterval(1000*3.5, function() {
  current++;
  if(current>1) {
    current=0;
  }
  change = document.getElementById('hi');
  change.innerHTML = content[current];
})
