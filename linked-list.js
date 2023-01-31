class LinkedList {
  #HEAD = null;
  #length = 0;

  append(value){
    if (!value) return;
    if (this.#HEAD === null) {
      this.#HEAD = Node(value);
      this.#length++;
      return;
    }
    let pointer = this.#HEAD;
    while (pointer.next != null) {
      pointer = pointer.next;
    }
    pointer.next = Node(value);
    this.#length++;
  }
  
  at(index) {
    let pointer = this.#HEAD;
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
    if (this.#HEAD === null) return false;
    const values = [];
    let pointer = this.#HEAD;
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
    let pointer = this.#HEAD;
    let size = this.#length;
    for (let i = 0; i <= size - 1; i++) {
      if (pointer.value === value) return i;
      pointer = pointer.next;
    }
    return "Not found";
  }

  head() {
    return this.#HEAD;
  }

  insertAt(value, index) {
    if (!value) return;
    if (index === 0) {
      this.#HEAD = Node(value, this.#HEAD);
      this.#length++;
      return;
    }
    if (index === this.#length) {
      const tail = this.tail();
      tail.next = Node(value);
      this.#length++;
      return;
    }
    let pointer = this.#HEAD.next;
    let previous = this.#HEAD;
    let next = this.#HEAD.next.next;
    for (let i = 1; ; i++) {
      if (i === index) {
        pointer = Node(value, pointer);
        previous.next = pointer;
        this.#length++;
        break;
      }
      if (pointer.next === null) {
        return "Index doesn't exist"
      }
      previous = pointer;
      pointer = pointer.next;
      next = pointer.next;
    }
  }

  pop() {
    if (this.#HEAD === null) return;
    let pointer = this.#HEAD;
    const length = this.#length;
    if (length === 1) {
      this.#HEAD = null;
      this.#length = 0;
      return;
    }
    for (let i = 0; ; i++) {
      if (i = length - 1) {
        pointer.next = null;
        this.#length--;
        break;
      }
    }
  }

  prepend(value) {
    if (!value) return;
    this.#HEAD = Node(value, this.#HEAD);
    this.#length++;
  }

  removeAt(index) {
    if (index >= this.#length) return "Index doesn't exist";
    if (index === 0) {
      this.#HEAD = this.#HEAD.next;
      this.#length--;
      return;
    }
    let pointer = this.#HEAD.next;
    let previous = this.#HEAD;
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
    let pointer = this.#HEAD;
    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    return pointer;
  }

  toString() {
    if (this.#HEAD === null) return '( null )';
    const values = [];
    let pointer = this.#HEAD;
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

function Node(value, next = null) {
  return {
    value,
    next,
  }
}

// const list = new LinkedList;
