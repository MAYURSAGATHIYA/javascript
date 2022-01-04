console.log("tut30");
// const proto={
//     slogan: function () {
//         return 'ok1';
//     },
//     changenm: function(newnm) {
//         this.name=newnm;
//     }
// }

// const harry=Object.create(proto);
// harry.name="haryy";
// harry.role="pro";
// harry.demo="prog";
// console.log(harry);



function emp(name,slry,exp)
{   
    this.name=name;
    this.slry=slry;
    this.exp=exp;  
}

emp.prototype.slogan=function() {
    return `this is this`; 
    
}
let goku = new emp("goku",10,1)
console.log(goku);


//inherit th prototype

