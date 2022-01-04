// const sqrtFn = (a) => Math.sqrt(a)
// const sqrFn = (a) => Math.pow(a,2)

// const myFun2 = (a,b,cb) => {
//     const sum = a + b; 
//     return cb(sum)}

//     console.log(myFun2(1,2,sqrtFn));

// const a=()=>{
//     console.log("a");
// }
// console.log(a());





const callback=(money)=>{
    return `is number ${money}`;
}
const getm=(money,callback)=>{

    if (typeof money !== 'number')
     {
        console.log("its a str")
      } 
      else
       {
        return callback(money)
      }
    }

    const money = getm('kkk',callback)
  console.log(money);


// function getMoneyBack(money) {
//     return new Promise((resolve, reject) => {
//       if (typeof money !== 'number') {
//         reject(new Error('money is not a number'))
//       } else {
//         resolve(money)
//       }
//     })
//   }
  
//   getMoneyBack(1200).then((money) => {
//     console.log(money)
//   })