class LinkedList {
  #head = null;

  #length = 0;

  append(value) {
    if (!value) return;
    if (this.#head === null) {
      this.#head = Node(value);
      this.#length++;
      return;
    }
    let pointer = this.#head;
    while (pointer.next != null) {
      pointer = pointer.next;
    }
    pointer.next = Node(value);
    this.#length++;
  }

  at(index) {
    let pointer = this.#head;
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

  contains(value) {
    if (this.#head === null) return false;
    const values = [];
    let pointer = this.#head;
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
    let pointer = this.#head;
    let size = this.#length;
    for (let i = 0; i <= size - 1; i++) {
      if (pointer.value === value) return i;
      pointer = pointer.next;
    }
    return 'Not found';
  }

  head() {
    return this.#head;
  }

  insertAt(value, index) {
    if (!value) return;
    if (index === 0) {
      this.#head = Node(value, this.#head);
      this.#length++;
      return;
    }
    if (index === this.#length) {
      const tail = this.tail();
      tail.next = Node(value);
      this.#length++;
      return;
    }
    let pointer = this.#head.next;
    let previous = this.#head;
    for (let i = 1; ; i++) {
      if (i === index) {
        pointer = Node(value, pointer);
        previous.next = pointer;
        this.#length++;
        break;
      }
      if (pointer.next === null) {
        return "Index doesn't exist";
      }
      previous = pointer;
      pointer = pointer.next;
    }
  }

  pop() {
    if (this.#head === null) return;
    const length = this.#length;
    if (length === 1) {
      this.#head = null;
      this.#length = 0;
      return;
    }
    let pointer = this.#head;
    for (let i = 1; i <= length; i++) {
      if (i === length - 1) {
        pointer.next = null;
        this.#length--;
        break;
      }
      pointer = pointer.next;
    }
  }

  prepend(value) {
    if (!value) return;
    this.#head = Node(value, this.#head);
    this.#length++;
  }

  removeAt(index) {
    if (index >= this.#length) return "Index doesn't exist";
    if (index === 0) {
      this.#head = this.#head.next;
      this.#length--;
      return;
    }
    let pointer = this.#head.next;
    let previous = this.#head;
    for (let i = 1; i <= this.#length - 1; i++) {
      if (i === index) {
        previous.next = pointer.next;
        this.#length--;
        break;
      }
      previous = pointer;
      pointer = pointer.next;
    }
  }

  size() {
    return this.#length;
  }

  tail() {
    let pointer = this.#head;
    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    return pointer;
  }

  toString() {
    if (this.#head === null) return '( null )';
    const values = [];
    let pointer = this.#head;
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
    return `${string} ( null )`;
  }
}

function Node(value, next = null) {
  return {
    value,
    next,
  };
}

// const list = new LinkedList;
