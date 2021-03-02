class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    //if stack is empty, node will be the top of the stack
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    //if the stack already has something, create a new node
    //add data to the new node and have the pointer point to the top
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    // in order to remove the top of the stack,
    // you have to point the pointer to the next item
    // and that next item becomes the top of the stack

    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

module.exports = Stack;
