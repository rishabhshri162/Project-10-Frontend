import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CourseListComponent } from './course/course-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'role',
    component: RoleComponent,
  },
  {
    path: 'rolelist',
    component: RoleListComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },

  {
    path: 'userlist',
    component: UserListComponent,
  },
  {
    path: 'college',
    component: CollegeComponent,
  },

   {
    path: 'collegelist',
    component: CollegeListComponent
  },
  {
    path: 'student',
    component: StudentComponent,
  },
   {
    path: 'studentlist',
    component: StudentListComponent
  },
  {
    path: 'marksheet',
    component: MarksheetComponent,
  },
  {
    path: 'marksheetlist',
    component: MarksheetListComponent
  },
  {
    path: 'course',
    component: CourseComponent,
  },
   {
    path: 'courselist',
    component: CourseListComponent
  },
  {
    path: 'subject',
    component: SubjectComponent,
  },
   {
    path: 'subjectlist',
    component: SubjectListComponent
  },
  {
    path: 'timetable',
    component: TimetableComponent,
  },
  {
    path: 'timetablelist',
    component: TimetableListComponent
  },
  {
    path: 'faculty',
    component: FacultyComponent,
  },
   {
    path: 'facultylist',
    component: FacultyListComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
