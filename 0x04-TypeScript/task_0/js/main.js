var student1 = {
    firstName: "",
    lastName: "",
    age: 0,
    location: ""
};
var student2 = {
    firstName: "",
    lastName: "",
    age: 0,
    location: ""
};
;
var studentsList = [];
studentsList.push(student1);
studentsList.push(student2);
var table = document.createElement('table');
document.body.appendChild(table);
for (var i = 0; i < studentsList.length; i++) {
    var newRow = table.insertRow();
    var nameCell = newRow.insertCell();
    var locationCell = newRow.insertCell();
    nameCell.innerHTML = studentsList[i].firstName;
    locationCell.innerHTML = studentsList[i].firstName;
}
