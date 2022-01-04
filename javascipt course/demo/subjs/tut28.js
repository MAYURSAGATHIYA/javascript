let myobj={
    a:1,
    b:2 ,  
    c:3
};

function obj(givnnm) 
{
    this.nm=givnnm;
}
let newobj=new obj("ok");
console.table(newobj);