

// Everything works below for the abcdefghi test



/*const root = new LinkedListNode2("1");
root.left = new LinkedListNode2("4");
root.left.left = new LinkedListNode2("2");
root.right = new LinkedListNode2("3"); */

/*const root = new LinkedListNode2("1");
root.right = new LinkedListNode2("2");
root.right.left = new LinkedListNode2("3"); */



class LinkedListNode2 {
  constructor(data) {
    this.val = data;
    this.right = null;
    this.left = null;
  }
}


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

function goLeft() {
  current = current.left;
  myNodeTree.push(current);
}

function goRight() {
  current = current.right;
  myNodeTree.push(current);
}

function moveUpNodeTree() {
  myNodeTree.pop();
  current = myNodeTree.slice(-1)[0];
  if (current) {
    current.left = null;
  }
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
  }

  addToOutput();

  if (current.right) {
    goRight();
  };

  moveUpNodeTree();
  if (current) {
    addToOutput();
  }

  if (current && !current.left && current.right){
    goRight();
  }

  if (current && !current.left && !current.right) {
    addToOutput();
    moveUpNodeTree();
    removeRightNode();
  }

}

console.log("final outputArr");
console.log(outputArr);









// only add to output when there's no left? ???

// add A . NO LEFT. Move UP Remove A.
// add B. NO LEFT. Move RIGHT.
// add C. NO LEFT. No RIGHT. MOVE UP. Remove C.
// add D. NO LEFT. 



