function sumTenRecurse(n, depth) {
	console.log(`n = ${n}, depth = ${depth}`)
	
	if (n === 10) {
		return n
	}

	if(n < 10 && n > 0){

		return sumTenRecurse(n+1, depth+1)
	} else {
		console.log(`invalid entry ${n}`)
		return 
	}
}

let ten = sumTenRecurse(3, 0)
console.log(ten)
