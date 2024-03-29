/// <reference path="./crud.d.ts"/>
import {RowID, RowElement} from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {...row, age: 23};

CRUD.updateRow(newRowID, row);
CRUD.deleteRow(newRowID);


const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)
const updatedRow2: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow2);
CRUD.deleteRow(125);










interface DirectorInterface {
    workFromHome() : string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome() : string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {

  workFromHome(){
      return "Working from home";
    }
  getCoffeeBreak(){
      return "Getting a coffee break";
    }
  workDirectorTasks(){
      return "Getting to director tasks";
    }
}
class Teacher implements TeacherInterface {

  workFromHome(){
      return "Cannot work from home";
    }
  getCoffeeBreak(){
      return "Cannot have a break";
    }
  workTeacherTasks(){
      return "Getting to work";
    }
}

function createEmployee(salary: string | number){
  if (typeof salary === "number" && salary < 500){
    return new Teacher();
  } else {
    return new Director();
  }

}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


function isDirector(employee:Teacher|Director): employee is Director {
  if (employee instanceof Director){
    return true;
  }
  return false;
  //return employee instanceof Director;
}
function executeWork(employee:Teacher|Director){
  if (isDirector(employee)){
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects){
  if (todayClass === "Math"){
    return "Teaching Math";
  } else {
    return "Teaching History"
    }
  }
console.log(teachClass('Math'));
console.log(teachClass('History'));

