    Data = "Students info";

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("View ",Data);
    }
}


let st1 = new User("aisha","abc@gmail.com");
let st2 = new User("amira","orion@gmail.com");

console.log(st1);
console.log(st2);


class Admin extends User {
    constructor(name,email){
        super(name,email);
    }
editData(){
    Data = "new info";
}
}

let admin = new Admin("amira","kael@gmail.com");
admin.editData();
console.log(admin.Data);
console.log(admin);