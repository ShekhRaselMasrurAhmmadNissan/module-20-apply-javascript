function factorialForLoop(number) {
	let result = 1;
	for (let i = 1; i <= number; i++) {
		result *= i;
	}

	return result;
}

function factorialWhileLoop(number) {
	let result = 1;

	while (number >= 1) {
		result *= number;
		number--;
	}

	return result;
}

console.log('Factorial of 1: ' + factorialForLoop(1));
console.log('Factorial of 2: ' + factorialForLoop(2));
console.log('Factorial of 3: ' + factorialForLoop(3));
console.log('Factorial of 4: ' + factorialForLoop(4));


console.log('Factorial of 1: ' + factorialWhileLoop(1));
console.log('Factorial of 2: ' + factorialWhileLoop(2));
console.log('Factorial of 3: ' + factorialWhileLoop(3));
console.log('Factorial of 4: ' + factorialWhileLoop(4));