// console.log("hello all variables");

//variables
//var let const

// let name="goku";
// let cnl=1;;
// let marks=10;
// let marks=1;
// //cnl="ak";
// console.log(name,cnl,marks);



// var city="delhi";
// console.log(city);

// const name = "hello";
// console.log(name);

// {
//     let city="new";
//     console.log(city);
// }

// city ="main";
// console.log(city);


// const array=[1,2,3,4,5];
//array.push(10);

// console.log(array);

//----------------------------------------------
//operators

//arithmetic
// let a=20;
// let b=10;

// sum=a+b;
// sub=a-b;
// mul=(a*b)+1;
// div=a/b;
// mod=a%b;

// console.log(sum,sub,mul,div,mod);

// a++;
// console.log(a);
// b--;
// console.log(b);


// const f;
// console.log(f);
// const c=a**2;
// console.log(c);
//----------------------------------------

//comparision, relational

// age=10;
// if(age<11)//==//=== //!= //!== //< //>
// {
//     console.log("allowed");
// }
// else
// {
//     console.log("not allowed");
// }

//assginment

// let a=10;
// a+=5; //-=//*==///=//%=
// console.log(a);

//ternary
// let a=5;
// console.log(a==="5"? 'five' : 'not valid');



//if else
// let code=1;
// if(code==1)  //(a!=1)(a!==1)(a="1")
// {
//     console.log("hacked");
// }
// else if(code=>5)
// {
//     console.log("hacked pro");
// }
// else
// {
//     console.log("not hacked");
// }

// let mon=10;
// switch (mon) {
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("mar");
//         break;
//     case 4:
//         console.log("apr");
//         break;
//     case 5:
//         console.log("may");
//         break;
//     case 6:
//         console.log("jun");
//         break;
//     case 7:
//         console.log("july");
//         break;
//     case 8:
//         console.log("aug");
//         break;
//     case 9:
//         console.log("sept");
//         break;
//     case 10:
//         console.log("oct");
//         break;
//     case 11:
//         console.log("nov");
//         break;
//     case 12:
//         console.log("dec");
//         break;
//     default:
//         console.log("pls enter valid");
//         break;
// }

//loop
// for(i=1;i<=10;i++)
// {
//     console.log(i); //(i+=4);
// }


// for(i=1;i<=10;i++)
// {
//     if(i%5===0)
//     {
//     console.log("hello");
//     }
//     else
//     {
//         console.log(i);
//     }
// }

//while

// let i=1;
// while (i<10) {
//     console.log(i);
//     i++; 
// }

// let a=1;
// do {
//     console.log(a);
//     a++;
// } while (a<5);

//break
// let a=1;
// do {
//     console.log(a);
//     {
//         if(a==7)
//         {
//             break;
//         }
//     }
//     a++;

// } while (a<10);

//continue
// let a=1;
// do {
//     if (a===7)
//     {
//         continue;
//     }
//     console.log(a);
//     a++;
// } while (a<=100);

//function
// function morning() 
// {
//     let pattern="";
//     for(i=1;i<=5;i++)
//     {
//       for(j=0;j<i;j++) 
//       {
//         pattern += "#";
//       }
//       pattern += "\n";
//     }
//    console.log(pattern);

// }
// morning();

// const a="HELLO";
// const b="goku";
// const arr=[1,2,3,4,5];
// var str="hello this is goku";

//console.log(a.length,b.length);
//console.log(a.toLowerCase(),b.toUpperCase());

// var position = str.indexOf('o');
// console.log(position);

// console.log(str.indexOf('o'));

// position = str.lastIndexOf('o');
// console.log(position);

// var substr=str.slice(1,4);
// console.log(substr);

// var substr=str.substring(1,4);
// console.log(substr);

//this is not working
// let r = str.replace('string', 'goku');
// console.log(str);
// console.log(r);


// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// var newstring =str.concat(" added");
// console.log(newstring);

// var strwithwhitespaces="      this conatins     whitspce";
// console.log(strwithwhitespaces);
// console.log(strwithwhitespaces.trim());

// var char1=str.charCodeAt(4);//code
// console.log(char1);

// string to array
// let text = "a,b,c,d,e,f";
// const myArray = text.split(",");
// console.log(myArray);


// let found=str.search("goku");
// console.log(found);

// let tru=str.includes("goku");
// console.log(tru);

// let wit = str.startsWith("hello");
// console.log(wit);


//array functions
//----------------------------------
//foreeach
// let frt=['apple','banana','pineapple'];
// frt.forEach(function(item,index,array) 
// {       
//     console.log(index,item);

// });
// frt.forEach(function(item,index,array) 
// {       
//     console.log(index,item);

// });


// arr.push(1);
// console.log(arr);

// arr.unshift(1);
// console.log(arr);



// arr.shift();
// console.log(arr);

// arr.pop();
// console.log(arr);



//every
// const blw= (value) => value<40; 
// const arr1=[1,2,3,4,5];
// console.log(arr1.every(blw));

// const blw=(value)=> value=>1;
// const arr1=[1,2,3,4,5,6];
// console.log(arr1.every(blw));


//filter

// const frt=['apple','banana','pineapple','grape'];
// console.log(frt.filter(frt=>frt.length>5));



//find
// console.log(arr.find(Element=>Element>2));


//find index
// console.log(arr.findIndex(Element=>Element>2));


//find index with if else
// let found;
// if(found=arr.findIndex(Element=>Element>4))
// {
// console.log("your data is found",found);
// }
// else
// {
// console.log("not valid");
// }

//foreeach // print column wise
// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));

// arr.forEach(element => 
//     console.log(element)
// );

//includes
// console.log(arr.includes(5));

//indexof

// console.log(arr.indexOf(5));

//join
// console.log(arr.join('='));

//map
// console.log(arr.map(x => x+1));

//reduce

// console.log(arr.reduce((preValue, curValue) => preValue + curValue)); 



//DOUBT
// const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
//     (acc, curValue) =>{console.log({acc,curValue}); 
//     return acc.concat(curValue)}
//   );

//   console.log(array1);

//   function demo = () =>{
// //       console.log("demo");
// //   }
// const jack = (a,b) => {console.log(a*b); console.log(a*b)}
//reverse
// console.log(arr.reverse());
// //slice
// const arr1=[10,30,50,60,50,50,1,2,3,4,5,6];
// console.log(arr1.slice(3,5));

//som
// const even=(element)=>element+2;
// console.log(arr.some(even));

//sort
// console.log(arr1.sort());

// arr1.sort();
// console.log(arr1);


//objects

// assign
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };
// const retar = Object.assign(target, source);
// console.table(retar);

// const target = { a: 1, b: 2 , c:3, d:4};
// const source = { b:4, d:6};
// const retar = Object.assign(target, source);
// console.table(retar);



// const a={p:1,q:4};
// const b={q:2,r:3};
// const rettar=Object.assign(a,b);
// console.table(rettar);


//create

// const person = {
//     isHuman: true,
//     printIntro: function () 
//     {
//         console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
// };
// const me = Object.create(person);

// me.name = 'Matthew'; 
// me.isHuman = true; 
// me.printIntro();


//define property

// const object1 = {};
// Object.defineProperty(object1, 'propery1', {
//   value: 50,
//   writable: true // false hase to 50 value, else 86
// });
// object1.property1 = 86;
// console.log(object1.property1);

//define properties
// const object1 = {};
// Object.defineProperties(object1, {
//   property1: {
//     value: 42,
//     writable: true
//   },
//   property2: {}
// });
// console.log(object1.property1);

//entries  //key value both console
// const object1 = {
//     a: 'somestring',
//     b: 42
//   };
//   for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
//   }

//frz

// const obj = {
//     prop: 4
//   };
  
//   Object.freeze(obj);
//   obj.prop = 1;
// //   obj.prop=500000000000000000000000000000000000;
//   console.log(obj.prop);


//frm entries // list of key value pairs
// const entries = new Map([
//     ['foo', 'bar'],
//     ['baz', 40]
//   ]);
//   const obj = Object.fromEntries(entries);
//   console.table(obj);
// =======================================================================
//getOwnPropertyDescriptor
// const object1 = {
//     property1: 42
//   };
//   const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');
//   console.log(descriptor1.configurable);
//   console.log(descriptor1.value);

//descriptors
// const object1 = {
//     property1: 4
//   };
  
//   const descriptors1 = Object.getOwnPropertyDescriptors(object1);
//   console.log(descriptors1.property1.writable);  
//   console.log(descriptors1.property1.value);
  
//getOwnPropertyNam
// const object1 = {
//     a: 1,
//     b: 2,
//     c: 3
//   };
  
//   console.log(Object.getOwnPropertyNames(object1));

// symbol

// const object1 = {};
// const a = Symbol('a');
// const b = Symbol.for('b');
// object1[a] = 'localSymbol';
// object1[b] = 'globalSymbol';

// const objectSymbols = Object.getOwnPropertySymbols(object1);
// console.log(objectSymbols.length);
// console.log(object1)
//=================================================================

//prototype
// const prototype1 = {};
// const object1 = Object.create(prototype1);

// console.log(Object.getPrototypeOf(object1) === prototype1);



// Extensible
// const object1 = {};

// console.log(Object.isExtensible(object1));
// Object.preventExtensions(object1);
// console.log(Object.isExtensible(object1));

//frzn

// const object1 = {
//     property1: 4
//   };
  
//   console.log(Object.isFrozen(object1));
//   Object.freeze(object1);
//   console.log(Object.isFrozen(object1));

//sealed
// const object1 = {
//     property1: 2
//   };
//   console.log(Object.isSealed(object1));
//   Object.seal(object1);
//   console.log(Object.isSealed(object1));


// check key value
// const object1 = {
//     a: 'somestring',
//     b: 1,
//     c: false
//   };
  
//   console.log(Object.keys(object1));
//   console.log(Object.values(object1));



//delete non unique value
// let del = (obj,arr)=>Object.keys(obj)
// .filter(k => !arr.includes(k))
// .reduce((p,key)=>(p[key]=obj[key],p),{});
// console.log(del({a:1,b:'2',c:3},['b']));




// console.log(newvar);
// var newvar=10;



// function hello() {
//     console.log("k")
// }


// embedded JS


//ASYNC AWAIT 
//find


// const fruitBasket = {
//     apple: 27,
//     grape: 0,
//     pear: 14
//   }
//   const control = async _ => {
//     console.log('Start')
  
//     const numApples = await getNumFruit('apple')
//     console.log(numApples)
  
//     const numGrapes = await getNumFruit('grape')
//     console.log(numGrapes)
  
//     const numPears = await getNumFruit('pear')
//     console.log(numPears)
  
//     console.log('End')}




// set

