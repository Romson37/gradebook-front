import { Group } from "./group.model";

export class addStudent {
   
    studentsName: string;
    studentsSurname: string;
    studentsEmail: string;
    studentId: number;
    groupId: Group
    
    constructor( name: string, surname: string, email: string) {
    
        this.studentsName = name;
        this.studentsSurname = surname;
        this.studentsEmail = email;
       
    }
}