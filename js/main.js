window.onload = function() {
  var content = [["My name is Arthur. I prefer not to give out my last name. Online, I call myself kvackkvack.  I prefer not to give out my password.",
  "I'm a 12 year old boy. I love programming. I like a lot of things. I dislike about the same amount of things. I made this website, mostly to host any JS projects I decide to make."]]
  var current = 0;
  var changeElem, replace;
  var op, timer;
  var maintimer;
  var elements;
  console.log("latest0");
  
  maintimer = setInterval(changeContents, 1000*6)
  
  window.onload = function() {
    document.getElementsByClassName('next')[0].onclick = function() {
      next(0);
    }
      
    document.getElementsByClassName('prev')[0].onclick = function() {
      prev(0);
    }
  }
  
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
  
  function change(elemindx, contents, indx) {
    console.log("change");
    changeElem = document.getElementsByClassName('text-content')[elemindx];
    fadeOut(changeElem, function() {
      changeElem.innerHTML = contents[indx];
      fadeIn(changeElem, function() {
        maintimer = setInterval(changeContents, 1000*6);
        changeElem = document.getElementsByClassName('indexnav')[elemindx];
        changeElem.innerHTML = "<span class=\"prev\"> < </span>" + String(indx+1) + "/" + String(contents.length) + "<span class=\"next\"> > </span>";
        document.getElementsByClassName('next')[elemindx].onclick = function() {
          next(elemindx);
        }
        document.getElementsByClassName('prev')[elemindx].onclick = function() {
          prev(elemindx);
        }
      })
    })
  }
  
  function next(indx) {
    console.log("next!");
    current++;
    if(current>1) {
      current=0;
    }
    change(indx, content[indx], current);
  }
  
  function prev(indx) {
    console.log("prev!");
    current--;
    if(current<0) {
      current=1;
    }
    change(indx, content[indx], current);
  }
  
  function changeContents() {
    console.log("change contents");
    current++;
    if(current>1) {
      current=0;
    }
    change(0, content[0], current);
  }
}
