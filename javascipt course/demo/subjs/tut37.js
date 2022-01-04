const stus=[
    {nam:"harry",sub:"ab"},
    {nam:"goku",sub:"pq"}
]

function enstu(stu) 
{
    setTimeout(function() {
        stus.push(stu);
    },3000); 
   
}

function gstu() 
{
    setTimeout(function() {
       let str="";
       stus.forEach(function (stu1) {
           stu1+=`<li>${stus.name}</li>`
       });
     console.log(stus);
    },0);   
}

let gokku=new enstu();
console.log(gokku);
// let goku=new getstu();
// console.log(goku);
