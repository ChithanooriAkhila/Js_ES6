//converts from list to array and vice versa
/*let SumElements = (...arr) => {
    console.log(arr); // [10, 20, 40, 60, 90]
   let sum = 0;
    for (let element of arr) {
     sum += element;
    }
    console.log(sum); // 220. 
   }
   SumElements(10, 20, 40, 60, 90);
   */

   //console.log(Math.max(10, 20, 60, 100, 50, 200));

   //math.max fn accepts list not an array
   //spread attribute helps in converting array to list
   let arr = [10, 20, 60];
   console.log(Math.max(arr)); //NAN
   console.log(Math.max(...arr)); //60