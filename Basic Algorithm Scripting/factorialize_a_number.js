//FACTORIALIZE
function factorialize(num) {
  var sum = 1;
  for(var a=1; a<=num; a++){
    sum *= a;
  }
    num = sum;
  return num;
}

//EXAMPLE
factorialize(5);