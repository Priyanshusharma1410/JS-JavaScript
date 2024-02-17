const accountId = 144432
let accountEmail = "priyanshusharma123@gmail.com"
var accounPassword = "12345"
accountCity = "Gwalior"
let accountStates;

// accountId = 2 // not allowed

accountEmail = "priyanshu@gmail.com"
accounPassword = "5832095"
accountCity = "Indore"

console.log(accountId);
/*
Prefer not to use var 
because of issue in block scpe and functional scope
*/
// tabular form //
console.table([accountId, accountEmail, accounPassword, accountCity, accountStates])
