class _Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

export class Stack {
  constructor(val = null) {
    this.head = null;
    this.rear = null;
    this.size = 0;
    if (val !== null) {
      this.push(val);
    }
  }
  push = (val) => {
    const newNode = new _Node(val);
    this.size++;
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  };
  pop = () => {
    if (this.head === null) return;
    let temp = this.head;
    this.head = this.head.next;
    temp = null;
    this.size--;
  };
  show() {
    let _head = this.head;
    const arr = [];
    while (_head !== null) {
      arr.push(_head.value);
      _head = _head.next;
    }
    console.log("(" + this.size + ")", arr);
  }
}
