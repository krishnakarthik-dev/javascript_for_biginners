const string = 'developer';

finalString = string[0].toUpperCase() + string.slice(1);
finalString = string.charAt(0).toUpperCase() + string.slice(1);
finalString = `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

console.log(finalString);