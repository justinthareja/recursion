// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var matchedNodes = [];

  // define a checker function that takes a node and pushes any matches to matchedNodes
  function classCheck (node) {
    
    // traverse the whole dom and call classCheck on each child
    for (var i = 0; i < node.children.length; i++)  {
      if (node.children[i].classList.contains(className)) {
        matchedNodes.push(node.children[i]);
      }
      if (node.children[i].hasChildNodes()) {
        classCheck(node.children[i]);
      }
    }
  }

  classCheck(document);
  return matchedNodes;
};

