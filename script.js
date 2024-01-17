class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    get newname(){
        return this.name;
    }
    set setname(newname){
        this.name=newname;

    }
    
}
class Student extends Person{
    constructor(name,age){
        super(name,age)
    }

    study(){
        return `${this.name} is studying`;
    }
}

class Teacher extends Person{
    constructor(name,age){
        super(name,age)
    }

    teach(){
        return `${this.name} is teaching`;
    }
}

const user=new Teacher("lalitha",56);
user.setname="bagyalatha"
console.log(user.teach());