import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Autorithies } from '../models/authorities.model';
import { Group } from '../models/group.model';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  private UsersUrl = "http://localhost:8080/adminPanel"
  private authority: Autorithies;
  private users: Autorithies = new Autorithies();

  constructor(private http:HttpClient) { }

  retrieveAllUsers(){
    return this.http.get<User[]>('http://localhost:8080/adminPanel');
  }
  retrieveAllGroups(){
    return this.http.get<Group[]>('http://localhost:8080/adminPanel/groups')
  }
  retrieveAllTeachers(){
    return this.http.get<Teacher[]>('http://localhost:8080/adminPanel/teachersList')
  }
}
