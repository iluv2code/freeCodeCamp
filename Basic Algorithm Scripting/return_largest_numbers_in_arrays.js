function largestOfFour(arr){ 
  var so = []; 
  var n = 0;
  var x = 0;
  var largest= 0;
  for(var a=0; a<arr.length; a++){ 
     var largest = Math.max.apply( Math, arr[a] ); 
     so.push(largest);
  }
  return so;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
 