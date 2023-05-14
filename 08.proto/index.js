class student {
    nameOfStudent;
    constructor(n){
        this.nameOfStudent=n
    }
}
student.prototype.printDetails = function (){
    console.log(`Hello, my name is ${this.nameOfStudent}`)
}

const s1=new student('mithun');
s1.printDetails();