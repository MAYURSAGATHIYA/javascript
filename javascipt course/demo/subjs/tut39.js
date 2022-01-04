// function func1()
// {   
//     return new Promise(function (resolve,reject)
//     {
//             setTimeout(()=>
//             {
//                 const error=true;
//                 if(!error)
//                 {
//                 console.log("your prmise resolved");
//                 resolve();
//                 }
//                 else
//                 {
//                     console.log("invalid");
//                     reject('sorry');
//                 }
//             },2000);
            
    
//     })
    
// }

// func1().then(function()
// {
// console.log("resolevrd");

// }).catch(function () {
//     console.log("heey ");
    
// })



function func1()
{   
    return new Promise(function (resolve,reject)
    {
            setTimeout(()=>
            {
                const error=true;
                if(!error)
                {
                console.log(2+2,"your prmise resolved");
                resolve();
                }
                else
                {
                    console.log(1+1);
                    reject('sorry');
                }
            },2000);
            
    
    })
}
func1().then(function(){// what then does? 
console.log("resolevrd");

}).catch(function () {
    console.log(2*2);
})