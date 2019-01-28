import { Component, OnInit } from '@angular/core';
import { addTeacher } from '../models/addTeacher.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  teacher : addTeacher
  name : string
  surname : string
  email : string
  subject : string
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  addTeacherToList(username: string){
 
    username = this.route.snapshot.params['username'];
    
    this.teacher = new addTeacher(this.name,this.surname, this.email, this.subject);
    console.log(this.teacher.subject);
  

    this.userService.addTeacher(username, this.teacher).subscribe(
      data => console.log(data)
    );
      console.log(`add teacher ${username}`)
      this.router.navigate(['admin']);
  }
}
