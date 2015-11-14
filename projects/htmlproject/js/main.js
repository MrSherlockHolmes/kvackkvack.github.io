window.onload = main;
function main() {
  var p = addNewElement("p", "player");
  p.id = "player";
  
  setInterval(mainLoop, 1000/30);
  
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
  
  function mainLoop() {
    p.style.color = "blue";
    p.style.position = "absolute";
    getMousePos();
    console.log(mouseX + " : " + mouseY);
    p.style.left = mouseX; 
    p.style.top = mouseY;
  }
  
}
