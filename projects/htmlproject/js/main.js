window.onload = main;
function main() {
  addNewElement("p", "player");
  
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
  
  var el;
  function addNewElement(elem, content) {
    el = document.createElement(elem);
    el.id = id||null;
    el.class = class||null;
    el.appendChild(document.createTextNode(content));
    document.body.appendChild(el);
    return el;
  }
  
}
