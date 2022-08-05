function hourToMinute(hour) {
	return hour * 60;
}
function hourToSecond(hour) {
	return hour * 60 * 60;
}

let hour = 4;

let minutes = hourToMinute(hour);
let seconds = hourToSecond(hour);

console.log('In Minutes:', minutes);
console.log('In Seconds:', seconds);