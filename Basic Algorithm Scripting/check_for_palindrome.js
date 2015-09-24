//CHECK FOR PALINDROME
function palindrome(str){
	var re = /[,.'? ]/gi;
	var result = str.replace(re,"").toLowerCase(); 
	var rev = result.split('').reverse().join(''); 
	if(result==rev){
		return true;
	}else{
		return false;
	}
}

//EXAMPLE
palindrome("eye"); 