interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: "",
    lastName: "",
    age: 0,
    location: "",
};
const student2: Student = {
    firstName: "",
    lastName: "",
    age: 0,
    location: "",
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
    locationCell.innerHTML = studentsList[i].firstName;
}
document.body.appendChild(table);

