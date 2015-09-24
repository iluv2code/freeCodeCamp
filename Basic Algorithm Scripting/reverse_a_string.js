//REVERSE STRING
function reverseString(str) {
  str = str;
  var s = [];
  s = str.split(''); 
  var d = s.reverse().join('');  
  str = d;
  return str;
}

//EXAMPLE
reverseString('hello');