var content = ["My name is Arthur. I prefer not to give out my last name. Online, I call myself kvackkvack.  I prefer not to give out my password.",
"This is the second page of this post."]
var current = 0;
var change, replace;
console.log("k");

setInterval(changeContents, 1000*3.5)

function changeContents() {
  console.log("working");
  current++;
  if(current>1) {
    current=0;
  }
  change = document.getElementById('hi');
  change.removeChild(change.childNodes[3]);
  change.removeChild(change.childNodes[2]);
  replace = document.createElement('p');
  replace.appendChild(document.createTextNode("Hi! :)"));
  change.appendChild(replace);
}
