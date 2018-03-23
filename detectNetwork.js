// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var networkName;  
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var prefix = cardNumber.slice(0, 2)  
  var prefix_a = cardNumber.slice(0, 3)
  var prefix_b = cardNumber.slice(0, 4)
  var prefix_china_a = Number(cardNumber.slice(0, 6))
  var prefix_china_b = Number(cardNumber.slice(0, 3))
  var prefix_china_c = Number(cardNumber.slice(0, 4))  

  var n = cardNumber.length

  if( (Number(prefix) >= 38 && Number(prefix) <= 39) && n === 14 ){
  	networkName = "Diner's Club";
  }
  if( (Number(prefix) >= 34 && Number(prefix) <= 37) && n === 15 ){
  	networkName = "American Express";
  }  

  if( (Number(prefix) >= 51 && Number(prefix) <= 55) && n === 16 ){
  	networkName = "MasterCard";
  }  

  if( (prefix_b === "4903" || prefix_b === "4905" || prefix_b === "4911" || prefix_b === "4936" || prefix_b === "6333" || prefix_b === "6759" || prefix_china_a === 564182 || prefix_china_a === 633110) && (n === 16 || n === 18 || n === 19) ) {
    networkName = "Switch";
  }

  if( (networkName != "Switch" ) &&(Number(prefix) >= 40 && Number(prefix) <= 49) && (n === 13 || n === 16 || n === 19 ) ){
  	networkName = "Visa";
  }  

  if( (prefix_b === "6011" || (Number(prefix_a) >= 644 && Number(prefix_a) <= 649) || prefix === "65")  && (n === 16 || n === 19 ) ){
    networkName = "Discover";
  }      

  if( (prefix_b === "5018" || prefix_b === "5020" || prefix_b === "5038" || prefix_b === "6304") && (n >= 12 && n <= 19 ) ){
    networkName = "Maestro";
  }       


  if( (( prefix_china_a >= 622126 && prefix_china_a <= 622925 ) || (prefix_china_b >= 624 && prefix_china_b <= 626) || (prefix_china_c >= 6282 && prefix_china_c <= 6288)) && (n >= 16 && n <=19)){
    networkName = "China UnionPay";
  }

  return networkName;
};


