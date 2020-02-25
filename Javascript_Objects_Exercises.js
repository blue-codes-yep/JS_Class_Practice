
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



class Person{
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