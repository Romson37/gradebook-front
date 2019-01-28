import { Group } from "./group.model";
import { Student } from './student.model';
import { Teacher } from './teacher.model';
import { Authority } from "./authority.model";
export class User {

    markId: number;
    markValue: string;
    student: Student;
    teacher: Teacher;
    authority: Authority[] = [];
    constructor(markId: number, markValue: string, student: Student, teacher: Teacher) {
        this.markId = markId;
        this.markValue = markValue;
        this.student = student;
        this.teacher = teacher;
    }
}