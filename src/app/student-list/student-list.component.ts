import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Student } from '../models/student.model';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import {Mark} from '../models/mark.model';
import {StudentMarks} from '../utils/studentMarks';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit {


  
 constructor(private userService: UserService, private router : Router, private route: ActivatedRoute) {}

  students : Student[] = [];
  marks : Mark[] = [];
  mark : Mark;
  studentobj: StudentMarks[] = [];
  studentmark: StudentMarks;
  studentmarks: Mark[] = [];
  id: number;
  markValue: string = '';
  submitted = false;


  

  ngOnInit() {



     let id = this.route.snapshot.paramMap.get('id');
     this.userService.getStudentListBoard(id).subscribe((students: Student[]) => {
      this.students = students;
     
      students.forEach(student => 
        (this.userService.getStudentsMarksTBoard(student.studentId).subscribe((marks: Mark[]) => {
          this.marks = marks;
          this.studentobj.push(new StudentMarks(student, marks))          
          console.log(marks);
          console.log(this.studentobj);
        }        
          )
        ));
      console.log(this.students);
   });
  }

  addMarkToUser( id =Number(this.route.snapshot.paramMap.get('studentId'))){
       
    console.log(id);
    this.mark = new Mark(this.markValue);
    console.log(this.mark.markValue);
  
    this.userService.addMark(id, this.mark).subscribe(
      data => console.log(data)
    );
      console.log(`add mark ${id}`);
   this.submitted = true;
   window.location.reload()
  }
}

