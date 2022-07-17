class _Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  #head;
  #rear;
  constructor(val = null) {
    this.#head = null;
    this.#rear = null;
    this.size = 0;
    if (val !== null) {
      this.push(val);
    }
  }
  front = () => {
    this.#head === null ? null : this.#head.value;
  };
  back = () => {
    this.#rear === null ? null : this.#rear.value;
  };
  push = (val) => {
    const newNode = new _Node(val);
    this.size++;
    if (this.#head === null) {
      this.#head = newNode;
      this.#rear = newNode;
      return;
    }
    this.#rear.next = newNode;
    this.#rear = newNode;
  };
  pop = () => {
    if (this.#head === null) return;
    let temp = this.#head;
    this.#head = this.#head.next;
    temp = null;
    this.size--;
  };
  show() {
    let _head = this.#head;
    const arr = [];
    while (_head !== null) {
      arr.push(_head.value);
      _head = _head.next;
    }
    console.log("(" + this.size + ")", arr);
  }
}

module.exports = Queue;
