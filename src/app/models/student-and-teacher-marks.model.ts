import { Teacher } from "./teacher.model";
import { Mark } from "./mark.model";
import { Student } from "./student.model";

export class StudentAndTeacherMarks {
   teacher: Teacher
    marks: Mark[]
  

    constructor(teacher: Teacher, marks: Mark[]){
        this.teacher = teacher
        this.marks = marks
    }
}