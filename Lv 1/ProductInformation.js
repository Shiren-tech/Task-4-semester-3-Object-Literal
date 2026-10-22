const product = {
    name: "Mechanical Keyboard",
    price: 250000,
    stock: 17
};

product.price = 200000;
product.stock += 5;

console.log("Update Product Information")

console.log(`Name Product: ${product.name}`);
console.log(`Price: ${product.price}`);
console.log(`Stock: ${product.stock}`);