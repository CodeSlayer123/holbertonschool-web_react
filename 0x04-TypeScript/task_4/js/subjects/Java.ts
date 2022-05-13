namespace Subjects{
    export class Java extends Subject{
        getRequirements(){return "Here is the list of requirements for Java"};
        getAvailableTeacher(){
            if (!this.teacher.experienceTeachingJava || this.teacher.experienceTeachingJava <= 0){
                return "No available teacher";
            } else {
                return `Available Teacher: ${this.teacher.firstName}`;
            };
        };
    };
    export interface Teacher{
        experienceTeachingJava?: number;
        };
};