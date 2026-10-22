const students = [
    {
        name: "Noah",
        major: "Music"
    },
    {
        name: "Andi",
        major: "Informatics"
    },
    {
        name: "Kiran",
        major: "Management"
    },
    {
        name: "Leana",
        major: "Informatics"
    },
    {
        name: "Budi",
        major: "Music"
    },
    {
        name: "Aslan",
        major: "Civil Engineering"
    }
];

const groupedStudents = {};

for (let i = 0; i < students.length; i++) {
    const major = students[i].major;

    if (!groupedStudents[major]) {
        groupedStudents[major] = [];
    }

    groupedStudents[major].push(students[i].name);
}

console.log("Group Students by Major")

for (const major in groupedStudents) {
    console.log(`${major}: ${groupedStudents[major].join(", ")}`)
}