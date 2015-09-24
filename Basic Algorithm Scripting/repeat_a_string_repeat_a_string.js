//REPEAT A STRING
function repeat(str, num) { 
  var stringRepeat = "";
  for(var a=0; a<num; a++){
      stringRepeat += str;
  }  
  return stringRepeat;
}
//EXAMPLE
repeat('abc', 3);