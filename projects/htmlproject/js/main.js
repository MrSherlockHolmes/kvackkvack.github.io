window.onload = main;
function main() {
  
  var player = new Player();
  setInterval(mainLoop, 1000/30);
  
  var body = document.body,
    html = document.documentElement;

  var screenHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  var screenWidth = Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
  var eventDoc, doc, body, mouseX, mouseY;
  function getMousePos() {
    document.onmousemove = function() {
      event = event || window.event;
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      
      mouseX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
      mouseY = event.clientY +
        (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
        (doc && doc.clientTop  || body && body.clientTop  || 0 );
  
    }
  }
  
  var el;
  function addNewElement(elem, content) {
    el = document.createElement(elem);
    el.appendChild(document.createTextNode(content));
    document.body.appendChild(el);
    return el;
  }
  
  function posElement(elem, x, y, center) {
    elem.style.position = "absolute";
    if(center) {
      elem.style.left = x-elem.offsetWidth*0.5;
      elem.style.top = y-elem.offsetHeight*1.5;
    } else {
      elem.style.left = x;
      elem.style.top = y;
    }
  }
  
  function touchingGroundPiece(x, y, width, height, piece) {
	if(x+width/2 > piece.x && x-width/2 < piece.x + piece.width && y+width/2 > piece.y && y-width/2 < piece.y + piece.height) {
	  return true;
	  console.log("pl0x")
	}
	return false;
  }
  
  function Player() {
    this.self = addNewElement("p", "player");
	this.self.id = "player";
	this.x = 45;
	this.y = 38;
	this.xvel = 0; this.yvel = 0;
  }
  
  Player.prototype.reset = function() {
	this.x = 45;
	this.y = 38;
	this.xvel = 0; this.yvel = 0;
  }
  
  function touchingEdge(x, y, width, height) {
	if(x+width/2 > screenWidth || x-width/2 < 0 || y+height/2 > screenHeight || y-height/2 < 0) {
	  return true;
	}
	return false;
  }
  
  Player.prototype.death = function() {
	if(touchingEdge(100, this.y+this.yvel, 0, this.self.offsetHeight)) {
	  this.reset();
	}
  }
  
  Player.prototype.collisionCheck = function() {
	if(touchingEdge(this.x+this.xvel, 100, this.self.offsetWidth, 0)) {
	  this.xvel = 0;
	}
	
	if(touchingGroundPiece(this.x+this.xvel, this.y+this.yvel, this.width, this.height, mainG)) {
	  this.yvel = 0;
	  this.xvel = 0;
	}
  }
  
  Player.prototype.display = function() {
	posElement(this.self, this.x, Math.max(this.y,38), true);
  }
  
  Player.prototype.run = function() {
  	this.width = this.self.offsetWidth;
	this.height = this.self.offsetHeight;
	xmove= keys['d'] - keys['a'];
	this.yvel-=0.4;
	this.yvel = Math.min(this.yvel, 5);
	this.yvel = Math.min(this.yvel, 5);
	this.xvel+=xmove*8;
	this.xvel*=0.68;
	this.death();
	this.collisionCheck();
	this.x+=this.xvel;
	this.y-=this.yvel;
	this.display();
  }
  
  
  function GroundPiece(x_, y_, width_, height_) {
	this.x = x_; this.y = y_;
	this.width = width_; this.height = height_;
	this.self = addNewElement('div', '');
	this.self.style.backgroundColor = 'rgb(245,245,245)';
	this.self.style.border = '1px solid rgb(200,200,200)';
	this.self.style.width = this.width;
	this.self.style.height = this.height;
	posElement(this.self, this.x, this.y, true);
  }
  
  mainG = new GroundPiece(screenWidth/2, screenHeight, screenWidth-40, 80)
  /*var ground = addNewElement('div', '');
  ground.style.backgroundColor = 'rgb(245,245,245)';
  ground.style.border = '1px solid rgb(200,200,200)';
  ground.style.width = screenWidth-40;
  ground.style.height = 80;
  posElement(ground, 20, screenHeight-100, false);*/
  
  function mainLoop() {
    getMousePos();
	getKeys();
    player.run();
  }
  
  var keys, key, keyPressed, pressed;
  pressed = [];
  keys = {w: false, a: false, s: false, d: false};
  
  function getKeys() {
    resetKeys();
    keyPressed = false;
	for(i=0;i<pressed.length;i++) {
	  if(keys.hasOwnProperty(pressed[i])) {
		keys[pressed[i]] = true;
	  }
	  keyPressed = true;
	}
	pressed = [];
  }
  
  document.onkeypress = function (e) {
	e = e || window.event;
	key = String.fromCharCode(e.keyCode);
	pressed.push(key);
  };
  
  var keysKeys;
  function resetKeys() {
    keysKeys = Object.keys(keys)
	for(i=0;i<keysKeys.length;i++) {
	  keys[keysKeys[i]] = false;
	}
  }
}