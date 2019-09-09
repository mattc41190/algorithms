console.log('Hello Fibonacci Sequence');

function findFib(n) {

	if (n < 1) {
		console.log(`invalid input: ${n}`)
		return
	}

	let num = 1
	let prevNum = null

	for (let i = 1; i < n; i++) {
		prevNumHolder = num
		num = num + prevNum
		prevNum = prevNumHolder
		console.log(num)
	}
}

findFib(20)