var sets = new Set();
sets.add('a');
sets.add('b');
sets.add('a'); // We are adding duplicate value.
for (let element of sets) {
 console.log(element);
}

var sets = new Set([1,5,6,8,9]);
var ans;
ans = sets.size; // 5
console.log(ans);
ans = sets.has(1); //  true.
console.log(ans); 
ans = sets.has(10); //false
console.log(ans);