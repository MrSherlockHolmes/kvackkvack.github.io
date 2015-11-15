var content = ["My name is Arthur. I prefer not to give out my last name. Online, I call myself kvackkvack.  I prefer not to give out my password.",
"This is the second page of this post."]
var current = 0;
var change, replace;

setInterval(changeContents, 1000*3.5)

function changeContents() {
  current++;
  if(current>1) {
    current=0;
  }
  change = document.getElementsByClassName('txt-content')[0];
  change.innerHTML = content[current];
}
