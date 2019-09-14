console.log('Fibonacci Sequence')

const INVALID_INPUT = 'invalid input'

const fib = (n) => n < 2 ? n : fib(n-1) + fib(n-2)

const findFib = (n) => {
	if (n < 1) {
		console.error(INVALID_INPUT, n)
		return null
	}

	let fib = 1
	let prevFib = null

	for (let i = 1; i < n-1; i++) {
		const tempPrevNum = fib
		fib = fib + prevFib
		prevFib = tempPrevNum
	}

	return fib
}

const findFibRecurseDebugged = (n, side, depth) => {
	if (n <= 0) {
		console.error(INVALID_INPUT, n)
		return null
	}

	console.log(`at depth ${depth} processing n (${n}) on side ${side}`)
	switch (n) {
		case 1:
			console.log(`at depth ${depth} returning result 0 on side ${side}`)
			return 0
		case 2:
			console.log(`at depth ${depth} returning result 1 on side ${side}`)
			return 1
		default:
			depth++
			let x = findFibRecurseDebugged(n-1,'a', depth)
			let y = findFibRecurseDebugged(n-2, 'b', depth)
			console.log(`at depth ${depth} returning x (${x}) + y (${y}) = ${x+y} on side ${side}`)
			return x + y 
	}
}