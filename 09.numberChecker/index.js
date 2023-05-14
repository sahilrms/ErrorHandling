function numberChecker(num){
function ifIsPresent(n){
    return(num.includes(n)?true:false)
}
return ifIsPresent;
}
let checker= numberChecker([1,2,3,4,6,7,10])
console.log(checker(2))
console.log(checker(3))
console.log(checker(5))
console.log(checker(21))