const someArray = [1,2,3,4,5,6,67,7,8,7,6,5,4,32,2,4]


function linearFunction (target) {
	for (let index = 0; index < someArray.length; index++) {
		if (someArray[index] === target) return someArray[index]
	}
	return -1
}

console.log(linearFunction(0))
