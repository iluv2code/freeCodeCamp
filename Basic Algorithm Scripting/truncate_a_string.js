//TRUNCATE A STRING
function truncate(str, num) { 
  var strLength = str.length;
  if(strLength>num){
   var s = str.slice(0,num-3)+"..."; 
  }else{
    var s = str;
  }
  return s;
}

//EXAMPLE
truncate('A-tisket a-tasket A green and yellow basket', 11);
