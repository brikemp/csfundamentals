const Node = require('./node.js')

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(element) {
        let node = new Node(element);
        let current = this.head;

        if (current == null) {
            this.head = node;
        } else {
            while (current.next) {
                current = current.next
            }

            current.next = node
        }

    }

    delete(element) {
        let current = this.head;

        if (this.head == element) {
            this.head = null;
        } else {
            while (current.next.data != element) {
                current = current.next
            }
        }

        current.next = current.next.next;
    }

    printList() {
        let current = this.head;
        let string = "";

        while (current) {
            string += current.data + " ";
            current = current.next;
        }

        console.log(string)
    }

    kth_from_last(k) {
        let current = this.head;
        let check = this.head;

        for (let i = 0; i < k-1; i++)  { 
            check = check.next;
            if (check == null) {
                if (i < k - 1) {
                    return "Not enough nodes";
                }
                return current.data;
            }
        } 

        while (check.next != null) {
            check = check.next;
            current = current.next;
        }

        return current.data;
    }
}

module.exports = LinkedList;

let myList = new LinkedList();

myList.add(1);
myList.add(2);
myList.add(3);
myList.add(4);
myList.add(5);

myList.printList();
console.log("");

console.log("Find 2nd from end: ", myList.kth_from_last(2));
console.log("Find 3rd from end: ", myList.kth_from_last(3));
console.log("Find 5th from end: ", myList.kth_from_last(5));
console.log("Find 6th from end: ", myList.kth_from_last(6));
console.log("Find 8th from end: ", myList.kth_from_last(8), "\n");

console.log("Delete 3: ")
myList.delete(3);
myList.printList();