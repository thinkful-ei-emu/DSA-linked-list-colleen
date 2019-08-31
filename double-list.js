class _Node {
  constructor(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev
  }
}

class dLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  insertFirst(item){
    let newNode = new _Node(item, this.head, null)
    if(this.head !== null){
      this.head.prev = newNode
    }
    this.head = newNode;
    if(this.tail === null){
      this.tail = newNode;
    }
  }

  insertLast(item){
    
    let newNode = new _Node(item, null, this.tail)
    if(this.tail !== null){
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if(this.head === null){
      this.head = newNode;
    }
  }
 /*  insertBefore(newItem, beforeNode){
    if (this.head === null){
      this.insertFirst(newItem)
    }
    let currentNode = this.head
    while(currentNode.value !== beforeNode.value){
      currentNode = currentNode.next;
    }
    currentNode = new _Node(newItem, currentNode.next, currentNode.prev.prev)
  } */
  insertAfter(newItem, prevItem){
    let currentNode = this.head
    while(currentNode.value !== prevItem){
      if(currentNode === null){
        console.log('item not found')
        return;
      }
      currentNode = currentNode.next;
    }
    if(currentNode === this.last){
      this.insertLast(newItem)
    }
    else{
      let newNode = new _Node(newItem, currentNode.next, currentNode);
      newNode.next = currentNode.next;
      newNode.prev = currentNode;
      currentNode.next.prev = newNode;
      currentNode.next = newNode;
    }
  }
  remove(item){
    if(!this.head){
      return null
    }
    let currentNode = this.head
    while(currentNode.value !==item){
      currentNode = currentNode.next;
      if(currentNode === null){
        console.log('item isn not on list')
        return null
      }
    }
    if (currentNode === this.head){
      this.head = currentNode.next;
    } else {
      currentNode.next.prev = currentNode.prev
    }
  }
}
function mainDLL(){
  let list = new dLinkedList()
  list.insertFirst('Aquaria')
  list.insertLast('Caprica')
  list.insertLast('Gemenon')
  list.insertLast('Picon')
  list.insertLast('Sagittaron')
  return list
}
let starList = mainDLL()

displayList(starList)
/* let list = new dLinkedList()

list.insertFirst('A')
list.insertFirst('B')
list.insertFirst('C')
list.insertFirst('D') */

/* list.insertLast('D')
list.insertAfter('B', 'A')
list.insertBefore('C', 'B') */

//console.log(list)

function displayList(list){
  let currNode = list.head
  while(currNode !== null){
    console.log(currNode.value)
    currNode = currNode.next;
  }
}

function size(list){
  let counter = 0
  let currentNode = list.head
  if (!currentNode){
    return counter
  }
  else 
  counter ++;
  while(currentNode.next !== null){
    counter++
    currentNode = currentNode.next
  }
  return counter;
}
//A B C D
//A 
//temp B
// next= null
// prev--b
//current node - b
// b a c d
function reverseDLL(list){
  let currentNode = list.head
  let tempNode = null
  while (currentNode !==null){
    tempNode = currentNode.next; //a  
    currentNode.next = currentNode.prev;
    currentNode.prev = tempNode; //b
    currentNode = tempNode
  }
  tempNode=list.head
  list.head=list.tail
  list.tail=tempNode

}
reverseDLL(starList)
displayList(starList)