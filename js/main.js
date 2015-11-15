
var content = [["My name is Arthur. I prefer not to give out my last name. Online, I call myself kvackkvack.  I prefer not to give out my password.",
"I'm a 12 year old boy. I love programming. I like a lot of things. I dislike about the same amount of things. I made this website, mostly to host any JS projects I decide to make."]]
var current = 0;
var changeElem, replace;
var op, timer;
var maintimer;
var elements;

maintimer = setInterval(function() {
  current++;
  if(current>1) {
    current=0;
  } else if(current<0) {
    current=1;
  }
  change(0, content[0], current);
}, 1000*6)

window.onload = function() {
  $('.next').eq(0).onclick = function() {
    next(0);
  }
  $('.prev').eq(0).onclick = function() {
    prev(0);
  }
}

function change(elemindx, contents, indx) {
  changeElem = $('.text-content').eq(elemindx);
  //changeElem = document.getElementsByClassName('text-content')[elemindx];
  changeElem.fadeOut(400, function() {
    changeElem.text(contents[indx]);
    changeElem.fadeIn(400, function() {
      maintimer = setInterval(changeContents, 1000*6);
      //changeElem = document.getElementsByClassName('indexnav')[elemindx];
      changeElem = $('.indexnav').eq(elemindx);
      changeElem.replaceWith("<span class=\"prev\"> < </span>" + String(indx+1) + "/" + String(contents.length) + "<span class=\"next\"> > </span>");
      $('.next').eq(elemindx).onclick = function() {
        next(elemindx);
      }
      $('.prev').eq(elemindx).onclick = function() {
        prev(elemindx);
      }
    })
  })
}

function next(indx) {
  current++;
  if(current>1) {
    current=0;
  }
  change(indx, content[indx], current);
}

function prev(indx) {
  current--;
  if(current<0) {
    current=1;
  }
  change(indx, content[indx], current);
}

