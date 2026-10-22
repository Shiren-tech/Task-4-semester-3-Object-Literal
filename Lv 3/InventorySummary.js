const product = [
    {
        name: "Mechanical Keyboard",
        price: 250000,
        stock: 10
    },
    {
        name: "Mouse",
        price: 100000,
        stock: 4
    },
    {
        name:"Headset",
        price: 50000,
        stock: 2
    },
    {
        name:"Printer",
        price: 2000000,
        stock: 7
    },
    {
        name: "Camera",
        price: 75000,
        stock: 3
    }
];

let totalProductValue = 0;

console.log("Build an Inventory Summary")

for (let i = 0; i < product.length; i++) {
    const totalValue = product[i].price * product[i].stock;

    console.log(`${product[i].name} - Total Value: Rp${totalValue.toLocaleString("id-ID")}`);
    totalProductValue += totalValue;

    if (product[i].stock < 5) {
        console.log(`Low Stock: ${product[i].name}`);
    }
};

console.log(`Total Inventory Value: ${totalProductValue.toLocaleString("id-ID")}`);