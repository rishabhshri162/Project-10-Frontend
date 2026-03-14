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

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
   path: 'role',
   component: RoleComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'college',
    component: CollegeComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
   {
    path: 'marksheet',
    component: MarksheetComponent
  },
   {
    path: 'course',
    component: CourseComponent
  },
   {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'timetable',
    component: TimetableComponent
  },
   {
    path: 'faculty',
    component: FacultyComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
