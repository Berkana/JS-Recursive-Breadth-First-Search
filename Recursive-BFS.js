// Queue based on linked list. Items are enqueued into the tail, and dequeued from the head.

var Queue = function(){ // functional class
  var q = {}
  q.head = null;
  q.tail = null;

  var Node = function(value){ // functional class
    var n = {};
    n.value = value;
    n.next = null;
    return n;
  };

  q.enqueue = function(value){
    var newNode = Node(value);
    if (this.tail !== null) { this.tail.next = newNode }
    if (this.head === null) { this.head = newNode }
    this.tail = newNode;
  };

  q.dequeue = function(){
    if (this.head === null) { return null }
    var result = this.head.value;
    this.head = this.head.next;
    return result;
  };

  return q;
};

// Binary Search Tree implementation
// BFS queue will use the Queue object implemented above.

