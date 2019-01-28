import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { UsersDataService } from '../services/users-data.service';
import { Authority } from '../models/authority.model';
import { Router } from '@angular/router';
import { Group } from '../models/group.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent implements OnInit {
  board: string;
  errorMessage: string;
  users: User[] = [];
  authorities: Authority[] = [];
  user: User;
  group: Group;

  
  
  constructor(private userService: UserService, private userDataService: UsersDataService, private router: Router) { }

  ngOnInit() {
      this.authorities = [];
      this.loadUsers();
  }
      loadUsers(){
      this.userDataService.retrieveAllUsers().subscribe(
        (users: any[]) => {
           this.users = users;
 
}

  )
}
  deleteUser(username){
    console.log(`Delete user ${username}`);
  }
  addStudent(username){
  
    console.log(`add user ${username}`)
    this.router.navigate(['addStudent', username]);
    // this.userService.addStudent('username').subscribe(
    //   response => {
    //     console.log(response);
    //   }
    // )
  }
  addTeacher(username){
    console.log(`${username}`)
    this.router.navigate(['addTeacher', username]);
  }
}