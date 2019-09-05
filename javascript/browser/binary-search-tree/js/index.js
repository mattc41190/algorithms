console.log('Hello Binary Search Trees')

// Tree Creation
const t = new Tree()

t.add(new Node(10)) // root node (10)
t.add(new Node(14)) // right node -- child of root (10)
t.add(new Node(5))  // left node -- child of root (10)
t.add(new Node(8))  // right node -- child of root (5)
t.add(new Node(9)) 
t.add(new Node(11)) // left node -- child of root (14)

t.remove(10)
t.remove(9)


console.log('Tree:')
console.log(t)




// Find Min and Max Values
let max = t.max()
let min = t.min()
console.log(`Max: ${max.value}`)
console.log(`Min: ${min.value}`)

// Element Existence Checks
let five = 5
let seven = 7
let ten = 10

let exists = t.exists(five)
console.log(`${five} Exists: ${exists}`)
exists = t.exists(seven)
console.log(`${seven} Exists: ${exists}`)
exists = t.exists(ten)
console.log(`${ten} Exists: ${exists}`)
