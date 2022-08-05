function isLeapYear(year) {
	if ((year % 100 === 0) && (year % 400 !== 0) || (year % 4 !== 0)) {
		return 'Not Leap Year';
	} else {
		return 'Leap Year';
	}
}

console.log(isLeapYear(2032));
console.log(isLeapYear(2000));
console.log(isLeapYear(2100));
console.log(isLeapYear(2053));