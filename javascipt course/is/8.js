let myobj = [ 
    {nam:'jack', age:38},
    {nam:'barney',age:36},
    {nam:'fred', age:40}
];
myobj.sort((a,b)=>{
  
    if(a.nam>b.nam)
    {
        return 1;
    }
    else if(a.nam<b.nam)
    {
        return -1;
    }
    else
    { 
        return 0;
    }
});
console.log("ascending order",myobj);

myobj.sort((a,b)=>b.age-a.age);
console.log("descending order",myobj);