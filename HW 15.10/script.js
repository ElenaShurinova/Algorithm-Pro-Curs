

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove(index) {
        if (index < 0 || this.head === null) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let previous = null;
        let i = 0;
        while (current !== null && i < index) {
            previous = current;
            current = current.next;
            i++;
        }
        if (current !== null) {
            previous.next = current.next;
        }
    }

    get(index) {
        if (index < 0) {
            return null;
        }
        let current = this.head;
        let i = 0;
        while (current !== null) {
            if (i === index) {
                return current.data;
            }
            current = current.next;
            i++;
        }
        return null;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
const list = new MyLinkedList();
list.add(10);
list.add(20);
list.add(30);

console.log(list.get(1)); // 20
console.log(list.size()); // 3
list.remove(1);
console.log(list.get(1)); // 30
console.log(list.size()); // 2



class MyLinkedList {
    constructor() {
        this.head = null;
    }

  /////////////////////////////////////////////////////////////////////////////

    createLoop(index) {
        if (index < 0) {
            return;
        }
        let loopNode = null;
        let current = this.head;
        let i = 0;
        while (current !== null) {
            if (i === index) {
                loopNode = current;
            }
            if (current.next === null) {
                current.next = loopNode;
                return;
            }
            current = current.next;
            i++;
        }
    }

    detectLoop() {
        let slow = this.head;
        let fast = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }
}

//////////////////////////////////////////////////////////////////////////
const list1 = new MyLinkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(40);

list.createLoop(1); // Создаем петлю, где 40 указывает на 20

console.log(list.detectLoop()); // true



class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    remove(index) {
        if (index < 0 || this.head === null) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            if (this.head !== null) {
                this.head.prev = null;
            } else { this.tail = null;
            }
            return;
        }
        let current = this.head;
        let i = 0;
        while (current !== null && i < index) {
            current = current.next;
            i++;
        }
        if (current !== null) {
            if (current.next !== null) {
                current.next.prev = current.prev;
            } else {
                this.tail = current.prev;
            }
            if (current.prev !== null) {
                current.prev.next = current.next;
            }
        }
    }

    get(index) {
        if (index < 0) {
            return null;
        }
        let current = this.head;
        let i = 0;
        while (current !== null) {
            if (i === index) {
                return current.data;
            }
            current = current.next;
            i++;
        }
        return null;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }
}


const list2 = new MyDoublyLinkedList();
list.add(10);
list.add(20);
list.add(30);

console.log(list.get(1)); // 20
console.log(list.size()); // 3
list.remove(1);
console.log(list.get(1)); // 30
console.log(list.size()); // 2

