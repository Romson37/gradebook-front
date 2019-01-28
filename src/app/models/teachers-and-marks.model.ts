import { Mark } from "./mark.model";
import { Teacher } from "./teacher.model";
import { Student } from "./student.model";

export class TeachersAndMarks {
    markValue: string
    markId : number
    student : Student
    teacher: Teacher
    
    constructor(markId:number, markValue: string, teacher: Teacher, student: Student){
        this.markId = markId
         this.markValue = markValue
         this.teacher = teacher
        this.student = student
    }
}