/*
Create a class called Person which accepts the name of a person as a string, and his/her age as a number.
The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, 
if John is 19 years old then the function describe of his object will return "John, 19 years old".
*/

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hi, my name is ${this.name}`);
    }
    describe() {
        console.log (`${this.name}, ${this.age} years old.`)
    }
}

class Teacher {
    constructor(name,subject) {
    this.subject = subject;
    this.name = name;
    }
    teach() {
        console.log (`${this.name}, teaches ${this.subject}.`);
    }
}

const me = new Person("Paxton", 20);
me.sayHello();
me.describe();

/*
Create an object called Teacher derived from the Person class, 
and implement a method called teach which receives a string called subject, and prints it out:
*/

const teacher = new Teacher("Sean", "Web Development");
teacher.teach();
