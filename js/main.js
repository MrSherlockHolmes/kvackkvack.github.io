var cookiesEnabled = true;
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

window.onload = function() {
	$('#cookies').hide();
	$('#cookies').css("opacity", "");
    if(readCookie("cookiesenabled") != "true") {
	  cookiesEnabled = false;
	  $('#cookies').fadeIn(1400);
	} else {
	  makeCookie("cookiesenabled", "true", 60*60*24*10);
	}

    $('#cookies_ok').click(function() {
	  $('#cookies').fadeOut();
	  cookiesEnabled = true;
	  makeCookie("cookiesenabled", "true", 60*60*24*10);
	})

	$('#cookies_no').click(function() {
	  $('#cookies').fadeOut();
	})

	var darkmode = 0;
	var text;
    if(readCookie("darkmodeon") == "true") {
	  makeCookie("darkmodeon", "true", 60*60*24*10);
	  darkmode = 1;
	  text = darkmode?"ON":"OFF";
	  $('#darkmode').text("Dark Mode : " + text);
	  $('body').addClass('dark-mode');
	} else {
	  makeCookie("darkmodeon", "false", 60*60*24*10);
	  darkmode = 0;
	  text = darkmode?"ON":"OFF";
	  $('#darkmode').text("Dark Mode : " + text);
	  $('body').removeClass('dark-mode');
	}

	$('#darkmode').click(function() {
	  darkmode = (darkmode+1) % 2;
	  text = darkmode?"ON":"OFF";
	  $('#darkmode').text("Dark Mode : " + text);
	  if(darkmode) {
		$('body').addClass('dark-mode');
		makeCookie("darkmodeon", "true", 60*60*24*10);
	  } else {
		$('body').removeClass('dark-mode');
		makeCookie("darkmodeon", "false", 60*60*24*10);
	  }
	});


	var alternatecss = 0;

	if(readCookie("alternatecss") == "true") {
	  makeCookie("alternatecss", "true", 60*60*24*10);
	  alternatecss = 1;
	  text = alternatecss?"ON":"OFF";
	  $('#alternatecss').text("Alternate CSS : " + text);
	  $("link").attr('href', '/css/alternate.css')
	} else {
	  makeCookie("alternatecss", "false", 60*60*24*10);
	  alternatecss = 0;
	  text = alternatecss?"ON":"OFF";
	  $('#alternatecss').text("Alternate CSS : " + text);
	  $("link").attr('href', '/css/main.css')
	}

	$('#alternatecss').click(function() {
	  alternatecss = (alternatecss+1) % 2;
	  text = alternatecss?"ON":"OFF";
	  $("#alternatecss").text("Alternate CSS : " + text);
	  if(alternatecss) {
		$("link").attr('href', '/css/alternate.css')
		makeCookie("alternatecss", "true", 60*60*24*10);
	  } else {
		$("link").attr('href', '/css/main.css')
		makeCookie("alternatecss", "false", 60*60*24*10);
	  }
	})
};

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

var domain_string;
function makeCookie(name, value, lifespan, path) {
  if(cookiesEnabled) {
	  domain_string = path ? ("; domain=" + path) : '' ;
	  document.cookie = name + "=" + encodeURIComponent(value) +
		                "; max-age=" + lifespan +
		                "; path=/" + domain_string ;
  }
}

var cookie_string, cookie_value;
function readCookie(cookie_name) {
  cookie_string = document.cookie;
  cookies = cookie_string.split(' ');
  if (cookie_string.length != 0) {
	for(i=0;i<cookies.length;i++) {
	  cookie_value = cookies[i].match( '(^|;)[\s]*' + cookie_name + '=([^;]*)' );
	  if(cookie_value!=null) {
		return decodeURIComponent(cookie_value[2]);
	  }
	}
  }
  return '' ;
}
