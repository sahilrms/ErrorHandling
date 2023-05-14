class person{
    name; age;
   
    constructor(n,a){
        this.name=n;
        this.age=a;
    }
    
    getDetails(){
        if (this.name===undefined && this.age===undefined){
            this.name=`unknown`;
            this.age=0;
        }
        console.log(`Name is ${this.name} and Age is ${this.age}`)

    }
}

let person1 = new person()
person1.getDetails();

let person2 = new person('mithun',22);
person2.getDetails()
