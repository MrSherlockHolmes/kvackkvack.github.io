
var content = [["My name is Arthur. I prefer not to give out my last name. Online, I call myself kvackkvack.  I prefer not to give out my password.",
"I'm a 12 year old boy. I love programming. I like a lot of things. I dislike about the same amount of things. I made this website, mostly to host any JS projects I decide to make."]]
var current = 0;
var changeElem, replace;
var op, timer;
var maintimer;
var elements;

setInterval(mainloop, 1000*6)

function mainloop() {
  current++;
  if(current>1) {
    current=0;
  } else if(current<0) {
    current=1;
  }
  change(0, content[0], current);
}

function change(elemindx, contents, indx) {
  changeElem = $('.text-content').eq(elemindx);
  changeElem.fadeOut(400, function() {
    changeElem.text(contents[indx]);
    changeElem.fadeIn(400, function() {
      changeElem = $('.indexnav').eq(elemindx);
      changeElem.replaceWith("<h3 class=\"indexnav\">" + String(indx+1) + "/" + String(contents.length) + "</h3>");
    })
  })
}
