let a=15;
let tim;
let output;
if (a>12 && a<=24)
{
    tim=a-12;
output=tim+'pm'
} 
else if(a<12 && a>=1)
{
    tim=a;
    output=tim+'am';
}
else 
{
  output="not valid";   
}

console.log(output);

 