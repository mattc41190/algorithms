// Tree is a Binary Search Tree -- call new Tree() to get one
function Tree () {
	this.root = null
}

// `Tree.add` will add a node to tree at the proper position
Tree.prototype.add = function(node) {
	if (!this.root) {
		this.root = node
		return
	}

	let curNode = this.root

	while(curNode) {
		if (curNode.value < node.value) {
			if (curNode.right != null) {
				curNode = curNode.right
			} else {
				curNode.right = node
				return
			}
		} else if (curNode.value > node.value) {
			if (curNode.left != null) {
				curNode = curNode.left
			} else {
				curNode.left = node
				return
			}
		} else {
			// Node is equal to a previously existent node -- Exit without adding the node
			console.log(`skipping already existent node since a node already exists with value ${node.value}`)
			return
		}
	}
}

// Tree.max will return the Node in the tree with the highest value
Tree.prototype.max = function() {
	if (!this.root) {
		return null
	}

	let curNode = this.root

	while(true) {
		if (curNode.right != null) {
			curNode = curNode.right
			continue
		} 
		break
	} 

	return curNode
}

// Tree.min will return the Node in the tree with the lowest value
Tree.prototype.min = function() {
	if (!this.root) {
		return null
	}

	let curNode = this.root

	while(true) {
		if (curNode.left != null) {
			curNode = curNode.left
			continue
		} 
		break
	} 

	return curNode
}

// Tree.exists will search for a Node in the tree with the passed value
Tree.prototype.exists = function(val) {
	if (!this.root || typeof val != 'number') {
		console.log('root is null or value arg is not a number');
		return null
	}

	let curNode = this.root

	while(true) {

		// If the current value is the correct value
		if (curNode.value === val) {
			return true
		}

		// Otherwise search the tree in the proper order
		if (curNode.left != null) {
			if (curNode.left.value >= val) {
				curNode = curNode.left
				continue
			}
		} else if (curNode.right != null) {
			if (curNode.right.value <= val) {
				curNode = curNode.right
				continue
			}
		}
		
		// The value is not in the tree break and return false
		break
	} 

	return false
}

// Tree.remove will remove a node if it exists in the tree
Tree.prototype.remove = function(val) {

	if (this.root === null) {
		return false
	}
	
	let curNode = this.root

	while(curNode != null) {
		// If the current value is the correct value
		if (curNode.value === val) {
			// Option 1. The node that is a candidate for deletion has no children
			// Solution delete the node and return true
			if (curNode.right === null && curNode.left === null) {				
				curNode = null
				return true
			}

			// Option 2. The node that is a candidate for deletion has a left child but no right child
			// Solution: Move left node up
			if (curNode.left != null && curNode.right === null) {
				curNode.value = curNode.left.value
				
				curNode.left = null
				return true
			}

			// Option 3. The node that is a candidate for deletion has a right child but no left child
			// Solution: Move right node up
			if (curNode.right != null && curNode.left === null) {
				curNode.value = curNode.right.value
				curNode.right = null
				return true
			}

			// Option 4. The node has is a candidate for deletion has both right and left children
			// Solution: Replace the candidate node with the value of the left most node of the right child
			// I know this part is tricky -- But picture it this way:
			// A. You know that if it on the right side it is larger than all values to the left of candidate node
			// B. It is smaller than all other children of the candidate's right node 

			let leftMostRightNode = curNode.right
			let prevNode = null

			while(leftMostRightNode != null) {				
				if(leftMostRightNode.left != null) {
					prevNode = leftMostRightNode
					leftMostRightNode = leftMostRightNode.left
				} else {
					curNode.value = leftMostRightNode.value
					if(leftMostRightNode.right != null) {
						prevNode.left = leftMostRightNode.right
						return true
					} else {
						prevNode.left = null
						return true
					}
				}
			}


		}

		// Otherwise continue searching the tree
		if (curNode.left != null) {
			if (curNode.left.value >= val) {
				curNode = curNode.left
				continue
			}
		} else if (curNode.right != null) {
			if (curNode.right.value <= val) {
				curNode = curNode.right
				continue
			}
		}
	}
	
}