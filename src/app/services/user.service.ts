import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../models/group.model';
import { Student } from '../models/student.model';
import { Mark } from '../models/mark.model';
import { Teacher } from '../models/teacher.model';
import {addStudent} from '../models/addStudent.model'
import {addTeacher} from '../models/addTeacher.model'
import { StudentInfo } from '../models/student-info.model'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/userPanel';
  private teacherUrl = 'http://localhost:8080/teacherPanel';
  private pmUrl = 'http://localhost:8080/studentPanel';
  private adminUrl = 'http://localhost:8080/adminPanel';
  private studentListUrl = 'http://localhost:8080/teacherPanel/';
  private studentMarksTUrl = 'http://localhost:8080/teacherPanel/';
  private studentAddMarkUrl = 'http://localhost:8080/teacherPanel/';
  private temp = ``;
  private addTeacherToGroupUrl = 'http://localhost:8080/adminPanel/'
  
  private studentBoard = 'http://localhost:8080/studentPanel/'

  constructor(private http: HttpClient) { }

  addMark(id: number, mark: Mark) {
    return this.http.post(this.studentAddMarkUrl + id + '/addMark', mark);
  }
 
  getStudentsMarksTBoard(studentId: number): Observable<Mark[]> {
    return this.http.get<Mark[]>(this.studentMarksTUrl + studentId + '/studentsMarks');
  }
  getStudentListBoard(groupId: string): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentListUrl + groupId + '/studentsList');
  }
  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }
  getTeacherBoard(): Observable<Group[]> {
    return this.http.get<Group[]>(this.teacherUrl);
  }
  getStudentBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
  getStudentTeachers(groupId: string): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.studentBoard + 'myTeachers/' + groupId);
  }
  getStudentGroup(studentId: number): Observable<Group[]> {
    return this.http.get<Group[]>(this.studentBoard + studentId + '/myGroup');
  }
  getStudentGroup_(): Observable<Group[]> {
    return this.http.get<Group[]>(this.studentBoard + 'myGroup');
  }
  getStudentMarks(): Observable<StudentInfo[]> {
    return this.http.get<StudentInfo[]>(this.studentBoard + 'myMarks');
  }
  executeGetUsersListService(){
   
    return this.http.get('http://localhost:8080/adminPanel');
   }
 addStudent(username, student: addStudent, group){
   return this.http.post(`http://localhost:8080/adminPanel/${username}/${group}/addStudent`, student);
 }
 addTeacher(username, teacher: addTeacher){
   return this.http.post(`http://localhost:8080/adminPanel/${username}/addTeacher`, teacher);
 }
 addTeacherToGroup(teachersId:number, groupId: string){
  console.log(teachersId)
  console.log(groupId)
  return this.http.put(this.addTeacherToGroupUrl + teachersId +'/' + groupId + '/addGroupToTeacher', "{}")
  }
  getTeachersAndMarks(teachersId: number) : Observable<Mark[]>{
    return this.http.get<Mark[]>(this.studentBoard + teachersId + '/myMarks');
   }
  }
