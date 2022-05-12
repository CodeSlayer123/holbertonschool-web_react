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


class StudentClass {
    firstName: string;
    lastName: string
    workOnHomework(){
        return "Currently working";
    }
    displayName(){
      return this.firstName;
    }
}

const student1: Teacher = {
  firstName: "",
  lastName: "",
  fullTimeEmployee: true,
  location: "string",

};

console.log(student1)

