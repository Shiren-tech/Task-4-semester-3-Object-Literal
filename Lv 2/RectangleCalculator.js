const rectangle = {
    width: 10,
    height: 7,

    getArea: function() {
        return this.width * this.height;
    },

    getPerimeter: function() {
        return 2 * (this.width + this.height);
    }
};

console.log("Create a Rectangle Calculator")

console.log(`Area Calculation Result: ${rectangle.getArea()}`);
console.log(`Perimeter Calculation Result: ${rectangle.getPerimeter()}`);