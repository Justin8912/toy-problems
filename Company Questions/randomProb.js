function minByKey(arr, key) {
  //write your code here

  // arr sort
  arr.sort((a, b) => {
    // check to see what the value of the key is for each of the variables
    let val1 = a[key] || 0;
    let val2 = b[key] || 0;
    // return a- b
    return val1 - val2;

  })
  // return record at index 0
  return arr[0];
 }
 let records = [
   { a: 1, b: 4 },
   { a: 3, b: 1 },
   { a: 2 },
   { a: -2, b: 2 },
   { b: 3 },
 ];
 console.log("minByKey");
 console.log(minByKey(records, "a")); // -> {a: -2, b: 2}
 console.log(minByKey(records, "b")); // -> {a : 2};

/*
I: Array, and key
O: just the minimum key
C: return the original array
E: if the key doesnt exist assume its value is 0
*/