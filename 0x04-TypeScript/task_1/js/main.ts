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
