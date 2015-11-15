var content = ["My name is Arthur. I prefer not to give out my last name. Online, I call myself kvackkvack.  I prefer not to give out my password.",
"This is the second page of this post."]
var current = 0;
var change, replace;
var op, timer;

setInterval(changeContents, 1000*3.5)

function changeContents() {
  current++;
  if(current>1) {
    current=0;
  }
  change = document.getElementsByClassName('text-content')[0];
  fadeOut(change, function() {
    change.innerHTML = content[current];
    fadeIn(change, function() {
    })
  });
  
  function fadeOut(element, finished) {
    op = 1;
    timer = setInterval(function() {
      if(op < 0.1) {
        clearInterval(timer);
        finished();
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op-=0.1;
    }, 75)
  }
  
  function fadeIn(element, finished) {
    op = 0.1;
    timer = setInterval(function() {
      if(op >= 1) {
        clearInterval(timer);
        finished();
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op+=0.1;
    }, 75)
  }
}
