const arry=[1,5,7,8,5,3,2,1]
const findDUP=arry=>
arry.filter((item,index)=>
arry.indexOf(item)!==index)

const dupEle=findDUP(arry);
console.log("full array elemstn is",arry);
console.log("duplicat elemesnt are:",dupEle);


const query = (url,params)=>{
    let q = `${url}?`;
    for(const key in params){
        q = q + `${key}=${params[key]}&`;
    }
    q=q.slice(0,-1)
    return q;
}
console.log(query('google.com',{ name: 'storng', surname: 'demon',age:2}))
