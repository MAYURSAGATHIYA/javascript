//ggl
const no_uni=arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
console.log(no_uni([1, 2, 2, 3, 4, 4, 5]));  