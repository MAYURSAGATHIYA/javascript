// string1="yes";
// let output;
// if(string1==="y" || string1==="yes")
// {
//     output="true";
// }
// else
// {
//     output="false";
// }
// console.log(output);

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/y;
const found = paragraph.match(regex);

console.log(found);