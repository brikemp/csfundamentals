const Node = require('./node.js/index.js')

class LinkedList { 
    constructor() 
    { 
        this.head = null; 
        this.size = 0; 
    } 
  
    // functions to be implemented 
    add(element) 
    { 
        // creates a new node 
        var node = new Node(element); 
      
        // to store current node 
        var current; 
      
        // if list is Empty add the 
        // element and make it head 
        if (this.head == null) 
            this.head = node; 
        else { 
            current = this.head; 
      
            // iterate to the end of the 
            // list 
            while (current.next) { 
                current = current.next; 
            } 
      
            // add node 
            current.next = node; 
        } 
        this.size++; 
    } 
    
    insertAt(element, index) 
    { 
        if (index > 0 && index > this.size) 
            return false; 
        else { 
            // creates a new node 
            var node = new Node(element); 
            var curr, prev; 
      
            curr = this.head; 
      
            // add the element to the 
            // first index 
            if (index == 0) { 
                node.next = head; 
                this.head = node; 
            } else { 
                curr = this.head; 
                var it = 0; 
      
                // iterate over the list to find 
                // the position to insert 
                while (it < index) { 
                    it++; 
                    prev = curr; 
                    curr = curr.next; 
                } 
      
                // adding an element 
                node.next = curr; 
                prev.next = node; 
            } 
            this.size++; 
        } 
    } 
    
    removeFrom(index) 
    { 
        if (index > 0 && index > this.size) 
            return -1; 
        else { 
            var curr, prev, it = 0; 
            curr = this.head; 
            prev = curr; 
      
            // deleting first element 
            if (index === 0) { 
                this.head = curr.next; 
            } else { 
                // iterate over the list to the 
                // position to removce an element 
                while (it < index) { 
                    it++; 
                    prev = curr; 
                    curr = curr.next; 
                } 
      
                // remove the element 
                prev.next = curr.next; 
            } 
            this.size--; 
      
            // return the remove element 
            return curr.element; 
        } 
    } 
    
    removeElement(element) 
    { 
        var current = this.head; 
        var prev = null; 
      
        // iterate over the list 
        while (current != null) { 
            // comparing element with current 
            // element if found then remove the 
            // and return true 
            if (current.element === element) { 
                if (prev == null) { 
                    this.head = current.next; 
                } else { 
                    prev.next = current.next; 
                } 
                this.size--; 
                return current.element; 
            } 
            prev = current; 
            current = current.next; 
        } 
        return -1; 
    } 
    
    
    // Helper Methods 
    // isEmpty 
    // size_Of_List 
    size_of_list() { 
        console.log(this.size); 
    } 

    // PrintList 
    printList() { 
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.element + " "; 
            curr = curr.next; 
        } 
        console.log(str); 
    } 
} 

var ll = new LinkedList(); 
  
// testing isEmpty on an empty list 
// returns true 
// console.log(ll.isEmpty()); 
  
// adding element to the list 
ll.add(10); 
  
// prints 10 
ll.printList(); 
  
// returns 1 
console.log(ll.size_of_list()); 
  
// adding more elements to the list 
ll.add(20); 
ll.add(30); 
ll.add(40); 
ll.add(50); 
  
// returns 10 20 30 40 50 
ll.printList(); 
  
// prints 50 from the list 
console.log("is element removed ?" + ll.removeElement(50)); 