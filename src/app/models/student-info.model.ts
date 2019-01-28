import { Mark } from "./mark.model";
import { Student } from "./student.model";
import { Group } from "./group.model";
import { Teacher } from "./teacher.model";

export class StudentInfo {
    
    student: Student;
    teacher: Teacher;
    markId: number
    markValue: string
    group : Group
}