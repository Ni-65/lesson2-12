"use strict";
let num = 25;
function showFirstMessage(text){
	console.log(text);
	// let num = 10;
	console.log(num);
}
showFirstMessage("heool");
console.log(num);

//! function DECLARATION
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(7, 4));
// console.log(calc(2, 5));
// function calc(a, b){
// 	return(a + b);
// }
//=====

function ret(){
	let num = 50;

	//

	return num;
}
const anotherNum = ret();
console.log(anotherNum);

//!function EXPRESSION
const logger = function(){
	console.log("Hello");
};
logger();
//===================
//! function СТРЕЛОЧНАЯ
// const calc = a => a + b;
// const calc = (a, b) => a + b;
// const calc = (a, b) => {
// 	console.log('1');
// 	return a + b
// };
