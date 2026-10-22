const employee = {
    name: "Noah Sebastian",
    address: {
        street: "Melrose Avenue",
        city: "Alexandria",
        province: "Virginia",
        postalCode: 23220,
        country: "United States of America"
    }
};

employee.address.city = "Richmond";

console.log("Work With Nested Objects");

console.log(`Name: ${employee.name}`);
console.log("Full Address");
console.log(`Street: ${employee.address.street}`);
console.log(`City: ${employee.address.city}`);
console.log(`Province: ${employee.address.province}`);
console.log(`Postal Code: ${employee.address.postalCode}`);
console.log(`Country: ${employee.address.country}`);