
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("div.target");
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('.ranked-list')
   for (let i = 0, length = rankedList.length; i < length; i++) {
     let children = rankedList[i].children;
      for (let l = 0, j = children.length; l < j; l++) {
        children[j].innerHTML = parseInt(children[l].innerHTML)+n
      }
   }
}
