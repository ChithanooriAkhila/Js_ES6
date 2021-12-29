var NewMap = new Map();
NewMap.set('name', 'John'); 
NewMap.set('id', 2345796);
NewMap.set('interest', ['js', 'ruby', 'python']);

console.log(NewMap);

var ans;
ans = NewMap.get('name'); // John
console.log(ans);
ans = NewMap.get('id'); // 2345796
console.log(ans);
ans = NewMap.get('interest'); //[ 'js', 'ruby', 'python' ]
console.log(ans);

var map = new Map();
map.set('name', 'John');
map.set('name', 'Andy');//replaces john by andy
map.set(1, 'number one');
map.set(NaN, 'No value');
map.set(NaN, 'there is no value');//replaces 

var ans;
ans = map.get('name'); // Andy. Note John is replaced by Andy.
console.log(ans);
ans = map.get(1); // number one
console.log(ans);
ans = map.get(NaN);
console.log(ans);

console.log(map.size);

console.log(map.keys());

for (let key of map.keys()) {
    console.log(key);
   }

   console.log(map.values());

   for (let key of map.values()) {
    console.log(key);
   }

for (let element of map) {
 console.log(element);
}

for (let [key, value] of map) {
    console.log(key+" - "+value);
   }