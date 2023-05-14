function typeConversion(k) {

    let num = Number(k);
    
    if (!num) {
        throw new Error("the literal cannot be converted");
    }
    else {
      
        console.log(`${k}converted to number is ${num}`)
    }
}

try {
    typeConversion("121");
}
catch (error) {
    console.log(error)
}


try {
    typeConversion("apple121");
}
catch (error) {
    console.log(error)
}


try {
    typeConversion("1.21");
}
catch (error) {
    console.log(error)
}



