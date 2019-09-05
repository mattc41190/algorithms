// Node is a value held by a Tree -- it contains its own value and references to its left and right children
// Why it doesn't contain a reference to its parent is strange?
function Node (value) {
	this.value = value
	this.left = null
	this.right = null
}

