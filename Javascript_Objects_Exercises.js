// Inheritance
// -------------
// const mom = {
//     first: 'Alice',
//     last: 'Wong',
//     eyeColor: 'brown',
//     hairColor: 'black'
// };


// let daughter = {
//     first: 'Ilene',
//     hairColor: 'brown'
// };

// daughter.__proto__ = mom;

// console.log(daughter.eyeColor, daughter.last)

// ----------------------------
// Person
// Given this Person type:

// function Person(name) {
//      this.name = name;
//      this.friends = [];
// }

// Person.prototype.addFriend = function(friend) {
//      this.friends.push(friend);
// };

// Person.prototype.createGreeting = function(other) {
//      return 'Yo ' + other.name + '! from ' + this.name + '.';
// };

// Person.prototype.greet = function(other) {
//      console.log(this.createGreeting(other));
// };
// Rewrite the above type as a class.

// These thises
// Given the Person type given in the last problem, 
//add to it a lazyGreet method which will print out the same greeting message but only after 2 seconds.

class Person {
    constructor(name) {
        this.name = name;
        this.friends = [];
    }
    addfriend(friend) {
        this.friends.push(friend);
    }
    createGreeting(other) {
        return 'Yo ' + other.name + '! from ' + this.name + '.';
    }
    greet(other) {
        console.log(this.createGreeting(other));
    }
    timeout(other) {
        let me = this
        setTimeout(() => me.greet(other), 2000);
    }
}

const me = new Person("Paxton");
const friend = new Person("Logan");

me.timeout(friend)