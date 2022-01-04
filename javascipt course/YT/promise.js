//Promise.all()
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3])
// .then((values) => {
// console.log(values);
// });

//------------------------------------
// const p1=Promise.resolve(3);
// const p2=10;
// const p3 = new Promise((resolve,reject)=>
// {
//     setTimeout(resolve,10000,'foo');//(,"seconds",)
// })
// Promise.all([p1,p2,p3])
// .then((values)=>{
//     console.log(values)

    
//------------------------------------


//     const promise1=Promise.resolve(10);
//     const promise2=10;
//     const promise3=new Promise((resolve,reject)=>{
// setTimeout(resolve,100,'foo')
// });
//     Promise.all([promise1,promise2,promise3])
//     .then((values)=>{
//         console.log(values);

//     })


//------------------------------------
// const p1=Promise.resolve(3);
// const p2=20;
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(resolve,10,'foo')
//     });

//     Promise.all([p1,p2,p3])
//     .then((values)=>{
//         console.log(values);
//     })

//------------------------------------
// const p1=Promise.resolve(1)
// const p2=10;
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(resolve,100,'foo')      
//     });

//     Promise.all([p1,p2,p3])
//     .then((values)=>{
//         console.log(values);
//     })


//------------------------------------
// const p1=Promise.resolve(3);
// const p2=10;
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(resolve,100,'foo')
// });

// Promise.all([p1,p3])  // ((value of datatypes))
// .then((values)=>{
//     console.log(values)
// })
//------------------------------------



//--------------------------------------------------


// const promise1 = Promise.resolve(3)
// const promise2 = new Promise((resolve, reject) =>
//  setTimeout(resolve, 1000, 'foo'));
// const promises = [promise1, promise2];

// Promise.allSettled(promises).
//   then((results) => results.forEach((result) => 
//   console.log(result.status)));


//--------------------------------------
//any
// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 1000*2, 'slow'));

// const promises = [promise1, promise2, promise3];
// Promise.any(promises)
// .then((value) => console.log(value));

//-----
// const p1=Promise.reject(0);
// const p2=new Promise((resolve)=>setTimeout(resolve,1000,'a'));
// const p3=new Promise((resolve)=>setTimeout(resolve,2000,'b'));

// const promise4=[p1,p2,p3]
// Promise.any(promise4)
// .then((value)=>console.log(value))

//-------------------------------------------------
// race
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, 'promise 1 fast');
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'promsis 2 fast');
// });

// const promise3=[promise1,promise2]
// Promise.race(promise3)
// .then((values)=>{console.log(values)})
//--------------------------

// handling error
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(reject, 500, 'promise 1 fast');
// }).catch(err=>console.log(err));

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'promsis 2 fast');
// });

// Promise.race([promise1, promise2])
// .then((value) => {
// console.log(value);
// });

  //-------------------------------------------


// let p = new Promise((resolve, reject) => {
//   let a = 2
//   if (a == 1+1) {
//   resolve('Success')
//   } else {
//   reject('Failed')
//   }
//   })
//   p.then((msg) => {
//   console.log('This is in the then ' + msg)
//   }).catch((msg) => {
//   console.log('This is in the catch ' + msg)
//   })



