
var content = [["My name is Arthur. I prefer not to give out my last name. Online, I call myself kvackkvack.  I prefer not to give out my password.",
"I'm a 12 year old boy. I love programming. I like a lot of things. I dislike about the same amount of things. I made this website, mostly to host any JS projects I decide to make."]]
var current = 0;
var changeElem, replace;
var op, timer;
var maintimer;
var elements;

maintimer = setInterval(mainloop, 1000*6)

function mainloop() {
  console.log("main");
  current++;
  if(current>1) {
    current=0;
  } else if(current<0) {
    current=1;
  }
  change(0, content[0], current);
}

window.onload = function() {
  resetNav(0);
}

function change(elemindx, contents, indx) {
  resetNav2(elemindx, function() {}, function() {})
  changeElem = $('.text-content').eq(elemindx);
  //changeElem = document.getElementsByClassName('text-content')[elemindx];
  changeElem.fadeOut(400, function() {
    changeElem.text(contents[indx]);
    changeElem.fadeIn(400, function() {
      //changeElem = document.getElementsByClassName('indexnav')[elemindx];
      changeElem = $('.indexnav').eq(elemindx);
      changeElem.replaceWith("<h3 class=\"indexnav\"><span class=\"prev\"> < </span>" + String(indx+1) + "/" + String(contents.length) + "<span class=\"next\"> > </span></h3>");
      resetNav(elemindx)
    })
  })
}

function next(indx) {
  current++;
  if(current>1) {
    current=0;
  }
  change(indx, content[indx], current);
  maintimer = setInterval(mainloop, 1000*6)
}

function prev(indx) {
  current--;
  if(current<0) {
    current=1;
  }
  change(indx, content[indx], current);
  maintimer = setInterval(mainloop, 1000*6)
}

function resetNav(indx) {
  $('.next').eq(indx).click(function() {
    next(indx);
  });
  $('.prev').eq(indx).click(function() {
    prev(indx);
  });
}

function resetNav2(indx, next, prev) {
  $('.next').eq(indx).click(next);
  $('.prev').eq(indx).click(prev);
}
