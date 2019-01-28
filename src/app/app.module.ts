import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { AlertModule } from 'ngx-bootstrap';
import { TeacherBoardComponent } from './teacher-board/teacher-board.component';
import { StudentListComponent } from './student-list/student-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDialogModule,
  MatMenuModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatToolbarModule, 
  MatSidenavModule, 
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatInputModule, 
  MatSelect,
  MatSelectModule,
  MatOptionModule,
  MatStepperModule} 
  from '@angular/material';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { ManageGroupsComponent } from './manage-groups/manage-groups.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AdminBoardComponent,
    TeacherBoardComponent,
    StudentListComponent,
    MyNavComponent,
    AddStudentComponent,
    AddTeacherComponent,
    ManageGroupsComponent,
    UserListComponent,
    StudentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule, 
    FormsModule,
    HttpClientModule,
    MatStepperModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatCardModule, 
    MatInputModule, 
    MatDialogModule, 
    MatTableModule, 
    MatMenuModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}