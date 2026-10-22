function Vehicle(brand, year) {
    this.brand = brand;
    this.year = year;
}

Vehicle.prototype.getInfo = function() {
    return`${this.brand} (${this.year})`;
};

function Car(brand, year, doors) {
    Vehicle.call(this, brand, year);
    this.doors = doors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

console.log("Implement Prototype-based Inheritance")

const car1 = new Car("Toyota", 2022, 4);
const car2 = new Car("Honda", 2024, 2);

console.log(car1.getInfo());
console.log(car2.getInfo());

console.log("Car 1 doors:", car1.doors);
console.log("Car 2 doors:", car2.doors);

console.log(
    "Same getInfo method",
    car1.getInfo === car2.getInfo
);