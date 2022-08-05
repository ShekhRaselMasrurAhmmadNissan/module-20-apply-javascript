// Find ODD SUM

function getSum(numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}

	console.log(sum);
}

function getOddSum(numbers) {
	let oddNumbers = [];
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2) {
			oddNumbers.push(numbers[i]);
		}
	}

	getSum(oddNumbers)
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getOddSum(myNumbers);