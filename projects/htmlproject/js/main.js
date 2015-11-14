window.onload = main;
function main() {
  var p = document.createElement("p");
  p.id = 'player'
  p.appendChild(document.createTextNode("player"));
  document.body.appendChild(p);
  p = document.getElementById('player');
  
  var eventDoc, doc, body, mouseX, mouseY;
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
  p.position(mouseX,mouseY);
  
}
