
const mom = {
    first: 'Alice',
    last: 'Wong',
    eyeColor: 'brown',
    hairColor: 'black'
};


let daughter = {
    first: 'Ilene',
    hairColor: 'brown'
};

daughter.__proto__ = mom;

console.log(daughter.eyeColor, daughter.last)


