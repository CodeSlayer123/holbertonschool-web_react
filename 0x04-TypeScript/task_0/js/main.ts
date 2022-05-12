interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 0,
    location: "Hoth",
};
const student2: Student = {
    firstName: "Obi-Wan",
    lastName: "Kenobi",
    age: 0,
    location: "Tatooine",
};;
let studentsList: Student[] = [];
studentsList.push(student1);
studentsList.push(student2);

var table = document.createElement('table');
for (var i = 0; i < studentsList.length; i++) {
    const newRow = table.insertRow();
    const nameCell = newRow.insertCell();
    const locationCell = newRow.insertCell();

    nameCell.innerHTML = studentsList[i].firstName;
    locationCell.innerHTML = studentsList[i].location;
}
document.body.appendChild(table);
console.log("test");
