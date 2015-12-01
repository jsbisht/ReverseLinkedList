main();

function Node(next, value) {
    this.next = next;
    this.value = value;
}

function LinkedList() {
    this.head = null;

    this.add = function(value) {
	    if (this.head == null) {
	        this.head = new Node(null, value);
	    } else {
	        var last = this.last();
	        last.next = new Node(null, value);
	    }
	}

	this.get = function(index) {
		var i = 0;
		var node = this.head;

		if(index == i) {
			return node;
		}
		else if(index < 0) {
			return null;
		}

		while(i++ < index) {
			if(node.next != null) {
				node = node.next;
			}
			else {
				// index out of bound
				return null;
			}
		}

		return node;
	}

	/**
	if first
		set all to null
	if middle
		set previous to next
	if last
		set previous to null
	*/
	this.remove = function(index) {
		var i = 0;
		var node = this.head;
		var prev = null;
		
		// if first
		if(index == 0 && node != null) {
			node.next = null;
			node.value = undefined;
			return;
		}
		else if(node == null) return;

		while(node.next != null) {
			// if middle
			if(i == index) {
				prev.next = node.next;
				break;
			}
			
			prev = node;
			node = node.next;
			i++;
		}

		// if last
		if(node.next == null) {
			prev.next = null;
		}

	}

	this.last = function() {
	    var node = this.head;
	    while (node.next != null) {
	        node = node.next;
	    }
	    return node;
	}

	this.print = function() {
	    var items = [];
	    var node = this.head;
	    if(node == null) {
	    	console.log('No items in the list'); 
	    	return; 
		}

		items.push(node.value);
	    while (node.next != null) {
	        node = node.next;
	        items.push(node.value);
	    }
	    console.log(items);
	}

	this.size = function() {
		var node = this.head;
		var size = 0;
		if(node.next != null) {
			size = 1;
			while (node.next != null) {
				node = node.next;
				size++;
			}
			
		}
		return size;
	}
}

// swap linked list items
function swapItems(list, i, j) {
	// move content of i'th element to j'th element and vice-versa
	var nodeOne = list.get(i);
	var nodeTwo = list.get(j);
	var value = nodeOne.value;
	nodeOne.value = nodeTwo.value;
	nodeTwo.value = value;
}

/* 
Using two for loop
			  Result at end of iteration
			  --------------------------
i=0 	1234, 2134, 2314, 2341
i=1		2341, 3241, 3421
i=2		3421, 4321

total iteration = (listsize - 2);
number of elements to iterate = (listsize - i); 
*/
function reverse(list) {
	var listsize = list.size();
	var totalIterations = listsize - 1;

	for(var i=0; i < totalIterations; i++) {
		var noOfElementsToIterate = listsize - i;
		for(var j=0; j+1<noOfElementsToIterate; j++) {
			swapItems(list,j,j+1);
		}
	}

	return list;
}

function main() {
	var list = new LinkedList();

	list.add(1);
	list.add(2);
	list.add(3);
	list.add(4);
	list.add(5);
	list.add(6);
	list.add(7);

	list = reverse(list);
	list.print();
}