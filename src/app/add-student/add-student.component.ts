import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { addStudent } from '../models/addStudent.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../models/group.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
    username:string
    student: addStudent
    group: Group
    name = ''
    surname = ''
    email = ''
    group_ = ''
  
    
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
 
  }

  addStudentToList(username: string){
 
    username = this.route.snapshot.params['username'];
    this.group = new Group(this.group_)
    console.log(`${this.group_}`);
    this.student = new addStudent(this.name,this.surname, this.email);
    console.log(this.student.studentsEmail);
  

    this.userService.addStudent(username, this.student, this.group.groupId).subscribe(
      data => console.log(data)
    );
      console.log(`add student ${username}`)
      this.router.navigate(['admin']);
  }
}