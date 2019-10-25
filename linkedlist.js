
class LinkedListNode2 {
  constructor(data) {
    this.val = data;
    this.right = null;
    this.left = null;
  }
}

/*const root = new LinkedListNode2("1");
root.right = new LinkedListNode2("2");
root.right.left = new LinkedListNode2("3");*/

const root = new LinkedListNode2("F");
root.right = new LinkedListNode2("G");
root.right.right = new LinkedListNode2("I");
root.right.right.left = new LinkedListNode2("H");

root.left = new LinkedListNode2("B");
root.left.left = new LinkedListNode2("A");
root.left.right = new LinkedListNode2("D");
root.left.right.left = new LinkedListNode2("C");
root.left.right.right = new LinkedListNode2("E");







let current = root;
let outputArr = [];
let myNodeTree = [root];
let loopBreak = 0;

function printList() {
  let str = "";
  myNodeTree.forEach(function(element) {
    str += element.val + " ";
  });

  console.log(str);

}

function goLeft() {
  current = current.left;
}

function goRight() {
  current = current.right;
}

function moveUpNodeTree() {
  myNodeTree.pop();
  current = myNodeTree.slice(-1)[0];
  current.left = null;
}

function addToOutput(){
  if (!outputArr.includes(current.val)) {
    outputArr.push(current.val);
  }
}

function removeRightNode(){
  current.right = null;
}


while (myNodeTree.length >= 1) {

  while (current.left) {
    goLeft();
    myNodeTree.push(current);
  }

  addToOutput();

  console.log(outputArr);

  if (current.right) {
    console.log("right is available");
    goRight();
    myNodeTree.push(current);
    console.log(myNodeTree);
  };

  moveUpNodeTree();
  addToOutput();
  console.log(outputArr);

  if (!current.left && current.right){
    goRight();
    myNodeTree.push(current);
  }

  if (!current.left && !current.right) {
    addToOutput();
    moveUpNodeTree();
    removeRightNode();
  }

  loopBreak++;
  if (loopBreak > 10 ) {
    break;
  }

}

console.log("final outputArr");
console.log(outputArr);













