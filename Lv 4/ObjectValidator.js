function validate(object, schema) {
    const errors = [];

    for (const key in schema) {
        const rules = schema[key];
        const value = object[key];

        if (schema[key].required && object[key] === undefined) {
            errors.push(`${key} is required`);
            continue;
        }

        if (value === undefined) {
            continue;
        }

        if (rules.type && typeof value !== rules.type) {
            errors.push(`${key} must be a ${rules.type}`);
            continue;
        }

        if (
            rules.type === "number" &&
            rules.min !== undefined &&
            value < rules.min
        ) {
            errors.push(`${key} must be at least ${rules.min}`);
        }
    }

    return errors;

}

const schema = {
    name: {required:true, type: "string"},
    age: {required: true, type: "number", min: 18}
};

console.log(validate({name: "Andi", age: 20}, schema));
console.log(validate({name: 123, age: 20}, schema));
console.log(validate({name: "Budi"}, schema));