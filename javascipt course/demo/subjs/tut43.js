console.log("tut 43");

async function harry() {
    console.log("inside harry function")
    
    const response=await console.log("waotng");
    
    console.log("before response");
    const users=await response.json();
    console.log("user ")

    return "hary";
}
console.log("before");

let a=harry();
console.log("after");
console.log(a);

console.log("bottom");