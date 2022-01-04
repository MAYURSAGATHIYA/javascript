// basic async await with promise
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve("resolved");
//       }, 2000);
//     });
//   }
//   async function asyncCall() {
//     console.log('calling');

//     const result = await resolveAfter2Seconds();
//     console.log(result);

  
//   }
   
// asyncCall();
//   console.log("hello");


// for(i=1;i<100000;i++){
//     console.log("line no."+i);
//   }
// executes after async
  // function done but it will wait for promises.

  //promise ma game aetly seconds nakhi hoy pan ae 
//   console tyare j karse jyare badhi aagal ni 
// task puri thai jai

//---------------


// function cal() {
//     return new Promise(resolv=>{
//         setTimeout(() => {
//             resolv("resolved");
//         },2000);
//     });
// }
// async function asyncCall() {
// console.log('calling');

// const result = await cal();
// console.log(result);
// }

// asyncCall();


// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// });

// console.log(countValue);

//--------------------------

// const countValue =()=>new Promise(function (resolve, reject) {
//   resolve("Promis resolevdd");
// });

// // executes when promise is resolved successfully
// const myFunc=async(params)=> {
  
//   try {
//     const res=await countValue()
//     console.log(res)

//   } catch (error) {
//   console.log(error)    
//   // }
// }
  
// myFunc();


