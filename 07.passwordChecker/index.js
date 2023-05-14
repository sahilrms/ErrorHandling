class userPassword{
    userName;
    password;
    get getPassword(){
        let str='';
        for(let i=0;i<this.password.length;i++)
        {
            str+='*';
        }
        return str
    }
    set setPassword(pass){
        let result = pass.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g);
       if(result != null){
            this.password=pass;
        }
        else{
            console.log("password must have atleast 8 digits, 1 capital and 1 number")
        }
    }
    constructor(u,p){
        this.password=p;
        this.userName=u;
    }
}

let sahil = new userPassword('sahil','')
sahil.setPassword='Alphabetagamma1';
console.log(sahil.getPassword)