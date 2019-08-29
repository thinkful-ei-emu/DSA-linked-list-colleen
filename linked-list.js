class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new _Node(item, null);
    }
  }
  insertBefore(newItem, beforeNode) {
    let thisNode = this.find(beforeNode);
    if (thisNode === this.head) {
      this.insertFirst(newItem);
    }
    if (thisNode === null) {
      this.insertFirst(newItem);
    } else {
      let currentNode = this.head;
      let previousNode = this.head;

      while (currentNode !== thisNode) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = new _Node(newItem, thisNode);
    }
  }
  insertAfter(newItem, afterNode) {
    let thisNode = this.find(afterNode);
    if (thisNode === null) {
      this.insertFirst(newItem);
    } else {
      let currentNode = this.head;
      let nextNode = this.head.next;

      while (currentNode !== thisNode) {
        currentNode = currentNode.next;
        nextNode = currentNode.next;
      }
      thisNode.next = new _Node(newItem, nextNode);
    }
  }
  insertAt(newItem, position) {
    if (position === 0) {
      this.insertFirst(newItem);
    } else {
      let currentNode = this.head;
      let previousNode = this.head;
      for (let i = 0; i < position; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = new _Node(newItem, currentNode);
      // console.log(this.find(newItem));
    }
  }
  find(item) {
    let currentNode = this.head;
    if (!this.head) {
      return null;
      //as list is empty
    }
    while (currentNode.value !== item) {
      if (currentNode.next === null) {
        return null;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode !== null && currentNode.value !== item) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log("item not found");
      return;
    }
    previousNode.next = currentNode.next;
  }
}

function main() {
  let SLL = new LinkedList();
  SLL.insertFirst("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");
  SLL.insertLast("Colleen");
  //SLL.remove('squirrel')
  SLL.insertBefore("Athena", "Boomer");
  SLL.insertAfter("Hotdog", "Helo");
  SLL.insertAt("Kat", 3);
  SLL.remove("Colleen");

  return SLL;
}

//Apollo, Athena, Boomer, Kat, Helo, Hotdog, Husker, Starbuck
//#2:
let list = main();

function display(list) {
  let displayed = [];
  let currentItem = list.head;
  while (currentItem !== null) {
    displayed.push(currentItem);
    currentItem = currentItem.next;
  }
  console.log(displayed);
}
//display(list);

function size(list) {
  if (list.head === null) {
    return 0;
  }
  let counter = 0;
  let currentItem = list.head;
  while (currentItem !== null) {
    counter++;
    currentItem = currentItem.next;
  }
  console.log(counter);
  return counter;
}
//size(list);

function isEmpty(list) {
  if (list.head === null) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

function empty() {
  let empty = new LinkedList();
  return empty;
}

let emptyList = empty();

//isEmpty(emptyList);
//isEmpty(list);

function findPrevious(list, position) {
  if (position === 0) {
    console.log("No previous value from head:", list.head);
    return "No previous value from head";
  } else {
    let currentItem = list.head;
    let previousItem = list.head;
    for (let i = 0; i < position; i++) {
      previousItem = currentItem;
      currentItem = currentItem.next;
    }
    console.log(previousItem);
    return previousItem;
  }
}
function findPreviousByValue(list, value) {
  if (value === list.head.value) {
    console.log("no previous value from head");
    return "No previous value from head";
  } else {
    let currentItem = list.head;
    let previousItem = list.head;
    //  console.log(currentItem.value);
    while (currentItem.value !== value) {
      previousItem = currentItem;
      currentItem = currentItem.next;
      if (currentItem.next === null && currentItem.value !== value) {
        console.log("item not found");
        return;
      }
    }

    //console.log(previousItem);
    return previousItem;
  }
}
//findPrevious(list, 3);
//findPreviousByValue(list, "Banana");

function findLast(list) {
  if (list.head === null) {
    // console.log("empty list");
    return "list is empty";
  }
  let currentItem = list.head;
  while (currentItem.next !== null) {
    currentItem = currentItem.next;
  }
  // console.log(currentItem);
  return currentItem;
}

findLast(list);

//#4 Mystery program
/* function takes in list and sets current node to the head of the list. then 
if current is not null, it sets the next node to current--the next (current) node is then checking --while it isn't the last node in the list 
to see if there is a node following that node--if the next node (current checking) value is the same as itself--and repeating the process and if it is equal, it is 
removing the duplicate value from the list  */

function reverseList(list) {
  //algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.
  //A-B-C-D D-C-B-A

  if (list.head === null || list.head.next === null) {
    //if only one thing in list, it's 'reversed'
    return;
  } else {
    //A
    let currentNode = list.head;
    let nextNode = list.head;
    let previousNode = null;
    while (currentNode !== null) {
      nextNode = currentNode.next
      currentNode.next = previousNode
      previousNode = currentNode
      currentNode = nextNode
    }
    list.head = previousNode
  }

  display(list);
}

reverseList(list);


