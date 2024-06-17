let amount = "1849";

// chnage string to number
amount = parseInt(amount);
convertedNo = +amount;
convertUsingNoConstructor = Number(amount);
console.log(amount, typeof amount);
console.log(convertedNo, typeof convertedNo);
console.log(convertUsingNoConstructor, typeof convertUsingNoConstructor);

// change number to String
let number = 1900;
convertedString = number.toString();
StringConstructor = String(number);

console.log(convertedString, typeof convertedString);
console.log(StringConstructor, typeof StringConstructor);


// change the number to boolean
binaryNo = 1888
amount = Boolean(amount, typeof binaryNo);
console.log(amount, typeof binaryNo);