//date functions

console.log("24");

// let date=new Date();
// console.log(typeof date)


let date=new Date('5-5-2001 04:05:50');
// let date=new Date();
console.log(date);


let a;
// a=date.getDay(); 
// // a=date.getMinutes();
// a=date.getSeconds(); 
// a=date.getHours();  
// a=date.getTime();
// a=date.setDate(23);  
a=date.getMonth(); 
console.log(a);


date.setMonth(1); 
date.setSeconds(2);
date.setFullYear(2000); 
console.log(date);
