function regCheck(numbers,location){
var fromCapeTown = numbers.endsWith(location)
return fromCapeTown;

}
var isGP = regCheck("DA 123 GP", "GP");
console.log(isGP);
var isMP = regCheck("DA 123 MP", "GP");
console.log(isMP);
