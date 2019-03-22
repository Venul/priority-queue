const MaxHeap = require('./max-heap.js');

let q;
class PriorityQueue {
	constructor(maxSize) {	
		this.heap = new MaxHeap();
		this.maxSize = maxSize || 30;
	
	}

	push(data, priority) {
		this.heap.push(data, priority);
	}

	shift() {

	}

	size() {

	}

	isEmpty() {
		
	}
}

module.exports = PriorityQueue;
