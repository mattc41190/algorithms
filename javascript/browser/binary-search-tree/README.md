# JavaScript - Browser - Binary Search Tree

## What is this?

This is runnable demonstration of a Binary Search Tree data structure written in browser compatible JavaScript.

## Why make this?

To help reinforce the learning of the Binary Search Tree (BST).

## How do I use this?

- Read overview
- Read / Rewrite the javascript
	- If you rewrote place a reference to it in the `index.html`
- Open the `index.html` file browser
- Open the console
- Observe the output

## Binary Search Tree Overview

### What is a Binary Search Tree

A Binary Search Tree (BST) is a data strcuture (like a list or a map) which allows for finding items more quickly than linear searches. A BST is composed of Nodes, a Node is a strcuture which itself has a value and a reference to two other Nodes. The other Nodes are refered to as a `left` and a `right` Node, sometime called "child" Nodes. A BST has a `root` Node which is no Node's child. The simplest valid Tree is a Tree which contains a single / `root` Node.

### How do I add an item (Node) to a Tree?

Items are added to the tree by a very simple traversal algorithim. First you make a new node which holds the value you want in the tree. Then you traverse the tree looking for where your new Node fits. Each time you encounter a Node (starting with the root) you inspect it by asking the following questions: 

1. Is the value in my new Node the same as the value in the Node I am presently inspecting?
	- If the answer is yes generally speaking we abandon the process as the tree already has the value you need
2. Is the value in my new Node greater than the value in the Node I am presently inspecting?
	- If the answer is yes you ask if the Node has a right child
	- If it does NOT then your new Node has found its home as the right child of the Node you are presently inspecting
	- If it does have a value then begin the process back at step one using the right child as the Node to inspect
3. Is the value in my new Node less than the value in the Node I am presently inspecting?
	- If the answer is yes you ask if the Node has a left child
	- If it does NOT then your new Node has found its home as the left child of the Node you are presently inspecting
	- If it does have a value then begin the process back at step one using the left child as the Node to inspect 

By repeating this process you will always have a tree whose "right-most" value is the highest value and the "left-most" value is the lowest value.

### How do I find an item (Node) in a Tree?

Finding is a simple matter of repeating the process described in adding. Traverse the tree and at each Node ask if the Node under inspection matches the value you are looking for and if it does return the Node, if not ask if the value is higher or lower than the value you are looking for and inspect on the right node for higher and on the left node for lower. Repeat the the process until the Node you are looking for is found or no more Nodes are left to inspect.

### How do I delete a Node?

Node deletion is the trickiest part of dealing with a BST. There are four possible situations you can find yourself in and we will discuss each of them. As with both adding and finding Nodes in a Tree the first job is to reach the Node you would like to delete, for more on this process see adding or finding Nodes section of this article. As an aside, how you deal with a situation where no Node matches the value is up to you, but generally I return a boolean from a remove function indicating whether or not a Node with the value in question was deleted. As mentioned earlier, there are four possible situations you can find yourself in once you have reached the Node you'd like to delete. I will discuss them in order; from simplest to most complex.

1. The Node slated for deletion has no children
	- Set the Node to null (delete it)
2. The Node slated for deletion has a left child Node but no right child Node
	- Get the value from the left child Node and replace the value for the Node slated for deletion with that value  
	- Set the left child Node to null (delete it)
3. The Node slated for deletion has a right child Node but no left child Node
	- Get the value from the right child Node and replace the value for the Node slated for deletion with that value  
	- Set the right child Node to null (delete it)
4. The Node slated for deletion has both a right and left child
	- This operation is where nearly all of the complexity surrounding binary search trees occurs and thusly will have a slightly longer section explaining it.

#### Deleting A Node That Has a Left and Right Child

The problem: We have a Tree and we want to remove a Node. However the Node we want to remove has a sub-Tree all of its own. How do we remove the Node without breaking the ordering of the tree structure and without accidentally creating any orphan Nodes. 



