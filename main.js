// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class Node {
  constructor(value){
    this.value=value;
    this.next= null;
  }
}

class LinkedList {
  constructor(value){
    this.head={
      value:value,
      next: null
    }
    this.tail = this.head;
    this.length = 1
  }

  printList(){
    const arr = new Array()
    let currentNode = this.head;
    while(currentNode !== null){
      arr.push(currentNode.value);
      currentNode = currentNode.next
    }
    return arr
  }
  append(value){
    const newNode = new Node(value)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this
  }


  prepend(value){
     const newNode = new Node(value)
    newNode.next = this.head
    this.head =newNode;
    this.length++;
    return this;
  }


  insert(index,value){
    if(index>=this.length){
       return this.append(value)
    }
    const newNode = new Node(value)
    const leader = this.traverseToIndex(index-1)
    const holdingPoint = leader.next
    leader.next = newNode;
    newNode.next = holdingPoint;
    this.length++;
    return this.printList()
  }

  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head
    while(counter != index){
      currentNode =this.head.next;
      counter++
    }return currentNode
  } 
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(7);
myLinkedList.prepend(17);
myLinkedList.insert(1,2)



