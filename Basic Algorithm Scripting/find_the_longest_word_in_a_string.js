//FIND LONGEST WORD FROM A STRING
function findLongestWord(str) {
  var arr = str.split(" ");
   num = 0;
  for(var a=0; a<arr.length; a++){
    s = arr[a].length;
    if(num<s){
      num = s;
    } 
  }
  return num;
}

//EXAMPLE
findLongestWord('The quick brown fox jumped over the lazy dog');