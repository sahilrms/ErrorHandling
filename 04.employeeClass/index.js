class emp{
    name;position;salary;
    constructor(n,p,s){
        this.name=n;
        this.position=p;
        this.salary=s;
    }
    getSalary(){
        console.log(`Salary is ${this.salary}`)
    }
}

let emp1= new emp("amit","developer",202212.11)
emp1.getSalary();