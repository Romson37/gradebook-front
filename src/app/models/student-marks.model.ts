import { Student } from "./student.model";
import { Mark } from "./mark.model";


export class StudentMarks {

    student: Student;
    marks: Mark[];

    constructor(student: Student, marks: Mark[]){
        this.student=student;
        this.marks=marks;
    }

    
}