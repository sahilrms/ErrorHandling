class addclass{
    number;
    static sum(n1,n2){
        return n1.number+n2.number
    }
    constructor(n){
        this.number=n
    }
}

// let num1= new addclass(10)
// let num2= new addclass(5)
let result = addclass.sum(new addclass(10),new addclass(5))
console.log(result)