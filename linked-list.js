class LinkedList {
  constructor() {
    this.head = null;
    let length = 0;
  }
  
  append(value){
    if (this.head === null) {
      this.head = Node(value);
      length++;
      return;
    }
    let pointer = this.head;
    while (pointer.next != null) {
      pointer = pointer.next;
    }
    pointer.next = Node(value);
    length++;
  }
  
  prepend(value) {
    this.head = Node(value, this.head);
    length++;
  }

  size() {
    return length;
  }

  tail() {
    let pointer = this.head;
    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    return pointer;
  }

  at(index) {
    let pointer = this.head;
    for (let i = 0; i <= index; i++) {
      if (i === index) {
        return pointer;
      }
      if (pointer.next !== null) {
        pointer = pointer.next;
      } else {
        return "Node doesn't exist";
      }
    }
  }

  pop() {
    if (this.head === null) return;
    let pointer = this.head;
    if (length === 1) {
      this.head = null;
      length = 0;
      return;
    }
    for (let i = 0; ; i++) {
      if (i = length - 1) {
        pointer.next = null;
        length--;
        break;
      }
    }
  }

  contains(value) {
    if (this.head === null) return false;
    const values = [];
    let pointer = this.head;
    if (pointer.next === null) {
      values.push(pointer.value);
    }
    while (pointer.next !== null) {
      values.push(pointer.value);
      pointer = pointer.next;
      if (pointer.next === null) {
        values.push(pointer.value);
      }
    }
    return values.some(element => element === value);
  }

  find(value) {
    let pointer = this.head;
    let size = this.size();
    for (let i = 0; i <= size - 1; i++) {
      if (pointer.value === value) return i;
      pointer = pointer.next;
    }
    return null;
  }

  toString() {
    if (this.head === null) return '( null )';
    const values = [];
    let pointer = this.head;
    if (pointer.next === null) {
      values.push(pointer.value);
    }
    while (pointer.next !== null) {
      values.push(pointer.value);
      pointer = pointer.next;
      if (pointer.next === null) {
        values.push(pointer.value);
      }
    }
    let string = '';
    values.forEach(value => {
      string += `( ${value} ) -> `
    });
    return string + '( null )';
  }
}

function Node(fn = null, next = null) {
  return {
    value: fn,
    next: next,
  }
}

const list = new LinkedList;