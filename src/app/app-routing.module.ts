import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { TeacherBoardComponent } from './teacher-board/teacher-board.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ManageGroupsComponent } from './manage-groups/manage-groups.component' 
import { AddStudentComponent } from './add-student/add-student.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component'
import { UserListComponent } from './user-list/user-list.component'
import { StudentComponent } from './student/student.component';
const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'student',
        component: StudentComponent
    },
    {
        path: 'user',
        component: UserListComponent
    },
    {
        path: 'admin',
        component: AdminBoardComponent
    },
    {
        path: 'teacher',
        component: TeacherBoardComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'teacher/:id',
        component: StudentListComponent
    },
    {
        path: 'addStudent/:username',
        component: AddStudentComponent
    },
    {
        path: 'addTeacher/:username',
        component: AddTeacherComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'manage-groups',
        component: ManageGroupsComponent
    }
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }