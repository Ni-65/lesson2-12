"use strict";

const str = 'test';
const arr = [1, 2, 4];

					// console.log(str.length);
					// console.log(str[2]);
							// // console.log(str[2] = 'd');
					// console.log(str);
					// console.log(arr.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));
console.log(fruit.indexOf('q'));

const logg = 'Hello world';
console.log(logg.slice(6, 10));
console.log(logg.slice(3));
console.log(logg.substring(6, 10));
console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));