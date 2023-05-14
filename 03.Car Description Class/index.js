class car{
    company;model;year;
    constructor(c,m,y){
        this.company=c;
        this.model=m;
        this.year=y;
    }
    getDescription(){
        console.log(`this is ${this.year} ${this.company} ${this.model}`)
    }
}

let myCar= new car("skoda","rapid",2022)
myCar.getDescription();