// const myInches = 12;
// const myFeet = myInches / 12;

// console.log(myFeet);


function inchesToFeet(inches) {
	const feet = inches/12;
	return feet;
}

const dadaInches = 144;
const dadaFeet = inchesToFeet(dadaInches);
console.log(dadaFeet);