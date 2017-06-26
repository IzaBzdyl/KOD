// scripts.js

var name = prompt('Enter your name');
alert('Hello, ' + name);
console.log('Hello, ' + name);

setTimeout(wakeUpUser, 3000);
function wakeUpUser () {
	alert("Czy masz zamiar już zawsze gapić się na tę nudną stronę?");
}