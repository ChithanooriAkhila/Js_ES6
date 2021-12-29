/*
// Old Syntax
function oldOne() {
    console.log("OldOne!");
}
oldOne();

   // New Syntax
   var newOne = () => {
    console.log("NewOne!");
   }
   newOne();
*/

/*
let add = (a, b) => {
    console.log(a+b); // 30
   }
add(10, 20);
*/

/*
let add = (a, b = 10) => {
 return a + b; 
}
console.log(add(20)); // 30
console.log(add(10,20)); //30
*/

let add = (a = 10, b) => {
    console.log(a);
    return a+b; 
   }
   console.log(add(20));// b is not assigned
   