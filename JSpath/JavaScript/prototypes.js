console.clear();
// prorotype chaining

function Car(name) {
    this.name = name;
}

Car.prototype.sayVroom = function () {
    return(`${this.name} goes vroom!`);
}

function Bike(name, cc) {
    this.name = name;
    this.cc = cc;
}

Bike.prototype.doWheelie = function() {
    return(`${this.name} did wheelie.`);
}

console.log(Object.getPrototypeOf(Bike.prototype));

Object.setPrototypeOf(Bike.prototype, Car.prototype);

console.log(Object.getPrototypeOf(Bike.prototype));

const bike1 = new Bike('Harley', 1000);
const car1 = new Car('Honda');

console.log(bike1.sayVroom());
console.log(bike1.doWheelie());
console.log(car1.sayVroom());


try {
    console.log(car1.doWheelie());
} catch (err) {
    console.log("Error:", err.message);
}

// bike extended from car, but car was not inheriting from bike
// bike gets functions of car, but car didn't get functions of bike


