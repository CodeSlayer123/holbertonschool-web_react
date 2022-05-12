interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [property: string]: any;
  }

interface Directors extends Teacher {
    numberOfReports: number;
}
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) =>
    `${firstName.charAt(0)}. ${lastName}`;



interface studentCon{
  new (firstName: string, lastName: string): StudentClass

}
interface studentClassFace{
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;

}
class StudentClass implements studentClassFace {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName
  }
    workOnHomework(){
        return "Currently working";
    }
    displayName(){
      return this.firstName;
    }
}

const teacher1: Teacher = {
  firstName: "Luke",
  lastName: "Skywalker",
  fullTimeEmployee: false,
  yearsOfExperience: 12,
  location: "string",
  property: "string",
};

const teacher2: Teacher = {
  firstName: "Leia",
  lastName: "Skywalker",
  fullTimeEmployee: true,
  yearsOfExperience: 12,
  location: "string",
  property: "string",
};

let studentsList: Teacher[] = [];
studentsList.push(teacher1);
studentsList.push(teacher2);

var table = document.createElement('table');
for (var i = 0; i < studentsList.length; i++) {
    const newRow = table.insertRow();
    const nameCell = newRow.insertCell();
    const locationCell = newRow.insertCell();

    nameCell.innerHTML = studentsList[i].firstName;
    locationCell.innerHTML = studentsList[i].location;
}
document.body.appendChild(table);