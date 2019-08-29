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
  insertBefore(newItem, beforeNode){
    let thisNode = this.find(beforeNode)
    if(thisNode === this.head){
      this.insertFirst(newItem)
    }
    if(thisNode === null){
      this.insertFirst(newItem)
    }
    else {
      let currentNode = this.head;
      let previousNode = this.head;
      
      while(currentNode !== thisNode){
        previousNode = currentNode
        currentNode = currentNode.next;
      }
      previousNode.next = new _Node(newItem, thisNode)
      console.log(previousNode.next)
      
    }
  }
  insertAfter(newItem, afterNode){
    let thisNode = this.find(afterNode)
    if(thisNode === null){
      this.insertFirst(newItem)
    }
    else {
      let currentNode = this.head
      let nextNode = this.head.next

      while(currentNode !==thisNode){
        currentNode = currentNode.next
        nextNode = currentNode.next
      }
      thisNode.next = new _Node(newItem, nextNode)
      console.log(thisNode)
      console.log(thisNode.next)
    }
  }
  insertAt(newItem, position){
    if(position === 0){
      this.insertFirst(newItem)
    }
    else{
      let currentNode = this.head
      for(let i=0; i < position; i++){
        currentNode = currentNode.next
      }
      console.log(currentNode)
      this.insertBefore(newItem, currentNode.value)
      console.log(this.find(newItem))
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
  SLL.insertLast('Colleen');
  SLL.remove('squirrel')
  SLL.insertBefore('Athena', 'Boomer')
  SLL.insertAfter('Hotdog', 'Helo')
  SLL.insertAt('Kat', 3)
  SLL.remove('Colleen')
}

main();
