/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />


export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: "R2",
  lastName: "D2",
  experienceTeachingC: 10,

}
console.log("C++");
cpp.teacher = cTeacher;
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher())

console.log("Java");
java.teacher = cTeacher;
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher())

console.log("React");
react.teacher = cTeacher;
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher())

