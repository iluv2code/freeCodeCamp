//CONFIRM IF THE TEXT IS THE ENDING IN THE STRING
function end(str, target) { 
  var targetLength = target.length;
  var lastString = str.substr(-targetLength);
  if(lastString==target){
    return true;    
  }else{
    return false;
  } 
}

//EXAMPLE
end('He has to give me a new name', 'name');
