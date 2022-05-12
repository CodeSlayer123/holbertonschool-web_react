var printTeacher = function (firstName, lastName) {
    return firstName.charAt(0) + ". " + lastName;
};
var StudentClass = /** @class */ (function () {
    function StudentClass() {
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student1 = {
    firstName: "",
    lastName: "",
    fullTimeEmployee: true,
    location: "string"
};
console.log(student1);
