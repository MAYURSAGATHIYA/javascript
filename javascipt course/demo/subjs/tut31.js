class employee{

    constructor(pname,pexp,pdiv)
    {
    this.name=pname;
    this.exp=pexp;
    this.div=pdiv;
    }
    slogan()
    {
        return `yo`;
    }
    expfun()
    {
        return 2000-this.exp;
    }
     static addition(a,b)
    {
        return a+b;
    }
}
class prog extends employee
{
    constructor(pname,pexp,pdiv,lang,git)
    {
        super(pname,pexp,pdiv,lang,git);  
        this.lang=lang;
        this.github=git;
    }
    favlan()  {
   if (this.lang == 'js') 
    {
        return 'js';
    }
    else 
    {
        return 'net';
    }
}
   static multiply(a,b)
    {
        return a*b;
    }
}

let gokku= new prog("gokku",3,'h','js','id')
console.log(gokku);
console.log(gokku.favlan())
console.log(prog.multiply(2,2));




// let harry=new employee("harry",50,'t');
// console.log(employee.addition(1,7));

