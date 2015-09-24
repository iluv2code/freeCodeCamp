//TITLE CASE A SENTENCE
function titleCase(str) {
  str = str.toLowerCase();
  var s = str.split(" ");  
   var arr = '';
  for(var a=0; a<s.length; a++){  
    for(var b=0; b<s[a].length; b++){
      if(b==0){
        arr += s[a].charAt(b).toUpperCase();
      }else{
        arr += s[a].charAt(b);
      }
    }
    if(a!=s.length-1){
      arr += ' ';   
    }
    
  }
  return arr; 
}

//EXAMPLE
titleCase("I'm a little tea pot");
