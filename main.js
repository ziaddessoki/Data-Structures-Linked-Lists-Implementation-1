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
    const leader = this.lookup(index-1)
    const holdingPoint = leader.next
    leader.next = newNode;
    newNode.next = holdingPoint;
    this.length++;
    return this.printList()
  }

  lookup(index){
    let counter = 0;
    let currentNode = this.head
    while(counter != index){
      currentNode =this.head.next;
      counter++
    }return currentNode
  } 

  remove(index){
    const leader = this.lookup(index-1)
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList()
  }

  reverse(){
    if(!this.head.next){return this}
    let first = this.head;
    this.tail =this.head
    let second = first.next

    while(second){
      let temp = second.next;
      second.next = first;
      first = second;
      second =temp
    }
    this.head.next =null;
    this.head =first
    return this.printList()
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(7);
myLinkedList.prepend(17);
myLinkedList.insert(1,2);
myLinkedList.remove(1)
myLinkedList.reverse()




class DoublyNode {
  constructor(value){
    this.value=value;
    this.next= null;
    this.perv = null;
  }
}

class DoublyLinkedList {
  constructor(value){
    this.head={
      value:value,
      next: null,
      perv: null
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
    newNode.perv = this.tail
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this
  }


  prepend(value){
     const newNode = new Node(value)
    newNode.next = this.head
    this.head.perv= newNode 
    this.head =newNode;
    this.length++;
    return this;
  }


  insert(index,value){
    if(index>=this.length){
       return this.append(value)
    }
    const newNode = new Node(value)
    const leader = this.lookup(index-1)
    const follower = leader.next
    leader.next = newNode;
    newNode.next = follower;
    follower.perv = newNode
    newNode.perv = leader
    this.length++;
    return this.printList()
  }

  lookup(index){
    let counter = 0;
    let currentNode = this.head
    while(counter != index){
      currentNode =this.head.next;
      counter++
    }return currentNode
  } 

  remove(index){
    const leader = this.lookup(index-1)
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList()
  }
}

// let myLinkedList2 = new DoublyLinkedList(10);
// myLinkedList2.append(5);
// myLinkedList2.append(16);
// myLinkedList2.append(7);
// myLinkedList2.prepend(17);
// myLinkedList2.printList()
// myLinkedList2.insert(1,2);
// myLinkedList2.remove(1)
// myLinkedList2.remove(1)



