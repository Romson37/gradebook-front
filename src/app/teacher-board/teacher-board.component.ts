import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Group } from '../models/group.model';
import { Router } from '@angular/router';
import { Mark } from '../models/mark.model';

@Component({
  selector: 'app-teacher-board',
  templateUrl: './teacher-board.component.html',
  styleUrls: ['./teacher-board.component.css']
})
export class TeacherBoardComponent implements OnInit {
  board: string;
  errorMessage: string;
  displayedColumns = ['group'];
  constructor(private userService: UserService, private router : Router) { }
  groups: Group[] = [];
  
  showStudents(group: Group){
    this.router.navigate(['teacher/' + group.groupId]);
  }

    ngOnInit() {
      this.userService.getTeacherBoard().subscribe((data: Group[]) => {
        this.groups = data;
        console.log(this.groups);
      });
    }
}
