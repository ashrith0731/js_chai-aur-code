const accountId = 144553
let accountEmail = "vits3305@gmail.com"
var accountPassword = "12345"
accountCity = "Leicester"

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "2121212"
accountCity = "London"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])
