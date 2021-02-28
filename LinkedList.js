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
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(insertItem, value) {
    let currentNode = this.head;

    while (value !== currentNode.next.value) {
      currentNode = currentNode.next;
    }
    let findValue = this.find(value);

    currentNode.next = new _Node(insertItem, findValue);
  }

  insertAfter(insertItem, value) {
    let findValue = this.find(value);
    let tempNext = findValue.next;
    findValue.next = new _Node(insertItem, tempNext);
  }

  insertAt(insertItem, position) {
    let currentNode = this.head;
    let count = 0;

    while (currentNode.next !== null) {
      count++;
      if (count === position) {
        this.insertBefore(insertItem, currentNode.value);
      }
      currentNode = currentNode.next;
    }
  }

  find(item) {
    let currentNode = this.head;
    if (!this.head) {
      return null;
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
      console.log('Item not found');
      return;
    }
    previousNode.next = currentNode.next;
  }
}

module.exports = LinkedList;
// module.exports = _Node;
