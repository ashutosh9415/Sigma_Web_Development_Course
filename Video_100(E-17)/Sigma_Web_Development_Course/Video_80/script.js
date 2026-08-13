// let obj = {
//     name: "John",
//     age: 30,
// };
// console.log(obj);


class Animal{
    constructor(name){
        this.name = name;
        console.log("Animal created a class.....");
    }
    eat(){
        console.log("Animal is eating");
    }
    sleep(){
        console.log("Animal is sleeping");
    }
}

class lion extends Animal{
    constructor(name){
        super(name);
        console.log("Lion created a other class......");
    }
    eat(){ // method overriding
        console.log("Lion is eating");
    }
}

let animal1 = new Animal("Dog");
console.log(animal1);

let Lion = new lion("Lion");
console.log(Lion);